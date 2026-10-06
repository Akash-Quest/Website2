"use client";

import { ArrowLeft, Headset, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import CheckoutStepper, { priceFormatter } from "@/components/features/CheckoutStepper";
import Button from "@/components/ui/Button";
import {
  FILE_TYPES,
  LICENSE_TYPES,
  removeFromCart,
  updateCartItem,
  useCartLines,
  type FileType,
  type LicenseType,
} from "@/lib/cart";

/** Shared column template so the header row and item rows line up. */
const GRID_COLS = "md:grid-cols-[minmax(0,1fr)_140px_140px_120px] lg:grid-cols-[minmax(0,1fr)_170px_170px_150px]";

const selectClass =
  "w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

export function AssistanceBanner() {
  return (
    <section className="relative isolate mt-6 overflow-hidden rounded-xl px-5 py-3 sm:px-8 sm:py-4 text-white">
      <Image
        src="/Contact/ContactUs.jpg"
        alt=""
        fill
        sizes="(min-width: 1280px) 1200px, 100vw"
        className="-z-10 object-cover"
      />
      <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/70">
            <Headset size={22} strokeWidth={1.75} />
          </span>
          <p className="leading-tight text-body-lg sm:text-body-xl">
            Need Assistance?
            <br />
            Call us or Write us
          </p>
        </div>

        <div className="sm:justify-self-center">
          <p className="leading-tight text-body-lg sm:text-body-xl">Write an Email</p>
          <a
            href="mailto:help@skyquestt.com"
            className="text-body-sm text-white/80 hover:text-white transition-colors"
          >
            help@skyquestt.com
          </a>
        </div>

        <div className="sm:justify-self-end">
          <p className="text-body-lg sm:text-body-xl">Call us</p>
          <a
            href="tel:+13513334748"
            className="text-body-sm text-white/80 hover:text-white transition-colors"
          >
            USA +1 351-333-4748
          </a>
        </div>
      </div>
    </section>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-primary">
        <ShoppingCart size={22} strokeWidth={1.75} />
      </span>
      <p className="font-semibold text-[#03030F] text-body-lg">Your cart is empty</p>
      <p className="max-w-sm text-muted text-body-sm">
        Browse our market research reports and add the ones you need to get started.
      </p>
      <Button href="/reports" className="mt-2 text-xs">
        BROWSE REPORTS
      </Button>
    </div>
  );
}

export default function CartCheckout() {
  const { lines, total } = useCartLines();

  return (
    <div className="page-container pt-4 pb-10 sm:pt-4 md:pt-6 lg:pt-6 xl:pt-6 2xl:pt-8">
      <CheckoutStepper current={0} />

      <section className="mt-6 rounded-xl bg-white p-3 sm:p-4">
        {lines.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {/* Column headings — desktop only; rows label their own fields on mobile */}
            <div
              className={`hidden md:grid ${GRID_COLS} rounded-md bg-background text-body-sm text-[#03030F]`}
            >
              <div className="px-3 py-2">Reports</div>
              <div className="border-l border-white px-3 py-2 text-center">License Type</div>
              <div className="border-l border-white px-3 py-2 text-center">File Type</div>
              <div className="border-l border-white px-3 py-2 text-center">Total (USD)</div>
            </div>

            <ul className="divide-y divide-gray-200">
              {lines.map(({ slug, report, license, fileType, price }) => (
                <li
                  key={slug}
                  className={`grid grid-cols-2 gap-x-3 gap-y-3 md:gap-x-0 py-3 md:items-start ${GRID_COLS}`}
                >
                  <div className="col-span-2 md:col-span-1 flex gap-3 min-w-0">
                    <Link href={`/report/${slug}`} className="shrink-0">
                      <Image
                        src={report.image}
                        alt={`Cover of ${report.name}`}
                        width={120}
                        height={90}
                        className="h-14 w-[4.5rem] rounded object-cover"
                      />
                    </Link>
                    <div className="min-w-0">
                      <Link
                        href={`/report/${slug}`}
                        className="font-medium text-[#03030F] text-body-sm hover:text-primary transition-colors"
                      >
                        {report.name}
                      </Link>
                      <p className="text-xs text-muted">Report code: {report.id}</p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(slug)}
                        className="mt-0.5 text-xs text-red-600 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <label className="flex flex-col gap-1 md:px-3">
                    <span className="text-xs text-muted md:sr-only">License Type</span>
                    <select
                      value={license}
                      onChange={(e) =>
                        updateCartItem(slug, { license: e.target.value as LicenseType })
                      }
                      className={selectClass}
                    >
                      {LICENSE_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1 md:px-3">
                    <span className="text-xs text-muted md:sr-only">File Type</span>
                    <select
                      value={fileType}
                      onChange={(e) =>
                        updateCartItem(slug, { fileType: e.target.value as FileType })
                      }
                      className={selectClass}
                    >
                      {FILE_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <p className="col-span-2 md:col-span-1 flex justify-between md:block md:text-right font-semibold text-[#03030F] text-body-sm md:pr-3">
                    <span className="font-normal text-muted md:hidden">Total</span>
                    {priceFormatter.format(price)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between border-y border-gray-200 py-3 md:pr-3">
              <span className="text-body-sm text-[#03030F]">Grand Total :</span>
              <span className="font-semibold text-[#03030F] text-body-lg">
                {priceFormatter.format(total)}
              </span>
            </div>

            <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase text-primary hover:text-black transition-colors"
              >
                <ArrowLeft size={14} />
                Continue to Explore
              </Link>

              <Button href="/cart-buy-now" minWidth="180px" className="text-xs">
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </>
        )}
      </section>

      <AssistanceBanner />
    </div>
  );
}
