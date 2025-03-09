interface TextboxProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Textbox({ value, placeholder }: TextboxProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="rounded-medium bg-light-white dark:bg-dark-dark text-light-darkest dark:text-light-white outline-light-medium dark:outline-dark-light placeholder:text-light-dark dark:placeholder:text-dark-lightest focus:outline-light-dark dark:focus:outline-dark-lightest block w-full max-w-72 px-3 py-1.5 text-base/normal outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2"
    />
  );
}
