import config from '@repo/eslint-config';

export default config({
  rules: {
    'react/no-forward-ref': 'off',
    'react/ensure-forward-ref-using-ref': 'off',
  },
});
