import type Link from 'next/link';
import type { ComponentProps, PropsWithChildren } from 'react';

type LandingNavbarItem = PropsWithChildren<
  Pick<ComponentProps<typeof Link>, 'href'>
>;

export const landingNavbarItems: LandingNavbarItem[] = [
  {
    children: 'Главная',
    href: '/',
  },
  {
    children: 'Проекты',
    href: '/projects',
  },
];
