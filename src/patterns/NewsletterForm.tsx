"use client";

import Button from "@/components/Button";
import Textbox from "@/components/Textbox";
import { cn } from "@/lib/utils";

export default function NewsletterForm({
  theme = "dark",
  className = "",
}: {
  theme: ThemeType;
  className?: string;
}) {
  return (
    <form className={cn("mt-4 flex gap-4 md:mt-6 lg:justify-end", className)}>
      <Textbox placeholder="Email" />
      <Button theme={theme} type="submit" />
    </form>
  );
}
