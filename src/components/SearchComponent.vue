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
  <h2>{{ titel }}</h2>
  <div class="search">
    <el-input style="width: 240px" v-model="searchTerm" clearable placeholder="Enter a search term.."
      @clear="inputClear"></el-input>
    <el-select style="width: 180px" v-model="selectedOptions" clearable multiple collapse-tags collapse-tags-tooltip
      placeholder="Search options" :disabled="searchTerm.length < 1">
      <el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value"
        :selected="item.selected">
      </el-option>
    </el-select>
    <el-button @click="onSearch" style="width: 120px" type="primary"
      :disabled="searchTerm.length < 1">Search</el-button>
  </div>
</template>
<style scoped>
.search {
  display: flex;
  gap: 10px;
}
</style>
