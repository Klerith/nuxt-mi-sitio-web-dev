import prisma from '../lib/prisma.ts';
import { users } from './users.seed.ts';
import { siteReviews } from './site-reviews.seed.ts';
import { products } from './products.seed.ts';

import bcrypt from 'bcryptjs';

async function seedDatabase() {
  // Purgar la base de datos
  await prisma.siteReview.deleteMany();
  await prisma.product.deleteMany();

  await prisma.user.deleteMany();

  // Los usuarios necesitan encriptar la contraseña
  const usersWithHashedPassword = users.map((user) => ({
    ...user,
    // el salt sirve para que la contraseña no sea la misma en la base de datos
    // el salt es un numero aleatorio que se agrega a la contraseña para que no sea la misma
    password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10)),
  }));

  await prisma.user.createMany({
    data: usersWithHashedPassword,
  });

  await prisma.siteReview.createMany({
    data: siteReviews,
  });

  await prisma.product.createMany({
    data: products,
  });
  console.log('Database seeded successfully');
}

seedDatabase();
