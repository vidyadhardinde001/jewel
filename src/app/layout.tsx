import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Manali 💖 | A Little World Made Just for You",
  description:
    "A small corner of the internet made with love to celebrate Manali’s birthday — filled with memories, smiles, and moments close to my heart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/heart.ico" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />

        {/* Romantic Keywords */}
        <meta
          name="keywords"
          content="Manali birthday, happy birthday Manali, love memories, birthday surprise website, love gallery"
        />

        <meta name="robots" content="index, follow" />
        <meta name="application-name" content="Manali 💖" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={String(metadata.title)} />
        <meta property="og:description" content={String(metadata.description)} />
        <meta property="og:image" content="/assets/manali-og.jpg" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:site_name" content="For Manali 💕" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title)} />
        <meta
          name="twitter:description"
          content={String(metadata.description)}
        />
        <meta name="twitter:image" content="/assets/manali-og.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://your-domain.com/" />

        {/* 💝 Schema: Birthday + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Manali’s Birthday 💖",
              "description":
                "A personal birthday website created with love to celebrate Manali.",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "startDate": "2025-01-06",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://your-domain.com/"
              },
              "organizer": {
                "@type": "Person",
                "name": "Someone who loves Manali"
              }
            }),
          }}
        />
      </head>

      <body
        className={twMerge(
          montserrat.className,
          "antialiased bg-gradient-to-b from-pink-50 via-rose-50 to-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
