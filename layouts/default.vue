<template>
    <!-- StartNavigation -->
    <div class="max-w-screen">
      <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav
            class="flex items-center max-w-full justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <nuxt-link to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Edith Medical</span>
                <img class="h-8 w-auto" src="@/assets/lightLogo.svg" alt="" />
              </nuxt-link>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <nuxt-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.route"
                class="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
              >
                {{ item.name }}
              </nuxt-link>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="https://app.edithmedical.com"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog
            class="lg:hidden"
            @close="mobileMenuOpen = false"
            :open="mobileMenuOpen"
          >
            <div class="fixed inset-0 z-50" />
            <DialogPanel
              class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="@/assets/lightLogo.svg" alt="" />
                </a>
                <button
                  type="button"
                  class="-m-2.5 rounded-md p-2.5 text-gray-700"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6 flex flex-col">
                    <nuxt-link
                      v-for="item in navigation"
                      :key="item.name"
                      :to="item.route"
                      class="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 hover:bg-gray-50"
                    >
                      {{ item.name }}
                    </nuxt-link>
                  </div>

                  <div class="py-6">
                    <a
                      href="https://app.edithmedical.com"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >Log in</a
                    >
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <nuxt-page />
        <Footer>
        </Footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import Footer from '@/components/Footer.vue'
  
  // Navigation links
  const navigation = [
    { name: 'About', route: '/' },
    { name: 'Features', route: '/features' },
    { name: 'Contact', route: '/contact' },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  