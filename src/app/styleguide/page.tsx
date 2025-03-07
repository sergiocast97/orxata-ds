//import Image from 'next/image';
import Typography from "./Typography";
import ColourPalette from "./ColourPalette";
import Iconography from "./Iconography";

export default function Home() {
  return (
    <section data-theme="dark">
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container space-y-16 py-8 pb-24 lg:pt-12">
          <Typography />
          <ColourPalette />
          <Iconography />
        </div>
      </div>
    </section>
  );
}
