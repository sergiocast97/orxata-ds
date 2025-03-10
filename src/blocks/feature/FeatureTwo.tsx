import Image from "next/image";
import { cn } from "@/lib/utils";

import CtaButtonList from "@/patterns/CtaButtonList";

export default function FeatureTwoBlock({
  theme = "dark",
  mediaDirection = "right",
}: FeatureBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest">
        <div className="container py-8 lg:py-12">
          <div className="bg-dark-dark border-dark-medium max-w-container-small lg:max-w-container-large rounded-large mx-auto grid grid-cols-1 overflow-hidden border lg:grid-cols-2">
            <div
              className={cn(
                mediaDirection === "left" ? "order-first" : "order-last",
                "order h-full",
              )}
            >
              <Image
                width={488}
                height={352}
                src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
                alt="Feature Block Image"
                className="aspect-[4/3] min-h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center px-4 py-8 lg:px-8 lg:py-12">
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-base font-semibold md:text-lg">
                Lorem ipsum dolor sit
              </p>
              <h2 className="font-heading text-dark-white mb-2 text-3xl font-bold text-balance lg:text-4xl">
                Feature Block Title
              </h2>
              <div className="text-dark-lightest max-w-[48ch] text-base/relaxed md:text-lg/relaxed">
                Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac
                arcu. Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.
              </div>
              <div>
                <CtaButtonList
                  theme="dark"
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
