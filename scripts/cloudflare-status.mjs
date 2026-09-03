import { resolveNs } from "node:dns/promises";
import { appendFileSync } from "node:fs";

let account = process.env.CLOUDFLARE_ACCOUNT_ID || "8b0163597918b41cf5c6d61b87518515";
const worker = "lumina-collective";
const domain = "stichtingluminacollective.nl";
const token = process.env.CLOUDFLARE_API_TOKEN;

async function api(path) {
  if (!token) return { success: false, error: "No Cloudflare token available in this environment" };
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(20000) });
  const data = await response.json();
  return data.success ? { success: true, result: data.result } : { success: false, error: `Cloudflare API HTTP ${response.status}, codes: ${(data.errors || []).map(error => error.code).join(", ")}` };
}

const report = {};
try {
  report.authoritativeNameservers = await resolveNs(domain);
  const zones = await api(`/zones?name=${domain}`);
  report.zone = zones.success ? zones.result.map(zone => ({ id: zone.id, name: zone.name, status: zone.status, requiredNameservers: zone.name_servers })) : { error: zones.error };
  const domains = await api(`/accounts/${account}/workers/domains`);
  report.workerDomains = domains.success ? domains.result.filter(item => item.zone_name === domain || item.service === worker).map(item => ({ hostname: item.hostname, service: item.service })) : { error: domains.error };
  const settings = await api(`/accounts/${account}/workers/scripts/${worker}/settings`);
  if (settings.success) {
    const bindings = (settings.result.bindings || []).map(binding => binding.name);
    report.email = { resendKeyConfigured: bindings.includes("RESEND_API_KEY"), senderConfigured: bindings.includes("FORMS_FROM_EMAIL") };
  } else report.email = { error: settings.error };
  const live = await fetch(`https://${domain}/api/health`, { signal: AbortSignal.timeout(15000), cache: "no-store" }).then(r => r.json()).catch(() => null);
  report.customDomainRelease = live?.release || null;
  report.expectedRelease = process.env.NEXT_PUBLIC_RELEASE_SHA || null;
  report.domainMatchesDeployment = Boolean(live?.release && report.expectedRelease && live.release === report.expectedRelease);
} catch (error) {
  report.error = error instanceof Error ? error.message : "Domain verification could not complete";
}
// Only allowlisted operational metadata is emitted; never provider binding values.
console.log(JSON.stringify(report, null, 2));
if (!report.domainMatchesDeployment) console.log("::warning::The custom domain does not yet serve this deployment. Check its nameservers and Worker Custom Domain binding before calling the domain migration complete.");
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Domain verification\n\n\`\`\`json\n${JSON.stringify(report, null, 2)}\n\`\`\`\n`);
