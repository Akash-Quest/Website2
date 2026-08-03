export type MegaMenuPromo = {
  image: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type MegaMenuLink = {
  label: string;
  href: string;
  /** Shows an arrow and slightly heavier styling — a "view all" style link */
  featured?: boolean;
  /** Overrides the panel's promo card while this link is hovered/active */
  promo?: MegaMenuPromo;
};

export type MegaMenuColumn = {
  heading?: string;
  links: MegaMenuLink[];
};

/** One industry group within a sector, e.g. "Metals & Mining" under "Materials" */
export type MegaMenuDrilldownGroup = {
  label: string;
  links: MegaMenuLink[];
};

export type MegaMenuDrilldownCategory = {
  label: string;
  href: string;
  groups: MegaMenuDrilldownGroup[];
};

/** Simple 1–2 column layout */
export type MegaMenuColumnsContent = {
  kind: "columns";
  heading?: string;
  description?: string;
  /** Omit (or leave empty) to skip the link list and show the promo card directly */
  columns?: MegaMenuColumn[];
  promo?: MegaMenuPromo;
};

/** Category → sub-category drill-down layout */
export type MegaMenuDrilldownContent = {
  kind: "drilldown";
  heading?: string;
  description?: string;
  categories: MegaMenuDrilldownCategory[];
};

export type MegaMenuContent =
  | MegaMenuColumnsContent
  | MegaMenuDrilldownContent;

export type MegaMenuItem = {
  id: string;
  label: string;
  href: string;
  /** Omit for a plain link with no expanded panel */
  content?: MegaMenuContent;
};

export type MegaMenuGroup = {
  id: string;
  label: string;
  items: MegaMenuItem[];
};

export type MegaMenuData = {
  groups: MegaMenuGroup[];
};