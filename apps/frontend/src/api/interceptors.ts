import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

import { env } from '@/utils/env.ts';

const options: CreateAxiosDefaults = {
  baseURL: `${env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
};

/** Instance for accessing backend without auth token. */
const axiosClassic = axios.create(options);

export { axiosClassic };
