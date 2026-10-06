"use client";

import { getReportBySlug } from "@/Constants/reports";

import { createListStore } from "./localStore";

/**
 * Report cart, persisted to localStorage so it survives reloads and is shared
 * across tabs. Items reference reports by slug; price is derived at render
 * time from the catalogue so it can never go stale in storage.
 */

export const LICENSE_TYPES = ["Single", "Multi User", "Enterprise"] as const;
export const FILE_TYPES = ["PPT", "PDF", "Excel", "PowerBI"] as const;

export type LicenseType = (typeof LICENSE_TYPES)[number];
export type FileType = (typeof FILE_TYPES)[number];

/** Licence tier multipliers applied to the report's base price. */
export const LICENSE_MULTIPLIER: Record<LicenseType, number> = {
  Single: 1,
  "Multi User": 1.4,
  Enterprise: 1.8,
};

export function priceFor(basePrice: number, license: LicenseType) {
  return Math.round(basePrice * LICENSE_MULTIPLIER[license]);
}

export type CartItem = {
  slug: string;
  license: LicenseType;
  fileType: FileType;
};

const { read, write, useItems } = createListStore<CartItem>("skyquest-cart");

export const useCart = useItems;

/** Cart items joined with their report and priced; drops slugs no longer in the catalogue. */
export function useCartLines() {
  const lines = useCart().flatMap((item) => {
    const report = getReportBySlug(item.slug);
    return report ? [{ ...item, report, price: priceFor(report.price, item.license) }] : [];
  });
  const total = lines.reduce((sum, line) => sum + line.price, 0);
  return { lines, total };
}

/** Adds a report, or updates its options if it is already in the cart. */
export function addToCart(item: CartItem) {
  const items = read();
  const exists = items.some((i) => i.slug === item.slug);
  write(exists ? items.map((i) => (i.slug === item.slug ? item : i)) : [...items, item]);
}

/** Adds a report with default options unless it's already in the cart, in which case its options are kept. */
export function ensureInCart(slug: string) {
  if (read().some((i) => i.slug === slug)) return;
  write([...read(), { slug, license: LICENSE_TYPES[0], fileType: FILE_TYPES[0] }]);
}

export function updateCartItem(slug: string, patch: Partial<Omit<CartItem, "slug">>) {
  write(read().map((i) => (i.slug === slug ? { ...i, ...patch } : i)));
}

export function removeFromCart(slug: string) {
  write(read().filter((i) => i.slug !== slug));
}
