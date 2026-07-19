"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { getProductBySlug } from "@/data/store";
import { collectionAccentColors } from "@/lib/utils";

export function useCollectionAccentColor(): string | undefined {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (pathname.startsWith("/products/")) {
    const slug = pathname.split("/products/")[1]?.split("/")[0];
    const product = slug ? getProductBySlug(slug) : undefined;
    const collectionTag = product?.filters.find((tag) => tag in collectionAccentColors);

    return collectionTag ? collectionAccentColors[collectionTag] : undefined;
  }

  const filterParam = searchParams.get("filter");

  return filterParam ? collectionAccentColors[filterParam] : undefined;
}
