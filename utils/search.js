export function searchFor(e, router, query) {
  e?.preventDefault();
  if (!query.q?.trim()) return;
  router.push({ pathname: "/search", query });
}
