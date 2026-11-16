import type { DataService } from '@/services/DataService'
import { MockDataService } from '@/services/MockDataService'
import { ref } from 'vue'

export function useSearch(dataService: DataService = new MockDataService()) {
  const result = ref<SordResult[]>([])
  const isLoading = ref(0)
  const search = async (term: string, options: string[]): Promise<void> => {
    console.log(`[useSearch] search term ${term} options length ${options.length}`)

    for (const option of options) {
      console.log(`option ${option}`)
    }

    isLoading.value = 1

    await new Promise((resolve) => setTimeout(resolve, 5000))

    if (options.includes('Short name')) {
      const data: SordResult[] = await dataService.getData()
      result.value = data.filter((object) =>
        object.shortName.toLowerCase().includes(term.toLowerCase()),
      )
    } else {
      result.value = await dataService.getData()
    }
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
