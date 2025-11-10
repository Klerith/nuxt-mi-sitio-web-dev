// Actualizar producto

import z from 'zod';
import prisma from '~~/lib/prisma';

const bodySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(0),
  images: z.array(z.string()).min(1),
  tags: z.array(z.string()).min(1),
});

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') as string;

  const body = await readValidatedBody(event, bodySchema.parse);

  const product = await prisma.product.update({
    where: {
      id: +id,
    },
    data: body,
  });

  return {
    message: 'Product updated successfully',
    product,
  };
});
