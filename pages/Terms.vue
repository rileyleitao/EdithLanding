<template>
    <div class="max-w-4xl mx-auto py-32 px-4">
      <h1 class="text-6xl text-gray-950 font-bold mb-4 pb-12">Terms of Service</h1>
  
      <!-- Use an array to store sections of the Terms of Service -->
      <div v-for="(section, index) in termsOfServiceSections" :key="index" class="mb-6">
        <h2 class="text-xl font-semibold mb-2">{{ section.title }}</h2>
        <p v-if="section.content" class="mb-4">{{ section.content }}</p>
        <ul v-if="section.list" class="list-disc pl-6">
          <li v-for="(item, itemIndex) in section.list" :key="itemIndex">{{ item }}</li>
        </ul>
      </div>
  
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any questions or concerns about our privacy practices or this Privacy Policy, please contact us at <a href="mailto:contact@example.com" class="text-primary hover:underline">contact@edithmedical.com</a>.</p>
      </div>
  
      <p class="text-sm">By using our platform, you consent to the collection and use of your personal information as outlined in this Privacy Policy.</p>
    </div>
  </template>
  
  <script setup>
  
    // Define an array to store sections of the Terms of Service
    const termsOfServiceSections = [
      { title: 'Introduction', content: 'These Terms of Service ("Terms") govern your use of the services provided by Edith Medical, a medical scribe company operating in Canada within the medical software field. By accessing or using our services, you agree to comply with these Terms. If you do not agree with these Terms, you may not use our services.' },
      { title: 'Services', content: 'Edith Medical provides medical scribe services to healthcare professionals, including doctors, to assist in clinical documentation. Our services involve collecting and using data on behalf of doctors to transcribe and organize clinical notes, appointments, and other relevant information.' },
      { title: 'Data Collection and Use', content: 'By using our services, you authorize us to collect, store, and use data on your behalf for the purpose of providing our services. This data may include but is not limited to patient information, medical records, and other healthcare-related data. We take measures to ensure the security and confidentiality of your data in accordance with applicable laws and regulations.' },
      // Add other sections in a similar format
      { title: 'Contact Information', content: 'If you have any questions or concerns about these Terms, please contact us at contact@edithmedical.com' },
    ];
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
  
  <style scoped>
  .text-primary {
    color: #3182ce;
  }
  .hover\:underline:hover {
    text-decoration: underline;
  }
  </style>
  