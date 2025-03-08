import { Injectable } from '@nestjs/common';
import { JsonValue } from '@prisma/client/runtime/client';
import { z } from 'zod';

const schema = z.object({
  ru: z.string().optional(),
  en: z.string().optional(),
});

export type Locale = ReturnType<(typeof schema)['parse']>;

@Injectable()
export class LocalizationService {
  parse(obj: JsonValue): Locale {
    return schema.parse(obj);
  }
}
