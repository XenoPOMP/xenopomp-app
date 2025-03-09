import { Injectable } from '@nestjs/common';
import type { JsonValue } from '@prisma/client/runtime/client';
import set from 'lodash.set';
import type { AnyObject } from 'xenopomp-essentials';
import { z } from 'zod';

import type { Locale, Localized } from '@repo/backend-types';

const schema = z.object({
  ru: z.string().optional(),
  en: z.string().optional(),
});

@Injectable()
export class LocalizationService {
  parse(obj: JsonValue): Locale {
    try {
      return schema.parse(obj);
    } catch {
      return {};
    }
  }

  parseObj<T extends AnyObject, K extends keyof T>(
    obj: T,
    localize: K[],
  ): Localized<T, K> {
    const clone = structuredClone(obj);

    for (const loc of localize) {
      const toParse = clone[loc];

      if (typeof toParse === 'object') {
        set(clone, [loc], this.parse(toParse));
        continue;
      }

      set(clone, [loc], {});
    }

    return clone as Localized<T, K>;
  }
}
