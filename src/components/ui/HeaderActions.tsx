"use client";

import { ArrowUp, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/lib/cart";

import ExpandableSearch from "./ExpandableSearch";
import SavedReportsMenu from "./SavedReportsMenu";

/**
 * Report pages: the /reports hub, individual /report/<slug> pages and the cart.
 * Matched exactly rather than by a bare "/report" prefix, which would also
 * catch unrelated paths that merely start with those letters.
 */
function isReportPage(pathname: string) {
  return (
    pathname === "/reports" ||
    pathname === "/cart-checkout" ||
    pathname === "/cart-buy-now" ||
    pathname.startsWith("/reports/") ||
    pathname.startsWith("/report/")
  );
}

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
  const cartCount = useCart().length;
  const iconButtonClass = `relative h-8 w-8 2xl:h-10 2xl:w-10 items-center justify-center rounded-full ${bgClassName} text-black transition-colors hover:bg-gray-100`;

  return (
    <div className="flex items-center gap-3 pointer-events-auto">
      <ExpandableSearch bgClassName={bgClassName} />

      {/* Sized to match the search button (h-8 → 2xl:h-10, 18px → 24px icon)
          and, like it, hidden below md where the bar is tight. */}
      {showReportActions && (
        <>
          <Link
            href="/cart-checkout"
            aria-label={cartCount ? `Cart (${cartCount} items)` : "Cart"}
            className={`hidden md:inline-flex ${iconButtonClass}`}
          >
            <ShoppingCart className="h-[18px] w-[18px] 2xl:h-6 2xl:w-6" strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <SavedReportsMenu className={`inline-flex ${iconButtonClass}`} />
        </>
      )}

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
