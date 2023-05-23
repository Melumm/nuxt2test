export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "kali",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  css: ["simplemde/dist/simplemde.min.css"],
  plugins: [{ src: "~plugins/simplemde.js", mode: "client" }],

  plugins: [
    { src: "~plugins/client.js" },
    { src: "~plugins/simplemde.js", mode: "client" },
  ],


  
};



