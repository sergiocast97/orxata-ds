import ButtonLink from "@/app/components/ButtonLink";
import Logo from "@/app/components/Logo";
import NavItems from "@/app/patterns/NavItems";

export default function NavigationTwoBlock({ theme = "dark" }: Navigation) {
  return (
    <>
      <section data-theme={theme}>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container py-8 lg:pt-12">
            <div className="flex items-center justify-between gap-8">
              <Logo theme={theme} />
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
      </section>
    </>
  );
}
