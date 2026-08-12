"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronLeft, Search, X } from "lucide-react";
import { ArrowRight, ArrowUp } from "iconsax-react";
import Button from "./Button";
import megaMenuJson from "@/lib/megaMenu.json";
import type { MegaMenuData, MegaMenuPromo } from "@/lib/megaMenu.types";

const megaMenu = megaMenuJson as MegaMenuData;

/**
 * The source data models three different shapes (plain links, "columns"
 * panels, and "drilldown" category/group panels). Rather than branch on
 * that shape everywhere in the UI, we flatten it once into a generic tree
 * that the drilldown navigator can walk uniformly at every depth.
 */
type MenuNode = {
  id: string;
  label: string;
  href?: string;
  featured?: boolean;
  description?: string;
  promo?: MegaMenuPromo;
  /** Optional heading used to group sibling nodes under a label. */
  sectionLabel?: string;
  children?: MenuNode[];
};

function buildTree(data: MegaMenuData): MenuNode {
  const children: MenuNode[] = [];

  data.groups.forEach((group) => {
    group.items.forEach((item) => {
      if (!item.content) {
        children.push({
          id: item.id,
          label: item.label,
          href: item.href,
          sectionLabel: group.label,
        });
        return;
      }

      if (item.content.kind === "columns") {
        const kids: MenuNode[] = [];
        (item.content.columns ?? []).forEach((column) => {
          column.links.forEach((link) => {
            kids.push({
              id: link.href,
              label: link.label,
              href: link.href,
              featured: link.featured,
              promo: link.promo,
              sectionLabel: column.heading,
            });
          });
        });
        children.push({
          id: item.id,
          label: item.label,
          description: item.content.description,
          promo: item.content.promo,
          sectionLabel: group.label,
          children: kids,
        });
        return;
      }

      // drilldown
      const categories: MenuNode[] = item.content.categories.map((category) => ({
        id: `${item.id}-${category.label}`,
        label: category.label,
        children:
          category.groups.length > 0
            ? category.groups.map((g) => ({
                id: `${item.id}-${category.label}-${g.label}`,
                label: g.label,
                children: g.links.map((link) => ({
                  id: link.href,
                  label: link.label,
                  href: link.href,
                  featured: link.featured,
                  promo: link.promo,
                })),
              }))
            : undefined,
      }));

      children.push({
        id: item.id,
        label: item.label,
        description: item.content.description,
        sectionLabel: group.label,
        children: categories,
      });
    });
  });

  return { id: "root", label: "Menu", children };
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{children}</p>
  );
}

