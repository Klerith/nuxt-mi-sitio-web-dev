import prisma from '../lib/prisma.ts';
import { siteReviews } from './site-reviews.seed.ts';

async function seedDatabase() {
  // Purgar la base de datos
  await prisma.siteReview.deleteMany();

  await prisma.siteReview.createMany({
    data: siteReviews,
  });

  console.log('Database seeded successfully');
}

seedDatabase();
