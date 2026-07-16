"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, X } from "lucide-react";
import megaMenuJson from "@/lib/megaMenu.json";
import type {
  MegaMenuColumnsContent,
  MegaMenuData,
  MegaMenuDrilldownContent,
} from "@/lib/megaMenu.types";

const megaMenu = megaMenuJson as MegaMenuData;
const allItems = megaMenu.groups.flatMap((g) => g.items);
const firstItemWithContent = allItems.find((i) => i.content)?.id ?? "";

function ColumnsPanel({
  content,
  onNavigate,
}: {
  content: MegaMenuColumnsContent;
  onNavigate: () => void;
}) {
  return (
    <>
      <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
        {content.columns.map((column, i) => (
          <div key={i}>
            {column.heading && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                {column.heading}
              </p>
            )}
            <ul className="space-y-1">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-50 ${
                      link.featured ? "font-semibold text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                    {link.featured && <ChevronRight size={14} className="text-gray-400" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {content.promo && (
        <div className="w-full shrink-0 lg:w-72">
          <Link
            href={content.promo.href}
            onClick={onNavigate}
            className="group block overflow-hidden rounded-2xl border border-gray-100"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={content.promo.image}
                alt={content.promo.title}
                fill
                unoptimized
                sizes="288px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="mb-1 text-sm font-semibold text-gray-900">{content.promo.title}</p>
              <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-gray-500">
                {content.promo.description}
              </p>
              <span className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-medium text-white">
                {content.promo.ctaLabel}
              </span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

function DrilldownPanel({
  content,
  activeCategoryLabel,
  onHoverCategory,
  onNavigate,
}: {
  content: MegaMenuDrilldownContent;
  activeCategoryLabel: string | null;
  onHoverCategory: (label: string) => void;
  onNavigate: () => void;
}) {
  const activeCategory =
    content.categories.find((c) => c.label === activeCategoryLabel) ?? content.categories[0];

  return (
    <div className="flex flex-1 flex-col gap-8 sm:flex-row">
      <div className="w-full shrink-0 sm:w-56">
        <ul className="space-y-1">
          {content.categories.map((category) => (
            <li key={category.label}>
              <button
                type="button"
                onMouseEnter={() => onHoverCategory(category.label)}
                onClick={() => onHoverCategory(category.label)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  activeCategory?.label === category.label
                    ? "bg-[#EEF0FF] font-semibold text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0 flex-1">
        <ul className="max-h-[55vh] space-y-1 overflow-y-auto pr-2 sm:columns-2 sm:gap-x-8">
          {activeCategory?.children.map((link) => (
            <li key={link.href} className="break-inside-avoid">
              <Link
                href={link.href}
                onClick={onNavigate}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-50 ${
                  link.featured ? "font-semibold text-gray-900" : "text-gray-600"
                }`}
              >
                {link.label}
                {link.featured && <ChevronRight size={14} className="text-gray-400" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MegaMenu({
  triggerBgClassName = "bg-white",
}: {
  triggerBgClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState(firstItemWithContent);
  const [activeCategoryLabel, setActiveCategoryLabel] = useState<string | null>(null);

  const activeItem = useMemo(
    () => allItems.find((i) => i.id === activeItemId),
    [activeItemId]
  );

  useEffect(() => {
    if (activeItem?.content?.kind === "drilldown") {
      setActiveCategoryLabel(activeItem.content.categories[0]?.label ?? null);
    }
  }, [activeItemId, activeItem]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={`inline-flex h-8 w-8 2xl:h-10 2xl:w-10 cursor-pointer items-center justify-center rounded-full ${triggerBgClassName}`}
      >
        <div className="flex h-3 flex-col justify-between">
          <span className="block h-0.5 w-4 2xl:w-6 rounded bg-black" />
          <span className="block h-0.5 w-4 2xl:w-6 rounded bg-black" />
          <span className="block h-0.5 w-4 2xl:w-6 rounded bg-black" />
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-[1000] flex flex-col bg-white">
          {/* Top bar */}
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-gray-100 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
              >
                <X size={18} />
              </button>
              <img src="/Header/logo.svg" alt="SkyQuest" className="h-5 w-auto sm:h-6" />
            </div>

            <div className="hidden flex-1 max-w-sm items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-400 sm:flex">
              <Search size={16} />
              <span>Search</span>
            </div>

            <Link
              href="#"
              className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Login
            </Link>
          </div>

          {/* Body */}
          <div className="flex min-h-0 flex-1">
            {/* Sidebar */}
            <nav className="w-56 shrink-0 overflow-y-auto border-r border-gray-100 px-4 py-6 sm:w-64 sm:px-6">
              {megaMenu.groups.map((group) => (
                <div key={group.id} className="mb-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        {item.content ? (
                          <button
                            type="button"
                            onMouseEnter={() => setActiveItemId(item.id)}
                            onClick={() => setActiveItemId(item.id)}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                              activeItemId === item.id
                                ? "bg-[#EEF0FF] font-semibold text-primary"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {item.label}
                            <ChevronRight
                              size={14}
                              className={activeItemId === item.id ? "opacity-100" : "opacity-0"}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex w-full rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 lg:px-10 lg:py-8">
              {activeItem?.content?.description && (
                <p className="mb-6 max-w-2xl text-sm text-gray-500">
                  {activeItem.content.description}
                </p>
              )}
              <div className="flex flex-col gap-8 lg:flex-row">
                {activeItem?.content?.kind === "columns" && (
                  <ColumnsPanel content={activeItem.content} onNavigate={() => setOpen(false)} />
                )}
                {activeItem?.content?.kind === "drilldown" && (
                  <DrilldownPanel
                    content={activeItem.content}
                    activeCategoryLabel={activeCategoryLabel}
                    onHoverCategory={setActiveCategoryLabel}
                    onNavigate={() => setOpen(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
