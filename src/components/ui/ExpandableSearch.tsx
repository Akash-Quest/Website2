"use client";

import { Search, X } from "lucide-react";
import { useRef, useState } from "react";

export default function ExpandableSearch({
  bgClassName = "bg-white",
}: {
  bgClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const expanded = open || value.length > 0;

  return (
    <div
      className={`hidden md:flex h-8 2xl:h-10 items-center overflow-hidden rounded-full ${bgClassName} text-black transition-[width] duration-300 ease-out ${
        expanded ? "w-60 2xl:w-80 2xl:w-64 px-3 2xl:px-4 " : "w-8 2xl:w-10 justify-center"
      }`}
      onMouseEnter={() => {
        setOpen(true);
        requestAnimationFrame(() => inputRef.current?.focus());
      }}
      onMouseLeave={() => {
        if (!value) setOpen(false);
      }}
    >
      <Search className="h-[18px] w-[18px] 2xl:h-6 2xl:w-6 shrink-0" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (!value) setOpen(false);
        }}
        placeholder="Search"
        aria-label="Search"
        className={`bg-transparent text-sm 2xl:text-base text-black placeholder:text-black/40 focus:outline-none transition-all duration-200 ${
          expanded ? "ml-2 min-w-0 flex-1 opacity-100 delay-100" : "ml-0 w-0 flex-none opacity-0"
        }`}
      />
      {expanded && value && (
        <button
          type="button"
          onClick={() => {
            setValue("");
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
          className="ml-1 shrink-0 text-black/40 transition-colors hover:text-black"
        >
          <X className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" />
        </button>
      )}
    </div>
  );
}
