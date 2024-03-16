<template>
  <div class="wrapper-small md:px-10">
    <span v-if="pending || error">Loading...</span>
    <div v-else>
<!--      <BlogTags :posts-by-tag="data.postsByTag" :tags="data.tags" />-->

      <Blogs :posts="data.posts" title="Featured blogs"/>

    </div>
  </div>
</template>

<script lang="ts" setup>
const {$notion} = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const notionTableId = runtimeConfig.public.notionTableId

const {data, pending, error} = await useAsyncData("all_posts", async () => {
  const pageTable = await $notion.getPageTable(notionTableId);

  // sort published pages
  const posts = pageTable
      .filter((page) => page.published)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // convert array of pages to a map of tags with page arrays
  const postsByTag = pageTable
      .filter((page) => page.published)
      .reduce((map, currentPage) => {
        currentPage.tags.forEach((tag) =>
            map.has(tag)
                ? map.set(tag, [...map.get(tag), currentPage])
                : map.set(tag, [currentPage])
        );
        return map;
      }, new Map());

  return {
    posts,
    postsByTag,
    tags: [...postsByTag.keys()].sort(),
  };
});
</script>