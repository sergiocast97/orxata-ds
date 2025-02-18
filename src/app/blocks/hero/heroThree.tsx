import ButtonLink from '@/app/components/Button';
import Image from 'next/image';

export default function HeroThreeBlock() {
  return (
    <>
      <div className="container">
        <Image
          width="1312"
          height="480"
          src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
          alt="Hero image"
          className="aspect-[7/3] w-full object-cover rounded-theme-lg"
          loading="lazy"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 pt-8 gap-8">
          <div className="flex flex-col items-start justify-center gap-1">
            <p className="body-sm font-semibold text-theme-strong">
              Lorem Ipsum dolor sit amet
            </p>
            <h1 className="head-h1 text-theme-heading text-balance">
              Impactful Headline about product
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-8">
            <p className="body-lg text-theme-copy max-w-[48ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              viverra eros bibendum sapien sagittis, ac efficitur felis
              accumsan. Vivamus ut efficitur risus.
            </p>
            <ButtonLink
              href="#"
              type="solid"
              theme="light"
            >
              Hello
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
