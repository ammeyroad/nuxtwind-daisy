<script setup>
defineProps({
  halaman: String,
  to: String,
  title: String,
  subtitle: String,
  gambar: String,
});
</script>

<template>
  <div class="h-max content-center bg-primary rounded-lg">
    <div class="flex py-16 items-center max-w-screen-lg mx-auto justify-between">
      <div class="max-w-xl text-white">
        <div class="flex gap-2 fb font-semibold text-white/70 mb-8">
          <NuxtLink to="/" class="hover:text-white">
            <Icon name="solar:home-smile-bold-duotone" class="w-6 h-6" />
          </NuxtLink>
          <div>
            /
            <NuxtLink :to="to" class="hover:underline hover:text-white pl-1">
              {{ halaman }}
            </NuxtLink>
          </div>
        </div>
        <h3 class="uppercase mb-2">{{ title }}</h3>
        <p class="fb">{{ subtitle }}</p>
      </div>
      <div class="justify-end">
        <NuxtImg :src="gambar" class=" h-64" alt="Slider" />
      </div>
    </div>
  </div>
</template>
