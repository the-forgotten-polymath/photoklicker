import type { Metadata } from "next";
import { Oswald, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const fontDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontHeading = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "PhotoKlicker Photography | Best Wedding Photographer in Dehradun",
  description: "PhotoKlicker Photography offers professional pre wedding, wedding, portrait, and event photography in Dehradun. Book your session today +919359995662.!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontHeading.variable} ${fontBody.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
