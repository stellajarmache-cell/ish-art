import Image from "next/image";
import Link from "next/link";

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
        <div className="absolute inset-0 bg-white/18" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-serif text-4xl tracking-[0.22em] text-black sm:text-6xl">WELCOME</h1>
          <Link
            href="/prints"
            className="invert-button inline-flex border border-white bg-white px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-black hover:text-white"
          >
            Enter
          </Link>
        </div>
      </div>
    </section>
  );
}
