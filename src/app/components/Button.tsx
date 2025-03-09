import clsx from "clsx";

interface Button {
  theme: ThemeType;
  type: "button" | "reset" | "submit";
  onClick: () => void;
}

export default function Button({ theme = "dark", type = "submit", onClick }: Button) {
  return (
    <button
      className={clsx(
        "rounded-medium btn-shadow inline-flex items-center gap-1 bg-linear-to-b px-4 py-2 text-lg font-semibold text-nowrap transition focus:outline-0 active:to-neutral-500",
        theme == "dark"
          ? "text-neutral-000 from-neutral-900 to-neutral-600"
          : "to-neutral-000 from-neutral-300 text-neutral-900",
      )}
      type={type}
      onClick={onClick}
    ></button>
  );
}
