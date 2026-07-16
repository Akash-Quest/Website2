export type MegaMenuLink = {
  label: string;
  href: string;
  /** Shows an arrow and slightly heavier styling — a "view all" style link */
  featured?: boolean;
};

export type MegaMenuColumn = {
  heading?: string;
  links: MegaMenuLink[];
};

export type MegaMenuPromo = {
  image: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

/** Simple 1–2 column layout (Capabilities, Industries) */
export type MegaMenuColumnsContent = {
  kind: "columns";
  description?: string;
  columns: MegaMenuColumn[];
  promo?: MegaMenuPromo;
};

/** Category → sub-category drill-down layout (Reports) */
export type MegaMenuDrilldownContent = {
  kind: "drilldown";
  description?: string;
  categories: {
    label: string;
    href: string;
    children: MegaMenuLink[];
  }[];
};

export type MegaMenuContent = MegaMenuColumnsContent | MegaMenuDrilldownContent;

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
