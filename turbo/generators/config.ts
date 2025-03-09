import { PlopTypes } from '@turbo/gen';

import { packageGenerator } from './setters';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  packageGenerator(plop);
}
