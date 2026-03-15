import type { Metadata, Viewport } from 'next';

import { portfolioData } from '@/content/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  applicationName: 'Gourav Sharma Portfolio',
  authors: [{ name: 'Gourav Sharma' }],
  creator: 'Gourav Sharma',
  publisher: 'Gourav Sharma',
  alternates: { canonical: '/' },
  openGraph: { title: portfolioData.seo.title, description: portfolioData.seo.description, url: siteUrl, siteName: 'Gourav Sharma Portfolio', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: portfolioData.seo.title, description: portfolioData.seo.description },
};

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050816' },
    { media: '(prefers-color-scheme: light)', color: '#f8fbff' },
  ],
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gourav Sharma',
  jobTitle: 'Full Stack Mobile Developer',
  description: portfolioData.seo.description,
  email: 'mailto:gsharmafp@gmail.com',
  url: siteUrl,
  sameAs: portfolioData.contact.socialLinks.filter((item) => !item.placeholder).map((item) => item.href),
  knowsAbout: portfolioData.tech.flatMap((category) => category.items),
};
