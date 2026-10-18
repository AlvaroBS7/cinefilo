export async function onRequestGet({ request, env }) {
  const j = { "content-type": "application/json" };
  if (!env.OMDB_KEY) return new Response('{"error":"sin clave"}', { status: 503, headers: j });
  const i = new URL(request.url).searchParams.get("i") || "";
  if (!/^tt\d{5,10}$/.test(i)) return new Response('{"error":"id no valido"}', { status: 400, headers: j });
  const r = await fetch(`https://www.omdbapi.com/?apikey=${env.OMDB_KEY}&i=${i}&plot=short`, { cf: { cacheTtl: 86400, cacheEverything: true } });
  return new Response(r.body, { status: r.status, headers: { ...j, "cache-control": "public, max-age=86400" } });
}
