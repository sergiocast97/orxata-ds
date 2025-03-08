import ButtonLink from "@/app/components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function HeroTwoBlock({
  theme = "dark",
  byline = "",
  headline = "",
  copy = "",
  cta,
  img,
}: HeroBlock) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 pb-24 lg:pt-12">
          <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center">
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg/relaxed font-semibold">
                {byline}
              </p>
              <h1 className="font-heading text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="text-light-dark dark:text-dark-lightest mt-4 max-w-[48ch] text-lg/relaxed">
                {copy}
              </p>
              <div className="mt-6">
                <ButtonLink href={cta.href} type="solid" theme={theme}>
                  {cta.children}
                  <ArrowRightIcon className="size-5" />
                </ButtonLink>
              </div>
            </div>
            <Image
              width={img.width}
              height={img.height}
              src={img.url}
              alt={img.alt}
              className="aspect-[3/2] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
