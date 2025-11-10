import { z } from 'zod';
import prisma from '~~/lib/prisma';
import bcrypt from 'bcryptjs';

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

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Bad credentials (email)',
    });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: 'Bad credentials (password)',
    });
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
    },
  });
  return {
    message: 'Login successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
    },
  };
});
