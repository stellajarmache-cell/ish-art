import type {
  AboutPageContent,
  ArtworkAspect,
  CollectionDefinition,
  CollectionSlug,
  FooterLink,
  Product,
  ProductCollectionSlug,
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
  return `/${encodeURIComponent(fileName)}`;
}

function imageArtwork(fileName: string, alt: string, aspect: ArtworkAspect = "portrait") {
  return {
    src: toPublicImagePath(fileName),
    alt,
    aspect,
  };
}

const printWorks: Product[] = [
  {
    id: "prt-01",
    slug: "bambi-edition",
    title: "Bambi",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 280,
    status: "available",
    description:
      "A signed edition after a pastel drawing of a resting fawn folded into deep green grasses.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "310gsm cotton rag" },
      { label: "Edition", value: "18 + 2 AP" },
    ],
    artwork: imageArtwork("Bambi.jpeg", "Bambi signed print"),
  },
  {
    id: "prt-02",
    slug: "floral-i",
    title: "Floral I",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 240,
    status: "available",
    description:
      "A close rose study translated into a signed archival edition with a cool, velvety surface.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "Museum rag" },
      { label: "Edition", value: "22 + 2 AP" },
    ],
    artwork: imageArtwork("Floral 1.jpeg", "Floral I signed print"),
  },
  {
    id: "prt-03",
    slug: "floral-ii",
    title: "Floral II",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 260,
    status: "available",
    description:
      "A white bloom held against a dark ground, printed with a broad margin for float mounting.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "310gsm cotton rag" },
      { label: "Edition", value: "20 + 2 AP" },
    ],
    artwork: imageArtwork("Floral 2.jpeg", "Floral II signed print"),
  },
  {
    id: "prt-04",
    slug: "floral-iii",
    title: "Floral III",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 265,
    status: "available",
    description:
      "A tulip still life paired with a figure study and released as a small signed edition.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "Mould-made cotton paper" },
      { label: "Edition", value: "16 + 2 AP" },
    ],
    artwork: imageArtwork("Floral 3.jpeg", "Floral III signed print"),
  },
  {
    id: "prt-05",
    slug: "floral-iv",
    title: "Floral IV",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 250,
    status: "available",
    description:
      "A dense garden scene rendered in pale violets and soft greens, reproduced as an archival print.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "Hahnemuhle Photo Rag" },
      { label: "Edition", value: "24 + 2 AP" },
    ],
    artwork: imageArtwork("Floral 4.jpeg", "Floral IV signed print"),
  },
  {
    id: "prt-06",
    slug: "floral-v",
    title: "Floral V",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 230,
    status: "available",
    description:
      "A wide bouquet composition offered as a signed edition in a softer horizontal format.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "308gsm rag paper" },
      { label: "Edition", value: "14 + 2 AP" },
    ],
    artwork: imageArtwork("Floral 5.jpeg", "Floral V signed print", "landscape"),
  },
  {
    id: "prt-07",
    slug: "floral-vi",
    title: "Floral VI",
    artistLine: "Signed print / archival edition",
    collection: "prints",
    price: 270,
    status: "available",
    description:
      "A luminous hollyhock study set against saturated blue, printed in a restrained small run.",
    shippingDetails:
      "Signed prints ship flat in an archival folio. Domestic framing is available on request.",
    availabilityNote: "Signed edition available.",
    filters: ["edition", "flora-and-fauna"],
    specs: [
      { label: "Medium", value: "Archival pigment print" },
      { label: "Paper", value: "310gsm cotton rag" },
      { label: "Edition", value: "19 + 2 AP" },
    ],
    artwork: imageArtwork("Floral 6.jpeg", "Floral VI signed print"),
  },
];

