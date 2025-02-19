import ButtonLink from "@/app/components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface HeroThreeBlockProps {
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

export default function HeroThreeBlock({
  theme = "dark",
  byline = "",
  headline = "",
  copy = "",
  cta,
  img,
}: HeroThreeBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
        <div className="container py-8 lg:pt-12 pb-24">
          <Image
            width={img.width}
            height={img.height}
            src={img.url}
            alt={img.alt}
            className="aspect-[3/2] sm:aspect-[2/1] lg:aspect-[3.25/1] w-full object-cover rounded-2xl"
            loading="lazy"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 xl:pt-8 gap-4 lg:gap-6 xl:gap-8">
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-lg/relaxed font-semibold text-theme-strong text-theme-600 dark:text-theme-300">
                {byline}
              </p>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-balance">
                {headline}
              </h1>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-lg/relaxed text-theme-600 dark:text-theme-300 max-w-[48ch]">
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
