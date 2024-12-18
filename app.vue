<template>
  <div>
    <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/EdithIcon.svg' },
    ],
  },
});
</script>
