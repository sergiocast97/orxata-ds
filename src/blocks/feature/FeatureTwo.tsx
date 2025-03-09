import Image from "next/image";
import clsx from "clsx";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import CtaButton from "@/components/CtaButton";

export default function FeatureTwoBlock({
  theme = "dark",
  mediaDirection = "right",
}: FeatureBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest">
        <div className="container py-8 lg:py-12">
          <div className="bg-dark-dark border-dark-medium max-w-container-large rounded-large mx-auto grid grid-cols-1 overflow-hidden border md:grid-cols-2">
            <div
              className={clsx(
                mediaDirection == "left" ? "order-first" : "order-last",
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
            <div className="flex flex-col items-start justify-center p-4 md:p-6 lg:p-8">
              <p className="text-dark-lightest mb-1 text-lg font-semibold">Lorem ipsum dolor sit</p>
              <h2 className="font-heading text-dark-white mb-2 text-4xl font-bold">
                Feature Block Title
              </h2>
              <div className="text-dark-lightest text-lg/relaxed">
                Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac
                arcu. Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.
              </div>
              <div className="mt-4">
                <CtaButton href="#" type="solid" theme="dark">
                  Learn more
                  <ArrowRightIcon className="size-5" />
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
