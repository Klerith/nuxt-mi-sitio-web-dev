<template>
  <div class="flex flex-col h-screen">
    <!-- <MainNavigation /> -->
    <SharedHeader />
    <!-- <main class="container mx-auto flex-1 mt-2"> -->
    <main class="container mx-auto flex-1 mt-2">
      <slot />
    </main>
    <!-- </main> -->

    <SharedFooter />
  </div>
</template>
