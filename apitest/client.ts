import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// Type definitions
export interface Case {
  id?: string;
  title: string;
  description: string;
  client: string;
  category: string;
  tags?: string[];
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Blog {
  id?: string;
  title: string;
  description: string;
  content: string;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  tags?: string[];
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Company {
  id?: string;
  name: string;
  description: string;
  vision?: string;
  mission?: string;
  established?: string;
  address?: string;
  representative?: string;
  employees?: string;
  capital?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
