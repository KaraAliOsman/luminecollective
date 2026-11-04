import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".next-dev/**",
      ".lumina-local/**",
      ".open-next/**",
      ".wrangler/**",
      ".sanity/**",
      ".impeccable/**",
      "public/studio/**",
      "public/static/**",
      "cloudflare-env.d.ts",
      "next-env.d.ts",
      "node_modules/**",
      "node_modules_broken_*/**",
      "out/**",
      "dist/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
