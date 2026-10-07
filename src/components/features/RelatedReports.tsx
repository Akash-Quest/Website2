import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import type { Report } from "@/Constants/reports";

/**
 * "Reports you may like" strip. Cards are cover-first, with the two purchase
 * actions beneath — the same pair used on the listing cards and the detail
 * sidebar, so the call to action reads the same everywhere.
 */
export default function RelatedReports({
  reports,
  heading = "Related Reports",
  bgClassName = "bg-background",
}: {
  reports: Report[];
  heading?: string;
  bgClassName?: string;
}) {
  if (reports.length === 0) return null;

  return (
    <section className={bgClassName}>
      <div className="page-container ">
        <h2 className="sr-only">{heading}</h2>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report) => (
            <li
              key={report.id}
              className="flex flex-col gap-3 rounded-xl bg-white p-3 sm:p-4"
            >
              <Link
                href={`/report/${report.slug}`}
                /* Box matches the artwork's own 5:6 ratio, so `object-cover`
                   fills it edge to edge with nothing cropped and no letterbox. */
                className="block aspect-[5/6] overflow-hidden rounded-lg"
                aria-label={report.name}
              >
                <Image
                  src={report.image}
                  alt={`Cover of ${report.name}`}
                  width={500}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>

              <h3 className="font-medium leading-snug text-gray-900 text-body-lg">
                <Link href={`/report/${report.slug}`} className="hover:text-primary transition-colors">
                  {report.name}
                </Link>
              </h3>

              {/* Two equal columns, stacked once the grid goes to four cards (lg+), where
                  half a card is too narrow for the labels. `minWidth="0"` overrides the component's
                  130px default, which would otherwise stop the pair from
                  splitting evenly in a narrow card. */}
              <div className="mt-auto grid grid-cols-2 gap-2 lg:grid-cols-1">
                <Button
                  variant="primary"
                  href={`/report/${report.slug}`}
                  fullWidth
                  minWidth="0"
                  className="whitespace-nowrap text-[10px]"
                >
                  BUY NOW
                </Button>
                <Button
                  variant="gray"
                  href={`/report/${report.slug}#sample`}
                  fullWidth
                  minWidth="0"
                  className="whitespace-nowrap text-[10px]"
                >
                  GET FREE SAMPLE
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
