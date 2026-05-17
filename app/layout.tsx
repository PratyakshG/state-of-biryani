import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "State of Biryani | Experience Royalty—Delivered",
  description:
    "SOB - India's most leading biryani delivery chain. Fresh dum-cooked biryanis delivered to your door in 30-40 minutes.",
  keywords: [
    "biryani",
    "biryani delivery",
    "cloud kitchen",
    "dum biryani",
    "Hyderabadi biryani",
    "Lucknowi biryani",
    "State of Biryani",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay bg-royal-black font-body text-royal-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
