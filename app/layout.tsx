import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anchor Saili Rawool Panchal | 850+ Live Events, TEDx Speaker & Speaking Coach",
  description:
    "Official portfolio and masterclass booking terminal of Anchor Saili Rawool Panchal. Corporate anchor, luxury wedding emcee, TEDx speaker, and creator of the Live Anchoring Power Sessions in Mumbai & Navi Mumbai.",
  keywords: [
    "Anchor Saili",
    "Saili Rawool Panchal",
    "TEDx Speaker",
    "Corporate Anchor Mumbai",
    "Navi Mumbai Anchor",
    "Vashi Speaking Coach",
    "Wedding Emcee",
    "Anchoring Workshop",
    "Little Cubs Preschool",
    "Sailis Art Zone"
  ],
  authors: [{ name: "Saili Rawool Panchal" }],
  openGraph: {
    title: "Anchor Saili Rawool Panchal | Energy, Elegance & Authority",
    description: "850+ Events Hosted with Energy & Elegance. TEDx Speaker & Speaking Coach.",
    url: "https://sailirawoolpanchal.com",
    siteName: "Saili Rawool Panchal",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Anchor Saili Rawool Panchal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-walton-secondary antialiased selection:bg-walton-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
