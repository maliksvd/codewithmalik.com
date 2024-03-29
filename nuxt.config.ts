// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/supabase"],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
    redirect: true,
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/confirm",
    },
  },

  ui: {
    icons: ["solar", "logos"],
  },
});
