interface Button {
  url: string;
  text: string;
}

const btnClasses =
  'block w-auto text-center transition rounded-theme-lg sm:inline-block focus:outline-0';
const btnSizeClasses = 'px-4 py-2 text-base';
const btnFilledClasses = 'font-bold border-none focus:ring-2 focus:border-none';
const btnNeutralClasses =
  'text-theme-background bg-theme-heading focus:ring-theme-strong/25';

export default function Button({ url, text }: Button) {
  return (
    <a
      href={url}
      className={`${btnClasses} ${btnSizeClasses} ${btnFilledClasses} ${btnNeutralClasses}`}
    >
      {text}
    </a>
  );
}
