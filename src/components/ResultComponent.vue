<script setup lang="ts">
import { ElTable, ElTableColumn } from 'element-plus'
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
  <el-table empty-text="No data" highlight-current-row :data="result" stripe max-height="400">
    <el-table-column prop="shortName" label="Short name" sortable min-width="220" />
    <el-table-column prop="version" label="Current version" sortable min-width="140" align="center" />
    <el-table-column prop="hits" label="Found in" sortable min-width="140" />
    <el-table-column prop="filingDate" label="Filing date" sortable min-width="130" />
    <el-table-column prop="metadataForm" label="Form" sortable min-width="120" />
  </el-table>

</template>
<style scoped></style>
