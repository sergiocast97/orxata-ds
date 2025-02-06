//import Image from 'next/image';

export default function Home() {
  return (
    <div
      className=""
      data-theme="dark"
    >
      <div className="min-h-screen bg-theme-background">
        {/* Typography */}
        <div className="container flex flex-col gap-8 xl:gap-16 xl:flex-col text-theme-heading">
          <div className="flex flex-col gap-2">
            <div className="mb-6 text-2xl font-bold md:text-4xl font-heading rounded-theme-md">
              Headings:
              <span className="font-bold">Poppins</span>
            </div>
            <h1 className=" head-h1 ">Heading 1 - 60px</h1>
            <h2 className=" head-h2 ">Heading 2 - 48px</h2>
            <h3 className=" head-h3 ">Heading 3 - 36px</h3>
            <h4 className=" head-h4 ">Heading 4 - 30px</h4>
            <h5 className=" head-h5 ">Heading 5 - 24px</h5>
          </div>

          <div className="flex flex-col gap-2">
            <div className="mb-6 font-sans text-2xl font-bold md:text-4xl ">
              Body:
              <span className="font-normal">Inter</span>
            </div>

            <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:gap-12 lg:gap-16">
              <div className="space-y-1">
                <p className="body-2xl ">Body 2xl - 24px</p>
                <p className="body-xl ">Body xl - 20px</p>
                <p className="body-lg ">Body lg - 18px</p>
                <p className="body-md ">Body md - 16px</p>
                <p className="body-sm ">Body sm - 14px</p>
                <p className="body-xs ">Body xs - 12px</p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold body-2xl ">Semi 2xl - 24px</p>
                <p className="font-semibold body-xl ">Semi xl - 20px</p>
                <p className="font-semibold body-lg ">Semi lg - 18px</p>
                <p className="font-semibold body-md ">Semi md - 16px</p>
                <p className="font-semibold body-sm ">Semi sm - 14px</p>
                <p className="font-semibold body-xs ">Semi xs - 12px</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold body-2xl ">Bold 2xl - 24px</p>
                <p className="font-bold body-xl ">Bold xl - 20px</p>
                <p className="font-bold body-lg ">Bold lg - 18px</p>
                <p className="font-bold body-md ">Bold md - 16px</p>
                <p className="font-bold body-sm ">Bold sm - 14px</p>
                <p className="font-bold body-xs ">Bold xs - 12px</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colour Palete */}

        <div className="container flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="h5 text-darkest theme-dark:text-white">
              Colour Palette
            </h3>

            <div className="flex flex-wrap gap-4 md:gap-4 lg:gap-8">
              <div className="flex flex-col gap-1">
                <div className="border size-20 md:size-24 lg:size-32 border-light/50 theme-dark:border-medium/50 rounded bg-theme-heading">
                  <span className="grid w-full h-full text-xs font-semibold transition opacity-0 hover:opacity-100 cursor-copy md:text-sm xl:text-base shade-copy place-items-center text-white">
                    #262a62
                  </span>
                </div>

                <span className="font-semibold body-xs md:body-sm lg:body-md text-dark theme-dark:text-lightest">
                  Darkest{' '}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="border size-20 md:size-24 lg:size-32 border-light/50 theme-dark:border-medium/50 rounded bg-theme-text">
                  <span className="grid w-full h-full text-xs font-semibold transition opacity-0 hover:opacity-100 cursor-copy md:text-sm xl:text-base shade-copy place-items-center text-white">
                    #284173
                  </span>
                </div>

                <span className="font-semibold body-xs md:body-sm lg:body-md text-dark theme-dark:text-lightest">
                  Dark{' '}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="border size-20 md:size-24 lg:size-32 border-light/50 theme-dark:border-medium/50 rounded bg-theme-strong">
                  <span className="grid w-full h-full text-xs font-semibold transition opacity-0 hover:opacity-100 cursor-copy md:text-sm xl:text-base shade-copy place-items-center text-white">
                    #748EB2
                  </span>
                </div>

                <span className="font-semibold body-xs md:body-sm lg:body-md text-dark theme-dark:text-lightest">
                  Medium{' '}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="border size-20 md:size-24 lg:size-32 border-light/50 theme-dark:border-medium/50 rounded bg-theme-weak">
                  <span className="grid w-full h-full text-xs font-semibold transition opacity-0 hover:opacity-100 cursor-copy md:text-sm xl:text-base shade-copy place-items-center text-darkest">
                    #D9DBED
                  </span>
                </div>

                <span className="font-semibold body-xs md:body-sm lg:body-md text-dark theme-dark:text-lightest">
                  Light{' '}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="border size-20 md:size-24 lg:size-32 border-light/50 theme-dark:border-medium/50 rounded bg-theme-filling">
                  <span className="grid w-full h-full text-xs font-semibold transition opacity-0 hover:opacity-100 cursor-copy md:text-sm xl:text-base shade-copy place-items-center text-darkest">
                    #EBEEFF
                  </span>
                </div>

                <span className="font-semibold body-xs md:body-sm lg:body-md text-dark theme-dark:text-lightest">
                  Lightest{' '}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="border size-20 md:size-24 lg:size-32 border-light/50 theme-dark:border-medium/50 rounded bg-theme-background">
                  <span className="grid w-full h-full text-xs font-semibold transition opacity-0 hover:opacity-100 cursor-copy md:text-sm xl:text-base shade-copy place-items-center text-darkest">
                    #FFFFFF
                  </span>
                </div>

                <span className="font-semibold body-xs md:body-sm lg:body-md text-dark theme-dark:text-lightest">
                  White{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
