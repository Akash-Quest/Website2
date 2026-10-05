"use client";

import { ArrowUp, Bookmark, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ExpandableSearch from "./ExpandableSearch";

/**
 * Report pages: the /reports hub and individual /report/<slug> pages.
 * Matched exactly rather than by a bare "/report" prefix, which would also
 * catch unrelated paths that merely start with those letters.
 */
function isReportPage(pathname: string) {
  return pathname === "/reports" || pathname.startsWith("/reports/") || pathname.startsWith("/report/");
}

const REPORT_ACTIONS = [
  { icon: ShoppingCart, label: "Cart" },
  { icon: Bookmark, label: "Saved reports" },
];

/**
 * Right-hand header controls, shared by all three header variants: search,
 * the report-only cart and saved buttons, and sign-in.
 *
 * `bgClassName` lets each header match its own surface — white on the
 * transparent headers, the page tone inside the white scrolled pill.
 */
export default function HeaderActions({ bgClassName = "bg-white" }: { bgClassName?: string }) {
  const pathname = usePathname();
  const showReportActions = isReportPage(pathname);

  return (
    <div className="flex items-center gap-3 pointer-events-auto">
      <ExpandableSearch bgClassName={bgClassName} />

      {/* Sized to match the search button (h-8 → 2xl:h-10, 18px → 24px icon)
          and, like it, hidden below md where the bar is tight. */}
      {showReportActions &&
        REPORT_ACTIONS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className={`hidden md:inline-flex h-8 w-8 2xl:h-10 2xl:w-10 items-center justify-center rounded-full ${bgClassName} text-black transition-colors hover:bg-gray-100`}
          >
            <Icon className="h-[18px] w-[18px] 2xl:h-6 2xl:w-6" strokeWidth={1.75} />
          </button>
        ))}

      <div
        className={`inline-flex items-center justify-center px-3 py-2 ${bgClassName} text-primary hover:text-black transition rounded-full`}
      >
        <Link href="/signin" className="flex items-center gap-0.5 text-sm 2xl:text-base font-medium">
          Sign In
          <ArrowUp size={18} className="rotate-45" />
        </Link>
      </div>
    </div>
  );
}
