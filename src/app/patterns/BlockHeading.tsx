import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ButtonLink from "../components/ButtonLink";

interface BlockHeadingProps {
  theme: "light" | "dark";
  byline: string;
  headline: string;
  copy: string;
  ctas: [
    {
      url: string;
      text: string;
    },
  ];
}
export default function BlockHeading({
  theme = "dark",
  byline = "",
  headline,
  copy,
  ctas,
}: BlockHeadingProps) {
  return (
    <div className="text-light-darkest dark:text-dark-white">
      <p>{byline}</p>
      <h1>{headline}</h1>
      <p>{copy}</p>
      {ctas.map((cta) => (
        <ButtonLink href={cta.url} type="solid" theme={theme} key={cta.url}>
          {cta.text}
          <ArrowRightIcon className="size-5" />
        </ButtonLink>
      ))}
    </div>
  );
}
