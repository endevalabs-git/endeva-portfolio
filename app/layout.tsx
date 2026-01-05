import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endeva Labs - Digital Studio for Innovation",
  description:
    "Engineering intelligent systems, elegant software, and thoughtful brands. We build what matters.",
  openGraph: {
    title: "Endeva Labs",
    description:
      "Engineering intelligent systems, elegant software, and thoughtful brands. We build what matters.",
    url: "https://endevalabs.com",
    siteName: "Endeva Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
