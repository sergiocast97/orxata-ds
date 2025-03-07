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

  // Navigation
  interface Navigation {
    theme?: Theme;
  }

  // Footer
  interface Footer {
    theme?: Theme;
  }

  // Block Heading Props
  interface BlockHeading {
    theme?: Theme;
    byline: string;
    headline: string;
    copy: string;
    ctas: ButtonLinkList;
  }

  // Text Block
  interface TextBlock {
    theme?: Theme;
    byline: string;
    headline: string;
    children: React.ReactNode;
  }

  // Hero Block
  interface HeroBlock {
    theme?: Theme;
    byline: string;
    headline: string;
    copy: string;
    cta: ButtonLink;
    img: Image;
  }

  // Feature Block
  interface FeatureBlock {
    theme?: Theme;
    byline: string;
    headline: string;
    children: React.ReactNode;
    mediaDirection?: "left" | "right";
    cta: ButtonLink;
    img: Image;
  }

  interface Card {
    img: Image;
    headline: string;
    copy: string;
    cta: ButtonLink;
  }

  // Card Block
  interface CardBlock {
    theme?: Theme;
    blockHeading: BlockHeading;
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
    BlockHeading: BlockHeading;
    list: Array<ListItem>;
  }
}
