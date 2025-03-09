import NavigationOneBlock from "@/blocks/navigation/NavigationOne";
import HeroOneBlock from "@/blocks/hero/HeroOne";
import TextOneBlock from "@/blocks/text/TextOne";
import CardTwoBlock from "@/blocks/card/CardTwo";
import CtaThreeBlock from "@/blocks/cta/CtaThree";

export default function Home() {
  const theme = "light";
  return (
    <>
      <NavigationOneBlock theme={theme} />
      <HeroOneBlock theme={theme} />
      <TextOneBlock theme={theme} />
      <CardTwoBlock theme={theme} />
      <CtaThreeBlock theme={theme} />
    </>
  );
}
