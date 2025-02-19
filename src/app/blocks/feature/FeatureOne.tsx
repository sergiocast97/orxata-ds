import Image from "next/image";
import ButtonLink from "../../components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function FeatureOneBlock() {
  const content = {
    byline: "This is a byline",
    headline: "This is a headline",
    copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac arcu. Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.",
    cta: {
      url: "#",
      text: "Learn more",
    },
    image: {
      url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
      alt: "Image alt",
    },
  };
  return (
    <section data-theme="dark">
      <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl gap-6 xl:gap-8">
            <div className="order-first h-full">
              <Image
                width="640"
                height="480"
                src={content.image.url}
                alt={content.image.alt}
                className="min-h-full aspect-[4/3] w-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="mb-1 font-semibold text-lg text-theme-600 dark:text-theme-300">
                {content.byline}
              </p>
              <h2 className="font-heading font-bold text-4xl mb-2">{content.headline}</h2>
              <div className="text-lg/relaxed text-theme-600 dark:text-theme-300 ">
                {content.copy}
              </div>
              <div className="mt-4">
                <ButtonLink href="#" type="solid" theme="dark">
                  Hello
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
