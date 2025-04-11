<script setup>
defineProps({
  grid: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'Informasi Umum',
  },
  title: {
    type: String,
    default: 'Kenalan dengan Clipan Finance',
  },
  subtitle: {
    type: String,
    default: 'Solusi Pembiayaan Mobil baru, mobil bekas, multiguna, dan alat berat Tepercaya Sejak 1982',
  },
});
</script>

<template>
  <div class="mb-10 grid">
    <div :class="grid" class="btn btn-sm btn-outline w-max btn-primary bg-primary/10 rounded-full">
      <Icon name="solar:round-alt-arrow-right-bold" class="w-3 h-3" />
      <span class="text-sm">{{ tag }}</span>
    </div>
    <div>
      <h3 class="mb-1 mt-4 py-3">{{ title }}</h3>
      <p class="fb">{{ subtitle }}</p>
    </div>
  </div>
</template>
