import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="w-64 shrink-0 md:w-72 lg:w-full">
      <Link href="#">
        <div className="bg-light-lightest dark:bg-dark-dark border-light-light dark:border-dark-medium rounded-large h-full overflow-hidden border">
          <Image
            width="384"
            height="224"
            src="https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5"
            alt="Card Image"
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
          <div className="text-light-dark dark:text-dark-lightest p-4">
            <p className="mb-1 text-sm font-semibold md:text-base">
              Subtitle lorem ipsum
            </p>
            <h3 className="text-light-darkest dark:text-dark-white text-lg font-bold lg:text-xl">
              Lorem ipsum dolor sit amet
            </h3>

            <p className="mt-1 text-base lg:text-lg">
              Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus
              nec sem, dapibus ac abc arcu vivamus erat.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
