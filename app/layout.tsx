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
  // 1. Primary SEO (Now includes Arabic)
  title: "Alsafety Consultancy | HSE & ISO Services Bahrain | استشارات السلامة",
  description: "Leading HSE consultancy in Bahrain. Expert ISO 45001, safety training, and risk assessments. استشارات السلامة والصحة المهنية وأيزو في البحرين",
  keywords: [
    "HSE Bahrain", "ISO 45001 Bahrain", "Safety Training Bahrain", 
    "Alsafety", "استشارات سلامة", "أيزو البحرين", "الصحة المهنية", "تدريب سلامة"
  ],
  
  // 2. Google Search Console Verification (Kept your ID)
  verification: {
    google: "ig7cDAANahpKidebUFoaiyMJRC-YZdlwElX5PgKIVxA",
  },

  // 3. Social Media/WhatsApp Preview (Arabic added to description)
  openGraph: {
    title: 'Alsafety Consultancy | Professional Safety Services',
    description: 'Expert HSE & ISO consultancy services in Bahrain. استشارات السلامة المهنية',
    url: 'https://alsafety.info',
    siteName: 'Alsafety Bahrain',
    locale: 'en_US',
    type: 'website',
  },

  // 4. Language Alternates (Crucial for Arabic SEO)
  alternates: {
    canonical: 'https://alsafety.info',
    languages: {
      'en-US': 'https://alsafety.info',
      'ar-BH': 'https://alsafety.info',
    },
  },

  // 5. Search Engine Instructions
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
    // We keep lang="en" for the main UI, but Google now knows Arabic content is here
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}