function PromoCard({ promo, onNavigate }: { promo: MegaMenuPromo; onNavigate: () => void }) {
  return (
    <div className="w-full overflow-hidden">
      <Link
        href={promo.href}
        onClick={onNavigate}
        className="group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={promo.image}
          alt={promo.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="pt-3">
        <p className="mb-1 text-body-lg font-semibold text-gray-900">{promo.title}</p>
        <p className="mb-3 pb-3 text-gray-500">{promo.description}</p>
        <div className="flex justify-end">
          <Button href={promo.href} variant="primary" iconSize={14} minWidth="0px" onClick={onNavigate}>
            {promo.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

/** One grid tile: either drills into a child level, or navigates directly. */
function Tile({
  node,
  onDrillInto,
  onNavigate,
}: {
  node: MenuNode;
  onDrillInto: (node: MenuNode) => void;
  onNavigate: () => void;
}) {
  const hasChildren = (node.children?.length ?? 0) > 0;

  if (hasChildren) {
    return (
      <button
        type="button"
        onClick={() => onDrillInto(node)}
        className="group flex w-full items-center justify-between rounded-lg py-[clamp(0.5rem,1.4vh,0.875rem)] pl-3 pr-3 text-left text-body-lg text-gray-700 transition-colors hover:bg-[#EAEAF8] 2xl:pl-4 2xl:pr-4 2xl:text-xl"
      >
        <span>{node.label}</span>
        <ArrowRight
          size={20}
          variant="Linear"
          color="currentColor"
          className="shrink-0 text-[#03030F] opacity-60 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:transform-none"
        />
      </button>
    );
  }

  return (
    <Link
      href={node.href ?? "#"}
      onClick={onNavigate}
      className={`group flex w-full items-center justify-between rounded-lg py-[clamp(0.5rem,1.4vh,0.875rem)] pl-3 pr-3 text-left text-body-lg transition-colors 2xl:pl-4 2xl:pr-4 2xl:text-xl ${
        node.featured
          ? "bg-background font-semibold text-[#03030F]"
          : "text-gray-700 hover:bg-[#EAEAF8]"
      }`}
    >
      <span>{node.label}</span>
      <ArrowRight
        size={20}
        variant="Linear"
        color="currentColor"
        className={`shrink-0 text-[#03030F] transition-opacity ${
          node.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

/** Groups a level's children under their optional sectionLabel, preserving order of first appearance. */
function useSections(node: MenuNode | undefined) {
  return useMemo(() => {
    const children = node?.children ?? [];
    const order: string[] = [];
    const map = new Map<string, MenuNode[]>();
    children.forEach((child) => {
      const key = child.sectionLabel ?? "";
      if (!map.has(key)) {
        map.set(key, []);
        order.push(key);
      }
      map.get(key)!.push(child);
    });
    return order.map((key) => ({ label: key || undefined, items: map.get(key)! }));
  }, [node]);
}

export default function MegaMenu2({
  triggerBgClassName = "bg-white",
}: {
  triggerBgClassName?: string;
}) {
  const rootNode = useMemo(() => buildTree(megaMenu), []);
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState<MenuNode[]>([rootNode]);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [entered, setEntered] = useState(true);

  const currentLevel = path[path.length - 1];
  const parentLevel = path.length > 1 ? path[path.length - 2] : undefined;
  const sections = useSections(currentLevel);
  const levelKey = path.map((n) => n.id).join("/");

  // Re-trigger the "navigating deeper / back" transition whenever the level changes.
  useEffect(() => {
    setEntered(false);
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [levelKey]);

  const openMenu = () => {
    setPath([rootNode]);
    setDirection(1);
    setOpen(true);
  };

  const closeMenu = () => setOpen(false);

  const drillInto = (node: MenuNode) => {
    setDirection(1);
    setPath((p) => [...p, node]);
  };

  const goBack = () => {
    setDirection(-1);
    setPath((p) => p.slice(0, -1));
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (path.length > 1) {
          goBack();
        } else {
          setOpen(false);
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, path.length]);

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
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

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[1000] flex flex-col bg-white">
            <div className="flex shrink-0 items-center gap-4 border-b border-[#03030F]/20 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-gray-500 transition-colors hover:bg-primary hover:text-white"
                >
                  <X size={20} />
                </button>

                <Link href="/" onClick={closeMenu}>
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
                onClick={closeMenu}
                className="group ml-5 flex items-center gap-1 text-gray-500 transition-colors hover:text-primary sm:gap-2"
              >
                Login
                <span className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors group-hover:bg-primary/10">
                  <ArrowUp
                    size={24}
                    color="currentColor"
                    variant="Linear"
                    className="rotate-45 [&>path]:stroke-2"
                  />
                </span>
              </Link>
            </div>

            {/* Level header: back control + current level title/description */}
            <div className="flex shrink-0 items-start gap-3 border-b border-[#03030F]/10 px-4 py-4 sm:px-8 2xl:px-10">
              {parentLevel && (
                <button
                  type="button"
                  onClick={goBack}
                  className="-ml-2 mt-1 flex shrink-0 items-center gap-1 rounded-lg py-2 pl-2 pr-3 text-sm font-medium text-gray-500 transition-colors hover:bg-[#EAEAF8] hover:text-[#03030F]"
                >
                  <ChevronLeft size={18} />
                  Back
                </button>
              )}
              <div className="min-w-0">
                <h2 className="text-xl font-medium text-[#03030F] 2xl:text-2xl">
                  {parentLevel ? currentLevel.label : "Menu"}
                </h2>
                {currentLevel.description && (
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {renderBoldSegments(currentLevel.description)}
                  </p>
                )}
              </div>
            </div>

            {/* Level body: transitions to feel like moving deeper into / back out of the menu */}
            <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 2xl:px-10">
              <div
                className={`transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                  entered
                    ? "translate-x-0 opacity-100"
                    : direction === 1
                    ? "translate-x-6 opacity-0"
                    : "-translate-x-6 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                  <div className="flex-1 space-y-8">
                    {sections.map((section) => (
                      <div key={section.label ?? "_default"}>
                        {section.label && <SectionLabel>{section.label}</SectionLabel>}
                        <div className="grid grid-cols-1 gap-x-8 gap-y-0.5 lg:grid-cols-3 2xl:grid-cols-5">
                          {section.items.map((node) => (
                            <Tile
                              key={node.id}
                              node={node}
                              onDrillInto={drillInto}
                              onNavigate={closeMenu}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {currentLevel.promo && (
                    <div className="w-full shrink-0 lg:w-72">
                      <PromoCard promo={currentLevel.promo} onNavigate={closeMenu} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}