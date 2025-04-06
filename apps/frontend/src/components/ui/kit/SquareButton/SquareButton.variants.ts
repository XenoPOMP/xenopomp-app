import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import cn from 'classnames';

export type SquareButtonVariantsType = VariantProps<
  typeof squareButtonVariants
>;

export const squareButtonVariants = cva('', {
  variants: {
    variant: {
      default: cn(
        // Not hovered
        'size-[4rem] p-[1rem] [&>svg]:size-[2rem] rounded-[.8rem] text-primary-font border border-primary-font/50',
        'transition-colors',

        // Hovered
        'hover:bg-card-bg hover:border-transparent hover:text-card-font',
      ),
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
