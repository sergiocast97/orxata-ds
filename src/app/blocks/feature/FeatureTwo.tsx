import Image from "next/image";
import ButtonLink from "../../components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function FeatureTwoBlock({
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
      <div className="bg-light-white dark:bg-dark-darkest">
        <div className="container py-8 lg:py-12">
          <div className="bg-dark-dark border-dark-medium max-w-container-large mx-auto grid grid-cols-1 overflow-hidden rounded-2xl border md:grid-cols-2">
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
                className="aspect-[4/3] min-h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center p-4 md:p-6 lg:p-8">
              <p className="text-dark-lightest mb-1 text-lg font-semibold">{byline}</p>
              <h2 className="font-heading text-dark-white mb-2 text-4xl font-bold">{headline}</h2>
              <div className="text-dark-lightest text-lg/relaxed">{children}</div>
              <div className="mt-4">
                <ButtonLink href={cta.href} type="solid" theme="dark">
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
