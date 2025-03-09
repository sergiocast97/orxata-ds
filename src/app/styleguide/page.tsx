import Typography from "./Typography";
import ColourPalette from "./ColourPalette";
import Iconography from "./Iconography";
import BlockOverview from "./BlockOverview";

export default function Styleguide() {
  const theme = "dark";

  return (
    <>
      <section data-theme={theme}>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container space-y-16 py-8 pb-24 lg:pt-12">
            <Typography />
            <ColourPalette />
            <Iconography />
          </div>
        </div>
        <BlockOverview theme={theme} />
      </section>
    </>
  );
}
