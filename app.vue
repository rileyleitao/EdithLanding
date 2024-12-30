<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
if (process.client) {
  definePageMeta({
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/EdithIcon.svg' },
      ],
    },
  });
}

provideHeadlessUseId(() => useId());
</script>
