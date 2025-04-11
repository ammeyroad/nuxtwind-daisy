<script setup>
defineProps({
  konten: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section
    class="mx-auto  sticky top-16 z-40 max-w-screen-xl overflow-auto justify-center py-3 pb-2 backdrop-blur-md flex"
  >
    <NuxtLink
      v-for="item in konten"
      :key="item.tagto"
      :to="item.tagto"
      class="btn bg-white scale-90 hover:btn-primary hover:text-white text-gray-700"
    >
      {{ item.tag }}
    </NuxtLink>
  </section>
</template>
