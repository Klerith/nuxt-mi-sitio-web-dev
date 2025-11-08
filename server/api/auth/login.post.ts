import { z } from 'zod';

const bodySchema = z.object({
  email: z
    .string()
    .toLowerCase()
    .trim()
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Email is not valid',
    }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  if (email === 'admin@admin.com' && password === 'iamtheadmin') {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: 'John Doe',
      },
    });
    return {};
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials',
  });
});
