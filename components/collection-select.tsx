"use client";

import { usePathname, useRouter } from "next/navigation";

import type { FilterOption } from "@/lib/types";

interface CollectionSelectProps {
  filter: string;
  options: FilterOption[];
}

export function CollectionSelect({ filter, options }: CollectionSelectProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(value: string) {
    if (value === "all") {
      router.push(pathname);
      return;
    }

    router.push(`${pathname}?filter=${value}`);
  }

  return (
    <label className="flex w-full flex-col gap-3 sm:max-w-xs">
      <span className="text-[10px] uppercase tracking-[0.28em] text-black/45">
        Collection
      </span>
      <select
        value={filter}
        onChange={(event) => handleChange(event.target.value)}
        className="min-h-12 w-full border border-black/18 bg-white px-3 text-sm text-black outline-none transition-colors hover:border-black/35 focus:border-black"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
