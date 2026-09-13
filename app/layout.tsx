import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Exeter Politics Society",
    template: "%s | Exeter Politics Society",
  },
  description:
    "The University of Exeter Politics Society. Weekly socials, academic events, guest speakers, sport, welfare, trips, balls and more.",
  applicationName: "Exeter Politics Society",
  keywords: [
    "Exeter Politics Society",
    "University of Exeter",
    "Politics Society",
    "Exeter PolSoc",
    "Exeter student society",
    "University of Exeter Politics",
  ],
  authors: [{ name: "Exeter Politics Society" }],
  creator: "Exeter Politics Society",
  publisher: "Exeter Politics Society",

  metadataBase: new URL("https://www.exeter-politics-society.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Exeter Politics Society",
    description:
      "Weekly socials, academic events, guest speakers, sport, welfare, trips and more at the University of Exeter.",
    url: "https://www.exeter-politics-society.com",
    siteName: "Exeter Politics Society",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Exeter Politics Society",
    description:
      "Weekly socials, academic events, guest speakers, sport, welfare, trips and more at the University of Exeter.",
  },

  icons: {
    icon: "/politics-society-logo.png",
    shortcut: "/politics-society-logo.png",
    apple: "/politics-society-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}