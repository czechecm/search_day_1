<script setup lang="ts">
import ResultComponent from '@/components/ResultComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import HistoryComponent from '@/components/HistoryComponent.vue'
import { useSearch } from '@/composable/useSearch';

const { result, isLoading, resetLoading, search } = useSearch()

</script>

<template>
  <div class="app">

    <header class="app-header">
      <h1 class="app-header__title">ELO Search</h1>
      <p class="app-header__subtitle">Find documents in ELO Repository</p>
    </header>
    <main class="app-main">
      <section class="card">
        <SearchComponent titel="ELO Search" @resetLoading="resetLoading" @search="search" />
      </section>
      <section class="card">
        <div class="card__header">
          <h2 class="card__title">Results</h2>
          <HistoryComponent :hits="result.length" />
        </div>
        <ResultComponent :result="result" :isLoading="isLoading" />
      </section>
    </main>
  </div>
</template>

<style>
:root {
  --color-primary: #2563eb;
  --color-primary-soft: #eff6ff;
  --color-text: #1f2937;
  --color-text-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-bg: #f3f4f6;
  --color-surface: #ffffff;
  --radius: 12px;
  --shadow: 0 1px 3px rgb(0 0 0 / 0.06), 0 4px 12px rgb(0 0 0 / 0.04);
  --space: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
  line-height: 1.5;
}
</style>

<style scoped>
.app {
  max-width: 960px;
  margin: 0 auto;
  padding: calc(var(--space) * 2) var(--space);
}

.app-header {
  margin-bottom: calc(var(--space) * 1.5);
}

.app-header__title {
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.app-header__subtitle {
  margin: 4px 0 0;
  color: var(--color-text-muted);
}

.app-main {
  display: flex;
  flex-direction: column;
  gap: var(--space);
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: calc(var(--space) * 1.25);
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space);
}

.card__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
