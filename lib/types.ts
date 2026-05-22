export type ProductCollectionSlug = "catalogues" | "prints" | "original-drawings";
export type CollectionSlug = ProductCollectionSlug | "collections";

export type ProductStatus = "available" | "sold";

export type ArtworkVariant =
  | "field"
  | "grid"
  | "line"
  | "wash"
  | "arch"
  | "dots"
  | "portrait";

export type ArtworkAspect = "portrait" | "square" | "landscape";

export interface ArtworkSpec {
  aspect: ArtworkAspect;
  variant: ArtworkVariant;
  base: string;
  tone: string;
  accent: string;
  mark: string;
}

export interface ArtworkAsset {
  src: string;
  alt: string;
  aspect: ArtworkAspect;
}

export type Artwork = ArtworkSpec | ArtworkAsset;

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  artistLine: string;
  collection: ProductCollectionSlug;
  price: number;
  status: ProductStatus;
  description: string;
  shippingDetails: string;
  availabilityNote: string;
  filters: string[];
  specs: ProductSpec[];
  artwork: Artwork;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface CollectionDefinition {
  slug: CollectionSlug;
  href: string;
  navLabel: string;
  title: string;
  intro: string;
  notes?: ProductSpec[];
  showFilters?: boolean;
  comingSoon?: boolean;
  filterOptions?: FilterOption[];
  paginationLabel: string;
  seoTitle: string;
  seoDescription: string;
  soldPresentation?: "badge" | "plain";
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface AboutPageContent {
  title: string;
  biography: string;
  instagramLabel: string;
  instagramHref: string;
  portrait: ArtworkSpec;
}

export interface CartItem {
  slug: string;
  title: string;
  artistLine: string;
  price: number;
  artwork: Artwork;
  quantity: number;
}
