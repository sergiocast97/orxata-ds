import Logo from "@/components/Logo";
import NavItems from "@/patterns/NavItems";
import NavCtas from "@/patterns/NavCtas";
import MobileNav from "@/patterns/MobileNav";

export default function NavigationOneBlock({ theme = "dark" }: { theme: ThemeType }) {
  return (
    <>
      <section data-theme={theme}>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container py-6 lg:pt-12">
            <div className="flex items-center justify-between gap-8">
              <Logo theme={theme} />
              <div className="hidden items-baseline justify-end gap-8 lg:flex lg:gap-12">
                <NavItems />
                <NavCtas theme={theme} />
              </div>
              <MobileNav theme={theme} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
