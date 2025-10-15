<template>
  <div class="flex flex-col h-screen">
    <MainNavigation />
    <main class="container mx-auto flex-1">
      <slot />
    </main>

    <SharedFooter />
  </div>
</template>
