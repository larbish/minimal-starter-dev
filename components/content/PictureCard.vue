<template>
  <UCard :ui="{ header: { padding: 'p-2' }, body: { padding: 'p-0' }, ring: `ring-2 ring-${color}-200 dark:ring-${color}-800`}">
    <template #header>
      <div class="flex justify-center text-2xl font-bold">
        <ContentSlot name="title" unwrap="p" />
      </div>
    </template>
    <slot />
    <template #footer>
      <div class="flex justify-center text-gray-500">
        <ContentSlot name="description" unwrap="p" />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: null
  }
})
</script>

<!-- Safelist: ring-blue-200 ring-blue-800 ring-green-200 ring-green-800 ring-red-200 ring-red-800 ring-yellow-200 ring-yellow-800 -->
