import Logo from "@/components/Logo";
import NavItems from "@/patterns/NavItems";
import SocialIcons from "@/patterns/SocialIcons";

export default function FooterOne({}) {
  return (
    <footer data-theme="dark">
      <div className="bg-dark-darkest text-dark-white">
        <div className="container space-y-8 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
            <Logo theme="dark" />
            <NavItems />
          </div>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
            <p className="text-dark-lightest text-base font-semibold">
              © Copyright {new Date().getFullYear()} - Sergio Castillo
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
