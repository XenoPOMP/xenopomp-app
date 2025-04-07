import type { FC, PropsWithChildren } from 'react';

import { LandingLayout } from '@/components/layout';

// eslint-disable-next-line jsdoc/require-jsdoc
const LandingLikePagesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LandingLayout>
        <LandingLayout.Header />

        <LandingLayout.Body>{children}</LandingLayout.Body>
      </LandingLayout>
    </>
  );
};

export default LandingLikePagesLayout;
