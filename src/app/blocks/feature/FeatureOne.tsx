import Image from "next/image";
import ButtonLink from "../../components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function FeatureOneBlock({
  theme = "dark",
  byline = "",
  headline,
  children,
  mediaDirection = "right",
  cta,
  img,
}: FeatureBlock) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
            <div
              className={clsx(
                mediaDirection == "left" ? "order-first" : "order-last",
                "order h-full",
              )}
            >
              <Image
                width={img.width}
                height={img.height}
                src={img.url}
                alt={img.alt}
                className="aspect-[4/3] min-h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg font-semibold">
                {byline}
              </p>
              <h2 className="font-heading mb-2 text-4xl font-bold">
                {headline}
              </h2>
              <div className="text-light-dark dark:text-dark-lightest text-lg/relaxed">
                {children}
              </div>
              <div className="mt-4">
                <ButtonLink href={cta.href} type="link" theme={theme}>
                  {cta.children}
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
