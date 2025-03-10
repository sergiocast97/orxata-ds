import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactDetails() {
  const email = "hello@sergiocastillo.dev";
  const phone = "+44 01234 567 890";

  return (
    <div className="text-light-darkest dark:text-dark-white space-y-2">
      <div className="flex items-center gap-2">
        <EnvelopeIcon className="text-light-dark dark:text-dark-lightest size-6" />
        <Link className="text-base/normal lg:text-lg/normal" href={`mailto: ${email}`}>
          {email}
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <PhoneIcon className="text-light-dark dark:text-dark-lightest size-6" />
        <Link className="text-base/normal lg:text-lg/normal" href={`tel: ${phone}`}>
          {phone}
        </Link>
      </div>
    </div>
  );
}
