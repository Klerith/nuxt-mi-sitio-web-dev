<script lang="ts" setup>
const route = useRoute();

// Variables
const rawId = route.params.id as string;
</script>

<template>
  <h1>Admin Product Page</h1>
  <h3>{{ rawId }}</h3>
</template>
