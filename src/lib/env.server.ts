import { z } from 'zod';

const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string().url(),
});

const parsed = serverEnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    'Invalid server environment variables:',
    parsed.error.flatten().fieldErrors,
  );
  throw new Error('Invalid server environment variables');
}

export const serverEnv = parsed.data;
