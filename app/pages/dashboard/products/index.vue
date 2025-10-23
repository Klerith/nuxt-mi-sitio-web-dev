<template>
  <div class="space-y-6">
    <!-- Header with Action Button -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Products
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Manage and organize your product catalog
        </p>
      </div>
      <UButton
        icon="i-lucide-plus"
        label="Add Product"
        color="primary"
        size="lg"
      />
    </div>

    <!-- Filters and Search -->
    <UCard>
      <div class="flex flex-col sm:flex-row gap-4">
        <UInput
          v-model="searchQuery"
          icon="i-lucide-search"
          placeholder="Search products..."
          class="flex-1"
        />
        <USelect
          v-model="selectedCategory"
          :options="categories"
          placeholder="Filter by category"
          class="w-full sm:w-48"
        />
        <UButton icon="i-lucide-filter" color="neutral" variant="outline">
          Advanced
        </UButton>
      </div>
    </UCard>

    <!-- Products Table -->
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">Product List</h2>
          <UBadge variant="subtle"
            >{{ filteredProducts.length }} products</UBadge
          >
        </div>
      </template>

      <UTable
        :rows="filteredProducts"
        :columns="tableColumns"
        :loading="isLoading"
      >
        <!-- Product Name Column -->
        <template #name-data="{ row }">
          <div class="flex items-center gap-3">
            <UAvatar :src="row.image" :alt="row.name" size="md" />
            <div>
              <p class="font-medium text-gray-900 dark:text-white">
                {{ row.name }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ row.sku }}
              </p>
            </div>
          </div>
        </template>

        <!-- Price Column -->
        <template #price-data="{ row }">
          <span class="font-semibold text-gray-900 dark:text-white">
            ${{ row.price.toFixed(2) }}
          </span>
        </template>

        <!-- Stock Column -->
        <template #stock-data="{ row }">
          <UBadge
            :color="row.stock > 10 ? 'green' : row.stock > 0 ? 'yellow' : 'red'"
            variant="subtle"
          >
            {{ row.stock }} units
          </UBadge>
        </template>

        <!-- Status Column -->
        <template #status-data="{ row }">
          <UBadge
            :color="row.status === 'active' ? 'green' : 'gray'"
            variant="subtle"
          >
            {{ row.status }}
          </UBadge>
        </template>

        <!-- Actions Column -->
        <template #actions-data="{ row }">
          <UDropdownMenu
            :items="getRowActions(row)"
            :popper="{ placement: 'bottom-end' }"
          >
            <UButton
              icon="i-lucide-more-vertical"
              color="neutral"
              variant="ghost"
              square
            />
          </UDropdownMenu>
        </template>
      </UTable>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'dashboard-layout',
});

// Data
const searchQuery = ref('');
const selectedCategory = ref(null);
const isLoading = ref(false);

const categories = ['Electronics', 'Clothing', 'Food', 'Services'];

const products = ref([
  {
    id: 1,
    name: 'Premium Laptop',
    sku: 'PROD-001',
    category: 'Electronics',
    price: 1299.99,
    stock: 45,
    status: 'active',
    image: 'https://github.com/nuxtui.png',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    sku: 'PROD-002',
    category: 'Electronics',
    price: 29.99,
    stock: 5,
    status: 'active',
    image: 'https://github.com/nuxtui.png',
  },
  {
    id: 3,
    name: 'USB-C Cable',
    sku: 'PROD-003',
    category: 'Electronics',
    price: 12.99,
    stock: 0,
    status: 'inactive',
    image: 'https://github.com/nuxtui.png',
  },
  {
    id: 4,
    name: 'T-Shirt Classic',
    sku: 'PROD-004',
    category: 'Clothing',
    price: 24.99,
    stock: 120,
    status: 'active',
    image: 'https://github.com/nuxtui.png',
  },
  {
    id: 5,
    name: 'Coffee Beans',
    sku: 'PROD-005',
    category: 'Food',
    price: 15.99,
    stock: 85,
    status: 'active',
    image: 'https://github.com/nuxtui.png',
  },
]);

// Computed
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory =
      !selectedCategory.value || product.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

// Columns for the table
const tableColumns = [
  { key: 'name', label: 'Product' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price' },
  { key: 'stock', label: 'Stock' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', sortable: false },
];

// Methods
function getRowActions(row: any) {
  return [
    [
      {
        label: 'Edit',
        icon: 'i-lucide-pencil',
        click: () => handleEdit(row),
      },
      {
        label: 'View Details',
        icon: 'i-lucide-eye',
        click: () => handleViewDetails(row),
      },
    ],
    [
      {
        label: 'Delete',
        icon: 'i-lucide-trash-2',
        color: 'red',
        click: () => handleDelete(row),
      },
    ],
  ];
}

function handleEdit(product: any) {
  console.log('Edit product:', product);
}

function handleViewDetails(product: any) {
  console.log('View details:', product);
}

function handleDelete(product: any) {
  console.log('Delete product:', product);
}
</script>
