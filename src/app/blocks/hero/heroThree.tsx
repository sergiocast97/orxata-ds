import Button from '@/app/components/button';
import Image from 'next/image';

export default function HeroThreeBlock() {
  return (
    <>
      <div className="container">
        <Image
          width="1312"
          height="360"
          src="https://dummyimage.com/1312x360/1a1d33/8589A6?text="
          alt="Hero image"
          className="aspect-[4/1] w-full object-cover rounded-theme-lg"
          loading="lazy"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 gap-8">
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
            <Button
              url="#"
              text="Filled button"
            />
          </div>
        </div>
      </div>
    </>
  );
}
