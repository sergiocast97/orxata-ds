import FeatureOneBlock from './blocks/feature/featureOne';
import FeatureTwoBlock from './blocks/feature/featureTwo';
import FooterOne from './blocks/footer/footerOne';
import HeroOneBlock from './blocks/hero/heroOne';

export default function Home() {
  return (
    <>
      <HeroOneBlock />
      <FeatureTwoBlock />
      <FeatureOneBlock />
      <FooterOne />
    </>
  );
}
