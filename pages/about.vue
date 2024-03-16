<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script lang="ts" setup>
const { $notion } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const notionAboutPageId = runtimeConfig.public.notionAboutPageId
// use Notion module to get Notion blocks from the API via a Notion pageId
const { data: blockMap } = useAsyncData("about_page", () =>
    $notion.getPageBlocks(notionAboutPageId)
);
</script>

<style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */

.notion-title, .notion-text, .notion-list, .notion-callout-text, p, h1, h2, h3, h4, span {
  @apply dark:text-white;
}

.notion-link {
  @apply dark:hover:bg-red-500;
}
</style>