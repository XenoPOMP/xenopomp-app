import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import type { SquareButtonVariantsType } from './SquareButton.variants';
import { squareButtonVariants } from './SquareButton.variants';

// eslint-disable-next-line jsdoc/require-jsdoc
export const SquareButton: VariableFC<'button', SquareButtonVariantsType> = ({
  className,
  children,
  type = 'button',
  variant,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(squareButtonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
