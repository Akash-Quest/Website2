"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, X } from "lucide-react";
import { ArrowRight, ArrowUp } from "iconsax-react";
import Button from "./Button";
import megaMenuJson from "@/lib/megaMenu.json";
import type {
  MegaMenuColumnsContent,
  MegaMenuData,
  MegaMenuLink,
  MegaMenuPromo,
} from "@/lib/megaMenu.types";

const megaMenu = megaMenuJson as MegaMenuData;
const allItems = megaMenu.groups.flatMap((g) => g.items);
const firstItemWithContent = allItems.find((i) => i.content)?.id ?? "";

function ActiveArrow({ size, className }: { size: number; className: string }) {
  return <ArrowRight size={size} className={className} variant="Linear" color="currentColor" />;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{children}</p>
  );
}

function renderBoldSegments(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-700">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function PanelHeading({
  heading,
  description,
  className,
}: {
  heading?: string;
  description?: string;
  className: string;
}) {
  if (!heading && !description) return null;
  return (
    <div className={className}>
      {heading && <p className="  text-body-lg">{heading}</p>}
      {description && (
        <p className="mt-1 text-sm text-gray-500">{renderBoldSegments(description)}</p>
      )}
    </div>
  );
}

function ColumnsList({
  content,
  activeHref,
  onSelect,
}: {
  content: MegaMenuColumnsContent;
  activeHref: string | null;
  onSelect: (href: string) => void;
}) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-y-1 sm:grid-cols-2">
      {(content.columns ?? []).map((column, i) => (
        <div key={i}>
          {column.heading && (
            <p className="mb-2 text-body-lg font-semibold uppercase tracking-wide text-gray-400">
              {column.heading}
            </p>
          )}
          <ul className="space-y-1 2xl:space-y-2">
            {column.links.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => onSelect(link.href)}
                    className={`group flex w-full items-center justify-between rounded-lg py-[clamp(0.375rem,1.2vh,0.75rem)] pl-3 pr-4 text-left text-body-lg transition-colors 2xl:pl-5 2xl:pr-8 2xl:text-xl ${
                      isActive
                        ? "bg-background font-semibold text-[#03030F]"
                        : "text-gray-600 hover:bg-[#EAEAF8]"
                    }`}
                  >
                    {link.label}
                    <ActiveArrow
                      size={24}
                      className={`text-[#03030F] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function PromoCard({ promo, onNavigate }: { promo: MegaMenuPromo; onNavigate: () => void }) {
  return (
    <div className="w-full overflow-hidden ">
      <Link
        href={promo.href}
        onClick={onNavigate}
        className="group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl"
      >
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          sizes="288px"
          className="object-fill transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="pt-3">
        <p className="mb-1 text-body-lg font-semibold text-gray-900">{promo.title}</p>
        <p className="mb-3 pb-3   text-gray-500">
          {promo.description}
        </p>
        <div className="flex justify-end">
          <Button href={promo.href} variant="primary" iconSize={14} minWidth="0px" onClick={onNavigate}>
            {promo.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

function DrilldownNavList({
  items,
  activeLabel,
  onHover,
}: {
  items: { label: string }[];
  activeLabel: string | null;
  onHover: (label: string) => void;
}) {
  const active = activeLabel;

  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.label}>
          <button
            type="button"
            onClick={() => onHover(item.label)}
            className={`group flex w-full items-center justify-between rounded-lg py-[clamp(0.375rem,1.2vh,0.75rem)] pl-3 pr-4 text-left text-body-lg transition-colors 2xl:pl-5 2xl:pr-8 2xl:text-xl ${
              active === item.label
                 ? "bg-background font-semibold text-[#03030F]"
                  : "text-gray-700 hover:bg-[#EAEAF8]"
            }`}
          >
            {item.label}
            <ActiveArrow
              size={24}
              className={`text-[#03030F] transition-opacity ${
                active === item.label ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

function DrilldownLinkList({
  links,
  onNavigate,
}: {
  links: MegaMenuLink[];
  onNavigate: () => void;
}) {
  return (
    <ul className="scrollbar-hide max-h-[55vh] space-y-1 overflow-y-auto pr-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className={`group flex w-full items-center justify-between rounded-lg py-[clamp(0.375rem,1.2vh,0.75rem)] pl-3 pr-4 text-left text-body-lg transition-colors 2xl:pl-5 2xl:pr-8 2xl:text-xl ${
              link.featured
                ? "bg-background font-semibold text-[#03030F]"
                : "text-gray-700 hover:bg-[#EAEAF8]"
            }`}
          >
            {link.label}
            <ActiveArrow
              size={24}
              className={`text-[#03030F] transition-opacity ${
                link.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </Link>
        </li>
      ))}
    </ul>
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
  const [activeGroupLabel, setActiveGroupLabel] = useState<string | null>(null);
  const [activeLinkHref, setActiveLinkHref] = useState<string | null>(null);

  const [mobileOpenItemId, setMobileOpenItemId] = useState<string | null>(null);
  const [mobileOpenCategoryLabel, setMobileOpenCategoryLabel] = useState<string | null>(null);
  const [mobileOpenGroupLabel, setMobileOpenGroupLabel] = useState<string | null>(null);

  const toggleMobileItem = (id: string) => {
    setMobileOpenItemId((current) => (current === id ? null : id));
    setMobileOpenCategoryLabel(null);
    setMobileOpenGroupLabel(null);
  };

  const toggleMobileCategory = (label: string) => {
    setMobileOpenCategoryLabel((current) => (current === label ? null : label));
    setMobileOpenGroupLabel(null);
  };

  const toggleMobileGroup = (label: string) => {
    setMobileOpenGroupLabel((current) => (current === label ? null : label));
  };

  const activeItem = useMemo(
    () => allItems.find((i) => i.id === activeItemId),
    [activeItemId]
  );

  useEffect(() => {
    if (activeItem?.content?.kind === "drilldown") {
      setActiveCategoryLabel(null);
      setActiveGroupLabel(null);
    }
    if (activeItem?.content?.kind === "columns") {
      setActiveLinkHref(null);
    }
  }, [activeItemId, activeItem]);

  const activePromo = useMemo(() => {
    if (activeItem?.content?.kind !== "columns") return undefined;
    const hasLinks = activeItem.content.columns?.some((c) => c.links.length > 0) ?? false;
    // Panels with no link list (e.g. Sustech Bank) have nothing to click, so show their promo right away.
    if (!hasLinks) return activeItem.content.promo;
    if (!activeLinkHref) return undefined;
    const flatLinks = (activeItem.content.columns ?? []).flatMap((c) => c.links);
    return flatLinks.find((l) => l.href === activeLinkHref)?.promo ?? activeItem.content.promo;
  }, [activeItem, activeLinkHref]);

  const activeContent = activeItem?.content;

  const hasColumnLinks =
    activeContent?.kind === "columns" &&
    (activeContent.columns?.some((c) => c.links.length > 0) ?? false);

  const activeDrilldownCategory = useMemo(() => {
    if (activeContent?.kind !== "drilldown") return undefined;
    return activeContent.categories.find((c) => c.label === activeCategoryLabel);
  }, [activeContent, activeCategoryLabel]);

  const activeDrilldownGroup = useMemo(() => {
    return activeDrilldownCategory?.groups.find((g) => g.label === activeGroupLabel);
  }, [activeDrilldownCategory, activeGroupLabel]);

  const handleHoverSector = (label: string) => {
    setActiveCategoryLabel(label);
    setActiveGroupLabel(null);
  };

  useEffect(() => {
    if (!open) {
      setMobileOpenItemId(null);
      setMobileOpenCategoryLabel(null);
      setMobileOpenGroupLabel(null);
      return;
    }

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
        className={`group inline-flex h-8 w-8 2xl:h-10 2xl:w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-primary ${triggerBgClassName}`}
      >
        <div className="flex h-3 flex-col justify-between">
          <span className="block h-0.5 w-4 2xl:w-6 rounded bg-black transition-colors group-hover:bg-white" />
          <span className="block h-0.5 w-4 2xl:w-6 rounded bg-black transition-colors group-hover:bg-white" />
          <span className="block h-0.5 w-4 2xl:w-6 rounded bg-black transition-colors group-hover:bg-white" />
        </div>
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-[1000] flex flex-col bg-white">
          <div className="flex shrink-0 items-center gap-4 border-b border-[#03030F]/20 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-primary hover:text-white bg-background"
              >
                <X size={20} />
              </button>

              <Link href="/" onClick={() => setOpen(false)}>
                <img src="/Header/sky.svg" alt="SkyQuest" className="h-5 w-auto sm:h-6" />
              </Link>
            </div>

            <div className="hidden h-10 flex-1 items-center gap-2 rounded-lg border border-gray-200 px-3 text-lg text-[#03030F]/40 sm:flex 2xl:h-10">
              <Search size={16} color="#03030F" />
              <input
                type="text"
                placeholder="Search...."
                className="flex-1 bg-transparent outline-none placeholder:text-[#03030F]/40"
              />
            </div>

            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="group flex items-center ml-5 gap-1 sm:gap-2 text-gray-500 transition-colors hover:text-primary"
            >
              Login
              <span className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors group-hover:bg-primary/10">
                <ArrowUp size={24} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
              </span>
            </Link>
          </div>

          {/* Mobile: nested accordion */}
          <div className="scrollbar-hide flex-1 overflow-y-auto sm:hidden">
            {megaMenu.groups.map((group, gi) => (
              <div key={group.id} className={gi > 0 ? "border-t border-[#03030F]/20" : ""}>
                {group.label && (
                  <h3 className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {group.label}
                  </h3>
                )}
                {group.items.map((item) => {
                  if (!item.content) {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex w-full items-center px-4 py-3 text-base text-gray-700"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  const isItemOpen = mobileOpenItemId === item.id;
                  return (
                    <div key={item.id}>
                      <button
                        type="button"
                        onClick={() => toggleMobileItem(item.id)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-[#03030F]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                            isItemOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isItemOpen && (
                        <div className="bg-gray-50 px-4 pb-4">
                          <PanelHeading
                            heading={item.content.heading}
                            description={item.content.description}
                            className="pb-3"
                          />

                          {item.content.kind === "columns" ? (
                            <>
                              {(item.content.columns ?? []).map((column, ci) => (
                                <div key={ci} className={ci > 0 ? "mt-3" : ""}>
                                  {column.heading && (
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                                      {column.heading}
                                    </p>
                                  )}
                                  <ul>
                                    {column.links.map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          onClick={() => setOpen(false)}
                                          className="flex items-center gap-1.5 py-2 text-sm text-gray-700"
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              {item.content.promo && (
                                <div className="mt-3">
                                  <PromoCard promo={item.content.promo} onNavigate={() => setOpen(false)} />
                                </div>
                              )}
                            </>
                          ) : (
                            item.content.categories.map((category) => {
                              const isCategoryOpen = mobileOpenCategoryLabel === category.label;
                              return (
                                <div
                                  key={category.label}
                                  className="-mx-4 border-t border-[#03030F]/10 first:border-t-0"
                                >
                                  <button
                                    type="button"
                                    onClick={() => toggleMobileCategory(category.label)}
                                    className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-semibold text-gray-900"
                                  >
                                    {category.label}
                                    <ChevronDown
                                      className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform ${
                                        isCategoryOpen ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>

                                  {isCategoryOpen && (
                                    <div className="pb-2">
                                      {category.groups.length > 0 ? (
                                        category.groups.map((groupItem) => {
                                          const isGroupOpen = mobileOpenGroupLabel === groupItem.label;
                                          return (
                                            <div key={groupItem.label}>
                                              <button
                                                type="button"
                                                onClick={() => toggleMobileGroup(groupItem.label)}
                                                className="flex w-full items-center justify-between py-2 pl-8 pr-4 text-left text-sm text-gray-700"
                                              >
                                                {groupItem.label}
                                                <ChevronDown
                                                  className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform ${
                                                    isGroupOpen ? "rotate-180" : ""
                                                  }`}
                                                />
                                              </button>
                                              {isGroupOpen && (
                                                <ul className="pb-2 pl-12 pr-4">
                                                  {groupItem.links.map((link) => (
                                                    <li key={link.href}>
                                                      <Link
                                                        href={link.href}
                                                        onClick={() => setOpen(false)}
                                                        className={`flex items-center gap-1.5 py-1.5 text-sm ${
                                                          link.featured
                                                            ? "font-semibold text-gray-900"
                                                            : "text-gray-600"
                                                        }`}
                                                      >
                                                        {link.label}
                                                      </Link>
                                                    </li>
                                                  ))}
                                                </ul>
                                              )}
                                            </div>
                                          );
                                        })
                                      ) : (
                                        <p className="py-2 pl-8 pr-4 text-sm text-gray-500">
                                          More industries coming soon.
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Body: sidebar — content — promo */}
          <div
            className={`hidden min-h-0 flex-1 ${
              activeContent?.kind === "drilldown"
                ? "sm:grid sm:grid-rows-[auto_1fr] sm:grid-cols-[1fr_1fr_1fr_1fr]"
                : hasColumnLinks
                ? "sm:grid sm:grid-cols-[1fr_2fr_1fr]"
                : "sm:grid sm:grid-cols-[25%_30%_45%]"
            }`}
          >
            <nav
              className={`scrollbar-hide overflow-y-auto border-r border-[#03030F]/20 py-[clamp(0.5rem,2vh,1.25rem)] pl-3 2xl:pl-8 ${
                activeContent?.kind === "drilldown" ? "sm:row-span-2" : ""
              }`}
            >
              {megaMenu.groups.map((group, i) => (
                <div
                  key={group.id}
                  className={`mb-3 ${
                    i > 0 ? "-ml-4 border-t border-[#03030F]/20 pl-4 pt-[clamp(0.5rem,1.6vh,1.25rem)] 2xl:-ml-8 2xl:pl-8" : ""
                  }`}
                >
                  {group.label && (
                    <h3 className="mb-[clamp(0.25rem,0.8vh,0.75rem)] text-xl font-medium text-[#03030F] 2xl:text-2xl">
                      {group.label}
                    </h3>
                  )}
                  <ul className="space-y-0.5 px-3 2xl:px-5">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        {item.content ? (
                          <button
                            type="button"
                            onClick={() => setActiveItemId(item.id)}
                            className={`group flex w-full items-center justify-between rounded-lg py-[clamp(0.375rem,1.2vh,0.75rem)] pl-3 pr-4 text-left text-body-lg transition-colors 2xl:pl-5 2xl:pr-8 2xl:text-xl ${
                              activeItemId === item.id
                                ? "bg-background font-semibold text-[#03030F]"
                                : "text-gray-700 hover:bg-[#EAEAF8]"
                            }`}
                          >
                            {item.label}
                            <ActiveArrow
                              size={24}
                              className={`text-[#03030F] transition-opacity ${
                                activeItemId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="group flex w-full items-center justify-between rounded-lg py-[clamp(0.375rem,1.2vh,0.75rem)] pl-3 pr-4 text-left text-body-lg text-gray-700 transition-colors hover:bg-[#EAEAF8] 2xl:pl-5 2xl:pr-8 2xl:text-xl"
                          >
                            {item.label}
                            <ActiveArrow
                              size={24}
                              className="text-[#03030F] opacity-0 transition-opacity group-hover:opacity-100"
                            />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {activeContent?.kind === "columns" && (
              <>
                {hasColumnLinks && (
                  <div className="flex min-h-0 flex-col border-r border-[#03030F]/20">
                    <PanelHeading
                      heading={activeContent.heading}
                      description={activeContent.description}
                      className="shrink-0 border-b border-[#03030F]/20 px-8 py-2 sm:px-8"
                    />

                    <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto px-6 py-2 sm:px-4">
                      <ColumnsList
                        content={activeContent}
                        activeHref={activeLinkHref}
                        onSelect={setActiveLinkHref}
                      />
                    </div>
                  </div>
                )}

                <div className={`scrollbar-hide overflow-y-auto px-2 py-6 sm:px-4 ${activePromo ? "bg-background" : ""}`}>
                  {activePromo && <PromoCard promo={activePromo} onNavigate={() => setOpen(false)} />}
                </div>
              </>
            )}

            {activeContent?.kind === "drilldown" && (
              <>
                <PanelHeading
                  heading={activeContent.heading}
                  description={activeContent.description}
                  className="sm:col-span-3 border-b border-[#03030F]/20 py-2 sm:px-6"
                />

                <div className="overflow-y-auto border-r border-[#03030F]/20 px-2 py-6 sm:px-4">
                  <DrilldownNavList
                    items={activeContent.categories}
                    activeLabel={activeCategoryLabel}
                    onHover={handleHoverSector}
                  />
                </div>

                <div
                  className={`overflow-y-auto px-6 py-6 sm:px-8 ${
                    activeDrilldownCategory ? "border-r border-[#03030F]/20" : ""
                  }`}
                >
                  {activeDrilldownCategory && (
                    activeDrilldownCategory.groups.length > 0 ? (
                      <>
                        <SectionLabel>{activeDrilldownCategory.label}</SectionLabel>
                        <DrilldownNavList
                          items={activeDrilldownCategory.groups}
                          activeLabel={activeGroupLabel}
                          onHover={setActiveGroupLabel}
                        />
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">More industries coming soon.</p>
                    )
                  )}
                </div>

                <div className="overflow-y-auto px-6 py-6 sm:px-8">
                  {activeDrilldownGroup && (
                    <>
                      <SectionLabel>{activeDrilldownGroup.label}</SectionLabel>
                      <DrilldownLinkList
                        links={activeDrilldownGroup.links}
                        onNavigate={() => setOpen(false)}
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
