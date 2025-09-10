import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

<link
  href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
  rel="stylesheet"
/>


// Fuentes existentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NUEVAS FUENTES para invitación
const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: 'Invitación de Boda',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${playfair.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
