import Logo from "@/components/Logo";
import ContactDetails from "@/patterns/ContactDetails";
import FooterBottom from "@/patterns/FooterBottom";
import FooterColumn from "@/patterns/FooterColumn";

export default function FooterOne({}) {
  return (
    <footer data-theme="dark">
      <div className="bg-dark-darkest text-dark-white">
        <div className="container flex flex-col justify-between gap-6 py-16 md:flex-row lg:gap-8">
          <div className="flex-shrink-0">
            <Logo theme="dark" />
            <p className="mt-4 mb-6 text-lg">Lorem ipsum dolor sit amet.</p>
            <ContactDetails />
          </div>
          <div className="lg:w-container-small grid grid-cols-3 gap-6 lg:gap-8">
            <FooterColumn title="Heading" items={["Lorem ipsum", "Dolor sit", "Amet lorem"]} />
            <FooterColumn title="Heading" items={["Lorem ipsum", "Dolor sit", "Amet lorem"]} />
            <FooterColumn
              title="Address"
              items={["17, Cinnamon Street \r New Bark Town \r AB12 3CD"]}
            />
          </div>
        </div>
      </div>
      <FooterBottom accent={true} />
    </footer>
  );
}
