export function searchFor(e, router, query, type) {
  e.preventDefault();
  if (!query) return;
  router.push({
    pathname: "/search",
    query: { q: query, type: type },
  });
}
