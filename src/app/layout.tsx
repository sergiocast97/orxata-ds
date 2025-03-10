import type { Metadata } from "next";
import { Poppins, Inter, DM_Serif_Display, Montserrat } from "next/font/google";
import "../assets/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// For the Demo

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Orxata DS",
  description: "Orxata Design System",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${dmSerifDisplay.variable} ${montserrat.variable} selection:text-light-dark selection:bg-light-light scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
