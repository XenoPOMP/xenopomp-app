---
to: src/components/ui/kit/index.tsx
inject: true
append: true
skip_if: <%= h.changeCase.pascalCase(name) %>
eof_last: false
---
export * from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>';
