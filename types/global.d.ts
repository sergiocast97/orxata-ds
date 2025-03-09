// types/global.d.ts

export {};

declare global {
  // Theme Type
  type ThemeType = "light" | "dark";

  // Image Props
  interface ImageProps {
    url: string;
    alt: string;
    width: number;
    height: number;
  }

  // CTA Button Props
  interface CtaButtonProps {
    children: React.ReactNode; // Button Content
    href: string; // URL
    newTab?: boolean; // Opens in new tab?
    type?: "solid" | "outline" | "link"; // Button type
    theme?: ThemeType; // Colour theme
    className?: string; // Optional classes
  }

  // CTA Button List props
  type CtaButtonListProps = Array<CtaButtonProps>;

  // Heading Props
  interface HeadingProps {
    theme?: ThemeType;
    centered?: boolean;
    byline: string;
    headline: string;
    copy: string;
  }

  // Hero Block
  interface HeroBlockProps {
    theme?: ThemeType;
  }

  // Text Block
  interface TextBlockProps {
    theme?: ThemeType;
  }

  // Feature Block
  interface FeatureBlockProps {
    theme?: ThemeType;
    mediaDirection?: "left" | "right";
  }

  interface CardProps {
    img: ImageProps;
    byline: string;
    headline: string;
    copy: string;
    cta: CtaButton;
  }

  // Card Block
  interface CardBlockProps {
    theme?: ThemeType;
  }

  // List Item
  interface ListItemProps {
    icon: string;
    headline: string;
    copy: string;
  }

  // List Block
  interface ListBlockProps {
    theme?: ThemeType;
    heading: HeadingProps;
    list: Array<ListItem>;
  }

  // CTA Block
  interface CtaBlockProps {
    theme?: ThemeType;
  }
}
