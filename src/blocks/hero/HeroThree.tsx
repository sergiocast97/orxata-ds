import Image from "next/image";

import CtaButtonList from "@/patterns/CtaButtonList";

export default function HeroThreeBlock({ theme = "dark" }: HeroBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 pb-24 lg:pt-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 text-center">
            <Image
              width={1280}
              height={360}
              src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
              alt="Hero Image"
              className="rounded-large aspect-[3/2] w-full object-cover sm:aspect-[2/1] lg:aspect-[5/2]"
              loading="lazy"
            />

            <div className="mx-auto flex max-w-2xl flex-col items-center justify-center">
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg/relaxed font-semibold">
                Lorem ipsum dolor sit amet
              </p>
              <h1 className="font-heading text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
                Impactful Headline about Product
              </h1>
              <p className="text-light-dark dark:text-dark-lightest mt-4 max-w-[48ch] text-lg/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra eros bibendum
                sapien sagittis, ac efficitur felis accumsan. Vivamus ut efficitur risus.
              </p>
              <div>
                <CtaButtonList
                  theme="dark"
                  ctas={[
                    { href: "#", children: "Join now" },
                    { href: "#", children: "Learn more", type: "link" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
