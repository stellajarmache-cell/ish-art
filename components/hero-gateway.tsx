import Image from "next/image";

import heroImage from "../public/Art website/Aquarium Sapientum/P2 Cordelia homepage.jpg";

export function HeroGateway() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex-1 overflow-hidden">
      <Image
        src={heroImage}
        alt="Painting, Cordelia"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
