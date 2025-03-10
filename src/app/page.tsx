import Navigation from "@/blocks/navigation/NavigationOne";
import HeroBlock from "@/blocks/hero/HeroOne";
import TextBlock from "@/blocks/text/TextOne";
import CardBlock from "@/blocks/card/CardTwo";
import CtaBlock from "@/blocks/cta/CtaThree";
import Footer from "@/blocks/footer/FooterOne";

export default function Home() {
  const theme = "light";
  return (
    <>
      <Navigation theme={theme} />
      <HeroBlock theme={theme} />
      <TextBlock theme="dark" />
      <CardBlock theme={theme} />
      <CtaBlock theme={theme} />
      <Footer />
    </>
  );
}
