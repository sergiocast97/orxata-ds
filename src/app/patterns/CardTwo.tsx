import Image from "next/image";
import Link from "next/link";

export default function CardTwo({ img, byline, headline, copy, cta }: Card) {
  return (
    <div className="w-full">
      <Link href={cta.href}>
        <Image
          width={img.width}
          height={img.height}
          src={img.url}
          alt={img.alt}
          className="rounded-large aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
        <div className="text-light-dark dark:text-dark-lightest p-4">
          <p className="mb-1 text-sm font-semibold md:text-base">{byline}</p>
          <h3 className="text-light-darkest dark:text-dark-white text-lg font-bold md:text-xl">
            {headline}
          </h3>
          <p className="mt-1 text-base md:text-lg">{copy}</p>
        </div>
      </Link>
    </div>
  );
}
