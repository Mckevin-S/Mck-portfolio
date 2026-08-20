import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Background from "../components/Background";
import { getLang, LANG_COOKIE } from "../lib/i18n";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mckevin Kamguem - Ingénieur logiciel",
  description:
    "Portfolio de Mckevin Kamguem, Ingénieur logiciel. Applications web performantes et évolutives : React, Next.js, Node.js, TypeScript, PostgreSQL.",
  keywords: [
    "développeur",
    "développeur full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Mckevin Kamguem" }],
  icons: {
    icon: "/images/logo.svg",
  },
  openGraph: {
    title: "Mckevin Kamguem - Ingénieur logiciel",
    description:
      "Applications web performantes et évolutives : React, Next.js, Node.js, TypeScript, PostgreSQL.",
    type: "website",
    locale: "fr_FR",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = getLang(cookieStore.get(LANG_COOKIE)?.value);

  return (
    <html
      lang={lang}
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-screen flex-col">
        <Background />
        <Navbar lang={lang} />
        <div className="flex-1">{children}</div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
