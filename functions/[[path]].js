export async function onRequest(context) {

  const url = new URL(context.request.url);
  const path = url.pathname.slice(1);

  if (!path) {
    return new Response("CloudSeven SG Proxy Ready");
  }

  const target = decodeURIComponent(path);

  const resp = await fetch(target, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "X-Forwarded-For": "119.56.77.101"
    }
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: resp.headers
  });

}
