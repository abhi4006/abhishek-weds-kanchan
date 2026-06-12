import type { Metadata, Viewport } from "next";

import "@fontsource/hind/400.css";
import "@fontsource/hind/600.css";
import "@fontsource/hind/700.css";
import "@fontsource/rozha-one/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "अभिषेक संग कंचन | शुभ विवाह",
  description:
    "अभिषेक एवं कंचन के शुभ विवाह के मंगल अवसर पर आप सादर आमंत्रित हैं।",
  openGraph: {
    title: "अभिषेक संग कंचन | शुभ विवाह",
    description: "3 जुलाई को आयोजित शुभ विवाह समारोह का स्नेहिल आमंत्रण।",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6f1d1b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
