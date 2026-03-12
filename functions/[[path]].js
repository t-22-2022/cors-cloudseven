export async function onRequest(context) {

  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }

  const url = new URL(context.request.url);
  const path = url.pathname.slice(1);

  if (!path) {
    return new Response("CloudSeven Cors Ready");
  }

  const target = decodeURIComponent(path);

  const resp = await fetch(target, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "X-Forwarded-For": "119.56.77.101"
    }
  });

  const headers = new Headers(resp.headers);
  headers.set("Access-Control-Allow-Origin", "*");

  return new Response(resp.body, {
    status: resp.status,
    headers: headers
  });

}
