import xenopomp from 'xenopomp-essentials/eslint';

export default xenopomp({
  rules: {
    'ts/consistent-type-imports': [
      'error',
      {
        prefer: 'no-type-imports',
      },
    ],
  },
});
