import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ironridgeservice.com",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.name} | Fleet, Repair & Equipment Support`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional mobile service, shop repair, fleet maintenance, and equipment sales for Colorado businesses and vehicle owners.",
  openGraph: {
    title: siteConfig.name,
    description:
      "One dependable source for mobile service, auto and diesel repair, fleet support, and equipment supply.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/branding/iron-ridge-service-header.jpg",
        width: 485,
        height: 228,
        alt: "Iron Ridge Service — Built to keep you moving",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Fleet, repair, mobile service, and equipment support throughout Colorado.",
    images: ["/images/branding/iron-ridge-service-header.jpg"],
  },
  icons: {
    icon: "/images/branding/iron-ridge-service-badge.jpg",
    apple: "/images/branding/iron-ridge-service-badge.jpg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