const originalDrawingWorks: Product[] = [
  {
    id: "org-01",
    slug: "sad-mermaid-i",
    title: "Sad Mermaid I",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 980,
    status: "available",
    description:
      "A one-off pastel drawing from the Sad Mermaid cycle, pairing a reclining figure with a small resting deer.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "18 x 24 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 1.jpeg", "Sad Mermaid I original drawing"),
  },
  {
    id: "org-02",
    slug: "sad-mermaid-ii",
    title: "Sad Mermaid II",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 620,
    status: "sold",
    description:
      "A close rose study from the Sad Mermaid cycle, built with a cool violet field and soft reflected light.",
    shippingDetails: "Flat shipping included when available.",
    availabilityNote: "Sold.",
    filters: ["sold", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "16 x 22 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 2.jpeg", "Sad Mermaid II original drawing"),
  },
  {
    id: "org-03",
    slug: "sad-mermaid-iii",
    title: "Sad Mermaid III",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 1120,
    status: "available",
    description:
      "A larger figure-and-still-life pastel with tulips, cut glass, and a seated profile held in warm studio light.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "22 x 30 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 3.jpeg", "Sad Mermaid III original drawing"),
  },
  {
    id: "org-04",
    slug: "sad-mermaid-iv",
    title: "Sad Mermaid IV",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 910,
    status: "available",
    description:
      "A garden scene from the cycle, with pale blossoms and a dark blue bird standing among the stems.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "20 x 28 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 4.jpeg", "Sad Mermaid IV original drawing"),
  },
  {
    id: "org-05",
    slug: "sad-mermaid-v",
    title: "Sad Mermaid V",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 680,
    status: "sold",
    description:
      "A floral field with peony-like whites and ochres, held in a lower-key nocturnal register.",
    shippingDetails: "Flat shipping included when available.",
    availabilityNote: "Sold.",
    filters: ["sold", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "16 x 20 in" },
      { label: "Year", value: "2025" },
    ],
    artwork: imageArtwork("Sad Mermaid 5.jpeg", "Sad Mermaid V original drawing"),
  },
  {
    id: "org-06",
    slug: "sad-mermaid-vi",
    title: "Sad Mermaid VI",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 1040,
    status: "available",
    description:
      "A saturated floral pastel with drifting hollyhock forms and an electric ultramarine ground.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "20 x 28 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 6.jpeg", "Sad Mermaid VI original drawing"),
  },
  {
    id: "org-07",
    slug: "sad-mermaid-vii",
    title: "Sad Mermaid VII",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 860,
    status: "available",
    description:
      "A frontal figure wrapped in peonies, with a lifted gaze and high-key pinks against a muted field.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "18 x 24 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 7.jpeg", "Sad Mermaid VII original drawing"),
  },
  {
    id: "org-08",
    slug: "sad-mermaid-viii",
    title: "Sad Mermaid VIII",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 740,
    status: "sold",
    description:
      "A blue portrait with a seahorse companion, composed in translucent glazes of green and indigo.",
    shippingDetails: "Flat shipping included when available.",
    availabilityNote: "Sold.",
    filters: ["sold", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "17 x 23 in" },
      { label: "Year", value: "2025" },
    ],
    artwork: imageArtwork("Sad Mermaid 8.jpeg", "Sad Mermaid VIII original drawing"),
  },
  {
    id: "org-09",
    slug: "sad-mermaid-ix",
    title: "Sad Mermaid IX",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 760,
    status: "available",
    description:
      "A close nocturne portrait with luminous pink and green passages moving across the face.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "18 x 24 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 9.jpeg", "Sad Mermaid IX original drawing"),
  },
  {
    id: "org-10",
    slug: "sad-mermaid-x",
    title: "Sad Mermaid X",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 720,
    status: "available",
    description:
      "A tilted portrait holding a fish, drawn with softened shadows and a narrow beam of blue light.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "17 x 23 in" },
      { label: "Year", value: "2025" },
    ],
    artwork: imageArtwork("Sad Mermaid 10.jpeg", "Sad Mermaid X original drawing"),
  },
  {
    id: "org-11",
    slug: "sad-mermaid-xi",
    title: "Sad Mermaid XI",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 700,
    status: "sold",
    description:
      "A partial profile with a single tear, held close against the frame with a shell-toned blue ground.",
    shippingDetails: "Flat shipping included when available.",
    availabilityNote: "Sold.",
    filters: ["sold", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "17 x 23 in" },
      { label: "Year", value: "2025" },
    ],
    artwork: imageArtwork("Sad Mermaid 11.jpeg", "Sad Mermaid XI original drawing"),
  },
  {
    id: "org-12",
    slug: "sad-mermaid-xii",
    title: "Sad Mermaid XII",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 790,
    status: "available",
    description:
      "A half-length study with a flower-like form at the shoulder and a pronounced vertical tear through the cheek.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "18 x 24 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 12.jpeg", "Sad Mermaid XII original drawing"),
  },
  {
    id: "org-13",
    slug: "sad-mermaid-xiii",
    title: "Sad Mermaid XIII",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 810,
    status: "available",
    description:
      "A head-and-shoulders study with one raised arm, set against a deep field of aquatic violets and greens.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "19 x 26 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 13.jpeg", "Sad Mermaid XIII original drawing"),
  },
  {
    id: "org-14",
    slug: "sad-mermaid-xiv",
    title: "Sad Mermaid XIV",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 690,
    status: "sold",
    description:
      "A closed-eye study braided with reeds and fish, drawn in muted olive, blue, and ochre tones.",
    shippingDetails: "Flat shipping included when available.",
    availabilityNote: "Sold.",
    filters: ["sold", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "17 x 23 in" },
      { label: "Year", value: "2025" },
    ],
    artwork: imageArtwork("Sad Mermaid 14.jpeg", "Sad Mermaid XIV original drawing"),
  },
  {
    id: "org-15",
    slug: "sad-mermaid-xv",
    title: "Sad Mermaid XV",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 730,
    status: "available",
    description:
      "A dimly lit figure with a glass vessel and fish, built through low-contrast blues and prismatic edge color.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "18 x 24 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 15.jpeg", "Sad Mermaid XV original drawing"),
  },
  {
    id: "org-16",
    slug: "sad-mermaid-xvi",
    title: "Sad Mermaid XVI",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 840,
    status: "sold",
    description:
      "A side profile beneath a blue field, with an octopus-like form held close at the lower edge.",
    shippingDetails: "Flat shipping included when available.",
    availabilityNote: "Sold.",
    filters: ["sold", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "18 x 24 in" },
      { label: "Year", value: "2025" },
    ],
    artwork: imageArtwork("Sad Mermaid 16.jpeg", "Sad Mermaid XVI original drawing"),
  },
  {
    id: "org-17",
    slug: "sad-mermaid-xvii",
    title: "Sad Mermaid XVII",
    artistLine: "Original / pastel on paper",
    collection: "original-drawings",
    price: 1440,
    status: "available",
    description:
      "A larger full-length figure suspended between jellyfish forms, concluding the Sad Mermaid cycle.",
    shippingDetails: "Complimentary domestic shipping in a flat archival mailer.",
    availabilityNote: "Available.",
    filters: ["available", "sad-mermaid", "aquarium-sapientum"],
    specs: [
      { label: "Medium", value: "Soft pastel on paper" },
      { label: "Sheet", value: "22 x 30 in" },
      { label: "Year", value: "2026" },
    ],
    artwork: imageArtwork("Sad Mermaid 17.jpeg", "Sad Mermaid XVII original drawing"),
  },
];

export const aboutPage: AboutPageContent = {
  title: "About",
  biography:
    "Stella Jarmache is a Paris based artist focusing primarily in figurative art through the lens of symbolism, dreams, and Jungian psychology.",
  instagramLabel: "@stellajarmache",
  instagramHref: "https://instagram.com/stellajarmache",
  portrait: {
    aspect: "portrait",
    variant: "portrait",
    base: "#faf8f2",
    tone: "#cec8bc",
    accent: "#2f2b28",
    mark: "#6f675d",
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
