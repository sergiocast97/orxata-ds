import { cn } from "@/lib/utils";

import CtaButton from "@/components/CtaButton";

export default function NavCtas({
  theme = "dark",
  className = "",
}: {
  theme?: ThemeType;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline gap-6 lg:gap-8", className)}>
      <CtaButton href="#" type="link" theme={theme}>
        Login
      </CtaButton>

      <CtaButton href="#" type="solid" theme={theme}>
        Learn more
      </CtaButton>
    </div>
  );
}
