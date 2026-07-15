import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asmitha Power Tech | Kirloskar DG Generator Sales, AMC & Service Partner",
  description: "Asmitha Power Tech is a trusted authorized partner for Kirloskar Diesel Generator (DG) set Sales, Comprehensive AMC, Installation, breakdown servicing, and genuine spares in Telangana.",
  keywords: "Kirloskar DG sets, diesel generator, generator service, generator AMC, generator sales Hyderabad, generator repairs Saroornagar, power backup solutions Telangana",
  authors: [{ name: "Asmitha Power Tech" }],
  metadataBase: new URL("http://localhost:3000"), // Fallback base URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Asmitha Power Tech | Reliable Power Backup & Kirloskar DG Sets",
    description: "Authorized Sales, AMC, Installation & Service Partner for Kirloskar Diesel Generator Sets in Telangana. 24x7 client support.",
    url: "/",
    siteName: "Asmitha Power Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asmitha Power Tech | Kirloskar Generator Partner",
    description: "Kirloskar Diesel Generator Sales, Service & AMC Experts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Asmitha Power Tech",
    "image": "/images/hero_generator.png",
    "telephone": "+91 9010201749",
    "email": "asmithapowertech@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H.No. 9-10-3/33SP, Surya Township, Roshanodwala",
      "addressLocality": "Saroornagar",
      "addressRegion": "Telangana",
      "postalCode": "500035",
      "addressCountry": "IN"
    },
    "url": "http://localhost:3000",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/asmithapowertech",
      "https://www.linkedin.com/company/asmithapowertech"
    ]
  };

  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col pt-[76px]">{children}</main>
        <Footer />
        <FloatingContacts />
      </body>
    </html>
  );
}
