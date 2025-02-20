import ButtonLink from "@/app/components/ButtonLink";
import Logo from "@/app/components/Logo";
import NavItems from "@/app/patterns/NavItems";

interface NavigationOneBlockProps {
  theme?: "light" | "dark";
}

export default function NavigationOneBlock({ theme = "dark" }: NavigationOneBlockProps) {
  return (
    <>
      <section data-theme={theme}>
        <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
          <div className="container py-8 lg:pt-12">
            <div className="flex items-center justify-between gap-8">
              <Logo theme={theme} />
              <div className="flex justify-end items-baseline gap-8 lg:gap-12">
                <NavItems />
                <div className="flex items-baseline gap-6 lg:gap-8">
                  <ButtonLink href="#" type="link" theme={theme}>
                    Login
                  </ButtonLink>

                  <ButtonLink href="#" type="solid" theme={theme}>
                    Learn more
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
