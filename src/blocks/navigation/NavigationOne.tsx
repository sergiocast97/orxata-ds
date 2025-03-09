import CtaButton from "@/components/CtaButton";
import Logo from "@/components/Logo";
import NavItems from "@/patterns/NavItems";

export default function NavigationOneBlock({ theme = "dark" }: { theme: ThemeType }) {
  return (
    <>
      <section data-theme={theme}>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container py-8 lg:pt-12">
            <div className="flex items-center justify-between gap-8">
              <Logo theme={theme} />
              <div className="flex items-baseline justify-end gap-8 lg:gap-12">
                <NavItems />
                <div className="hidden items-baseline gap-6 md:flex lg:gap-8">
                  <CtaButton href="#" type="link" theme={theme}>
                    Login
                  </CtaButton>

                  <CtaButton href="#" type="solid" theme={theme}>
                    Learn more
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
