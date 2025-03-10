import Navigation from "@/blocks/navigation/NavigationTwo";
import HeroBlock from "@/blocks/hero/HeroThree";
import BannerBlock from "@/blocks/cta/CtaFour";
import CardBlock from "@/blocks/card/CardTwo";
import CtaBlock from "@/blocks/cta/CtaTwo";
import NewsletterBlock from "@/blocks/newsletter/NewsletterTwo";
import Footer from "@/blocks/footer/FooterTwo";

export default function Home() {
  const theme = "light";
  return (
    <>
      <Navigation theme={theme} />
      <HeroBlock theme={theme} />
      <BannerBlock theme={theme} />
      <CardBlock theme={theme} />
      <CtaBlock theme={theme} />
      <NewsletterBlock theme={theme} />
      <Footer />
    </>
  );
}
