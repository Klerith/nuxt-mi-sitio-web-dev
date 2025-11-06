import prisma from '~~/lib/prisma';

export default defineEventHandler(async (event) => {
  // Obtener limit y offset desde los parámetros de consulta
  const query = getQuery(event);

  let limit = parseInt(query.limit as string, 10);
  let offset = parseInt(query.offset as string, 10);

  // Validaciones y valores por defecto
  if (isNaN(limit) || limit <= 0) limit = 10;
  if (isNaN(offset) || offset < 0) offset = 0;

  const total = await prisma.product.count();
  const totalPages = Math.ceil(total / limit);

  const products = await prisma.product.findMany({
    take: limit,
    skip: offset,
  });

  return {
    products,
    totalPages,
    currentPage: offset / limit + 1,
    perPage: limit,
    total,
  };
});
