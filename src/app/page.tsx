import FeatureOneBlock from './blocks/feature/FeatureOne';
import FeatureTwoBlock from './blocks/feature/FeatureTwo';
import FooterOne from './blocks/footer/FooterOne';
import HeroOneBlock from './blocks/hero/HeroOne';
import HeroThreeBlock from './blocks/hero/HeroThree';

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
