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
  // 1. Primary SEO
  title: "Alsafety Consultancy | HSE & ISO Services Bahrain",
  description: "Leading HSE consultancy in Bahrain. Expert ISO 45001 certification, safety training, risk assessments, and environmental management systems.",
  keywords: ["HSE Bahrain", "ISO 45001 Bahrain", "Safety Training Bahrain", "Safety Consultant Manama", "ISO Certification Bahrain", "Alsafety"],
  
  // 2. Google Search Console Verification
  verification: {
    google: "ig7cDAANahpKidebUFoaiyMJRC-YZdlwElX5PgKIVxA",
  },

  // 3. Social Media/WhatsApp Preview (OpenGraph)
  openGraph: {
    title: 'Alsafety Consultancy | Professional Safety Services',
    description: 'Expert HSE & ISO consultancy services for businesses in Bahrain.',
    url: 'https://alsafety.info',
    siteName: 'Alsafety Bahrain',
    locale: 'en_US',
    type: 'website',
  },

  // 4. Search Engine Instructions
  robots: {
    index: true,
    follow: true,
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