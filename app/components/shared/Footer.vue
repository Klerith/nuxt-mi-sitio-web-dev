<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
  {
    label: 'GitHub',
    to: 'https://github.com/klerith',
    target: '_blank',
  },
  {
    label: 'Fernando Herrera',
    to: 'https://fernando-herrera.com',
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/fernando-herrera-b6b204200/',
    target: '_blank',
  },
];
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Derechos reservados © {{ new Date().getFullYear() }}
      </p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
