import Image from "next/image";
import ButtonLink from "../../components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface FeatureTwoBlockProps {
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

export default function FeatureTwoBlock({
  theme = "dark",
  byline = "",
  headline,
  children,
  mediaDirection = "right",
  cta,
  img,
}: FeatureTwoBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-theme-000 dark:bg-theme-900 ">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl rounded-2xl overflow-hidden bg-theme-800 border border-theme-600">
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
                className="min-h-full aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center p-4 md:p-6 lg:p-8">
              <p className="mb-1 font-semibold text-lg text-theme-300">{byline}</p>
              <h2 className="font-heading font-bold text-4xl mb-2 text-theme-000">{headline}</h2>
              <div className="text-lg/relaxed text-theme-300 ">{children}</div>
              <div className="mt-4">
                <ButtonLink href={cta.url} type="solid" theme="dark">
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
