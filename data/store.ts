import type {
  AboutPageContent,
  ArtworkAspect,
  CollectionDefinition,
  CollectionSlug,
  FooterLink,
  Product,
  ProductCollectionSlug,
  ProductStatus,
} from "@/lib/types";

export const brand = {
  name: "ISH ART",
  headerName: "STELLA JARMACHE",
  strapline: "Signed Editions and Original Prints",
  description:
    "A minimal storefront for fine art editions and original drawings.",
};

export const storefrontCollections: ProductCollectionSlug[] = ["prints", "original-drawings"];

export const footerLinks: FooterLink[] = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export const collections: Record<CollectionSlug, CollectionDefinition> = {
  catalogues: {
    slug: "catalogues",
    href: "/catalogues",
    navLabel: "CATALOGUES",
    title: "CATALOGUES / POSTCARDS / ACCESSORIES",
    intro:
      "A small shelf of printed matter and artist tools assembled to accompany the studio practice. Orders are packed in archival tissue and shipped twice weekly.",
    notes: [
      { label: "Dispatch", value: "Packed and dispatched within 3 business days." },
      { label: "Packing", value: "Books travel flat with reinforced board mailers." },
      { label: "International", value: "Customs duties are not included at checkout." },
    ],
    filterOptions: [
      { label: "All", value: "all" },
      { label: "Books", value: "book" },
      { label: "Postcards", value: "postcard" },
      { label: "Accessories", value: "accessory" },
      { label: "Studio", value: "studio" },
    ],
    paginationLabel: "Printed matter pages",
    seoTitle: "Catalogues, Postcards, and Accessories",
    seoDescription:
      "Browse catalogues, studio postcards, and artist accessories in a restrained editorial layout.",
    soldPresentation: "badge",
  },
  prints: {
    slug: "prints",
    href: "/prints",
    navLabel: "PRINTS",
    title: "SIGNED PRINTS",
    intro: "COMING SOON",
    showFilters: false,
    comingSoon: true,
    filterOptions: [
      { label: "All", value: "all" },
      { label: "Etching", value: "etching" },
      { label: "Lithograph", value: "lithograph" },
      { label: "Pigment", value: "pigment" },
      { label: "Framed", value: "framed" },
    ],
    paginationLabel: "Edition pages",
    seoTitle: "Signed Prints",
    seoDescription:
      "Explore signed fine art editions presented in a quiet, archival storefront.",
    soldPresentation: "badge",
  },
  "original-drawings": {
    slug: "original-drawings",
    href: "/original-drawings",
    navLabel: "COLLECTIONS",
    title: "ORIGINALS",
    intro:
      "A changing selection of artwork drawn in the artist's studio.",
    showFilters: false,
    notes: [
      { label: "Inquiries", value: "For framing or reserve requests, please contact the studio." },
      { label: "Shipping", value: "Complimentary domestic shipping is included." },
    ],
    filterOptions: [
      { label: "All", value: "all" },
      { label: "Sad Mermaid", value: "sad-mermaid" },
    ],
    paginationLabel: "Drawing pages",
    seoTitle: "Originals",
    seoDescription:
      "View original drawings on paper, with understated sold and availability states.",
    soldPresentation: "plain",
  },
  collections: {
    slug: "collections",
    href: "/collections",
    navLabel: "COLLECTIONS",
    title: "COLLECTIONS",
    intro:
      "Browse Stella Jarmache's available collections, including the aquatic figurative works of Aquarium Sapientum and the botanical studies of Flora and Fauna.",
    showFilters: true,
    filterOptions: [
      { label: "All Collections", value: "all" },
      { label: "Aquarium Sapientum", value: "aquarium-sapientum" },
      { label: "Flora and Fauna", value: "flora-and-fauna" },
    ],
    paginationLabel: "Collection pages",
    seoTitle: "Collections",
    seoDescription:
      "Browse Aquarium Sapientum, Flora and Fauna, and all current collections by Stella Jarmache.",
    soldPresentation: "plain",
  },
};

function toPublicImagePath(fileName: string) {
  return `/${fileName.split("/").map(encodeURIComponent).join("/")}`;
}

function imageArtwork(fileName: string, alt: string, aspect: ArtworkAspect = "portrait") {
  return {
    src: toPublicImagePath(fileName),
    alt,
    aspect,
  };
}

