import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArtworkImage } from "@/components/artwork-image";
import {
  getProductBySlug,
  isStorefrontCollection,
  products,
} from "@/data/store";
import { formatCurrency } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

function getInquireHref(title: string) {
  const subject = `Inquiry about ${title}`;
  const body = [
    "Hello Stella Jarmache Studio,",
    "",
    `I'd like to inquire about purchasing ${title}. Could you please send me a payment link and I will complete the purchase?`,
    "",
    "Thank you,",
  ].join("\n");

  return `mailto:stelllajarmache@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function generateStaticParams() {
  return products
    .filter((product) => isStorefrontCollection(product.collection))
    .map((product) => ({
      slug: product.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || !isStorefrontCollection(product.collection)) {
    return {
      title: "Work Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || !isStorefrontCollection(product.collection)) {
    notFound();
  }

  const isAquariumSapientum = product.filters.includes("aquarium-sapientum");

  return (
    <div
      className="w-full"
      style={isAquariumSapientum ? { backgroundColor: "#002147" } : undefined}
    >
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <div className="space-y-4">
          <ArtworkImage
            artwork={product.artwork}
            decorative={false}
            label={product.title}
            className="max-w-4xl"
          />
        </div>

        <div className="space-y-8 lg:sticky lg:top-28">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl tracking-[0.06em] text-black sm:text-5xl">
              {product.title}
            </h1>
            <p className="text-sm uppercase tracking-[0.22em] text-black/42">
              {product.artistLine}
            </p>
            {product.status === "sold" ? (
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/48">Sold</p>
            ) : null}
            <dl className="space-y-2 border-t border-black/10 pt-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="grid gap-1 sm:grid-cols-[96px_1fr]">
                  <dt className="text-[10px] uppercase tracking-[0.24em] text-black/42">
                    {spec.label}
                  </dt>
                  <dd className="text-sm leading-6 text-black/68">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-lg text-black/78">{formatCurrency(product.price)}</p>
            <a
              href={getInquireHref(product.title)}
              className="invert-button inline-flex min-h-12 items-center justify-center border border-black px-5 text-[10px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Inquire
            </a>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
