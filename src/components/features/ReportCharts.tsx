"use client";

import { useId, useState } from "react";

import type { RegionSeries, ShareSlice } from "@/Constants/reportDetail";

/**
 * Categorical slots 1–3 of the validated default palette, in fixed order.
 * Validated with the dataviz skill's checker (light surface, all-pairs):
 * worst CVD ΔE 9.2, worst normal-vision ΔE 24.0 — all checks pass. Aqua sits
 * at 2.74:1 against the surface, which triggers the relief rule, so both
 * charts ship a legend, direct labels and a table view rather than relying on
 * colour alone.
 */
export const SERIES_COLORS = ["#2a78d6", "#eb6834", "#1baf7a"] as const;

const SURFACE = "#ffffff";

function formatNumber(value: number) {
  return value.toLocaleString();
}

/* ─────────────────────────── Stacked bar ─────────────────────────── */

export function RegionStackedBar({
  years,
  regions,
  unit,
  title,
}: {
  years: number[];
  regions: RegionSeries[];
  unit: string;
  title: string;
}) {
  const [hover, setHover] = useState<{ year: number; x: number } | null>(null);
  const [showTable, setShowTable] = useState(false);
  const titleId = useId();

  const totals = years.map((_, i) =>
    regions.reduce((sum, region) => sum + region.values[i], 0)
  );
  const max = Math.max(...totals);

  // Plot geometry in user units; the SVG scales to its container.
  const W = 560;
  const H = 300;
  const PAD = { top: 16, right: 12, bottom: 36, left: 48 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const bandW = plotW / years.length;
  const barW = Math.min(34, bandW * 0.62);

  const y = (value: number) => PAD.top + plotH - (value / max) * plotH;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t));

  return (
    <figure className="m-0">
      <figcaption id={titleId} className="mb-2 text-center text-body-sm text-gray-700">
        {title} ({unit})
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-labelledby={titleId}
      >
        {/* Recessive gridlines */}
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(tick)}
              y2={y(tick)}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
            <text
              x={PAD.left - 8}
              y={y(tick) + 4}
              textAnchor="end"
              className="fill-gray-500"
              fontSize={10}
            >
              {formatNumber(tick)}
            </text>
          </g>
        ))}

        {years.map((year, i) => {
          const x = PAD.left + i * bandW + (bandW - barW) / 2;
          let cursor = 0;

          return (
            <g
              key={year}
              onMouseEnter={() => setHover({ year, x: x + barW / 2 })}
              onMouseLeave={() => setHover(null)}
            >
              {/* Hit target wider than the mark */}
              <rect
                x={PAD.left + i * bandW}
                y={PAD.top}
                width={bandW}
                height={plotH}
                fill="transparent"
              />

              {regions.map((region, s) => {
                const value = region.values[i];
                const h = (value / max) * plotH;
                const yTop = y(cursor + value);
                cursor += value;

                return (
                  <rect
                    key={region.region}
                    x={x}
                    // 2px surface gap between stacked segments
                    y={yTop}
                    width={barW}
                    height={Math.max(0, h - 2)}
                    rx={s === regions.length - 1 ? 4 : 0}
                    fill={SERIES_COLORS[s]}
                    stroke={SURFACE}
                    strokeWidth={0}
                  />
                );
              })}

              <text
                x={x + barW / 2}
                y={H - PAD.bottom + 16}
                textAnchor="middle"
                className="fill-gray-500"
                fontSize={10}
              >
                {year}
              </text>

              {/* Direct label on the end years only — never a number on every bar */}
              {(i === 0 || i === years.length - 1) && (
                <text
                  x={x + barW / 2}
                  y={y(totals[i]) - 6}
                  textAnchor="middle"
                  className="fill-gray-700"
                  fontSize={10}
                  fontWeight={600}
                >
                  {formatNumber(totals[i])}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hover && (
        <div className="mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs shadow-sm">
          <p className="font-semibold text-gray-900">{hover.year}</p>
          <ul className="mt-1 space-y-0.5">
            {regions.map((region, s) => (
              <li key={region.region} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{ backgroundColor: SERIES_COLORS[s] }}
                />
                <span className="text-gray-600">{region.region}</span>
                <span className="ml-auto font-medium text-gray-900">
                  {formatNumber(region.values[years.indexOf(hover.year)])}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Legend — always present for ≥2 series */}
      <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {regions.map((region, s) => (
          <li key={region.region} className="flex items-center gap-1.5 text-xs text-gray-600">
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: SERIES_COLORS[s] }}
            />
            {region.region}
          </li>
        ))}
      </ul>

      <TableToggle open={showTable} onToggle={() => setShowTable((v) => !v)}>
        <table className="w-full text-left text-xs">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="border-b border-gray-200 text-gray-700">
              <th scope="col" className="py-1 pr-3 font-medium">
                Year
              </th>
              {regions.map((region) => (
                <th key={region.region} scope="col" className="py-1 pr-3 font-medium">
                  {region.region}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {years.map((year, i) => (
              <tr key={year} className="border-b border-gray-100 text-gray-600">
                <th scope="row" className="py-1 pr-3 font-normal">
                  {year}
                </th>
                {regions.map((region) => (
                  <td key={region.region} className="py-1 pr-3">
                    {formatNumber(region.values[i])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </TableToggle>
    </figure>
  );
}

/* ───────────────────────────── Donut ─────────────────────────────── */

export function CountryShareDonut({
  shares,
  title,
}: {
  shares: ShareSlice[];
  title: string;
}) {
  const [showTable, setShowTable] = useState(false);
  const titleId = useId();

  const total = shares.reduce((sum, s) => sum + s.value, 0);
  const R = 70;
  const STROKE = 34;
  const circumference = 2 * Math.PI * R;

  // Cumulative arc start for each slice, computed up front — mutating a
  // variable inside the render map would reassign it after render completes.
  const offsets = shares.reduce<number[]>((acc, slice, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + (shares[i - 1].value / total) * circumference);
    return acc;
  }, []);

  return (
    <figure className="m-0">
      <figcaption id={titleId} className="mb-2 text-center text-body-sm text-gray-700">
        {title}
      </figcaption>

      <svg viewBox="0 0 200 200" className="mx-auto h-auto w-full max-w-[220px]" role="img" aria-labelledby={titleId}>
        <g transform="rotate(-90 100 100)">
          {shares.map((slice, i) => {
            const dash = (slice.value / total) * circumference;
            return (
              <circle
                key={slice.label}
                cx={100}
                cy={100}
                r={R}
                fill="none"
                stroke={SERIES_COLORS[i]}
                strokeWidth={STROKE}
                // 2px surface gap between adjacent arcs
                strokeDasharray={`${Math.max(0, dash - 2)} ${circumference - dash + 2}`}
                strokeDashoffset={-offsets[i]}
              />
            );
          })}
        </g>
      </svg>

      {/* Legend with direct values — satisfies the relief rule */}
      <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {shares.map((slice, i) => (
          <li key={slice.label} className="flex items-center gap-1.5 text-xs text-gray-600">
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: SERIES_COLORS[i] }}
            />
            {slice.label}
            <span className="font-medium text-gray-900">{slice.value}%</span>
          </li>
        ))}
      </ul>

      <TableToggle open={showTable} onToggle={() => setShowTable((v) => !v)}>
        <table className="w-full text-left text-xs">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="border-b border-gray-200 text-gray-700">
              <th scope="col" className="py-1 pr-3 font-medium">
                Country
              </th>
              <th scope="col" className="py-1 font-medium">
                Share
              </th>
            </tr>
          </thead>
          <tbody>
            {shares.map((slice) => (
              <tr key={slice.label} className="border-b border-gray-100 text-gray-600">
                <th scope="row" className="py-1 pr-3 font-normal">
                  {slice.label}
                </th>
                <td className="py-1">{slice.value}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableToggle>
    </figure>
  );
}

/* ──────────────────────────── Shared ─────────────────────────────── */

function TableToggle({
  open,
  onToggle,
  children,
}: {
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-2 text-center">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="text-xs font-medium text-primary hover:underline"
        >
          {open ? "Hide data table" : "View data table"}
        </button>
      </div>
      {open && <div className="mt-2 overflow-x-auto">{children}</div>}
    </>
  );
}