const floraAndFaunaWorks = [
  {
    id: "prt-01",
    slug: "calliope",
    title: "Calliope",
    fileName: "1 Calliope.jpeg",
    size: "50 x 65 cm",
    price: 1800,
  },
  {
    id: "prt-02",
    slug: "gaia",
    title: "Gaia",
    fileName: "2 Gaia.jpeg",
    size: "60 x 80 cm",
    price: 4500,
    status: "sold",
  },
  {
    id: "prt-03",
    slug: "daydream",
    title: "Daydream",
    fileName: "3 Daydream.jpeg",
    size: "30 x 40 cm",
    price: 250,
  },
  {
    id: "prt-04",
    slug: "inside-looking-in",
    title: "Inside Looking In",
    fileName: "4 Inside Looking In.jpg",
    size: "30 x 40 cm",
    price: 400,
  },
  {
    id: "prt-05",
    slug: "camelia",
    title: "Camelia",
    fileName: "5 Camelia.jpeg",
    size: "24 x 29.6 cm",
    price: 250,
  },
  {
    id: "prt-06",
    slug: "white-peonies-i",
    title: "White Peonies I",
    fileName: "6 White Peonies 1.jpeg",
    size: "24 x 29.6 cm",
    price: 500,
    aspect: "landscape",
  },
  {
    id: "prt-07",
    slug: "white-peonies-ii",
    title: "White Peonies II",
    fileName: "7 White Peonies 2.jpeg",
    size: "23 x 30 cm",
    price: 500,
    aspect: "landscape",
  },
  {
    id: "prt-08",
    slug: "hermits-park-i",
    title: "Hermit's Park I",
    fileName: "8 Hermit's Park 1.jpeg",
    size: "47.5 x 67.5 cm",
    price: 2500,
  },
  {
    id: "prt-09",
    slug: "hermits-park-ii",
    title: "Hermit's Park II",
    fileName: "9 Hermit's Park 2.jpeg",
    size: "70 x 100 cm",
    price: 4500,
    status: "sold",
  },
] satisfies ReadonlyArray<{
  id: string;
  slug: string;
  title: string;
  fileName: string;
  size: string;
  price: number;
  status?: ProductStatus;
  aspect?: ArtworkAspect;
}>;

const printWorks: Product[] = floraAndFaunaWorks.map(
  ({ id, slug, title, fileName, size, price, status, aspect }): Product => {
    const productStatus: ProductStatus = status ?? "available";

    return {
      id,
      slug,
      title,
      artistLine: "Pastel on paper",
      collection: "prints",
      price,
      status: productStatus,
      description: `Pastel on paper. Size: ${size}.`,
      shippingDetails: "Inquire for shipping and availability details.",
      availabilityNote: productStatus === "sold" ? "Sold." : "Available.",
      filters: [productStatus, "flora-and-fauna"],
      specs: [
        { label: "Medium", value: "Pastel on paper" },
        { label: "Size", value: size },
      ],
      artwork: imageArtwork(
        "Art website/Flora and Fauna/" + fileName,
        title + " from Flora and Fauna",
        aspect,
      ),
    };
  },
);

