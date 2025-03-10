import Image from "next/image";

import CtaButtonList from "@/patterns/CtaButtonList";

export default function CtaThreeBlock({ theme = "dark" }: CtaBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="bg-dark-dark border-dark-medium max-w-container-small lg:max-w-container-large rounded-large mx-auto grid overflow-hidden border lg:grid-cols-2">
            <div className="order order-last h-full">
              <Image
                width={504}
                height={320}
                src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
                alt="CTA Three Image"
                className="aspect-[3/2] min-h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center px-4 py-8 lg:px-8 lg:py-12">
              <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
                Call to Action
              </h2>
              <p className="text-dark-lightest mt-2 max-w-[44ch] text-base/relaxed md:text-lg/relaxed lg:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </p>
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
    </section>
  );
}
