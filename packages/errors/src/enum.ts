type CreateEnum<C extends string> = Readonly<{
  [Code in C]: Code;
}>;

/**
 * Creates enum as object.
 * @param codes
 * @example
 * createEnum('FIRST', 'SECOND')
 * // ^? { FIRST: 'FIRST', SECOND: 'SECOND' }
 */
export const createEnum = <C extends string>(...codes: C[]): CreateEnum<C> => {
  const res: Partial<CreateEnum<C>> = {};

  for (const code of codes) {
    res[code] = code;
  }

  return res as CreateEnum<C>;
};
