<template>
  <div v-if="tags && tags.length > 0" class="tags-container">
    <span v-for="tag in tags" :key="tag" class="tag-badge">
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.tags-container {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0 2rem 0;
  flex-wrap: wrap;
}

.tag-badge {
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>