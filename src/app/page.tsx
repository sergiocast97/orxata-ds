//import Image from 'next/image';

export default function Home() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-theme-white dark:bg-theme-darkest">
        <div className="flex flex-col gap-8 xl:gap-16 xl:flex-col text-theme-darkest dark:text-theme-white">
          <div className="flex flex-col gap-2">
            <div className="mb-6 text-2xl font-bold md:text-4xl font-heading ">
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
      </div>
    </div>
  );
}
