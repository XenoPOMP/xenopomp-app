import {
  Delete,
  Get,
  Head,
  HttpCode,
  Options,
  Patch,
  Post,
  Put,
  applyDecorators,
} from '@nestjs/common';
import type { AllMethods } from 'supertest/types';
import type { Fn } from 'xenopomp-essentials';

type Method = keyof typeof methodsMap;
type Path = string | string[];

const methodsMap = {
  GET: Get,
  POST: Post,
  PUT: Put,
  PATCH: Patch,
  DELETE: Delete,
  HEAD: Head,
  OPTIONS: Options,
} satisfies Partial<
  Record<AllMethods | 'PATCH', Fn<[path: Path], MethodDecorator>>
>;

interface EndpointOptions {
  /** Return code on successful response. */
  code?: number;
}

/**
 * Unified endpoint decorator. Applies default values.
 * @param type
 * @param path
 * @param options
 * @constructor
 *
 * @example
 * \@Endpoint('GET', '/test', {
 *     code: 201,
 *   })
 *   async test(): Promise<DataResponse<string>> {
 *     return handleData('Test');
 *   }
 *
 * // GET http://localhost:3001/test 201
 */
export function Endpoint(type: Method, path?: Path, options?: EndpointOptions) {
  const method = methodsMap[type];
  const code = options?.code ?? 200;

  return applyDecorators(HttpCode(code), method(path));
}
