<template>
    <section class="flex items-center justify-center min-h-screen">
    <div class="lg:px-8 lg:">
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true"></div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Feel free to contact us with any inquiries you may have.</p>
      </div>
      <form ref="form" class="mx-auto mt-16 max-w-xl sm:mt-20" @submit.prevent="validateForm">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div class="mt-2.5">
              <input v-model="formData.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input v-model="formData.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
            <div class="mt-2.5">
              <input v-model="formData.company" type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div class="mt-2.5">
              <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <div class="relative mt-2.5">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select v-model="formData.country" id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input v-model="formData.phoneNumber" type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea v-model="formData.message" name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']"></span>
              </Switch>
            </div>
            <SwitchLabel class="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our
              {{ ' ' }}
              <router-link to="/privacy" class="font-semibold text-indigo-600">privacy policy</router-link>
            </SwitchLabel>
          </SwitchGroup>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
        </div>
      </form>
    </div>
    </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  //import { getAnalytics, logEvent } from 'firebase/analytics';
  //import { app as firebaseApp } from '../firebase'
  //import emailjs from '@emailjs/browser'
  
  const contactButtonClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, 'submit_contact_form', { button_name: 'contact_form_button' })
    console.log("contact Button");
  };
  
  const agreed = ref(false)
  
  const formData = ref({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phoneNumber: '',
    message: ''
  })
  
  const validateForm = () => {
    contactButtonClick()
  
    for (const key in formData.value) {
      if (!formData.value[key]) {
        alert('Please fill in all fields and agree to the privacy policy.')
        return false
      }
    }
  
    if (!agreed.value) {
      alert('Please agree to the privacy policy.')
      return false
    }
  
    sendEmail()
    alert('Thanks for reaching out, we will be in touch shortly!')
  }
  
  const sendEmail = () => {
    emailjs.sendForm('service_956p55f', 'YOUR_TEMPLATE_ID', this.$refs.form, 'KpTV--bRhodQ6FuNp')
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  }
// SEO
definePageMeta({
  title: 'Edith AI | Revolutionizing Medical Transcription and Clinic Management',
  meta: [
    {
      name: 'description',
      content: 'Edith AI is a medical transcription service designed to streamline clinical note-taking, patient management, and report generation for healthcare professionals.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Edith AI | Revolutionizing Medical Transcription and Clinic Management'
    },
    {
      property: 'og:description',
      content: 'Edith AI simplifies clinical note-taking, patient management, and report creation with a proprietary AI model that achieves 96%+ accuracy, saving time and resources for healthcare professionals.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.edithmedical.com'
    },
    {
      property: 'og:image',
      content: 'https://www.edithmedical.com/path-to-image.jpg' // Replace with the URL of an image representing Edith AI (e.g., logo or screenshot)
    },
    {
      property: 'og:site_name',
      content: 'Edith Medical'
    },
    {
      name: 'author',
      content: 'Edith Medical'
    },
    {
      name: 'keywords',
      content: 'medical transcription, clinic management, AI transcription, patient management, healthcare software, medical report generator, HIPAA, PIPEDA, medical AI'
    }
  ]
})

  </script>
  
  
  
  
  
  