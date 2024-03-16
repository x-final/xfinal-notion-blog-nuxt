// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    components: { global: true, dirs: ['~/components'] },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    // build: {
    //     transpile: ["vue-notion"],
    // },
    // telemetry: false,
    // plugins: [{ src: "vue-notion/nuxt/plugin.js", mode: "client" }],
    plugins: [{ src: "~/plugins/vue-notion.ts", mode: "client" }],
    colorMode: {
        classPrefix: '',
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL,
            developer: process.env.DEVELOPER,
            devLogo: process.env.DEV_LOGO,
            devName: process.env.DEV_NAME,
            devDescription: process.env.DEV_DESCRIPTION,
            devRole: process.env.DEV_ROLE,
            icpInfo: process.env.ICP_INFO,
            notionTableId: process.env.NOTION_TABLE_ID,
            notionAboutPageId: process.env.NOTION_ABOUT_PAGE_ID,
        }
    },
})
