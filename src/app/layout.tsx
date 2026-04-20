import type { Metadata, Viewport } from "next"
import "./globals.css"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dsbarber.com.br"),
  title: {
    default: "Dsbarber Shop | Barbearia Premium Boa Vista RR",
    template: "%s | Dsbarber Shop",
  },
  description: "A melhor barbearia de Boa Vista! Corte masculino, barba, degradê e muito mais. Nota 4,9 com 135 avaliações. Promo Terça com pagamento à vista. Agende seu horário!",
  keywords: [
    "barbearia boa vista",
    "barbearia buritis",
    "corte masculino boa vista",
    "barba boa vista rr",
    "degradê boa vista",
    "barbeiro boa vista",
    "dsbarber shop",
    "barbearia premium rr",
    "corte de cabelo boa vista",
    "barbearia roraima"
  ],
  authors: [{ name: "Dsbarber Shop" }],
  creator: "Dsbarber Shop",
  publisher: "Dsbarber Shop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dsbarber.com.br",
  },
  openGraph: {
    title: "Dsbarber Shop | Barbearia Premium Boa Vista RR",
    description: "Mais que um corte. Uma assinatura. Experiência premium de cuidados masculinos na melhor barbearia de Boa Vista.",
    url: "https://dsbarber.com.br",
    siteName: "Dsbarber Shop",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Dsbarber Shop - Barbearia Premium em Boa Vista RR",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dsbarber Shop | Barbearia Premium Boa Vista RR",
    description: "Mais que um corte. Uma assinatura. O melhor destino de cuidados masculinos de Boa Vista.",
    images: ["/image.png"],
    creator: "@dsbarber_rr",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: "business",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "Dsbarber Shop",
  "image": "https://dsbarber.com.br/image.png",
  "@id": "https://dsbarber.com.br",
  "url": "https://dsbarber.com.br",
  "telephone": "+5595991267894",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. dos Bandeirantes, 1509",
    "addressLocality": "Boa Vista",
    "addressRegion": "RR",
    "postalCode": "69309-185",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 2.8235,
    "longitude": -60.6753
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/dsbarber_rr/",
    "https://www.facebook.com/p/dsbarbershop-100063505786108/"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "135"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://videos.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dsbarber Shop" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-[#fafafa] overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
