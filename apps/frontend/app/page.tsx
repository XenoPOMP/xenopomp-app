import cn from 'classnames';
import type { Metadata } from 'next';

import { LandingLayout } from '@/components/layout';
import { Stack } from '@/components/ui';

import styles from './main-page.module.scss';

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
          <Stack>index page</Stack>
        </LandingLayout.Body>
      </LandingLayout>
    </>
  );
}
