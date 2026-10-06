const STEPS = ["Order Details", "Payment Options", "Order Confirmation"] as const;

export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/** Three-step progress bar shared by the checkout pages. Connectors up to the current step turn primary. */
export default function CheckoutStepper({ current }: { current: number }) {
  return (
    <ol className="flex items-center justify-center gap-2 sm:gap-4 px-4 lg:px-0">
      {STEPS.map((step, i) => {
        const active = i === current;
        return (
          <li key={step} className="flex items-center gap-2 sm:gap-4">
            {i > 0 && (
              <span
                aria-hidden
                className={`h-px w-6 sm:w-16 lg:w-24 ${i <= current ? "bg-primary" : "bg-gray-300"}`}
              />
            )}
            <span
              aria-current={active ? "step" : undefined}
              className={`flex items-center gap-2 text-xs sm:text-body-sm whitespace-nowrap ${
                active ? "font-medium text-[#03030F]" : i < current ? "text-[#03030F]" : "text-muted"
              }`}
            >
              {active && <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />}
              {step}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
