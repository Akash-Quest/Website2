"use client";

import { useSyncExternalStore } from "react";

/**
 * A list persisted to localStorage, shared across components and tabs.
 * Falls back to in-memory state when storage is unavailable (private mode etc.).
 */
export function createListStore<T>(key: string) {
  const EMPTY: T[] = [];
  let cache: T[] = EMPTY;
  let cacheRaw: string | null = null;
  const listeners = new Set<() => void>();

  function read(): T[] {
    let raw: string | null;
    try {
      raw = window.localStorage.getItem(key);
    } catch {
      return cache;
    }
    // useSyncExternalStore needs a stable reference while the data is unchanged.
    if (raw === cacheRaw) return cache;
    cacheRaw = raw;
    try {
      const parsed = raw ? JSON.parse(raw) : EMPTY;
      cache = Array.isArray(parsed) ? parsed : EMPTY;
    } catch {
      cache = EMPTY;
    }
    return cache;
  }

  function write(items: T[]) {
    cache = items;
    cacheRaw = JSON.stringify(items);
    try {
      window.localStorage.setItem(key, cacheRaw);
    } catch {
      // Keep the in-memory copy.
    }
    listeners.forEach((l) => l());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) listener();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  }

  function useItems() {
    return useSyncExternalStore(subscribe, read, () => EMPTY);
  }

  return { read, write, useItems };
}
