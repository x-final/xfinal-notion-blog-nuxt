<template>
  <div class="flex flex-col h-screen justify-between dark:bg-gray-900">
    <div class="bg-gray-900 fixed top-0 w-full z-50 shadow-lg">
      <Header/>
    </div>
    <div class="mb-auto dark:bg-gray-900 mt-20">
      <NuxtPage/>
    </div>

    <div class="dark:bg-gray-900">
      <Footer/>
    </div>
  </div>
</template>

<style>
.wrapper {
  @apply max-w-screen-xl mx-auto;
}

.wrapper-small {
  @apply max-w-screen-lg mx-auto px-6;
}

.flex-center {
  @apply flex justify-center items-center;
}
</style>
