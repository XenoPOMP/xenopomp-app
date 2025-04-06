import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { Defined } from 'xenopomp-essentials';

export type LoadingVariantsType = VariantProps<typeof loadingVariants>;

export const loadingVariants = cva('', {
  variants: {
    variant: {
      circle: '',
      skeleton: 'animate-pulse rounded-[.125em]',
    },
  },

  defaultVariants: {
    variant: 'circle',
  },
});

export type Variant = Defined<NonNullable<LoadingVariantsType['variant']>>;
