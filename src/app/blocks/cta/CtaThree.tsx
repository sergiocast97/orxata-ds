import Image from "next/image";

import CtaButtonList from "@/app/patterns/CtaButtonList";

export default function CtaThreeBlock({ theme = "dark" }: CtaBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest">
        <div className="container py-8 lg:py-12">
          <div className="bg-dark-dark border-dark-medium max-w-container-large rounded-large mx-auto grid grid-cols-1 overflow-hidden border md:grid-cols-2">
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
            <div className="flex flex-col items-start justify-center p-4 md:p-6 lg:p-8">
              <h2 className="font-heading text-dark-white mb-2 text-4xl font-bold">
                Call to Action
              </h2>
              <div className="text-dark-lightest text-lg/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </div>
              <div className="mt-2">
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
