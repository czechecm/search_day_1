<script setup lang="ts">
import { ElTable, ElTableColumn } from 'element-plus'
import { type SordResult } from '@/composable/useSearch';
const { result = [], isLoading = 0 } = defineProps<{
  result?: SordResult[]
  isLoading: number
}>()
</script>
<template>
  <div class="results">
    <p v-if="isLoading === 0" class="status status--idle">Waiting for the search to begin</p>
    <p v-else-if="isLoading === 1" class="status status--loading">
      <span class="status__spinner" aria-hidden="true"></span>
      Searching…
    </p>
    <el-table class="results__table" empty-text="No data" highlight-current-row :data="result" stripe max-height="400">
      <el-table-column prop="shortName" label="Short name" sortable min-width="220" />
      <el-table-column prop="version" label="Current version" sortable min-width="140" align="center" />
      <el-table-column prop="hits" label="Found in" sortable min-width="140" />
      <el-table-column prop="filingDate" label="Filing date" sortable min-width="130" />
      <el-table-column prop="metadataForm" label="Form" sortable min-width="120" />
    </el-table>
  </div>
</template>
<style scoped>
.results {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
}

.status--idle {
  background: var(--color-bg);
  color: var(--color-text-muted);
}

.status--loading {
  background: var(--color-primary-soft);
  color: var(--color-primary);
}

.status__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.results__table {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.results__table :deep(th.el-table__cell) {
  background: var(--color-bg);
  color: var(--color-text);
  font-weight: 600;
}

.results__table :deep(.el-table__row:hover > td.el-table__cell) {
  background: var(--color-primary-soft);
}
</style>
