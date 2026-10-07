"use client";

import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import type { Report } from "@/Constants/reports";
import {
  addToCart,
  FILE_TYPES,
  LICENSE_TYPES,
  priceFor,
  useCart,
  type FileType,
  type LicenseType,
} from "@/lib/cart";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function ReportPlanSidebar({ report }: { report: Report }) {
  const [license, setLicense] = useState<LicenseType>("Single");
  const [fileType, setFileType] = useState<FileType>("PPT");
  const formRef = useRef<HTMLFormElement>(null);
  const inCart = useCart().some((item) => item.slug === report.slug);

  const price = priceFor(report.price, license);
  const add = () => addToCart({ slug: report.slug, license, fileType });

  return (
    <div className="space-y-4">
      {/* Plan picker */}
      <section className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="border-b border-gray-200 pb-3 text-xs font-semibold uppercase tracking-wide text-gray-700">
          Select Your Report Plan
        </h2>

        <div className="grid grid-cols-2 gap-3 border-b border-gray-200 py-3">
          <label className="flex flex-col gap-1">
            <span className="text-xs text-muted">License Type</span>
            <select
              value={license}
              onChange={(e) => setLicense(e.target.value as LicenseType)}
              className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {LICENSE_TYPES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs text-muted">File Type</span>
            <select
              value={fileType}
              onChange={(e) => setFileType(e.target.value as FileType)}
              className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {FILE_TYPES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        <p className="border-b border-gray-200 py-3 font-semibold text-gray-900 text-body-xl">
          {priceFormatter.format(price)}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="primary" href="/cart-checkout" onClick={add} fullWidth minWidth="0" className="text-xs">
            BUY NOW
          </Button>
          {inCart ? (
            <Button variant="gray" href="/cart-checkout" fullWidth minWidth="0" className="text-xs">
              VIEW CART
            </Button>
          ) : (
            <Button
              variant="gray"
              href="/cart-checkout"
              onClick={(e) => {
                // Stay on the page; the button flips to "View cart" once added.
                e.preventDefault();
                add();
              }}
              fullWidth
              minWidth="0"
              className="text-xs"
            >
              ADD TO CART
            </Button>
          )}
        </div>
      </section>

      {/* Free sample request */}
      <section id="sample" className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className=" text-xs font-semibold uppercase tracking-wide text-gray-700">
          Select Your Report Plan
        </h2>
        <p className="mt-1 text-xs text-muted">License Type</p>

        <form
          ref={formRef}
          className="mt-3 space-y-2"
          onSubmit={(e) => {
            // No endpoint wired up yet — prevent a navigation that would lose the input.
            e.preventDefault();
          }}
        >
          <input
            type="text"
            required
            placeholder="Full Name*"
            aria-label="Full name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <input
            type="email"
            required
            placeholder="Business Email*"
            aria-label="Business email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <div className="flex gap-2">
            <select
              aria-label="Country calling code"
              className="w-20 shrink-0 rounded-md border border-gray-300 px-2 py-2 text-sm text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              required
              placeholder="Phone Number*"
              aria-label="Phone number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          <Button
            variant="gray"
            href="#sample"
            minWidth="100%"
            className="text-xs"
            onClick={() => formRef.current?.requestSubmit()}
          >
            GET FREE SAMPLE
          </Button>
        </form>
      </section>
    </div>
  );
}
