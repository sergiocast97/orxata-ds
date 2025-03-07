import ButtonLink from "@/app/components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface HeroOneBlockProps {
  theme?: "light" | "dark";
  byline: string;
  headline: string;
  copy: string;
  cta: {
    text: string;
    url: string;
  };
  img: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export default function HeroOneBlock({
  theme = "dark",
  byline = "",
  headline = "",
  copy = "",
  cta,
  img,
}: HeroOneBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 pb-24 lg:pt-12">
          <Image
            width={img.width}
            height={img.height}
            src={img.url}
            alt={img.alt}
            className="aspect-[3/2] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3.25/1]"
            loading="lazy"
          />
          <div className="grid grid-cols-1 gap-4 pt-6 lg:grid-cols-2 lg:gap-6 xl:gap-8 xl:pt-8">
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-light-dark dark:text-dark-lightest text-lg/relaxed font-semibold">
                {byline}
              </p>
              <h1 className="font-heading text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
                {headline}
              </h1>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-light-dark dark:text-dark-lightest max-w-[48ch] text-lg/relaxed">
                {copy}
              </p>
              <ButtonLink href={cta.url} type="solid" theme={theme}>
                {cta.text}
                <ArrowRightIcon className="size-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
