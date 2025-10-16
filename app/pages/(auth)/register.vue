<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';

definePageMeta({
  layout: 'login-layout',
});

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Correo electrónico',
    required: true,
  },
  {
    name: 'name',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Nombre',
    required: true,
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: 'Contraseña',
    required: true,
  },
  {
    name: 'remember',
    label: 'Recordarme en este dispositivo',
    type: 'checkbox',
  },
];

const schema = z.object({
  email: z.email('Correo electrónico inválido'),
  name: z.string('Nombre es requerido'),
  password: z
    .string('Contraseña es requerida')
    .min(8, 'Debe tener al menos 8 caracteres'),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload);
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md mb-4">
      <UAuthForm
        :schema="schema"
        :ui="{
          leadingIcon: 'text-primary-500 text-5xl',
        }"
        title="Registrarme"
        description="Ingresa tus datos para crear tu cuenta."
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
      />
    </UPageCard>

    <UButton
      color="primary"
      variant="ghost"
      label="¿Ya tienes una cuenta? Inicia sesión"
      to="/login"
    />
  </div>
</template>
