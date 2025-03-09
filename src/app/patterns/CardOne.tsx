import Image from "next/image";
import Link from "next/link";

export default function CardOne({ img, byline, headline, copy, cta }: CardProps) {
  return (
    <div className="w-72 shrink-0 md:w-96 lg:w-full">
      <Link href={cta.href}>
        <div className="bg-light-lightest dark:bg-dark-dark border-light-light dark:border-dark-medium rounded-large h-full overflow-hidden border">
          <Image
            width={img.width}
            height={img.height}
            src={img.url}
            alt={img.alt}
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
          <div className="text-light-dark dark:text-dark-lightest p-4">
            <p className="mb-1 text-sm font-semibold md:text-base">{byline}</p>
            <h3 className="text-light-darkest dark:text-dark-white text-lg font-bold md:text-xl">
              {headline}
            </h3>
            <p className="mt-1 text-base md:text-lg">{copy}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
