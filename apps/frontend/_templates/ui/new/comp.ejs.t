---
to: src/components/ui/kit/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import type { FC } from 'react';

export const <%= h.changeCase.pascalCase(name) %>: FC<unknown> = () => {
  return <div></div>;
};
