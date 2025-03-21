import Logo from "@/components/Logo";
import FooterBottom from "@/patterns/FooterBottom";
import NavItems from "@/patterns/NavItems";

export default function FooterOne({}) {
  return (
    <footer data-theme="dark">
      <div className="bg-dark-darkest text-dark-white">
        <div className="container flex flex-col items-center justify-between gap-8 pt-12">
          <Logo theme="dark" />
          <NavItems className="justify-center" />
        </div>
      </div>
      <FooterBottom className="items-center" />
    </footer>
  );
}
