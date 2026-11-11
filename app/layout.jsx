import './globals.css';
import './section-motion.css';

const siteUrl = 'https://theparkercollective.co'; // confirm this matches your live domain

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'The Parker Collective | Louisville Social Media Management',
  description:
    "Social media management, content creation, and strategy for Louisville businesses. Explore The Parker Collective's packages and work with Parker Wheatley.",
  icons: {
    icon: '/images/brand/parker-collective-icon.png',
    apple: '/images/brand/parker-collective-apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Parker Collective | Louisville Social Media Management',
    description:
      "Social media management, content creation, and strategy for Louisville businesses.",
    url: siteUrl,
    siteName: 'The Parker Collective',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Parker Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Parker Collective | Louisville Social Media Management',
    description:
      'Social media management, content creation, and strategy for Louisville businesses.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'The Parker Collective',
              founder: {
                '@type': 'Person',
                name: 'Parker Wheatley',
              },
              description:
                'Social media management, content creation, and strategy for Louisville businesses.',
              areaServed: 'Louisville, KY',
              url: siteUrl,
              email: 'theparkercollective.co@gmail.com',
              sameAs: [
                'https://instagram.com/theparkercollectiveco',
                'https://linktr.ee/theparkercollective',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}