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
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
          async: true,
          onload: () => {
            console.log("G-Tag live");
          },
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-G-BJQJ0WHP2Y');
          `,
          type: 'text/javascript',
        },
      ],
    },
  });
}

provideHeadlessUseId(() => useId());
</script>
