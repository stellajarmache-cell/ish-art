import Link from "next/link";

import { collections, getAquariumSapientumSections, getFilteredCollectionProducts } from "@/data/store";
import type { CollectionSlug } from "@/lib/types";
import { collectionAccentColors } from "@/lib/utils";

import { CollectionIntro } from "./collection-intro";
import { CollectionSelect } from "./collection-select";
import { Pagination } from "./pagination";
import { ProductCard } from "./product-card";

const PAGE_SIZE = 12;

const AQUARIUM_SAPIENTUM_GRID =
  "grid auto-rows-fr grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3";

const AQUARIUM_SAPIENTUM_INTRO_PLACEHOLDER =
  "Placeholder text — collection introduction to be added.";

interface CollectionPageProps {
  slug: CollectionSlug;
  page?: number;
  filter?: string;
  subFilter?: string;
}

export function CollectionPage({ slug, page = 1, filter = "all", subFilter = "" }: CollectionPageProps) {
  const collection = collections[slug];
  const backgroundColor = collectionAccentColors[filter];
  const isAquariumSapientum = slug === "collections" && filter === "aquarium-sapientum";

  if (isAquariumSapientum) {
    const { figures, portraits } = getAquariumSapientumSections();
    const showFigures = subFilter !== "portraits";
    const showPortraits = subFilter !== "figures";
    const visibleCount = (showFigures ? figures.length : 0) + (showPortraits ? portraits.length : 0);

    const baseHref = `${collection.href}?filter=aquarium-sapientum`;
    const portraitsHref = subFilter === "portraits" ? baseHref : `${baseHref}&type=portraits`;
    const figuresHref = subFilter === "figures" ? baseHref : `${baseHref}&type=figures`;

    const subFilterButtonClassName =
      "inline-flex min-h-9 items-center justify-center border border-black/18 px-4 text-[10px] uppercase tracking-[0.28em] transition-colors hover:border-black/45";
    const subFilterButtonBackground = "#f7f4ee";
    const subFilterActiveOutline = "2px solid #0E2234";

    return (
      <div className="w-full" style={backgroundColor ? { backgroundColor } : undefined}>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <CollectionIntro title="Aquarium Sapientum" intro={AQUARIUM_SAPIENTUM_INTRO_PLACEHOLDER} />

          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-3">
                <Link
                  href={portraitsHref}
                  className={subFilterButtonClassName}
                  style={{
                    color: backgroundColor,
                    backgroundColor: subFilterButtonBackground,
                    outline: subFilter === "portraits" ? subFilterActiveOutline : undefined,
                    outlineOffset: subFilter === "portraits" ? "2px" : undefined,
                    fontWeight: subFilter === "portraits" ? 700 : undefined,
                  }}
                >
                  Portraits
                </Link>
                <Link
                  href={figuresHref}
                  className={subFilterButtonClassName}
                  style={{
                    color: backgroundColor,
                    backgroundColor: subFilterButtonBackground,
                    outline: subFilter === "figures" ? subFilterActiveOutline : undefined,
                    outlineOffset: subFilter === "figures" ? "2px" : undefined,
                    fontWeight: subFilter === "figures" ? 700 : undefined,
                  }}
                >
                  Figures
                </Link>
              </div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/42">
                {visibleCount} works
              </p>
            </div>

            {showFigures && figures.length > 0 ? (
              <div className={AQUARIUM_SAPIENTUM_GRID}>
                {figures.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    soldPresentation={collection.soldPresentation}
                  />
                ))}
              </div>
            ) : null}

            {showPortraits && portraits.length > 0 ? (
              <div className={AQUARIUM_SAPIENTUM_GRID}>
                {portraits.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    soldPresentation={collection.soldPresentation}
                  />
                ))}
              </div>
            ) : null}

            {visibleCount === 0 ? (
              <div className="border-t border-black/10 pt-6">
                <p className="max-w-xl text-sm leading-7 text-black/58">
                  No works are available in this selection yet.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  const filteredProducts = getFilteredCollectionProducts(slug, filter);
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  return (
    <div
      className="w-full"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <CollectionIntro title={collection.title} intro={collection.intro} notes={collection.notes} />

        {collection.comingSoon ? null : (
          <div className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            {collection.showFilters && collection.filterOptions ? (
              <CollectionSelect filter={filter} options={collection.filterOptions} />
            ) : (
              <div />
            )}
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/42">
              {filteredProducts.length} works
            </p>
          </div>

          {paginatedProducts.length > 0 ? (
            <div className="grid auto-rows-fr grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  soldPresentation={collection.soldPresentation}
                />
              ))}
            </div>
          ) : (
            <div className="border-t border-black/10 pt-6">
              <p className="max-w-xl text-sm leading-7 text-black/58">
                No works are available in this selection yet.
              </p>
            </div>
          )}

          <Pagination
            basePath={collection.href}
            currentPage={safePage}
            totalPages={totalPages}
            filter={filter}
            label={collection.paginationLabel}
          />
          </div>
        )}
      </div>
    </div>
  );
}
