<template>
  <NuxtLink :to="textlink"
    class="btn border text-gray-700 hover:text-white bg-white group duration-200 hover:btn-primary rounded-full hover:shadow-lg hover:shadow-blue-600/60">
    {{ text }}
    <Icon
      name="solar:arrow-right-broken"
      class="w-6 h-6 -m-2 group-hover:m-0 scale-75 group-hover:-rotate-45 group-hover:scale-100 duration-150" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  textlink: String,
  text: String,
});
</script>
