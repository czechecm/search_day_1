import type { DataService } from '@/services/DataService'
import { MockDataService } from '@/services/MockDataService'
import { ref } from 'vue'

export function useSearch(dataService: DataService = new MockDataService()) {
  const result = ref<SordResult[]>([])
  const isLoading = ref(0)
  const search = async (term: string, options: string[]): Promise<void> => {
    console.log(`[useSearch] search term ${term}`)
    isLoading.value = 1
    const data = await dataService.getData()
    result.value = data
    isLoading.value = 2
  }

  const resetLoading = () => (isLoading.value = 0)

  return { result, isLoading, search, resetLoading }
}

export type SordResult = {
  shortName: string
  hits: string
  filedBy: string
  version: number
  metadataForm: string
  filingDate: string //maybe later Date
}
