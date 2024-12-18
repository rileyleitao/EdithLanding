// nuxt.config.js
export default ({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/sitemap','@nuxtjs/robots', ],

  // Enables Server-Side Rendering (SSR)
  ssr: true,

  // Add the global CSS file
  css: [
    '@/assets/css/tailwind.css', // Tailwind CSS
    '@/assets/css/style.css', // Custom styles
  ],

  // Customize the app head (meta tags, title, etc.)
  app: {
    head: {
      titleTemplate: "Edith Medical",
      meta: [
        {
          name: "description",
          content:
            "Edith AI: Revolutionizing Medical Transcription and Clinic Management. Streamline clinical note-taking, report creation, patient management, and communication with AI-powered automation.",
        },
        {
          name: "keywords",
          content:
            "medical transcription, clinic management, AI transcription, report creation, patient management, healthcare software, PIPEDA, HIPAA, AI-powered automation",
        },
        {
          property: "og:title",
          content:
            "Edith AI: Revolutionizing Medical Transcription and Clinic Management",
        },
        {
          property: "og:description",
          content:
            "Edith AI streamlines clinical note-taking, patient management, and report generation for healthcare professionals. Boost productivity and ensure HIPAA-compliant, secure data management.",
        },
        {
          property: "og:image",
          content: "", // Add an image URL here for Open Graph
        },
        {
          property: "og:url",
          content: "https://www.edithmedical.com",
        },
      ],
    },
  },

  seo:{
    site:{
      url: 'https://www.edithmedical.com',
    },
  },

  //Sitemap
  sitemap: {
    hostname: 'https://www.edithmedical.com', // Base URL of your site
    gzip: true, // Optionally enable gzip compression
    routes: async () => {
      // You can dynamically generate the routes here if needed
      return [
        '/',
        '/features', 
        '/contact',
        '/privacy',
        '/security',
        'terms',
      ];
    },
  },

  //robots.txt
  robots:{
    UserAgent: '*', // This applies to all bots
    Allow: '/', // Allow crawlers to access all other pages
    Sitemap: 'https://www.edithmedical.com/sitemap.xml', // Add your sitemap URL here
  }
});