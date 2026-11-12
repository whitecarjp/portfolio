/** Resolve a `public/` file against Vite's base (`/` in dev, `/portfolio/` on Pages). */
export function publicUrl(src) {
  if (/^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(src) || src.startsWith('mailto:') || src.startsWith('#')) {
    return src;
  }
  return `${import.meta.env.BASE_URL}${String(src).replace(/^\//, '')}`;
}
