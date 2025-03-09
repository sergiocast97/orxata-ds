//import Image from 'next/image';
import Typography from "./Typography";
import ColourPalette from "./ColourPalette";
import Iconography from "./Iconography";
import BlockTitle from "./BlockTitle";

import NavigationOneBlock from "@/app/blocks/navigation/NavigationOne";
import NavigationTwoBlock from "@/app/blocks/navigation/NavigationTwo";
import NavigationThreeBlock from "@/app/blocks/navigation/NavigationThree";
import HeroOneBlock from "@/app/blocks/hero/HeroOne";
import HeroTwoBlock from "@/app/blocks/hero/HeroTwo";
import HeroThreeBlock from "@/app/blocks/hero/HeroThree";
import TextOneBlock from "@/app/blocks/text/TextOne";
import TextTwoBlock from "@/app/blocks/text/TextTwo";
import FeatureOneBlock from "@/app/blocks/feature/FeatureOne";
import FeatureTwoBlock from "@/app/blocks/feature/FeatureTwo";
import CardOneBlock from "@/app/blocks/card/CardOne";
import CardTwoBlock from "@/app/blocks/card/CardTwo";
import CtaOneBlock from "@/app/blocks/cta/CtaOne";
import CtaTwoBlock from "@/app/blocks/cta/CtaTwo";
import CtaThreeBlock from "@/app/blocks/cta/CtaThree";
import CtaFourBlock from "@/app/blocks/cta/CtaFour";

export default function Home() {
  // Default theme
  const theme = "dark";

  return (
    <>
      <section data-theme={theme}>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container space-y-16 py-8 pb-24 lg:pt-12">
            <Typography />
            <ColourPalette />
            <Iconography />
          </div>
        </div>
      </section>
      <>
        {/* Navigations */}
        <BlockTitle title="Navigation" main={true} />
        <BlockTitle title="Navigation One">
          <NavigationOneBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Navigation Two">
          <NavigationTwoBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Navigation Three">
          <NavigationThreeBlock theme={theme} />
        </BlockTitle>

        {/* Heros */}
        <BlockTitle title="Hero" main={true} />
        <BlockTitle title="Hero One">
          <HeroOneBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Hero Two">
          <HeroTwoBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Hero Three">
          <HeroThreeBlock theme={theme} />
        </BlockTitle>

        {/* Text */}
        <BlockTitle title="Text" main={true} />
        <BlockTitle title="Text One">
          <TextOneBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Text Two">
          <TextTwoBlock theme={theme} />
        </BlockTitle>

        {/* Feature */}
        <BlockTitle title="Feature" main={true} />
        <BlockTitle title="Feature One">
          <FeatureOneBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Feature Two">
          <FeatureTwoBlock theme={theme} />
        </BlockTitle>

        {/* Card */}
        <BlockTitle title="Card" main={true} />
        <BlockTitle title="Card One">
          <CardOneBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Card Two">
          <CardTwoBlock theme={theme} />
        </BlockTitle>

        {/* CTAs */}
        <BlockTitle title="Cta" main={true} />
        <BlockTitle title="Cta One">
          <CtaOneBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Cta Two">
          <CtaTwoBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Cta Three">
          <CtaThreeBlock theme={theme} />
        </BlockTitle>
        <BlockTitle title="Cta Four">
          <CtaFourBlock theme={theme} />
        </BlockTitle>
      </>
    </>
  );
}
