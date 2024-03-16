<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  postsByTag: {
    type: Map,
    default: Map<any, any>,
  },
  tags: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div class="flex flex-wrap" v-for="(tag, k) in tags" :key="k">
    <div class="w-1/3 p-4">
      <b>{{ tag }}</b>
    </div>

  </div>

  <ul>
    <li v-for="(tag, k) in tags" :key="k">
      <b>{{ tag }}</b>
      <ul>
        <li v-for="(post, k) in postsByTag.get(tag)" :key="k">
          <NuxtLink v-if="post.id" :to="`/posts/${post.id}`" class="button--grey">
            <b>{{ post.title }}</b>
            {{ post.preview }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>

</style>