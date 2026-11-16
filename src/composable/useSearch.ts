import type { DataService } from '@/services/DataService'
import { MockDataService } from '@/services/MockDataService'
import { ref } from 'vue'

export function useSearch(dataService: DataService = new MockDataService()) {
  const result = ref<SordResult[]>([])
  const isLoading = ref(0)
  const search = async (term: string): Promise<void> => {
    isLoading.value = 1
    const data = await dataService.getData()
    result.value = data
  }

  return { result, isLoading, search }
}

export type SordResult = {
  shortName: string
  hits: string
  filedBy: string
  version: number
  metadataForm: string
  filingDate: string //maybe later Date
}
