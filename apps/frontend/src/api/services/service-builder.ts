import type { QueryKey } from '@tanstack/react-query';
import type { EmptyObject } from 'xenopomp-essentials';

interface FnPrompt<
  Func extends (...args: any[]) => Promise<any> = (
    ...args: any[]
  ) => Promise<any>,
> {
  fn: Func;
}

interface QueryPrompt {
  queryKey: QueryKey;
}

export class ServiceBuilder<
  T extends Record<string, FnPrompt | (FnPrompt & QueryPrompt)> = EmptyObject,
> {
  private _serviceObj: T;

  constructor(newObj: T) {
    this._serviceObj = newObj;
  }

  func<Name extends string, Func extends (...args: any[]) => Promise<any>>(
    name: Name,
    options: FnPrompt<Func>,
  ): ServiceBuilder<T & Record<Name, FnPrompt<Func>>>;

  func<Name extends string, Func extends (...args: any[]) => Promise<any>>(
    name: Name,
    options: FnPrompt<Func> & QueryPrompt,
  ): ServiceBuilder<T & Record<Name, FnPrompt<Func> & QueryPrompt>>;

  func<Name extends string, Func extends (...args: any[]) => Promise<any>>(
    name: Name,
    options: (FnPrompt<Func> & QueryPrompt) | FnPrompt<Func>,
  ) {
    return new ServiceBuilder({
      ...this._serviceObj,
      [name]: options,
    });
  }

  build() {
    return this._serviceObj;
  }
}
