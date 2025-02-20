import ButtonLink from "@/app/components/ButtonLink";
import Logo from "@/app/components/Logo";
import NavItems from "@/app/patterns/NavItems";

interface NavigationThreeBlockProps {
  theme?: "light" | "dark";
}

export default function NavigationThreeBlock({ theme = "dark" }: NavigationThreeBlockProps) {
  return (
    <>
      <section data-theme={theme}>
        <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
          <div className="container py-8 lg:pt-12">
            <div className="flex items-center justify-between gap-8">
              <div className="flex justify-start items-center gap-8 lg:gap-12">
                <Logo theme={theme} />
                <NavItems />
              </div>
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
      </section>
    </>
  );
}
