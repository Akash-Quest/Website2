"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Chart } from "react-google-charts";

import type { RegionSeries, ShareSlice } from "@/Constants/reportDetail";


export const SERIES_COLORS = [
  "#4285F4",
  "#DB4437",
  "#F9A825",
  "#0F9D58",
  "#9C27B0",
] as const;

const SURFACE = "#ffffff";

/** Shared plot height and vertical padding, so the bar chart and the donut
 *  beside it line up with the same top and bottom gap. */
const PLOT_HEIGHT = "h-[270px]";
const PLOT_PADDING = "py-4";

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
  const [hover, setHover] = useState<{
    year: number;
    /** Pointer position in px, relative to the plot box. */
    left: number;
    top: number;
    /** True past the box midpoint — the tooltip then opens to the left. */
    flip: boolean;
  } | null>(null);
  const plotRef = useRef<HTMLDivElement>(null);

  const trackPointer = (year: number) => (e: React.MouseEvent) => {
    const box = plotRef.current?.getBoundingClientRect();
    if (!box) return;
    const left = e.clientX - box.left;
    setHover({ year, left, top: e.clientY - box.top, flip: left > box.width / 2 });
  };
  const [showTable, setShowTable] = useState(false);
  const titleId = useId();

  const totals = years.map((_, i) =>
    regions.reduce((sum, region) => sum + region.values[i], 0)
  );
  const max = Math.max(...totals);

  // Plot geometry in real pixels, measured from the box, so the chart fills
  // it exactly and its top/bottom gaps match the donut's.
  const svgBoxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 560, h: 236 });
  useEffect(() => {
    const el = svgBoxRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ w: width, h: height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const W = size.w;
  const H = size.h;
  // No left gutter: the live chart shows gridlines with no y-axis labels.
  // Top leaves room for the end-year totals; bottom for years + axis title.
  const PAD = { top: 16, right: 4, bottom: 40, left: 4 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const bandW = plotW / years.length;
  const barW = Math.min(52, bandW * 0.78);

  const y = (value: number) => PAD.top + plotH - (value / max) * plotH;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t));

  return (
    <figure className="m-0">
      <figcaption id={titleId} className="mb-2 text-center text-body-sm text-gray-700">
        {title} ({unit})
      </figcaption>

      {/* Fixed plot height so this and the donut beside it line up.
          `relative` anchors the floating tooltip. */}
      <div ref={plotRef} className={`relative ${PLOT_HEIGHT} ${PLOT_PADDING}`}>
      <div ref={svgBoxRef} className="h-full w-full overflow-hidden">
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="block"
        role="img"
        aria-labelledby={titleId}
      >
        {/* Recessive gridlines, unlabelled — as on the live chart */}
        {ticks.map((tick) => (
          <line
            key={tick}
            x1={PAD.left}
            x2={W - PAD.right}
            y1={y(tick)}
            y2={y(tick)}
            stroke="#e5e7eb"
            strokeWidth={1}
          />
        ))}

        {/* Vertical band separators */}
        {years.map((year, i) => (
          <line
            key={`v-${year}`}
            x1={PAD.left + i * bandW}
            x2={PAD.left + i * bandW}
            y1={PAD.top}
            y2={PAD.top + plotH}
            stroke="#e5e7eb"
            strokeWidth={1}
          />
        ))}

        {years.map((year, i) => {
          const x = PAD.left + i * bandW + (bandW - barW) / 2;
          let cursor = 0;

          return (
            <g
              key={year}
              onMouseMove={trackPointer(year)}
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
                    y={yTop}
                    width={barW}
                    height={Math.max(0, h)}
                    fill={SERIES_COLORS[s]}
                  />
                );
              })}

              <text
                x={x + barW / 2}
                y={H - PAD.bottom + 16}
                textAnchor="middle"
                className="fill-gray-500"
                fontSize={12}
              >
                {year}
              </text>

              {/* Totals only on the end years — never a number on every bar */}
              {(i === 0 || i === years.length - 1) && (
                <text
                  x={x + barW / 2}
                  y={y(totals[i]) - 6}
                  textAnchor="middle"
                  className="fill-gray-700"
                  fontSize={11}
                  fontWeight={600}
                >
                  {formatNumber(totals[i])}
                </text>
              )}
            </g>
          );
        })}

        {/* Axis title */}
        <text
          x={PAD.left + plotW / 2}
          y={H - 6}
          textAnchor="middle"
          className="fill-gray-500"
          fontSize={12}
        >
          Year
        </text>
      </svg>
      </div>


      {hover && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-10 min-w-[180px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs shadow-lg"
          style={{
            left: hover.left,
            top: hover.top,
            transform: `translate(${hover.flip ? "calc(-100% - 12px)" : "12px"}, -50%)`,
          }}
        >
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
                <span className="ml-auto pl-3 font-medium text-gray-900">
                  {formatNumber(region.values[years.indexOf(hover.year)])}
                </span>
              </li>
            ))}
            <li className="mt-1 flex items-center gap-2 border-t border-gray-100 pt-1">
              <span className="text-gray-600">Total</span>
              <span className="ml-auto pl-3 font-semibold text-gray-900">
                {formatNumber(totals[years.indexOf(hover.year)])}
              </span>
            </li>
          </ul>
        </div>
      )}
      </div>

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
  /** The segment donut puts its legend above the ring; the regional one below. */
  legendPosition = "bottom",
  showValues = true,
}: {
  shares: ShareSlice[];
  title: string;
  legendPosition?: "top" | "bottom";
  showValues?: boolean;
}) {
  const [showTable, setShowTable] = useState(false);
  const titleId = useId();
  const [hover, setHover] = useState<{
    index: number;
    /** Pointer position in px, relative to the plot box. */
    left: number;
    top: number;
    /** True past the box midpoint — the tooltip then opens to the left. */
    flip: boolean;
  } | null>(null);
  const plotRef = useRef<HTMLDivElement>(null);

  const trackPointer = (index: number) => (e: React.MouseEvent) => {
    const box = plotRef.current?.getBoundingClientRect();
    if (!box) return;
    const left = e.clientX - box.left;
    setHover({ index, left, top: e.clientY - box.top, flip: left > box.width / 2 });
  };

  const total = shares.reduce((sum, s) => sum + s.value, 0);
  // Thick ring with a small hole, matching the live donut.
  const R = 65;
  const STROKE = 52;
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

      {legendPosition === "top" && <Legend shares={shares} showValues={showValues} />}

      {/* Same fixed height as the bar chart beside it.
          `relative` anchors the floating tooltip. */}
      <div ref={plotRef} className={`relative flex ${PLOT_HEIGHT} ${PLOT_PADDING} items-center justify-center`}>
      {/* viewBox cropped to the ring's outer edge (R + STROKE/2 = 91), so the
          ring itself touches the padding — same gap as the bar chart. */}
      <svg viewBox="9 9 182 182" className="h-full w-auto max-w-full" role="img" aria-labelledby={titleId}>
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
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offsets[i]}
                // Stroke-only hit area, so the hole and gaps don't trigger it.
                pointerEvents="stroke"
                opacity={hover && hover.index !== i ? 0.6 : 1}
                className="cursor-pointer transition-opacity duration-150"
                onMouseMove={trackPointer(i)}
                onMouseLeave={() => setHover(null)}
              />
            );
          })}
        </g>
      </svg>

      {hover && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-10 min-w-[140px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs shadow-lg"
          style={{
            left: hover.left,
            top: hover.top,
            transform: `translate(${hover.flip ? "calc(-100% - 12px)" : "12px"}, -50%)`,
          }}
        >
          <p className="flex items-center gap-2 font-semibold text-gray-900">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: SERIES_COLORS[hover.index] }}
            />
            {shares[hover.index].label}
          </p>
          <p className="mt-0.5 text-gray-600">
            Share:{" "}
            <span className="font-medium text-gray-900">{shares[hover.index].value}%</span>
          </p>
        </div>
      )}
      </div>

      {legendPosition === "bottom" && <Legend shares={shares} showValues={showValues} />}

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

