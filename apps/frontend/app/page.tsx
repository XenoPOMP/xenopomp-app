import type { Metadata } from 'next';

import { LandingLayout } from '@/components/layout';

import { AboutMeSection, HeroSection } from '@app/components';

export const metadata: Metadata = {
  title: 'Main',
};

/**
 * Home page at url/
 * @constructor
 */
export default function Home() {
  return (
    <>
      <LandingLayout>
        <LandingLayout.Header />

        <LandingLayout.Body>
          <HeroSection />
          <AboutMeSection />
        </LandingLayout.Body>
      </LandingLayout>
    </>
  );
}
