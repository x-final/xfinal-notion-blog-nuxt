<template>
  <div class="mt-16">

    <div class="wrapper-small my-5">
      <div v-for="(post, k) in posts" :key="k" class="project-card md:flex mt-10" >
        <div class="img max-w-none md:max-w-sm mx-auto m-1">
          <nuxt-link :to="`/posts/${post.id}`">
            <img
                :alt="post.title"
                :src="`${post.thumbnail[0].url}`"
                class="rounded-xl h-44 w-44 object-cover object-center"
            />
          </nuxt-link>
        </div>
        <div class="flex flex-col justify-between max-w-2xl mx-auto">
          <div class="txt md:px-5 lg:px-0">
            <nuxt-link :to="`/posts/${post.id}`">
              <h2
                  class="text-xl font-semibold text-gray-800 dark:text-gray-100"
              >
                {{ post.title }}
              </h2>
            </nuxt-link>
            <p class="font-semibold text-gray-600 dark:text-gray-300 text-sm">
              {{ formatDate(post.created_at) }}
            </p>
            <div class="flex flex-col justify-between max-w-lg mx-auto"></div>
            <span
                v-for="tag of post.tags"
                :key="tag"
                class="font-semibold text-gray-600 bg-opacity-25 dark:bg-opacity-40 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-1"
            >
              #{{ tag }}
            </span>
            <p class="text-base text-gray-700 dark:text-gray-200 my-1">
              {{ post.description }}
            </p>
            <nuxt-link
                :to="`/posts/${post.id}`"
                class="text-base font-semibold text-gray-700 dark:text-gray-200 my-3 hover:underline"
            >
              Read more >
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Blogs',
  },
  posts: {
    type: Array,
    default: [],
  },
});

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('zh', options);
};
</script>
