import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export type NumberCountdownVariantsType = VariantProps<
  typeof numberCountdownVariants
>;

export const numberCountdownVariants = cva(
  'text-[2.25rem] !leading-[100%] font-extrabold',
  {
    variants: {
      variant: {
        primary: 'text-card-font',
        secondary: 'text-secondary-font',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
