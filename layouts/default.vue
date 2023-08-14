<template>
  <div class="mx-auto flex h-screen max-w-xl flex-col">
    <layoutHeader />
    <div class="mb-0 flex-1">
      <slot />
    </div>
    <layoutFooter />
  </div>
</template>
