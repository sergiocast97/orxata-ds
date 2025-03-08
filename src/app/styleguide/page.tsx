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
import FeatureOneBlock from "@/app/blocks/feature/FeatureOne";
import FeatureTwoBlock from "@/app/blocks/feature/FeatureTwo";
import TextTwoBlock from "@/app/blocks/text/TextTwo";
import CardOneBlock from "@/app/blocks/card/CardOne";
import CardTwoBlock from "@/app/blocks/card/CardTwo";
import CtaOneBlock from "../blocks/cta/CtaOne";
import CtaTwoBlock from "../blocks/cta/CtaTwo";
import CtaThreeBlock from "../blocks/cta/CtaThree";

export default function Home() {
  // Some default content

  // Image
  const imgUrl = "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5";
  // CTA
  const cta = { href: "#", children: "Learn more" };
  // Heading
  const headingContent = {
    byline: "Lorem ipsum dolor sit",
    headline: "Card Block Title",
    copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac arcu. Vivamus erat massa, posuere ame viverra.",
    ctas: [cta, cta],
  };
  // Card
  const card = {
    img: {
      width: 488,
      height: 352,
      url: imgUrl,
      alt: "Feature Block Image",
    },
    byline: "Subtitle lorem ipsum",
    headline: "Lorem ipsum dolor sit amet",
    copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac abc arcu vivamus erat.",
    cta: cta,
  };

  // Hero Block Copy
  const heroCopy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra eros bibendum sapien sagittis, ac efficitur felis accumsan. Vivamus ut efficitur risus.";
  // Text Block Copy
  const textCopy =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus ligula, malesuada eget neque accio, condimentum pulvinar erat. Proin molestie varius urna non consectetur.";
  // Feature Block Copy
  const featureCopy =
    "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac arcu. Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.";

  return (
    <>
      <section data-theme="dark">
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container space-y-16 py-8 pb-24 lg:pt-12">
            <Typography />
            <ColourPalette />
            <Iconography />
          </div>
        </div>
      </section>
      <>
        <BlockTitle title="Navigation" main={true} />
        <BlockTitle title="Navigation One" />
        <NavigationOneBlock theme="dark" />
        <BlockTitle title="Navigation Two" />
        <NavigationTwoBlock theme="dark" />
        <BlockTitle title="Navigation Three" />
        <NavigationThreeBlock theme="dark" />
        <BlockTitle title="Hero" main={true} />
        <BlockTitle title="Hero One" />
        <HeroOneBlock
          theme="dark"
          byline={"Lorem ipsum dolor sit amet"}
          headline="Impactful Headline about Product"
          copy={heroCopy}
          cta={cta}
          img={{
            width: 1280,
            height: 360,
            url: imgUrl,
            alt: "Hero Image",
          }}
        />
        <BlockTitle title="Hero Two" />
        <HeroTwoBlock
          theme="dark"
          byline={"Lorem ipsum dolor sit amet"}
          headline="Impactful Headline about Product"
          copy={heroCopy}
          cta={cta}
          img={{
            width: 592,
            height: 437,
            url: imgUrl,
            alt: "Hero Image",
          }}
        />
        <BlockTitle title="Hero Three" />
        <HeroThreeBlock
          theme="dark"
          byline={"Lorem ipsum dolor sit amet"}
          headline="Impactful Headline about Product"
          copy={heroCopy}
          cta={cta}
          img={{
            width: 1280,
            height: 360,
            url: imgUrl,
            alt: "Hero Image",
          }}
        />
        <BlockTitle title="Text" main={true} />
        <BlockTitle title="Text One" />
        <TextOneBlock
          theme="dark"
          byline={"Lorem ipsum dolor sit amet"}
          headline="Text Block Title"
        >
          {textCopy}
        </TextOneBlock>
        <BlockTitle title="Text Two" />
        <TextTwoBlock
          theme="dark"
          byline={"Lorem ipsum dolor sit amet"}
          headline="Text Block Title"
        >
          {textCopy}
        </TextTwoBlock>
        <BlockTitle title="Feature" main={true} />
        <BlockTitle title="Feature One" />
        <FeatureOneBlock
          theme="dark"
          byline="Lorem ipsum dolor sit"
          headline="Feature Block Title"
          mediaDirection="left"
          cta={cta}
          img={{
            width: 488,
            height: 352,
            url: imgUrl,
            alt: "Feature Block Image",
          }}
        >
          {featureCopy}
        </FeatureOneBlock>
        <BlockTitle title="Feature Two" />
        <FeatureTwoBlock
          byline="Lorem ipsum dolor sit"
          headline="Feature Block Title"
          mediaDirection="right"
          cta={cta}
          img={{
            width: 488,
            height: 352,
            url: imgUrl,
            alt: "Feature Block Image",
          }}
        >
          {featureCopy}
        </FeatureTwoBlock>
        <BlockTitle title="Card" main={true} />
        <BlockTitle title="Card One" />
        <CardOneBlock theme="dark" heading={headingContent} cards={[card, card, card]} />
        <BlockTitle title="Card Two" />
        <CardTwoBlock theme="dark" heading={headingContent} cards={[card, card, card, card]} />
        <BlockTitle title="CTA" main={true} />
        <BlockTitle title="CTA One" />
        <CtaOneBlock />
        <BlockTitle title="CTA Two" />
        <CtaTwoBlock />
        <BlockTitle title="CTA Three" />
        <CtaThreeBlock />
      </>
    </>
  );
}
