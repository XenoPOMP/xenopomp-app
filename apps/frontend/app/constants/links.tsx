import { SiGithub } from '@icons-pack/react-simple-icons';
import type Link from 'next/link';
import type { ComponentProps, PropsWithChildren } from 'react';

type LinksObject = PropsWithChildren<Pick<ComponentProps<typeof Link>, 'href'>>;

export const PageRoutes = {
  landingHome: '/',
  projects: '/projects',
};

export const landingNavbarItems: LinksObject[] = [
  {
    children: 'Главная',
    href: PageRoutes.landingHome,
  },
  {
    children: 'Проекты',
    href: PageRoutes.projects,
  },
];

export const socialsLinkItems: LinksObject[] = [
  {
    href: 'https://github.com/XenoPOMP',
    children: <SiGithub />,
  },
  {
    href: '/',
    children: (
      <svg
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M31.8971 28.6019H28.6799V22.0499C28.6799 20.7499 28.6201 19.9259 28.4945 19.576C28.3749 19.2241 28.1597 18.9479 27.8487 18.744C27.5437 18.5341 27.155 18.43 26.6886 18.43C26.1564 18.43 25.678 18.564 25.2594 18.8301C24.8408 19.0962 24.5328 19.4941 24.3385 20.026C24.1441 20.56 24.0484 21.3478 24.0484 22.3901V28.6019H20.8312V10.9741H24.0484V17.7779C25.083 16.5419 26.3238 15.92 27.765 15.92C28.5035 15.92 29.1703 16.062 29.7683 16.344C30.3633 16.622 30.8088 16.982 31.1108 17.4158C31.4128 17.8542 31.6191 18.3358 31.7297 18.8659C31.8403 19.3919 31.8971 20.2141 31.8971 21.3281V28.6019ZM19.2226 28.6019H16.0054V22.0499C16.0054 20.7499 15.9486 19.9259 15.823 19.576C15.7004 19.2241 15.4881 18.9479 15.1771 18.744C14.8662 18.5341 14.4805 18.43 14.0141 18.43C13.4818 18.43 13.0064 18.564 12.5878 18.8301C12.1662 19.0962 11.8583 19.4941 11.6639 20.026C11.4696 20.56 11.3709 21.3478 11.3739 22.3901L11.3709 28.6019H8.15667V10.9741H11.3739V17.7779C12.4084 16.5419 13.6523 15.92 15.0905 15.92C15.832 15.92 16.4987 16.062 17.0937 16.344C17.6917 16.622 18.1372 16.982 18.4392 17.4158C18.7442 17.8542 18.9475 18.3358 19.0581 18.8659C19.1688 19.3919 19.2226 20.2141 19.2226 21.3281V28.6019ZM20 0C8.95199 0 0 8.95413 0 20C0 31.0459 8.95199 40 20 40C31.045 40 40 31.0459 40 20C40 8.95413 31.045 0 20 0Z'
          fill='currentColor'
        />
      </svg>
    ),
  },
];
