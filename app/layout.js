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

export const metadata = {
  title: "Tobias Fröhlich - Personal Website and Portfolio",
  description:
    "Explore my software projects, CV, and personal interests in tech, AI, language learning, and endurance training.",
  keywords:
    "Tobias Fröhlich, software engineer, web developer, Next.js, React, JavaScript, AI projects, automation, portfolio, CV, tech enthusiast, language learning, freelance, fitness",
  openGraph: {
    title: "Tobias Fröhlich - Software Engineer & Developer Portfolio",
    description:
      "Explore my software projects, CV, and personal interests in tech, AI, language learning, and fitness.",
    url: "https://tobiasfrohlich.com",
    siteName: "Tobias Fröhlich - Personal Website",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
