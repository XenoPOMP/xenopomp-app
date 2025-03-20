import type { Options, UserConfigItem } from 'xenopomp-essentials/eslint';
import xenopomp from 'xenopomp-essentials/eslint';

const ANTFU_CONFIG: Options = {
  rules: {
    'style/brace-style': 'off',
    'perfectionist/sort-imports': 'off',
    'antfu/if-newline': 'off',
    'perfectionist/sort-named-imports': 'off',
  },
};

/**
 * Default customizable config. Uses ririd under the hood.
 * @param userConfigs
 */
const config = (...userConfigs: UserConfigItem[]) => {
  return xenopomp(ANTFU_CONFIG, ...userConfigs);
};

export default config;
