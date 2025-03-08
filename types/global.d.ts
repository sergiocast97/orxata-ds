// types/global.d.ts

export {};

declare global {
  // Themes
  type Theme = "light" | "dark";

  // Image
  interface Image {
    url: string;
    alt: string;
    width: number;
    height: number;
  }

  // Button Link Props
  interface ButtonLink {
    children: React.ReactNode; // Button Content
    href: string; // URL
    newTab?: boolean; // Opens in new tab?
    type?: "solid" | "outline" | "link"; // Button type
    theme?: Theme; // Colour theme
    className?: string; // Optional classes
  }

  // Button Link List
  type ButtonLinkList = Array<ButtonLink>;

  // Heading Props
  interface Heading {
    theme?: Theme;
    centered?: boolean;
    byline: string;
    headline: string;
    copy: string;
  }

  // Hero Block
  interface HeroBlock {
    theme?: Theme;
  }

  // Text Block
  interface TextBlock {
    theme?: Theme;
  }

  // Feature Block
  interface FeatureBlock {
    theme?: Theme;
    mediaDirection?: "left" | "right";
  }

  interface Card {
    img: Image;
    byline: string;
    headline: string;
    copy: string;
    cta: ButtonLink;
  }

  // Card Block
  interface CardBlock {
    theme?: Theme;
  }

  // List Item
  interface ListItem {
    icon: string;
    headline: string;
    copy: string;
  }

  // List Block
  interface ListBlock {
    theme?: Theme;
    heading: Heading;
    list: Array<ListItem>;
  }

  // CTA Block
  interface CtaBlock {
    theme?: Theme;
  }
}
