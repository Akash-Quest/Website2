"use client";

import { Bookmark, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { getReportBySlug } from "@/Constants/reports";
import { removeSavedReport, useSavedReports } from "@/lib/savedReports";

/** Header bookmark button: shows a count badge and opens a list of saved reports. */
export default function SavedReportsMenu({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const saved = useSavedReports().flatMap((slug) => {
    const report = getReportBySlug(slug);
    return report ? [report] : [];
  });

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative hidden md:block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={saved.length ? `Saved reports (${saved.length})` : "Saved reports"}
        className={className}
      >
        <Bookmark
          className={`h-[18px] w-[18px] 2xl:h-6 2xl:w-6 ${saved.length ? "text-primary" : ""}`}
          strokeWidth={1.75}        />
        {saved.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
            {saved.length}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Saved reports"
          className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-gray-200 bg-white p-3 shadow-lg"
        >
          <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-700">
            Saved Reports
          </p>

          {saved.length === 0 ? (
            <p className="px-1 py-3 text-body-sm text-muted">
              No saved reports yet. Tap the bookmark on any report to save it here.
            </p>
          ) : (
            <ul className="max-h-80 divide-y divide-gray-100 overflow-y-auto">
              {saved.map((report) => (
                <li key={report.slug} className="flex items-start gap-2 py-2">
                  <Link
                    href={`/report/${report.slug}`}
                    onClick={() => setOpen(false)}
                    className="min-w-0 flex-1 rounded px-1 hover:bg-background"
                  >
                    <span className="block text-body-sm font-medium text-[#03030F]">
                      {report.name}
                    </span>
                    <span className="block text-xs text-muted">{report.id}</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeSavedReport(report.slug)}
                    aria-label={`Remove ${report.name} from saved reports`}
                    className="shrink-0 rounded p-1 text-gray-400 hover:bg-background hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
