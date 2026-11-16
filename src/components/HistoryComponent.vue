<script setup lang="ts">
const { hits = 0 } = defineProps<{ hits: number }>()
</script>

<template>
  <span class="hits">
    <span class="hits__count">{{ hits }}</span>
    {{ hits === 1 ? 'result' : 'results' }}
  </span>
</template>
<style scoped>
.hits {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: 0.85rem;
}

.hits__count {
  font-weight: 700;
}
</style>
