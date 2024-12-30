export default ({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-headlessui', 'nuxt-gtag'],

  gtag: {
    id: 'G-BJQJ0WHP2Y'
  },

  generate: {
    dir: 'dist',
  },

  // Enables Server-Side Rendering (SSR)
  ssr: true,

  target: 'static',

  // Global CSS
  css: [
    '@/assets/css/tailwind.css', // Tailwind CSS
    '@/assets/css/style.css', // Custom styles
  ],

  // Customize app head
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

  site: {
    url: 'https://www.edithmedical.com',
  },

  // Sitemap configuration
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
        '/terms',
      ];
    },
  },

  // Robots.txt configuration
  robots: {
    UserAgent: '*', // This applies to all bots
    Disallow: '',
    Allow: '/', // Allow crawlers to access all other pages
    Sitemap: 'https://www.edithmedical.com/sitemap.xml', // Add your sitemap URL here
  },

  // Important production-related settings
  build: {
    publicPath: '/_nuxt/', // Correct public path for assets in production
  },

  router: {
    base: '/', // Ensure base path is set to '/' for root URL
  },
});