<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';

definePageMeta({
  layout: 'login-layout',
});

const toast = useToast();
const { login } = useAuthentication();
const isPosting = ref(false);

const loginEmail = useCookie<string | null>('login_email', {
  sameSite: 'strict', // Significa que el cookie solo se puede acceder desde el mismo dominio y el mismo sitio
  maxAge: 60 * 60 * 24 * 30, // 30 días
});

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    defaultValue: loginEmail.value ?? '',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
  {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox',
    defaultValue: Boolean(loginEmail.value),
  },
];

const providers = [
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Login with Google' });
    },
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    onClick: () => {
      toast.add({ title: 'GitHub', description: 'Login with GitHub' });
    },
  },
];

const schema = z.object({
  email: z.email('Invalid email'),
  password: z
    .string('Password is required')
    .min(8, 'Must be at least 8 characters'),
  remember: z.boolean().optional(),
});

type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  const { email, password, remember } = payload.data;

  isPosting.value = true;

  if (remember) {
    loginEmail.value = email;
  } else {
    loginEmail.value = null;
  }

  try {
    await login(email, password);
  } catch (error: unknown) {
    console.log({ error });
    toast.add({
      title: 'Credenciales incorrectas',
      description: `${(error as Error).message}`,
    });
    isPosting.value = false;
  }

  // console.log('email', email);
  // console.log('password', password);
  // console.log('remember', remember);
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
        :loading="isPosting"
        :disabled="isPosting"
        title="Iniciar sesión"
        description="Ingresa tus credenciales para acceder a tu cuenta."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
      />
    </UPageCard>

    <UButton
      color="primary"
      variant="ghost"
      label="¿No tienes una cuenta? Regístrate"
      to="/register"
    />
  </div>
</template>
