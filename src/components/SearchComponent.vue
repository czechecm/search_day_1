<script setup lang="ts">
import { ref } from 'vue'
import { ElInput, ElSelect, ElOption, ElButton, ElMessageBox } from 'element-plus'
const { titel = "Search" } = defineProps<{ titel?: string }>()

const emit = defineEmits(['search'])

const searchTerm = ref('')

const onSearch = () => {
  ElMessageBox.alert('Searching by short name is the only option supported', 'Info', {
    confirmButtonText: 'OK',
  })
  const term = searchTerm.value.trim()
  if (term) {
    emit('search', term)
  }
}

</script>
<template>
  <h2>{{ titel }}</h2>
  <div class="search">
    <el-input style="width: 240px" v-model="searchTerm" clearable placeholder="Enter a search term.."></el-input>
    <el-select style="width: 180px"><el-option></el-option></el-select>
    <el-button @click="onSearch" style="width: 120px">Search</el-button>
  </div>
</template>
<style scoped>
.search {
  display: flex;
  gap: 10px;
}
</style>
