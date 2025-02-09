import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="container ">
        <div className="overflow-hidden border border-theme-strong bg-theme-filling theme--dark rounded-theme-lg">
          <div className="flex flex-col gap-0 lg:gap-0 xl:gap-0 lg:grid lg:grid-cols-12 ">
            <div className="px-4 py-8 lg:px-8 lg:py-12 xl:px-10 xl:py-16 lg:col-span-6">
              <div className="flex flex-col items-start justify-center h-full text-theme-copy">
                <p className="mb-0.5 lg:mb-1 font-semibold body-xs lg:body-sm text-theme-primary uppercase">
                  Byline
                </p>

                <h2 className="mb-3 lg:mb-4 head-h4 lg:head-h3 text-theme-heading">
                  Headline
                </h2>

                <div className="body-md copy">
                  Copy - Donec vel auctor augue. Nulla metus sem, pellentesque
                  ut cursus nec, dapibus ac arcu. Vivamus erat massa, posuere
                  sit amet orci at, viverra hendrerit sem. Sed ut lacus in nulla
                  posuere scelerisque sit amet eu nibh. Maecenas vel libero
                  suscipit, bibendum urna vitae.
                </div>

                <div className="flex flex-wrap gap-4 mt-6 lg:mt-8">
                  <a
                    href="#"
                    target=""
                    className="btn btn-filled btn-md btn-neutral"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>

            <div className="order-last h-full p-6 lg:col-span-6">
              <Image
                width="640"
                height="480"
                src="https://dummyimage.com/640x480/bdbdbd/f5f5f5?text="
                alt="Default asset title"
                className="min-h-full aspect-[4/3] w-full object-cover rounded-theme-md"
                loading="lazy"
              />
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
}
