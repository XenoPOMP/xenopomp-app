import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { For } from '@/components/layout';
import { HStack } from '@/components/ui';
import { Logo, NavbarItem } from '@/components/ui/kit';

import { landingNavbarItems } from '@app/constants';

import styles from '../styles/Header.module.scss';

/** */
export const Internal_LandingHeader: VariableFC<
  'header',
  unknown,
  'children'
> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        styles.landingHeader,
        'h-[--landing-header-height]',
        'border-b border-b-static-border',
        className,
      )}
      {...props}
    >
      <HStack asChild>
        <div className={cn(styles.grid)}>
          <article>
            <Logo />
          </article>

          <nav>
            <ul className={cn(styles.list)}>
              <For each={landingNavbarItems}>
                {({ children, href }, idx) => (
                  <li
                    className={cn('text-14')}
                    key={idx}
                  >
                    <NavbarItem
                      href={href}
                      className={cn(styles.navbarItem)}
                    >
                      {children}
                    </NavbarItem>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </div>
      </HStack>
    </header>
  );
};
