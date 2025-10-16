<script setup lang="ts">
// throw new Error('Auxilio, esto no se puede hacer.');
// throw createError({
//   statusCode: 500,
//   statusMessage: 'No se puede dividir entre 0',
//   data: {
//     myCustomField: true,
//     myOtherField: 'Hola mundo',
//   },
// });

const products = ref<Product[]>([
  {
    id: '1',
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    images: ['https://picsum.photos/200/300'],
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
    images: ['https://picsum.photos/200/300'],
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description 3',
    price: 300,
    images: ['https://picsum.photos/200/300'],
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'Description 4',
    price: 400,
    images: ['https://picsum.photos/200/300'],
    tags: ['tag1', 'tag2', 'tag3'],
  },
]);
</script>

<template>
  <UPageCTA
    orientation="horizontal"
    title="Productos"
    description="Descubre nuestros productos y servicios."
  >
    <template #default>
      <div class="flex items-center justify-center">
        <UIcon name="i-lucide-box" :size="150" />
      </div>
    </template>
  </UPageCTA>

  <div class="mt-10" />

  <ProductsGrid :products="products" />

  <SharedPagination :total="100" :model-value="1" :per-page="10" />
</template>

<style scoped></style>
