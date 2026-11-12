import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    // KV_URL is the name Vercel's Upstash integration uses for the same URL.
    const url = process.env.REDIS_URL ?? process.env.KV_URL ?? 'redis://localhost:6379';
    redis = new Redis(url, {
      lazyConnect: false,
      maxRetriesPerRequest: 2,
    });
  }
  return redis;
}
