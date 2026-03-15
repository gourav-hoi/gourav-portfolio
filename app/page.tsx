import Script from 'next/script';

import { PageShell } from '@/components/layout/page-shell';
import { portfolioData } from '@/content/portfolio';
import { personJsonLd } from '@/utils/seo';

export default function Home() {
  return (
    <>
      <Script id="person-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <PageShell data={portfolioData} />
    </>
  );
}
