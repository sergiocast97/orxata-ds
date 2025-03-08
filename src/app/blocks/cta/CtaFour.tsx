import ButtonLink from "../../components/ButtonLink";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CtaFourBlock({ theme }: CtaBlock) {
  return (
    <section data-theme={theme}>
      <div className="bg-dark-darkest dark:bg-dark-dark text-dark-white">
        <div className="container py-4 lg:py-6">
          <div className="flex flex-col items-center justify-center gap-x-8 gap-y-2 text-center md:flex-row">
            <h2 className="font-heading text-lg font-semibold">Promotional Message with CTA</h2>
            <ButtonLink href="#" type="link" theme={theme}>
              Learn more
              <ArrowRightIcon className="size-5" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
