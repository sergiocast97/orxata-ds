//import Image from 'next/image';
import Typography from "./Typography";
import ColourPalette from "./ColourPalette";
import Iconography from "./Iconography";

export default function Home() {
  return (
    <section data-theme="dark">
      <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
        <div className="container py-8 lg:pt-12 pb-24 space-y-16">
          <Typography />
          <ColourPalette />
          <Iconography />
        </div>
      </div>
    </section>
  );
}
