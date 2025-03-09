"use client";

import Button from "@/components/Button";
import Textbox from "@/components/Textbox";

interface NewsletterBlockProps {
  theme: ThemeType;
}

export default function NewsletterOneBlock({ theme = "dark" }: NewsletterBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-lightest dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-large mx-auto">
            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="">
                <h2 className="font-heading text-3xl font-bold md:text-4xl">
                  Sign up to our Newsletter
                </h2>
                <p className="text-light-dark dark:text-dark-lightest mt-2 max-w-[44ch] text-base md:mt-4 md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </p>
              </div>
              <div className="flex gap-4 lg:justify-end">
                <Textbox placeholder="Email" />
                <Button theme={theme} type="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
