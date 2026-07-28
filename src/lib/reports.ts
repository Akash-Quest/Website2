export type ParagraphSegment = string | { text: string; href?: string; bold?: boolean };

export type ContentBlock =
  | { type: "paragraph"; text: string; dropCap?: boolean; segments?: ParagraphSegment[] }
  | { type: "heading"; text: string; emphasis?: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title?: string; text?: string; items?: string[]; footer?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Author = {
  name: string;
  org: string;
};
