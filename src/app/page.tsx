import NavigationOneBlock from "@/app/blocks/navigation/NavigationOne";
import HeroOneBlock from "@/app/blocks/hero/HeroOne";
import TextOneBlock from "@/app/blocks/text/TextOne";
import CardTwoBlock from "@/app/blocks/card/CardTwo";
import CtaThreeBlock from "@/app/blocks/cta/CtaThree";

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
