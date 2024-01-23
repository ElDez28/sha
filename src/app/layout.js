import { Providers } from "./providers";
import { Raleway } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the styles
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Disable automatic addition of CSS styles

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-ral",
  preload: true,
});

export const metadata = {
  title: "Sha website",
  description: "A menthal therapie site",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${raleway.variable} font-ral`}>{children}</body>
      </html>
    </Providers>
  );
}
