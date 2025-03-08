import clsx from "clsx";

export default function BlockTitle({ title, main = false }: { title: string; main?: boolean }) {
  return (
    <section>
      <div className={clsx(main ? "bg-neutral-800" : "bg-neutral-700")}>
        <div className="container grid place-content-center py-8">
          <h2 className="text-dark-white text-3xl font-bold">{title}</h2>
        </div>
      </div>
    </section>
  );
}
