const MAX_BYTES = 32768;

export async function readFormRequest(request: Request): Promise<{ ok: true; data: unknown } | { ok: false; status: number }> {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return { ok: false, status: 403 };
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return { ok: false, status: 415 };
  if (Number(request.headers.get("content-length")) > MAX_BYTES) return { ok: false, status: 413 };
  const reader = request.body?.getReader();
  if (!reader) return { ok: false, status: 400 };
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BYTES) {
        await reader.cancel();
        return { ok: false, status: 413 };
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return { ok: true, data: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { ok: false, status: 400 };
  } finally {
    reader.releaseLock();
  }
}
