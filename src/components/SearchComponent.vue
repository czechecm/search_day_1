<script setup lang="ts">
import { ref } from 'vue'
import { ElInput, ElSelect, ElOption, ElButton, ElMessageBox } from 'element-plus'
const { titel = "Search" } = defineProps<{ titel?: string }>()

const emit = defineEmits(['search', 'resetLoading'])

const searchTerm = ref('')
const selectedOptions = ref<string[]>([])

const onSearch = () => {
  ElMessageBox.alert('Searching by short name is the only option supported', 'Info', {
    confirmButtonText: 'OK',
  })
  const term = searchTerm.value.trim()
  if (term) {
    emit('search', term, selectedOptions.value)
  }
}

interface SearchOption {
  value: string
  label: string
  selected: boolean
}
const searchOptions: SearchOption[] = [
  { value: 'Full text', label: 'Full text', selected: false },
  { value: 'Short name', label: 'Short name', selected: false },
  { value: 'Fields', label: 'Fields', selected: false },
  { value: 'Extra text', label: 'Extra text', selected: false },
  { value: 'Feed', label: 'Feed', selected: false },
]

const inputClear = (): void => {
  selectedOptions.value = []
  emit('resetLoading')
  //remove the select options??
}

</script>
<template>
  <h2 class="search-title">{{ titel }}</h2>
  <div class="search-bar">
    <el-input v-model="searchTerm" class="search-bar__input" clearable placeholder="Enter a search term.."
      @clear="inputClear"></el-input>
    <el-select v-model="selectedOptions" class="search-bar__options" clearable multiple collapse-tags
      collapse-tags-tooltip placeholder="Search options" :disabled="searchTerm.length < 1">
      <el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value"
        :selected="item.selected">
      </el-option>
    </el-select>
    <el-button class="search-bar__button" @click="onSearch" type="primary"
      :disabled="searchTerm.length < 1">Search</el-button>
  </div>
</template>
<style scoped>
.search-title {
  margin: 0 0 12px;
  font-size: 1.125rem;
  font-weight: 600;
}

.search-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-bar__input {
  flex: 1 1 260px;
}

.search-bar__options {
  flex: 0 1 200px;
}

.search-bar__button {
  flex: 0 0 120px;
}

@media (max-width: 600px) {

  .search-bar__options,
  .search-bar__button {
    flex: 1 1 100%;
  }
}
</style>
