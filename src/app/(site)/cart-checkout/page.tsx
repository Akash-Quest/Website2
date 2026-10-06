import type { Metadata } from "next";
import Link from "next/link";

import CartCheckout from "@/components/features/CartCheckout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cart | SkyQuest",
  alternates: {
    canonical: `${SITE_URL}/cart-checkout`,
  },
  robots: { index: false },
};

export default function CartPage() {
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
              <Link href="/reports" className="hover:text-muted transition-colors">
                Reports
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Order Details</li>
          </ol>
        </nav>
      </div>

      <CartCheckout />
    </main>
  );
}
