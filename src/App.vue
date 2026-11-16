<script setup lang="ts">
import ResultComponent from '@/components/ResultComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import HistoryComponent from '@/components/HistoryComponent.vue'
import { useSearch } from '@/composable/useSearch';

const { result, isLoading, resetLoading, search } = useSearch()

</script>

<template>
  <h1>ELO Search</h1>
  <SearchComponent titel="ELO Search" @resetLoading="resetLoading" @search="search"></SearchComponent>
  <ResultComponent :result="result" :isLoading="isLoading"></ResultComponent>
  <HistoryComponent></HistoryComponent>
</template>

<style scoped></style>
