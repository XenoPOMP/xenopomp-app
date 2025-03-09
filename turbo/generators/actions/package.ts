import { PlopTypes } from '@turbo/gen';

export const packageActions: PlopTypes.ActionType[] = [
  {
    type: 'add',
    path: '{{ turbo.paths.root }}/{{ dashCase packageName }}/package.json',
    templateFile: 'templates/package/packageJson.hbs',
  },
];
