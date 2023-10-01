// import "../styles/globals.css";
import "../styles/styles.css";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { nc } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";

import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "nubicoder",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-p-28 scroll-smooth"
    >
      <body
        className={nc(
          "bg-background/50 font-sans antialiased dark:bg-background/90",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>
            <svg
              className="opacity-7 pointer-events-none fixed isolate z-50 mix-blend-soft-light"
              width="100%"
              height="100%"
            >
              <filter id="nubicoder">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.80"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#nubicoder)"></rect>
            </svg>
            <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 text-base xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
