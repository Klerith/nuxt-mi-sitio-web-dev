<script setup lang="ts">
const { data } = await useFetch('/api/home/reviews');
const reviews = data.value?.reviews;
</script>

<template>
  <UPageSection
    title="Testimonios"
    description="Nuestros testimonios de clientes satisfechos."
    headline="Testimonios"
  />

  <UPageColumns>
    <UPageCard
      variant="solid"
      to="https://cloudflare.com"
      icon="i-logos-cloudflare-icon"
      title="Cloudflare Workers LaunchPad"
      description="NuxtHub forma parte de la cohorte Workers Launchpad de Cloudflare para asegurarse de que obtenga una experiencia de primer nivel sobre la red de Cloudflare."
      :ui="{ leadingIcon: 'size-10' }"
    />

    <UPageCard
      v-for="(testimonial, index) in reviews"
      :key="index"
      variant="subtle"
      :description="testimonial.description"
      :ui="{
        description: 'before:content-[open-quote] after:content-[close-quote]',
      }"
    >
      <template #footer>
        <UUser
          :name="testimonial.name"
          :description="testimonial.subtitle"
          :avatar="{ src: testimonial.profileImage }"
          size="xl"
        />
      </template>
    </UPageCard>
  </UPageColumns>
</template>
