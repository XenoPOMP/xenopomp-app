import { PlopTypes } from '@turbo/gen';

import { packageActions } from '../actions';

export const packageGenerator = (plop: PlopTypes.NodePlopAPI) => {
  plop.setGenerator('package', {
    description: 'Creates empty package in dedicated folder.',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'What is the name of the new package to create?',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'package name cannot include an extension';
          }
          if (input.includes(' ')) {
            return 'package name cannot include spaces';
          }
          if (!input) {
            return 'package name is required';
          }
          if (!input.startsWith('@repo')) {
            return 'package name should start with @repo';
          }
          return true;
        },
      },
    ],
    actions: packageActions,
  });
};
