import Logo from "@/components/Logo";
import MobileNav from "@/patterns/MobileNav";
import NavCtas from "@/patterns/NavCtas";
import NavItems from "@/patterns/NavItems";

export default function NavigationThreeBlock({ theme = "dark" }: { theme: ThemeType }) {
  return (
    <>
      <section data-theme={theme}>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container py-8 lg:pt-12">
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center justify-start gap-8 lg:gap-12">
                <Logo theme={theme} />
                <NavItems className="hidden lg:flex" />
              </div>
              <NavCtas className="hidden lg:flex" theme={theme} />
              <MobileNav />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
