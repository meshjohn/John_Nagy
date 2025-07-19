import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "John Nagy – Frontend Developer",
  description:
    "Transforming concepts into seamless user experiences using Next.js and modern tools.",
  icons: { icon: "/fav.jpg" },
  openGraph: {
    title: "John Nagy – Portfolio",
    description: "Explore dynamic web magic and featured projects.",
    url: "https://john-nagy.vercel.app",
    siteName: "John Nagy Portfolio",
    images: [
      {
        url: "/fav.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
};

const ThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/fav.jpg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Nagy",
              jobTitle: "Frontend Developer",
              url: "https://john-nagy.vercel.app",
              sameAs: [
                "https://github.com/meshjohn",
                "https://www.linkedin.com/in/john-nagy-514163320",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
