<template>
    <footer class="max-w-screen mx-auto rounded-xl mt-32 mb-6  border-[--ui-light-border-color] ">
        <div class="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
            <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color]">
                <router-link to="/">
                    <img class="w-32" :src="'https://edithmedicallandingpage.s3.us-east-2.amazonaws.com/lightLogo.svg'" alt="Light Logo">
                </router-link>
            </div>
            <!-- Footer Content Here-->
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div v-for="section in footerSections" :key="section.title">
                    <span class="font-bold text-gray-950">{{ section.title }}</span>
                    <ul class="mt-4 list-inside space-y-4">
                        <li v-for="link in section.links" :key="link.text">
                            <router-link :to="link.to" class="text-sm text-gray-600 hover:text-primary-600">{{ link.text }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const footerSections = [
    {
        title: 'About',
        links: [
            { text: 'Feature Overview', to: '/features' },
            { text: 'Security', to: '/security' },
        ],
    },
    {
        title: 'Company',
        links: [
            { text: 'About', to: '/' },
            { text: 'Privacy Policy', to: '/privacy' },
            { text: 'Terms of Service', to: '/terms' },

        ],
    },
    {
        title: 'Whitelabel',
        links: [
            { text: 'Whitelabel Services', to: '/' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { text: 'Email', to: '/contact' },
        ],
    },
];
</script>
