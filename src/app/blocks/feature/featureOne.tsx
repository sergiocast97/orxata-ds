import Image from 'next/image';
import Button from '../../components/button';

export default function FeatureOneBlock() {
  const content = {
    byline: 'This is a byline',
    headline: 'This is a headline',
    copy: 'Copy - Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac arcu. Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem, sed ut lacus in nulla posuere scelerisque.',
    cta: {
      url: '#',
      text: 'Learn more',
    },
    image: {
      url: 'https://dummyimage.com/640x480/1a1d33/8589A6?text=',
      alt: 'Image alt',
    },
  };
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Text Area */}
        <div className="flex flex-col items-start justify-center">
          <p className="mb-1 font-semibold body-md text-theme-primary">
            {content.byline}
          </p>

          <h2 className="mb-3 lg:mb-4 head-h3 text-theme-heading">
            {content.headline}
          </h2>

          <div className="body-lg text-theme-heading">{content.copy}</div>

          <div className="mt-8">
            <Button
              url={content.cta.url}
              text={content.cta.text}
            />
          </div>
        </div>

        {/* Image Area */}
        <div className="order-last h-full p-6">
          <Image
            width="640"
            height="480"
            src={content.image.url}
            alt={content.image.alt}
            className="min-h-full aspect-[4/3] w-full object-cover rounded-theme-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
