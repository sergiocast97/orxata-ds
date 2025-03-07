// types/global.d.ts

export {};

declare global {
  // Themes
  type Theme = "light" | "dark";

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

  // Navigation Block
  interface NavigationBlock {
    theme?: Theme;
  }

  // Block Heading Props
  interface BlockHeading {
    theme: Theme;
    byline: string;
    headline: string;
    copy: string;
    ctas: ButtonLinkList;
  }

  // Hero Block
  interface HeroBlock {
    theme?: Theme;
    byline: string;
    headline: string;
    copy: string;
    cta: ButtonLink;
    img: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
  }

  // Feature Block
  interface FeatureBlock {
    theme?: Theme;
    byline: string;
    headline: string;
    children: React.ReactNode;
    mediaDirection?: "left" | "right";
    cta: ButtonLink;
    img: {
      width: number;
      height: number;
      url: string;
      alt: string;
    };
  }

  // Card Block
  interface CardBlock {
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
}
