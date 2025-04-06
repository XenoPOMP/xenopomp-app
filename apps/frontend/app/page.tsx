import type { Metadata } from 'next';

import { LandingLayout } from '@/components/layout';
import { Stack } from '@/components/ui';

import { HeroSection } from '@app/components';

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

          <Stack>index page</Stack>
        </LandingLayout.Body>
      </LandingLayout>
    </>
  );
}
