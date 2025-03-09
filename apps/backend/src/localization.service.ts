import { Injectable } from '@nestjs/common';
import { JsonValue } from '@prisma/client/runtime/client';
import { z } from 'zod';

import { Locale } from '@repo/backend-types';

const schema = z.object({
  ru: z.string().optional(),
  en: z.string().optional(),
});

@Injectable()
export class LocalizationService {
  parse(obj: JsonValue): Locale {
    return schema.parse(obj);
  }
}
