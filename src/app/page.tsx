import NavigationOneBlock from "@/blocks/navigation/NavigationOne";
import HeroOneBlock from "@/blocks/hero/HeroOne";
import TextOneBlock from "@/blocks/text/TextOne";
import CardTwoBlock from "@/blocks/card/CardTwo";
import CtaThreeBlock from "@/blocks/cta/CtaThree";
import FooterOne from "@/blocks/footer/FooterOne";

export default function Home() {
  const theme = "light";
  return (
    <>
      <NavigationOneBlock theme={theme} />
      <HeroOneBlock theme={theme} />
      <TextOneBlock theme="dark" />
      <CardTwoBlock theme={theme} />
      <CtaThreeBlock theme={theme} />
      <FooterOne />
    </>
  );
}
