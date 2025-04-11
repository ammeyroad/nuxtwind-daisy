<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="btn btn-wide text-left justify-between mb-2 btn-lg group"
    :class="{ 'btn-primary': isActive }"
  >
    <div class="flex items-center gap-2">
      <Icon
        name="solar:round-alt-arrow-right-bold"
        class="w-6 h-6"
        :class="{
          'block': isActive,
          'group-hover:block hidden': !isActive
        }"
      />
      {{ label }}
    </div>
    <Icon
      name="solar:arrow-right-line-duotone"
      class="w-6 h-6 -rotate-45"
      :class="{
        'hidden': isActive,
        'group-hover:hidden': !isActive
      }"
    />
  </button>
</template>
