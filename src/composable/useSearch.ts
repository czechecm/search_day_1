import type { DataService } from '@/services/DataService'
import { MockDataService } from '@/services/MockDataService'
import { ref } from 'vue'

export async function useSearch(dataService: DataService = new MockDataService()) {
  const result = ref<SordResult[]>([])
  const search = async (term: string): Promise<void> => {}
  result.value = await dataService.getData()
  return { result, search }
}

export type SordResult = {
  shortName: string
  hits: string
  filedBy: string
  version: number
  metadataForm: string
  filingDate: string //maybe later Date
}
