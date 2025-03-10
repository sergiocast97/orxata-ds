// @refresh reset

import Image from "next/image";
import clsx from "clsx";

import CtaButtonList from "@/patterns/CtaButtonList";

export default function FeatureOneBlock({
  theme = "dark",
  mediaDirection = "right",
}: FeatureBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-small lg:max-w-container-large mx-auto grid gap-6 md:gap-8 lg:grid-cols-2">
            <div
              className={clsx(
                mediaDirection === "left" ? "order-first" : "order-last",
                "order h-full",
              )}
            >
              <Image
                width={488}
                height={352}
                src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
                alt="Feature Block Image"
                className="rounded-large aspect-[4/3] min-h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-base font-semibold md:text-lg">
                Lorem ipsum dolor sit
              </p>
              <h2 className="font-heading mb-2 text-3xl font-bold lg:text-4xl">
                Feature Block Title
              </h2>
              <p className="text-light-dark dark:text-dark-lightest max-w-[48ch] text-base/relaxed md:text-lg/relaxed">
                Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac
                arcu. Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.
              </p>
              <div>
                <CtaButtonList
                  theme={theme}
                  ctas={[
                    { href: "#", children: "Learn more" },
                    { href: "#", children: "Learn more" },
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
