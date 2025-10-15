<script setup lang="ts">
const testimonials = ref([
  {
    user: {
      name: 'Evan You',
      description: 'Autor de Vue.js y Vite',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/499550?v=4',
        alt: 'Evan You',
      },
    },
    quote:
      '¡Nuxt en la infraestructura de Cloudflare con un esfuerzo mínimo, esto es enorme!',
  },
  {
    user: {
      name: 'Igor Minar',
      description: 'Ingeniero de software en Cloudflare',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/216296?v=4',
        alt: 'Igor Minar',
      },
    },
    quote:
      'Me encanta el acabado y el enfoque con todo incluido. NuxtHub lleva la integración entre framework web y hosting a un nuevo nivel.',
  },
  {
    user: {
      name: 'Charlie Hield',
      description: 'Tecnólogo creativo senior',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/527849?v=4',
        alt: 'Charlie Hield',
      },
    },
    quote:
      'NuxtHub es, sin duda, la forma más fácil de llevar un proyecto de cero a producción en la pila de Cloudflare.',
  },
  {
    user: {
      name: 'Israel Ortuño',
      description: 'Cofundador de VueJobs',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/1769417?v=4',
        alt: 'Israel Ortuño',
      },
    },
    quote:
      'No encuentro una excusa para no hacer full-stack con Nuxt desde ahora. Envía rápido al estilo Nuxt, cero configuración. Solo conecta y despliega.',
  },
  {
    user: {
      name: 'Fayaz Ahmed',
      description: 'Indie Hacker',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/15716057?v=4',
        alt: 'Fayaz Ahmed',
      },
    },
    quote:
      'Me tomó menos de 90 segundos desplegar una app con DB, KV, almacenamiento de archivos y caché, todo en el edge con solo un comando.',
  },
  {
    user: {
      name: 'Tommy J. Vedvik',
      description: 'Desarrollador UX',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/48070?v=4',
        alt: 'Tommy J. Vedvik',
      },
    },
    quote:
      'Nuxt se está convirtiendo en el mejor framework para bootstrappers en mi opinión. NuxtHub es una capa sobre los servicios de Cloudflare para un hosting full-stack en edge, económico y rápido.',
  },
  {
    user: {
      name: 'Dario Piotrowicz',
      description: 'Desarrollador Web en Cloudflare',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/61631103?v=4',
        alt: 'Dario Piotrowicz',
      },
    },
    quote:
      'Me encanta cómo NuxtHub combina, amplifica y simplifica las herramientas de Cloudflare con el ecosistema amplio y maduro de Nuxt. ¡Tengo muchas ganas de ver cómo evolucionará y crecerá en el futuro!',
  },
  {
    user: {
      name: 'Markus Oberlehner',
      description: 'Desarrollador Web',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/6883314?v=4',
        alt: 'Markus Oberlehner',
      },
    },
    quote:
      'Acabo de desplegar mi primer sitio en Cloudflare usando NuxtHub. ¡Una experiencia muy elegante!',
  },
  {
    user: {
      name: 'Anthony Fu',
      description: 'Equipo principal de Vue.js, Vite y Nuxt',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/11247099?v=4',
        alt: 'Anthony Fu',
      },
    },
    quote:
      '¡Es increíble poder ejecutar un solo comando y desplegar un proyecto Nuxt existente en el edge en minutos! Se siente como desbloquear la infraestructura y la interfaz que faltaban en Cloudflare, mejorando la experiencia del desarrollador de una forma extraordinaria.',
  },
  {
    user: {
      name: 'Jonathan Beckman',
      description: 'Fundador de GuaranTee Time',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/90707158?v=4',
        alt: 'Jonathan Beckman',
      },
    },
    quote:
      'NuxtHub y Cloudflare son mi elección preferida para apps full stack. La experiencia de desarrollo es placentera y muy superior a cualquier otra plataforma que haya usado. Mi equipo puede iterar rápidamente y construir apps hermosas y de alto rendimiento con facilidad.',
  },
  {
    user: {
      name: 'Eckhardt Dreyer',
      description: 'Desarrollador principal en YG',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/37825447?v=4',
        alt: 'Eckhardt Dreyer',
      },
    },
    quote:
      'En YG, nuestro equipo creció recientemente y eso significó más licencias en todas las herramientas que usamos. Migrar nuestro flujo de hosting a NuxtHub no solo tomó unos minutos, sino que también nos ahorró dinero comparado con nuestro proveedor anterior. NuxtHub provee una excelente capa de gestión sobre nuestra infraestructura y estamos muy contentos con el cambio.',
  },
]);
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
      title="Cloudflare's Workers LaunchPad"
      description="NuxtHub is part of the Cloudflare's Workers Launchpad Cohort to make sure you get a first-class experience on top of Cloudflare's network."
      :ui="{ leadingIcon: 'size-10' }"
    />

    <UPageCard
      v-for="(testimonial, index) in testimonials"
      :key="index"
      variant="subtle"
      :description="testimonial.quote"
      :ui="{
        description: 'before:content-[open-quote] after:content-[close-quote]',
      }"
    >
      <template #footer>
        <UUser v-bind="testimonial.user" size="xl" />
      </template>
    </UPageCard>
  </UPageColumns>
</template>
