//import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Typography */}
      <div className="container space-y-8">
        <div className="space-y-2">
          <div className="mb-6 text-2xl font-bold md:text-4xl font-heading">
            Headings:
            <span className="font-bold"> Poppins</span>
          </div>
          <h1 className=" head-h1 ">Heading 1</h1>
          <h2 className=" head-h2 ">Heading 2</h2>
          <h3 className=" head-h3 ">Heading 3</h3>
          <h4 className=" head-h4 ">Heading 4</h4>
          <h5 className=" head-h5 ">Heading 5</h5>
        </div>

        <div className="space-y-2">
          <div className="mb-6 font-sans text-2xl font-bold md:text-4xl ">
            Body:
            <span className="font-normal"> Inter</span>
          </div>

          <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:gap-12 lg:gap-16">
            <div className="space-y-1">
              <p className="body-2xl">Body 2xl</p>
              <p className="body-xl ">Body xl</p>
              <p className="body-lg ">Body lg</p>
              <p className="body-md ">Body md</p>
              <p className="body-sm ">Body sm</p>
              <p className="body-xs ">Body xs</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold body-2xl ">Semi 2xl</p>
              <p className="font-semibold body-xl ">Semi xl</p>
              <p className="font-semibold body-lg ">Semi lg</p>
              <p className="font-semibold body-md ">Semi md</p>
              <p className="font-semibold body-sm ">Semi sm</p>
              <p className="font-semibold body-xs ">Semi xs</p>
            </div>

            <div className="space-y-1">
              <p className="font-bold body-2xl ">Bold 2xl</p>
              <p className="font-bold body-xl ">Bold xl</p>
              <p className="font-bold body-lg ">Bold lg</p>
              <p className="font-bold body-md ">Bold md</p>
              <p className="font-bold body-sm ">Bold sm</p>
              <p className="font-bold body-xs ">Bold xs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Colour Palete */}
      <div className="container space-y-8">
        <div className="space-y-4">
          <h3 className="head-h5 text-theme-heading">Colour Palette</h3>

          <div className="flex flex-wrap gap-4 md:gap-4 lg:gap-8">
            <div className="space-y-1">
              <div className="border size-20 md:size-24 lg:size-32 border-theme-weak rounded-theme-md bg-theme-heading"></div>

              <p className="font-semibold body-xs md:body-sm lg:body-md text-theme-heading">
                Text Heading
              </p>
            </div>

            <div className="space-y-1">
              <div className="border size-20 md:size-24 lg:size-32 border-theme-weak rounded-theme-md bg-theme-copy"></div>

              <p className="font-semibold body-xs md:body-sm lg:body-md text-theme-heading">
                Text Copy
              </p>
            </div>

            <div className="space-y-1">
              <div className="border size-20 md:size-24 lg:size-32 border-theme-weak rounded-theme-md bg-theme-strong"></div>

              <p className="font-semibold body-xs md:body-sm lg:body-md text-theme-heading">
                Stroke Strong
              </p>
            </div>

            <div className="space-y-1">
              <div className="border size-20 md:size-24 lg:size-32 border-theme-weak rounded-theme-md bg-theme-weak"></div>

              <p className="font-semibold body-xs md:body-sm lg:body-md text-theme-heading">
                Stroke Weak
              </p>
            </div>

            <div className="space-y-1">
              <div className="border size-20 md:size-24 lg:size-32 border-theme-weak rounded-theme-md bg-theme-filling"></div>

              <p className="font-semibold body-xs md:body-sm lg:body-md text-theme-heading">
                Filling
              </p>
            </div>

            <div className="space-y-1">
              <div className="border size-20 md:size-24 lg:size-32 border-theme-weak rounded-theme-md bg-theme-background"></div>

              <p className="font-semibold body-xs md:body-sm lg:body-md text-theme-heading">
                Background
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
