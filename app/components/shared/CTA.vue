<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
  {
    label: 'Empezando',
    color: 'neutral',
  },
  {
    label: 'Más información',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
]);
</script>

<template>
  <UPageCTA
    title="Mi mejor material para ti"
    description="Soluciones informáticas para tu negocio de manera profesional y eficiente."
    orientation="horizontal"
    reverse
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
    />

    <!-- <template #links>
      <UButton
        label="Descargar"
        color="neutral"
        variant="solid"
        trailingIcon="i-lucide-arrow-right"
      />
    </template> -->
  </UPageCTA>
</template>
