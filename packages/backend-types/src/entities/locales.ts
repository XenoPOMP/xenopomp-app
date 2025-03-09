import { AnyObject } from 'xenopomp-essentials';

type Lang = 'ru' | 'en';

/** Parsed locale from JSON in database. */
export type Locale = {
  [K in Lang]?: string;
};

/** Make certain keys localized. */
export type Localized<T extends AnyObject, K extends keyof T> = Omit<T, K> & {
  [Key in K]: Locale;
};
