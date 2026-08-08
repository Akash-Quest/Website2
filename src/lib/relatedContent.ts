type Taggable = { id: number; industry?: string; capability?: string };

/**
 * Returns items matching the given industry/capability tag, topped up with
 * random items (from the rest of the list) whenever the matched set is
 * smaller than `minCount` — so a section always shows at least `minCount`
 * cards instead of looking sparse when only 1-2 items are tagged for a page.
 */
export function getRelatedByTag<T extends Taggable>(
  items: T[],
  key: "industry" | "capability",
  tag: string,
  minCount = 3
): T[] {
  const matched = items.filter((item) => item[key] === tag);
  if (matched.length >= minCount) return matched;

  const matchedIds = new Set(matched.map((item) => item.id));
  const remaining = items.filter((item) => !matchedIds.has(item.id));
  const shuffled = [...remaining].sort(() => Math.random() - 0.5);
  const padding = shuffled.slice(0, minCount - matched.length);

  return [...matched, ...padding];
}
