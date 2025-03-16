import xenopomp from 'xenopomp-essentials/eslint';

type Params = Parameters<typeof xenopomp>;
type RiridOptions = Params[0];
type Options = Params[1];

const RIRID_CONFIG: RiridOptions = {
  rules: {
    'style/brace-style': 'off',
    'perfectionist/sort-imports': 'off',
    'antfu/if-newline': 'off',
    'perfectionist/sort-named-imports': 'off',
  },
};

/**
 * Default customizable config. Uses ririd under the hood.
 * @param options
 */
const config = (options?: Options) => {
  if (options) {
    return xenopomp(RIRID_CONFIG, options);
  }

  return xenopomp(RIRID_CONFIG);
};

export default config;
