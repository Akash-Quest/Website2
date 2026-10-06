"use client";

import { createListStore } from "./localStore";

/** Bookmarked report slugs, persisted to localStorage and shown in the header. */
const { read, write, useItems } = createListStore<string>("skyquest-saved-reports");

export const useSavedReports = useItems;

export function toggleSavedReport(slug: string) {
  const items = read();
  write(items.includes(slug) ? items.filter((s) => s !== slug) : [...items, slug]);
}

export function removeSavedReport(slug: string) {
  write(read().filter((s) => s !== slug));
}
