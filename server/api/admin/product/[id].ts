// https://nuxt.com/docs/4.x/guide/directory-structure/server#server-middleware
import { Product } from '@prisma/client';
import prisma from '~~/lib/prisma';

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const hasAdminRole = session.user.roles?.includes('admin');

  // if (!hasAdminRole) {
  //   throw createError({
  //     statusCode: 403,
  //     statusMessage: 'Forbidden',
  //     message: 'Admin role required',
  //   });
  // }

  const id = getRouterParam(event, 'id') as string;

  if (id === 'new') {
    return {
      id: 0,
      slug: '',
      name: '',
      description: '',
      price: 0,
      images: [],
      tags: [],
    } as unknown as Product;
  }

  const product = await prisma.product.findUnique({
    where: {
      id: +id,
    },
  });

  return product;
});
