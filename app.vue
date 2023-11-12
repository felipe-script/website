<template>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
</template>


<script lang="ts">
import hello from "@/components/hello.vue";

export default {
  components: {
    hello,
  },
  setup() {},
};
</script>

<style>
  body{
    /* font-family: 'Roboto', sans-serif; */
  }
</style>