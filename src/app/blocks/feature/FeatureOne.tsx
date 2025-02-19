import Image from "next/image";
import ButtonLink from "../../components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface FeatureOneBlockProps {
  theme?: "light" | "dark";
  byline: string;
  headline: string;
  children: React.ReactNode;
  mediaDirection?: "left" | "right";
  cta: {
    url: string;
    text: string;
  };
  img: {
    width: number;
    height: number;
    url: string;
    alt: string;
  };
}

export default function FeatureOneBlock({
  theme = "dark",
  byline = "",
  headline,
  children,
  mediaDirection = "right",
  cta,
  img,
}: FeatureOneBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl gap-6 xl:gap-8">
            <div
              className={clsx(
                mediaDirection == "left" ? "order-first" : "order-last",
                "order h-full"
              )}
            >
              <Image
                width={img.width}
                height={img.height}
                src={img.url}
                alt={img.alt}
                className="min-h-full aspect-[4/3] w-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="mb-1 font-semibold text-lg text-theme-600 dark:text-theme-300">
                {byline}
              </p>
              <h2 className="font-heading font-bold text-4xl mb-2">{headline}</h2>
              <div className="text-lg/relaxed text-theme-600 dark:text-theme-300 ">{children}</div>
              <div className="mt-4">
                <ButtonLink href={cta.url} type="solid" theme={theme}>
                  {cta.text}
                  <ArrowRightIcon className="size-5" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
