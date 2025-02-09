export default function ColourPalette() {
  return (
    <>
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
