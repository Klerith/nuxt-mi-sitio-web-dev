import prisma from '../lib/prisma.ts';
import { siteReviews } from './site-reviews.seed.ts';
import { products } from './products.seed.ts';

async function seedDatabase() {
  // Purgar la base de datos
  await prisma.siteReview.deleteMany();
  await prisma.product.deleteMany();

  await prisma.siteReview.createMany({
    data: siteReviews,
  });

  await prisma.product.createMany({
    data: products,
  });
  console.log('Database seeded successfully');
}

seedDatabase();
