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

  // Common props
  interface Block {
    theme?: Theme;
    byline?: string;
    headline: string;
  }

  // Heading Props
  interface Heading extends Block {
    copy: string;
    ctas: ButtonLinkList;
    centered?: boolean;
  }

  // Hero Block
  interface HeroBlock extends Block {
    copy: string;
    cta: ButtonLink;
    img: Image;
  }

  // Text Block
  interface TextBlock extends Block {
    children: React.ReactNode;
  }

  // Feature Block
  interface FeatureBlock extends Block {
    children: React.ReactNode;
    mediaDirection?: "left" | "right";
    cta: ButtonLink;
    img: Image;
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
    heading: Heading;
    cards: Array<Card>;
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
}
