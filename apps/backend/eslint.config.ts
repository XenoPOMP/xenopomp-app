import xenopomp from 'xenopomp-essentials/eslint';

export default xenopomp(
  {
    react: false,
    next: false,
  },
  {
    rules: {
      'ts/consistent-type-imports': [
        'error',
        {
          prefer: 'no-type-imports',
        },
      ],
    },
  },
);
