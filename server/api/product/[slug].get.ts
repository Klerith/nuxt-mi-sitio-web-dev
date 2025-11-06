import prisma from '~~/lib/prisma';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
  });

  // console.log({ product });

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: `Not found`,
      message: `Product with slug ${slug} not found`,
      data: {
        slug,
        stage: process.env.STAGE,
        more: 'more information',
      },

      stack: process.env.STAGE !== 'prod' ? new Error().stack : '',
    });
  }

  return product;
});
