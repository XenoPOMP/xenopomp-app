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
            return 'file name cannot include an extension';
          }
          if (input.includes(' ')) {
            return 'file name cannot include spaces';
          }
          if (!input) {
            return 'file name is required';
          }
          return true;
        },
      },
    ],
    actions: packageActions,
  });
};
