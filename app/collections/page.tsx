import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { CollectionPage } from "@/components/collection-page";
import { collections } from "@/data/store";
import { getPageNumber, getSingleParam } from "@/lib/page-helpers";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const collection = collections.collections;

export const metadata: Metadata = {
  title: collection.seoTitle,
  description: collection.seoDescription,
};

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = (await searchParams) ?? {};
  const filter = getSingleParam(params.filter, "all");

  // The combined "all collections" view has been retired — every visitor
  // should land on one specific collection instead of a mixed listing.
  if (filter !== "aquarium-sapientum" && filter !== "flora-and-fauna") {
    redirect(`${collection.href}?filter=aquarium-sapientum`);
  }

  return (
    <CollectionPage
      slug="collections"
      page={getPageNumber(params.page)}
      filter={filter}
      subFilter={getSingleParam(params.type, "")}
    />
  );
}
