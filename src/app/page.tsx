import FeatureOneBlock from './blocks/feature/featureOne';
import FeatureTwoBlock from './blocks/feature/featureTwo';
import FooterOne from './blocks/footer/footerOne';
import HeroOneBlock from './blocks/hero/heroOne';
import HeroThreeBlock from './blocks/hero/heroThree';

export default function Home() {
  return (
    <>
      <HeroThreeBlock />
      <HeroOneBlock />
      <FeatureTwoBlock />
      <FeatureOneBlock />
      <FooterOne />
    </>
  );
}
