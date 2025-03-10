import { cn } from "@/lib/utils";

import NavigationOne from "@/blocks/navigation/NavigationOne";
import NavigationTwo from "@/blocks/navigation/NavigationTwo";
import NavigationThree from "@/blocks/navigation/NavigationThree";

import HeroOneBlock from "@/blocks/hero/HeroOne";
import HeroTwoBlock from "@/blocks/hero/HeroTwo";
import HeroThreeBlock from "@/blocks/hero/HeroThree";

import TextOneBlock from "@/blocks/text/TextOne";
import TextTwoBlock from "@/blocks/text/TextTwo";

import FeatureOneBlock from "@/blocks/feature/FeatureOne";
import FeatureTwoBlock from "@/blocks/feature/FeatureTwo";

import CardOneBlock from "@/blocks/card/CardOne";
import CardTwoBlock from "@/blocks/card/CardTwo";

import CtaOneBlock from "@/blocks/cta/CtaOne";
import CtaTwoBlock from "@/blocks/cta/CtaTwo";
import CtaThreeBlock from "@/blocks/cta/CtaThree";
import CtaFourBlock from "@/blocks/cta/CtaFour";

import NewsletterOneBlock from "@/blocks/newsletter/NewsletterOne";
import NewsletterTwoBlock from "@/blocks/newsletter/NewsletterTwo";

import FooterOne from "@/blocks/footer/FooterOne";
import FooterTwo from "@/blocks/footer/FooterTwo";
import FooterThree from "@/blocks/footer/FooterThree";

export default function BlockOverview({ theme }: { theme: ThemeType }) {
  return (
    <>
      {/* Navigation Blocks */}
      <BlockTitle title="Navigation" main={true} />
      <BlockTitle title="Navigation One">
        <NavigationOne theme={theme} />
      </BlockTitle>
      <BlockTitle title="Navigation Two">
        <NavigationTwo theme={theme} />
      </BlockTitle>
      <BlockTitle title="Navigation Three">
        <NavigationThree theme={theme} />
      </BlockTitle>

      {/* Hero Blocks */}
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

      {/* Text Blocks */}
      <BlockTitle title="Text" main={true} />
      <BlockTitle title="Text One">
        <TextOneBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Text Two">
        <TextTwoBlock theme={theme} />
      </BlockTitle>

      {/* Feature Blocks */}
      <BlockTitle title="Feature" main={true} />
      <BlockTitle title="Feature One">
        <FeatureOneBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Feature Two">
        <FeatureTwoBlock theme={theme} />
      </BlockTitle>

      {/* Card Blocks */}
      <BlockTitle title="Card" main={true} />
      <BlockTitle title="Card One">
        <CardOneBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Card Two">
        <CardTwoBlock theme={theme} />
      </BlockTitle>

      {/* CTA Blocks */}
      <BlockTitle title="Call To Action" main={true} />
      <BlockTitle title="Call To Action One">
        <CtaOneBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Call To Action Two">
        <CtaTwoBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Call To Action Three">
        <CtaThreeBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Call To Action Four">
        <CtaFourBlock theme={theme} />
      </BlockTitle>

      {/* Newsletter Blocks */}
      <BlockTitle title="Newsletter" main={true} />
      <BlockTitle title="Newsletter One">
        <NewsletterOneBlock theme={theme} />
      </BlockTitle>
      <BlockTitle title="Newsletter Two">
        <NewsletterTwoBlock theme={theme} />
      </BlockTitle>

      {/* Footer Blocks */}
      <BlockTitle title="Footer" main={true} />
      <BlockTitle title="Footer One">
        <FooterOne />
      </BlockTitle>
      <BlockTitle title="Footer Two">
        <FooterTwo />
      </BlockTitle>
      <BlockTitle title="Footer Three">
        <FooterThree />
      </BlockTitle>
    </>
  );
}

function BlockTitle({
  title,
  main = false,
  children,
}: {
  title: string;
  main?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section>
        <div className={cn(main ? "bg-neutral-700" : "bg-neutral-600")}>
          <div className="container grid place-content-center py-8">
            <h2 className="text-dark-white text-3xl font-bold">{title}</h2>
          </div>
        </div>
      </section>
      {children && children}
    </>
  );
}
