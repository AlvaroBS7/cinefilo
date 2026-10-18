export async function onRequestGet({ request, env, params }) {
  const j = { "content-type": "application/json" };
  if (!env.TMDB_KEY) return new Response('{"error":"sin clave"}', { status: 503, headers: j });
  const p = [].concat(params.path || []).join("/");
  if (!/^(search\/movie|discover\/movie|movie\/\d+)$/.test(p)) return new Response('{"error":"ruta no permitida"}', { status: 404, headers: j });
  const t = new URL("https://api.themoviedb.org/3/" + p);
  new URL(request.url).searchParams.forEach((v, k) => { if (k !== "api_key") t.searchParams.set(k, v); });
  t.searchParams.set("api_key", env.TMDB_KEY);
  const r = await fetch(t, { cf: { cacheTtl: 3600, cacheEverything: true } });
  return new Response(r.body, { status: r.status, headers: { ...j, "cache-control": "public, max-age=3600" } });
}
