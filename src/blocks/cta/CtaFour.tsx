import { ArrowRightIcon } from "@heroicons/react/24/outline";

import CtaButton from "@/components/CtaButton";

export default function CtaFourBlock({ theme }: CtaBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-dark-darkest dark:bg-dark-dark text-dark-white">
        <div className="container py-4 lg:py-6">
          <div className="flex flex-col items-center justify-center gap-x-8 gap-y-2 text-center md:flex-row">
            <h2 className="font-heading text-lg font-semibold">Promotional Message with CTA</h2>
            <CtaButton href="#" type="link" theme="dark">
              Learn more
              <ArrowRightIcon className="size-5" />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
