"use client";

import Image from "next/image";

export const QuoteSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full px-0">
        <div className="relative w-full aspect-[2/1] overflow-hidden shadow-xl">
          <Image
            src="/images/collage.jpg"
            alt="Memories Collage"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};
