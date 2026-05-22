import Image from "next/image";

import heroImage from "../public/Hero image.jpeg";

export function HeroGateway() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-1 items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Pastel painting of white flowers"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