/* ───────────────────────────── Geography ─────────────────────────── */

/** Status codes fed to GeoChart; `colorAxis` maps each to one discrete colour. */
const GEO_LARGEST = 1;
const GEO_FASTEST = 2;

export function GeographyMap({
  largest,
  fastest,
  title,
}: {
  largest: string[];
  fastest: string[];
  title: string;
}) {
  const [showTable, setShowTable] = useState(false);

  const data = [
    ["Country", "Status"],
    ...largest.map((country) => [country, GEO_LARGEST]),
    ...fastest.map((country) => [country, GEO_FASTEST]),
  ];

  return (
    <figure className="m-0">
      <figcaption className="mb-2 text-center text-body-sm text-gray-700">{title}</figcaption>

      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          legend: "none",
          backgroundColor: "transparent",
          datalessRegionColor: "#ffffff",
          defaultColor: "#ffffff",
          colorAxis: {
            values: [GEO_LARGEST, GEO_FASTEST],
            colors: [SERIES_COLORS[1], SERIES_COLORS[0]],
          },
          tooltip: { trigger: "focus" },
        }}

        loader={<div className="h-[400px] w-full animate-pulse rounded-lg bg-gray-100" />}
      />

      <ul className="mt-2 flex items-center justify-center gap-10 text-xs text-gray-600">
        <li className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: SERIES_COLORS[1] }}
          />
          Largest
        </li>
        <li className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: SERIES_COLORS[0] }}
          />
          Fastest
        </li>
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
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {largest.map((country) => (
              <tr key={country} className="border-b border-gray-100 text-gray-600">
                <th scope="row" className="py-1 pr-3 font-normal">
                  {country}
                </th>
                <td className="py-1">Largest</td>
              </tr>
            ))}
            {fastest.map((country) => (
              <tr key={country} className="border-b border-gray-100 text-gray-600">
                <th scope="row" className="py-1 pr-3 font-normal">
                  {country}
                </th>
                <td className="py-1">Fastest</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableToggle>
    </figure>
  );
}

/* ──────────────────────────── Shared ─────────────────────────────── */

/** Shared legend — always present for ≥2 series, so identity is never colour-alone. */
function Legend({ shares, showValues }: { shares: ShareSlice[]; showValues: boolean }) {
  return (
    <ul className="my-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
      {shares.map((slice, i) => (
        <li key={slice.label} className="flex items-center gap-1.5 text-xs text-gray-600">
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: SERIES_COLORS[i] }}
          />
          {slice.label}
          {showValues && <span className="font-medium text-gray-900">{slice.value}%</span>}
        </li>
      ))}
    </ul>
  );
}

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
