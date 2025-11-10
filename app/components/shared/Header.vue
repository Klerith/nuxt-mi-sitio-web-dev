<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const { isLoggedIn, logout } = useAuthentication();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Productos',
    to: '/products',
    active: route.path.startsWith('/products'),
  },
  {
    label: 'Precios',
    to: '/pricing',
    active: route.path.startsWith('/pricing'),
  },
  {
    label: 'Nosotros',
    to: '/about',
    active: route.path.startsWith('/about'),
  },
  {
    label: 'Contacto',
    to: '/contact',
    active: route.path.startsWith('/contact'),
  },
]);

// TODO: falta determinar el estado de la sesión del usuario
const responsiveItems = computed(() => [
  ...items.value,
  {
    label: 'Iniciar sesión',
    to: '/login',
    active: route.path.startsWith('/login'),
  },
]);
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <IconsNuxtui class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UButton
        v-if="!isLoggedIn"
        color="primary"
        variant="solid"
        icon="i-heroicons-user-circle"
        aria-label="Login"
        to="/login"
        label="Login"
      />

      <UButton
        v-else
        variant="ghost"
        icon="i-heroicons-user"
        aria-label="Cerrar sesión"
        label="Logout"
        class="cursor-pointer"
        @click="logout"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="responsiveItems"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
