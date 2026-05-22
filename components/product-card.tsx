import Link from "next/link";

import type { Product } from "@/lib/types";

import { ArtworkImage } from "./artwork-image";

interface ProductCardProps {
  product: Product;
  soldPresentation?: "badge" | "plain";
}

export function ProductCard({
  product,
  soldPresentation = "badge",
}: ProductCardProps) {
  void soldPresentation;

  return (
    <article className="group h-full">
      <Link href={`/products/${product.slug}`} className="flex h-full flex-col gap-4">
        <div>
          <ArtworkImage
            artwork={product.artwork}
            mediaAspect="portrait"
            className="transition-opacity duration-200 group-hover:opacity-90"
          />
        </div>

        <div className="flex min-h-24 flex-1 flex-col">
          <div className="space-y-2">
            <p className="text-sm text-black/58">Stella Jarmache</p>
            <h2 className="line-clamp-2 font-serif text-xl leading-tight tracking-[0.04em] text-black underline-offset-4 group-hover:underline">
              Title Placeholder
            </h2>
          </div>
        </div>
      </Link>
    </article>
  );
}
