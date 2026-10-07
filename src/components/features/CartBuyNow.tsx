"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { AssistanceBanner } from "@/components/features/CartCheckout";
import CheckoutStepper, { priceFormatter } from "@/components/features/CheckoutStepper";
import Button from "@/components/ui/Button";
import { useCartLines } from "@/lib/cart";

const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
];

const PAYMENT_METHODS = ["razorpay", "paypal"] as const;
type PaymentMethod = (typeof PAYMENT_METHODS)[number];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-body-sm text-gray-700 placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

/** Dimensions are each file's own; heights are tuned per logo so they look the same size side by side. */
const PAYMENT_LOGOS: Record<
  PaymentMethod,
  { src: string; alt: string; width: number; height: number; className: string }
> = {
  razorpay: { src: "/logos/razropay.png", alt: "Razorpay", width: 1896, height: 401, className: "h-6" },
  paypal: { src: "/logos/paypal.png", alt: "PayPal", width: 2000, height: 529, className: "h-8" },
};

function PaymentLogo({ method }: { method: PaymentMethod }) {
  const logo = PAYMENT_LOGOS[method];
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`${logo.className} w-auto`}
    />
  );
}

export default function CartBuyNow() {
  const { lines, total } = useCartLines();
  const formRef = useRef<HTMLFormElement>(null);
  const [method, setMethod] = useState<PaymentMethod>("razorpay");

  return (
    <div className="page-container py-8 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-14">
      <CheckoutStepper current={1} />

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
        {/* ── Details form ── */}
        <section className="rounded-xl bg-white p-4 sm:p-6">
          <h1 className="font-semibold text-[#03030F] text-body-xl">Please register your details.</h1>

          <form
            ref={formRef}
            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
            onSubmit={(e) => {
              // No payment gateway wired up yet — prevent a navigation that would lose the input.
              e.preventDefault();
            }}
          >
            <input required name="firstName" placeholder="First Name*" aria-label="First name" autoComplete="given-name" className={inputClass} />
            <input required name="lastName" placeholder="Last Name*" aria-label="Last name" autoComplete="family-name" className={inputClass} />

            <input
              required
              type="email"
              name="email"
              placeholder="Business Email*"
              aria-label="Business email"
              autoComplete="email"
              className={`${inputClass} sm:col-span-2`}
            />

            <div className="flex sm:col-span-2">
              <select
                name="countryCode"
                aria-label="Country calling code"
                className="w-32 shrink-0 rounded-l-md border border-r-0 border-gray-300 bg-white px-2 py-2.5 text-body-sm text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                aria-label="Phone number"
                autoComplete="tel-national"
                className={`${inputClass} rounded-l-none`}
              />
            </div>

            <input required name="company" placeholder="Company Name*" aria-label="Company name" autoComplete="organization" className={`${inputClass} sm:col-span-2`} />
            <input required name="jobTitle" placeholder="Job Title*" aria-label="Job title" autoComplete="organization-title" className={`${inputClass} sm:col-span-2`} />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile Link" aria-label="LinkedIn profile link" className={`${inputClass} sm:col-span-2`} />

            <textarea
              name="requirements"
              rows={3}
              placeholder="Your Research Requirements (Optional)"
              aria-label="Your research requirements"
              className={`${inputClass} resize-y sm:col-span-2`}
            />

            <label className="mt-2 flex cursor-pointer items-center gap-2.5 text-xs text-muted sm:col-span-2">
              <span className="relative flex h-4 w-4 shrink-0">
                <input
                  required
                  type="checkbox"
                  name="terms"
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-400 checked:border-primary checked:bg-primary focus-visible:ring-2 focus-visible:ring-blue-500"
                />
                <Check
                  size={12}
                  strokeWidth={3}
                  className="pointer-events-none absolute left-0.5 top-0.5 hidden text-white peer-checked:block"
                />
              </span>
              <span>
                I have read and agree to the{" "}
                <Link href="#" className="text-primary underline">
                  Terms &amp; Conditions.
                </Link>
              </span>
            </label>
          </form>
        </section>

        {/* ── Summary + payment ── */}
        <div className="flex flex-col gap-4">
          <section className="rounded-xl bg-white p-4 sm:p-5">
            <h2 className="font-medium text-[#03030F] text-body-lg">Order Summary</h2>

            {lines.length === 0 ? (
              <p className="mt-3 text-body-sm text-muted">
                Your cart is empty.{" "}
                <Link href="/reports" className="text-primary underline">
                  Browse reports
                </Link>
              </p>
            ) : (
              <>
                <ul className="mt-3 divide-y divide-gray-200 border-b border-gray-300">
                  {lines.map(({ slug, report, price }) => (
                    <li key={slug} className="flex items-start justify-between gap-3 py-3 text-xs">
                      <span className="text-gray-700">{report.name}</span>
                      <span className="shrink-0 font-semibold text-[#03030F]">
                        {priceFormatter.format(price)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs text-gray-700">Grand Total</span>
                  <span className="font-semibold text-[#03030F] text-body-lg">
                    {priceFormatter.format(total)}
                  </span>
                </div>
              </>
            )}
          </section>

          <section className="rounded-xl bg-white p-4 sm:p-5">
            <h2 className="font-medium text-[#03030F] text-body-lg">Payment Methods</h2>

            <div role="radiogroup" aria-label="Payment method" className="mt-3 flex flex-col gap-3">
              {PAYMENT_METHODS.map((m) => (
                <label key={m} className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={m}
                    checked={method === m}
                    onChange={() => setMethod(m)}
                    className="h-4 w-4 cursor-pointer accent-primary"
                  />
                  <PaymentLogo method={m} />
                </label>
              ))}
            </div>

            <Button
              href="/cart-buy-now"
              fullWidth
              className="mt-5 text-xs"
              onClick={(e) => {
                // Validate the details form; payment hand-off goes here once a gateway is wired up.
                e.preventDefault();
                if (lines.length > 0) formRef.current?.requestSubmit();
              }}
            >
              PROCEED
            </Button>
          </section>
        </div>
      </div>

      <AssistanceBanner />
    </div>
  );
}
