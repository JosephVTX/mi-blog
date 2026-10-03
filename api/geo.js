export const config = { runtime: 'edge' };
export default function handler(req) {
  return new Response(JSON.stringify({ country: req.headers.get('x-vercel-ip-country') || '' }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
  });
}
