/**
 * Detail-page data for a report: the snapshot tiles and the two chart series.
 *
 * ⚠ These figures are DERIVED, not researched. They are generated
 * deterministically from each report's own id so the demo pages are populated
 * and internally consistent. Replace `buildReportDetail` with real data from
 * the research team before these pages are presented as genuine analysis.
 */

import type { Report } from "@/Constants/reports";

export type SnapshotTile = {
  label: string;
  value: string;
  /** Categorical slot 1–4 from the validated palette. */
  slot: 1 | 2 | 3 | 4;
};

export type RegionSeries = {
  region: string;
  /** One value per year in `years`, same order. */
  values: number[];
};

export type ShareSlice = {
  label: string;
  value: number;
};

export type ReportDetail = {
  headline: string;
  tiles: SnapshotTile[];
  years: number[];
  regions: RegionSeries[];
  /** Unit label for the stacked bar's y-axis. */
  unit: string;
  shareTitle: string;
  shares: ShareSlice[];
  insights: string[];
  segments: string[];
};

/** Small deterministic hash so every report gets stable, distinct numbers. */
function seedFrom(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Mulberry32 — a tiny seeded PRNG, so a given report always renders alike. */
function rng(seed: number): () => number {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];

const REGIONS = ["Asia Pacific", "North America", "Europe"];

const SEGMENTS_BY_CATEGORY: Record<string, string[]> = {
  Chemicals: ["Product Type", "Form", "Application", "End Use Industry", "Grade"],
  Agriculture: ["Active Ingredient", "Crop Type", "Application Method", "Form"],
  Healthcare: ["Type", "Material", "Application", "End Use"],
  Energy: ["Technology", "Duration", "Ownership Model", "Application"],
  Technology: ["Device Type", "Node Size", "Deployment", "End Use Industry"],
};

export function buildReportDetail(report: Report): ReportDetail {
  const random = rng(seedFrom(report.id));

  // Base market size in $M, growing year on year at a rate implied by the seed.
  const base = 180 + Math.round(random() * 420);
  const growth = 1.04 + random() * 0.09;

  // Regional split holds roughly steady; APAC leads, matching the copy.
  const splits = [0.46 + random() * 0.08, 0.3 + random() * 0.05, 0.18 + random() * 0.04];

  const regions: RegionSeries[] = REGIONS.map((region, i) => ({
    region,
    values: YEARS.map((_, y) => Math.round(base * Math.pow(growth, y) * splits[i])),
  }));

  const total2033 = regions.reduce((sum, r) => sum + r.values[YEARS.length - 1], 0);
  const cagr = ((Math.pow(growth, YEARS.length - 1) - 1) / (YEARS.length - 1)) * 100;

  const japanShare = 54 + Math.round(random() * 14);

  const segments = SEGMENTS_BY_CATEGORY[report.category] ?? ["Type", "Application", "Region"];

  return {
    headline: `${report.name} Size, Share, and Growth Analysis`,

    tiles: [
      { label: "Global Market Size", value: `USD ${total2033.toLocaleString()} Million`, slot: 1 },
      { label: "Largest Segment", value: segments[0], slot: 2 },
      { label: "Fastest Growth", value: "Asia Pacific", slot: 3 },
      { label: "Growth Rate", value: `${cagr.toFixed(1)}% CAGR`, slot: 4 },
    ],

    years: YEARS,
    regions,
    unit: "$ Mn",

    shareTitle: "Country Share For Asia Pacific Region (%)",
    shares: [
      { label: "Japan", value: japanShare },
      { label: "South Korea", value: 100 - japanShare },
    ],

    insights: [
      report.description,
      `The ${report.name.toLowerCase()} is shaped by tightening regulation, shifting feedstock economics, and buyers consolidating around suppliers who can evidence compliance. Procurement teams increasingly treat traceability as a condition of supply rather than a differentiator, which favours producers with instrumented plants and auditable chains of custody.`,
      `Asia Pacific remains the growth engine, led by capacity additions and domestic demand, while North America and Europe compete on specification depth and regulatory readiness rather than volume. The gap between the two strategies is widening across the forecast period.`,
    ],

    segments,
  };
}
