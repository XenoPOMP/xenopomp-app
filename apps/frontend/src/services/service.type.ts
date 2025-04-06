import type { QueryKey } from '@tanstack/react-query';
import type { RecursiveKeyValuePair } from 'tailwindcss/types/config';

interface FuncPrompt {
  queryFn: (...args: any[]) => Promise<any>;
}

interface QueryPrompt {
  queryKey: QueryKey;
}

export type ServiceType = RecursiveKeyValuePair<
  string,
  FuncPrompt | (FuncPrompt & QueryPrompt)
>;
