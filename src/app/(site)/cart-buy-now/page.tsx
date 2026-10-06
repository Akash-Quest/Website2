import type { Metadata } from "next";
import Link from "next/link";

import CartBuyNow from "@/components/features/CartBuyNow";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment Options | SkyQuest",
  alternates: {
    canonical: `${SITE_URL}/cart-buy-now`,
  },
  robots: { index: false },
};

export default function CartBuyNowPage() {
  return (
    <main className="w-full bg-background overflow-x-clip">
      <div className="hero-container pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0">
        <nav aria-label="Breadcrumb" className="pb-2 sm:pb-2 lg:pb-5 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/cart-checkout" className="hover:text-muted transition-colors">
                Order Details
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Payment Options</li>
          </ol>
        </nav>
      </div>

      <CartBuyNow />
    </main>
  );
}