const aquariumSapientumWorks = [
  { id: "org-01", slug: "maris", title: "Maris", fileName: "P1 Maris.jpeg", size: "30 x 40 cm" },
  { id: "org-02", slug: "cordelia", title: "Cordelia", fileName: "P2 Cordelia.jpeg", size: "30 x 40 cm" },
  { id: "org-03", slug: "guinevere", title: "Guinevere", fileName: "P3 Guinevere.jpeg", size: "30 x 40 cm" },
  { id: "org-04", slug: "ula", title: "Ula", fileName: "P4 Ula.jpeg", size: "30 x 40 cm" },
  { id: "org-05", slug: "neith", title: "Neith", fileName: "P5 Neith.jpeg", size: "30 x 40 cm" },
  { id: "org-06", slug: "maya", title: "Maya", fileName: "P6 Maya.jpeg", size: "30 x 40 cm" },
  { id: "org-07", slug: "ondine", title: "Ondine", fileName: "P7 Ondine.jpeg", size: "30 x 40 cm" },
  { id: "org-08", slug: "serena", title: "Serena", fileName: "P8 Serena.jpeg", size: "30 x 40 cm" },
  { id: "org-09", slug: "morwenna", title: "Morwenna", fileName: "P9 Morwenna.jpeg", size: "30 x 40 cm" },
  { id: "org-10", slug: "aerwyna", title: "Aerwyna", fileName: "P10 Aerwyna.jpeg", size: "30 x 40 cm" },
  { id: "org-11", slug: "severin", title: "Severin", fileName: "P11 Severin.jpeg", size: "30 x 40 cm" },
  { id: "org-12", slug: "oceane", title: "Oceane", fileName: "P12 Oceane.jpeg", size: "30 x 40 cm" },
  { id: "org-13", slug: "dylan", title: "Dylan", fileName: "P13 Dylan.jpeg", size: "30 x 40 cm" },
  { id: "org-14", slug: "lana", title: "Lana", fileName: "P14 Lana.jpeg", status: "sold", size: "30 x 40 cm" },
  { id: "org-19", slug: "kaia", title: "Kaia", fileName: "P16 Kaia.jpg", size: "30 x 40 cm" },
  { id: "org-15", slug: "rosemary", title: "Rosemary", fileName: "F1 Rosemary.jpeg", size: "50 x 70 cm", price: 3500 },
  { id: "org-16", slug: "darya", title: "Darya", fileName: "F2 Darya.jpeg", size: "50 x 70 cm", price: 3500 },
  { id: "org-17", slug: "doris", title: "Doris", fileName: "F3 Doris.jpeg", size: "50 x 70 cm", price: 3500 },
  { id: "org-20", slug: "corentina", title: "Corentina", fileName: "F5 Corentina.jpg", size: "50 x 70 cm", price: 3500 },
  { id: "org-18", slug: "meredith", title: "Meredith", fileName: "F4 Meredith.jpeg", size: "50 x 70 cm", price: 3500 },
] satisfies ReadonlyArray<{
  id: string;
  slug: string;
  title: string;
  fileName: string;
  status?: ProductStatus;
  size: string;
  price?: number;
}>;

const originalDrawingWorks: Product[] = aquariumSapientumWorks.map(
  ({ id, slug, title, fileName, status, size, price }): Product => {
    const productStatus: ProductStatus = status ?? "available";

    return {
      id,
      slug,
      title,
      artistLine: "Charcoal and pastel on paper",
      collection: "original-drawings",
      price: price ?? 1200,
      status: productStatus,
      description: `Charcoal and pastel on paper. Size: ${size}. Unique Artwork, signed on back.`,
      shippingDetails: "Inquire for shipping and availability details.",
      availabilityNote: productStatus === "sold" ? "Sold." : "Available.",
      filters: [productStatus, "aquarium-sapientum"],
      specs: [
        { label: "Medium", value: "Charcoal and pastel on paper" },
        { label: "Size", value: size },
        { label: "Artwork", value: "Unique Artwork, signed on back" },
      ],
      artwork: imageArtwork(
        "Art website/Aquarium Sapientum/" + fileName,
        title + " from Aquarium Sapientum",
      ),
    };
  },
);
export const aboutPage: AboutPageContent = {
  title: "About",
  biography:
    "Stella Jarmache is a Paris based artist focusing primarily in figurative art through the lens of symbolism, dreams, and Jungian psychology.",
  instagramLabel: "@stellajarmache",
  instagramHref: "https://instagram.com/stellajarmache",
  portrait: {
    src: toPublicImagePath("Art website/FINAL ABOUT PIC.PNG"),
    alt: "Stella Jarmache portrait",
    aspect: "square",
  },
};

