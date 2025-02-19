import HeroThreeBlock from "./blocks/hero/HeroThree";

export default function Home() {
  return (
    <>
      <HeroThreeBlock
        byline="Lorem ipsum dolor sit amet"
        headline="Impactful Headline about Product"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra eros bibendum sapien sagittis, ac efficitur felis accumsan. Vivamus ut efficitur risus."
        cta={{ text: "Learn more", url: "#" }}
        img={{
          width: 1280,
          height: 360,
          url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
          alt: "Hero Image",
        }}
      />
    </>
  );
}
