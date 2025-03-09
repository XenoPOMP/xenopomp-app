import { PlopTypes } from '@turbo/gen';

const createTemplate = (
  filename: string,
  template: string,
): PlopTypes.ActionType => ({
  type: 'add',
  path: `{{ turbo.paths.root }}/{{ dashCase packageName }}/${filename}`,
  templateFile: `templates/package/${template}`,
});

export const packageActions: PlopTypes.ActionType[] = [
  createTemplate('package.json', 'packageJson.hbs'),
  createTemplate('tsconfig.json', 'tsconfig.hbs'),
  createTemplate('eslint.config.ts', 'eslint.hbs'),
  createTemplate('index.ts', 'index.hbs'),
];
