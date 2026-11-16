<script setup lang="ts">
const { titel = "Search" } = defineProps<{ titel: string }>()
</script>
<template>
  <h2>{{ titel }}</h2>
</template>
<style scoped></style>
