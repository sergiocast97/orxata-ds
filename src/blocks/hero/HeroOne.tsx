import Image from "next/image";

import CtaButtonList from "@/patterns/CtaButtonList";

export default function HeroOneBlock({ theme = "dark" }: HeroBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-12 md:py-16 lg:pb-24">
          <Image
            width={1280}
            height={360}
            src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
            alt="Hero Image"
            className="rounded-large aspect-[3/2] w-full object-cover sm:aspect-[2/1] lg:aspect-[3.25/1]"
            loading="lazy"
          />
          <div className="grid gap-4 pt-6 lg:grid-cols-2 lg:gap-8 lg:pt-8">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-light-dark dark:text-dark-lightest text-base font-semibold md:text-lg">
                Lorem ipsum dolor sit amet
              </p>
              <h1 className="font-heading text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
                Impactful headline on hero one title
              </h1>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-light-dark dark:text-dark-lightest max-w-[48ch] text-lg/relaxed md:text-xl/relaxed">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Etiam viverra eros
                bibendum sapien sagittis, ac efficitur felis dolor accumsan. Vivamus ut efficitur
                risus.
              </p>
              <CtaButtonList
                className="lg:mt-8"
                theme={theme}
                ctas={[
                  { href: "#", children: "Join now" },
                  { href: "#", children: "Learn more", type: "link" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