export const products: Product[] = [
  {
    id: "cat-01",
    slug: "winter-notes-catalogue",
    title: "Winter Notes Catalogue",
    artistLine: "Printed matter / Studio shelf",
    collection: "catalogues",
    price: 28,
    status: "available",
    description:
      "A softbound catalogue gathering studio photographs, installation views, and short texts from the winter sequence.",
    shippingDetails: "Ships flat in a reinforced board mailer within 3 business days.",
    availabilityNote: "In stock for immediate dispatch.",
    filters: ["book", "studio"],
    specs: [
      { label: "Format", value: "Softcover catalogue" },
      { label: "Size", value: "8 x 10 in" },
      { label: "Pages", value: "64 pages" },
    ],
    artwork: {
      aspect: "portrait",
      variant: "field",
      base: "#f6f3ed",
      tone: "#d9d2c6",
      accent: "#3a3530",
      mark: "#8d867a",
    },
  },
  {
    id: "cat-02",
    slug: "studio-plates-set",
    title: "Studio Plates Set",
    artistLine: "Postcards / Small ephemera",
    collection: "catalogues",
    price: 18,
    status: "available",
    description:
      "A boxed set of twelve matte postcards featuring cropped studio studies and paper fragments.",
    shippingDetails: "Packed in a slim envelope with rigid backing.",
    availabilityNote: "Available in small batches.",
    filters: ["postcard"],
    specs: [
      { label: "Format", value: "Postcard set of 12" },
      { label: "Paper", value: "Uncoated card stock" },
      { label: "Finish", value: "Matte" },
    ],
    artwork: {
      aspect: "square",
      variant: "grid",
      base: "#f8f7f3",
      tone: "#dad4ca",
      accent: "#25211d",
      mark: "#6d655e",
    },
  },
  {
    id: "cat-03",
    slug: "paper-table-journal",
    title: "Paper Table Journal",
    artistLine: "Accessory / Bound notebook",
    collection: "catalogues",
    price: 22,
    status: "available",
    description:
      "A lay-flat journal with ruled and blank sections for studio notes, lists, and press checks.",
    shippingDetails: "Wrapped in tissue and packed flat with corner protection.",
    availabilityNote: "Ready to ship.",
    filters: ["accessory", "studio"],
    specs: [
      { label: "Format", value: "Thread-sewn journal" },
      { label: "Size", value: "7 x 9 in" },
      { label: "Pages", value: "96 pages" },
    ],
    artwork: {
      aspect: "portrait",
      variant: "arch",
      base: "#f7f5ef",
      tone: "#d6d0c5",
      accent: "#2e2a27",
      mark: "#80786f",
    },
  },
  {
    id: "cat-04",
    slug: "field-guide-volume-one",
    title: "Field Guide Volume One",
    artistLine: "Catalogue / Essay issue",
    collection: "catalogues",
    price: 34,
    status: "available",
    description:
      "A stitched volume pairing essays with reproduction plates from an extended drawing series.",
    shippingDetails: "Ships flat with archival tissue and board reinforcement.",
    availabilityNote: "Low stock.",
    filters: ["book"],
    specs: [
      { label: "Format", value: "Thread-stitched volume" },
      { label: "Size", value: "8.5 x 11 in" },
      { label: "Pages", value: "72 pages" },
    ],
    artwork: {
      aspect: "portrait",
      variant: "line",
      base: "#fbfaf7",
      tone: "#d4cec2",
      accent: "#1f1b18",
      mark: "#898173",
    },
  },
  {
    id: "cat-05",
    slug: "tabletop-postcard-edition",
    title: "Tabletop Postcard Edition",
    artistLine: "Postcards / Study fragments",
    collection: "catalogues",
    price: 16,
    status: "available",
    description:
      "Eight offset postcards drawn from tabletop arrangements photographed in early morning light.",
    shippingDetails: "Shipped in a flat kraft sleeve with backing board.",
    availabilityNote: "In stock.",
    filters: ["postcard"],
    specs: [
      { label: "Format", value: "Offset postcard set" },
      { label: "Paper", value: "270gsm matte card" },
      { label: "Edition", value: "Open edition" },
    ],
    artwork: {
      aspect: "landscape",
      variant: "wash",
      base: "#f8f4ef",
      tone: "#d8cdc3",
      accent: "#282320",
      mark: "#8a7d74",
    },
  },
  {
    id: "cat-06",
    slug: "linen-slipcase",
    title: "Linen Slipcase",
    artistLine: "Accessory / Storage object",
    collection: "catalogues",
    price: 42,
    status: "available",
    description:
      "A neutral linen slipcase sized for catalogues, loose prints, and correspondence.",
    shippingDetails: "Sent boxed to preserve edges and corners.",
    availabilityNote: "Made in small runs.",
    filters: ["accessory"],
    specs: [
      { label: "Material", value: "Linen over board" },
      { label: "Size", value: "9 x 12 in" },
      { label: "Use", value: "Flat storage" },
    ],
    artwork: {
      aspect: "portrait",
      variant: "grid",
      base: "#f4f0e8",
      tone: "#cfc6b6",
      accent: "#37322e",
      mark: "#877b6d",
    },
  },
  {
    id: "cat-07",
    slug: "quiet-room-booklet",
    title: "Quiet Room Booklet",
    artistLine: "Booklet / Process notes",
    collection: "catalogues",
    price: 12,
    status: "available",
    description:
      "A folded booklet of process notes, paper tests, and studio observations in concise form.",
    shippingDetails: "Packed with rigid backing and mailed flat.",
    availabilityNote: "In stock.",
    filters: ["book", "studio"],
    specs: [
      { label: "Format", value: "Folded booklet" },
      { label: "Size", value: "6 x 8 in" },
      { label: "Pages", value: "24 pages" },
    ],
    artwork: {
      aspect: "portrait",
      variant: "dots",
      base: "#faf7f2",
      tone: "#d6cdc1",
      accent: "#221e1a",
      mark: "#7e756d",
    },
  },
  {
    id: "cat-08",
    slug: "studio-tape-dispenser",
    title: "Studio Tape Dispenser",
    artistLine: "Accessory / Desk object",
    collection: "catalogues",
    price: 26,
    status: "available",
    description:
      "A pared-back steel tape dispenser finished in matte black for the packing table.",
    shippingDetails: "Ships boxed with recycled paper fill.",
    availabilityNote: "Available now.",
    filters: ["accessory", "studio"],
    specs: [
      { label: "Material", value: "Powder-coated steel" },
      { label: "Finish", value: "Matte" },
      { label: "Use", value: "Standard office tape" },
    ],
    artwork: {
      aspect: "square",
      variant: "field",
      base: "#f5f4f0",
      tone: "#d0cbc2",
      accent: "#241f1a",
      mark: "#7d766d",
    },
  },
  {
    id: "cat-09",
    slug: "coastline-reader",
    title: "Coastline Reader",
    artistLine: "Catalogue / Reading issue",
    collection: "catalogues",
    price: 30,
    status: "available",
    description:
      "A compact reading issue combining reproduction plates with a short essay sequence on surface and edge.",
    shippingDetails: "Packed flat and sent in a protective board mailer.",
    availabilityNote: "Ready to ship.",
    filters: ["book"],
    specs: [
      { label: "Format", value: "Perfect bound reader" },
      { label: "Size", value: "7.5 x 10 in" },
      { label: "Pages", value: "56 pages" },
    ],
    artwork: {
      aspect: "portrait",
      variant: "arch",
      base: "#fbf8f3",
      tone: "#d9d2c7",
      accent: "#2d2824",
      mark: "#877c73",
    },
  },
  {
    id: "cat-10",
    slug: "postal-corners-pack",
    title: "Postal Corners Pack",
    artistLine: "Accessory / Packing supplies",
    collection: "catalogues",
    price: 14,
    status: "available",
    description:
      "Reusable paper corners for storing and mailing small works on paper and postcards.",
    shippingDetails: "Dispatched in a slim letterbox-friendly envelope.",
    availabilityNote: "In stock.",
    filters: ["accessory"],
    specs: [
      { label: "Contents", value: "24 archival corners" },
      { label: "Material", value: "Buffered paper" },
      { label: "Use", value: "Packing and storage" },
    ],
    artwork: {
      aspect: "square",
      variant: "line",
      base: "#f7f5f1",
      tone: "#d8d0c6",
      accent: "#27221e",
      mark: "#7f776f",
    },
  },
  ...printWorks,
  ...originalDrawingWorks,
];

export function getCollection(slug: CollectionSlug) {
  return collections[slug];
}

export function getCollectionProducts(slug: CollectionSlug) {
  if (slug === "collections") {
    return products.filter((product) => isStorefrontCollection(product.collection));
  }

  return products.filter((product) => product.collection === slug);
}

export function getFilteredCollectionProducts(slug: CollectionSlug, filter?: string) {
  const collectionProducts = getCollectionProducts(slug);

  if (!filter || filter === "all") {
    return collectionProducts;
  }

  return collectionProducts.filter((product) => product.filters.includes(filter));
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function isStorefrontCollection(slug: ProductCollectionSlug) {
  return storefrontCollections.includes(slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter(
      (entry) =>
        entry.collection === product.collection &&
        entry.slug !== product.slug &&
        entry.status === "available",
    )
    .slice(0, limit);
}
