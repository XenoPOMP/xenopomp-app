import { Injectable } from '@nestjs/common';
import type { JsonValue } from '@prisma/client/runtime/client';
import { z } from 'zod';

import type { Locale } from '@repo/backend-types';

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
}
