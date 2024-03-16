<template>
  <NotionRenderer
      :blockMap="blockMap"
      :blockOverrides="blockOverrides"
      :pageLinkOptions="pageLinkOptions"
      fullPage
      prism
      katex
  />
</template>

<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
// import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-javascript'

const route = useRoute();
const { $notion } = useNuxtApp();

const blockOverrides = { code: "CustomCode" };

// dynamic components need resolveComponent instance of `NuxtLink`, rather than string
const NuxtLink = resolveComponent("NuxtLink");
const pageLinkOptions = { component: NuxtLink, href: "to" };
const { data: blockMap } = await useAsyncData(
    `page_by_slug_${route.params.slug}`,
    async () => {
      const pageTable = await $notion.getPageTable(
          "10327f9074b7433aad577ccd0020e971"
      );
      const page = pageTable.find(
          (item) => item.published && item.id === route.params.id
      );
      const blockMap = await $notion.getPageBlocks(
          page ? page.id : route.params.id
      );
      if (!blockMap || blockMap.error) {
        throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
      return blockMap;
    }
);

</script>

<style scoped>
@import "vue-notion/src/styles.css";
</style>