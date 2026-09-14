import Image from "next/image";

import heroImage from "../public/Art website/Aquarium Sapientum/F6 StellaMaris.jpg";

export function HeroGateway() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-1 items-center justify-center overflow-hidden">
      <div className="absolute inset-[2mm] border border-black/18">
        <Image
          src={heroImage}
          alt="Painting, Stella Maris"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
