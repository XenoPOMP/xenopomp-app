'use client';

import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useScrollLock } from 'usehooks-ts';
import type { VariableFC } from 'xenopomp-essentials';

import styles from '../styles/BurgerNavbar.module.scss';
import headerStyles from '../styles/Header.module.scss';

/**
 * Mobile burger menu for landing page.
 */
export const BurgerNavbar: VariableFC<'nav', unknown, 'children'> = ({
  className,
  ...props
}) => {
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  // Combined state with mount effect
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      lock();
    } else {
      unlock();
    }
  }, [open]);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const toggleNavbar = () => setOpen(p => !p);

  return (
    <>
      <nav
        className={cn(headerStyles.burgerMenu, 'relative', className)}
        {...props}
      >
        <div
          className={cn('relative z-[31]')}
          onClick={toggleNavbar}
        >
          Menu
        </div>

        <div
          aria-hidden
          data-opened={open}
          className={cn(styles.overflow)}
        ></div>

        <aside
          className={cn(styles.popup)}
          data-opened={open}
        >
          Popup
        </aside>
      </nav>
    </>
  );
};
