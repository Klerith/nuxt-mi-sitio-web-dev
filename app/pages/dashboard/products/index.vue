<template>
  <div class="space-y-6">
    <!-- Header with Action Button -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Productos
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Gestiona y organiza tu catálogo de productos
        </p>
      </div>
      <UButton
        icon="i-lucide-plus"
        label="Agregar Producto"
        color="primary"
        size="lg"
      />
    </div>

    <UTable :data="products" :columns="columns" class="flex-1" />

    <SharedPagination
      :total="total"
      :model-value="currentPage"
      :per-page="perPage"
    />
  </div>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue';
import type { TableColumn } from '@nuxt/ui';

const UBadge = resolveComponent('UBadge');
const NuxtLink = resolveComponent('NuxtLink');

const { products, totalPages, currentPage, perPage, total } =
  await usePaginatedProducts();

const columns: TableColumn<Product>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`,
  },
  {
    accessorKey: 'images',
    header: 'Imagen',
    cell: ({ row }) => {
      const images = row.getValue('images') as string[];
      const url = Array.isArray(images) && images.length > 0 ? images[0] : '';
      if (!url) return h('span', { class: 'text-gray-400' }, 'Sin imagen');
      return h('img', {
        src: url,
        alt: 'Imagen del producto',
        style:
          'width: 48px; height: 48px; object-fit: cover; border-radius: 0.5rem;',
      });
    },
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ row }) =>
      h(
        NuxtLink,
        {
          to: `/dashboard/product/${row.getValue('id')}`,
          class: 'text-blue-500 hover:text-blue-700 underline cursor-pointer',
        },
        () => row.getValue('name')
      ),
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
    cell: ({ row }) =>
      h(
        'div',
        {
          style:
            'white-space: normal; word-break: break-word; max-width: 300px;',
          class: 'truncate-text',
        },
        String(row.getValue('description')).slice(0, 50) + '...'
      ),
  },
  {
    accessorKey: 'price',
    // La función h crea un nodo VNode manualmente: aquí, define el encabezado de la columna "Precio" alineado a la derecha.
    header: 'Precio',
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue('price'));
      const formatted = formatCurrency(price);
      return formatted;
    },
  },
  {
    accessorKey: 'tags',
    header: 'Etiquetas',
    cell: ({ row }) => {
      const tags = row.getValue('tags') as string[];
      if (!Array.isArray(tags)) return '';
      return h(
        'div',
        { class: 'flex flex-wrap gap-1' },
        tags.map((tag) =>
          h(
            UBadge,
            {
              size: 'xs',
              color: 'primary',
              variant: 'subtle',
              class: 'mr-0.5',
            },
            () => tag
          )
        )
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Creado',
    cell: ({ row }) => {
      const val = row.getValue('createdAt');
      return val ? dayMonthYearFormat(new Date(val as string)) : '';
    },
  },
];
</script>
