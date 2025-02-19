import { z } from 'zod';

const clientEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

const parsed = clientEnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    'Invalid client environment variables:',
    parsed.error.flatten().fieldErrors,
  );
  throw new Error('Invalid client environment variables');
}

export const clientEnv = parsed.data;
