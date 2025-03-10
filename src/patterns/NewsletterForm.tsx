"use client";

import Button from "@/components/Button";
import Textbox from "@/components/Textbox";

export default function NewsletterForm({ theme = "dark" }: { theme: ThemeType }) {
  return (
    <form className="flex gap-4 lg:justify-end">
      <Textbox placeholder="Email" />
      <Button theme={theme} type="submit" />
    </form>
  );
}
