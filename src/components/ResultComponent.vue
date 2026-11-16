<script setup lang="ts">
import { type SordResult } from '@/composable/useSearch';
const { result = [], isLoading = 0 } = defineProps<{
  result?: SordResult[]
  isLoading: number
}>()
</script>
<template>
  <h2>ResultComponent</h2>
  <p v-if="isLoading === 0">Waiting for the search to begin</p>
  <p v-else-if="isLoading === 1">Searching</p>
  <el-table :data="result"></el-table>

</template>
<style scoped></style>
