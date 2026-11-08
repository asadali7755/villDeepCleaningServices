// Canonical host redirect for Cloudflare Pages. Replaces the host-based
// redirects in next.config.ts, which a static export cannot run.
const CANONICAL = 'www.villadeepcleaning.com';
const REDIRECT_HOSTS = new Set(['villadeepcleaning.com']);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
