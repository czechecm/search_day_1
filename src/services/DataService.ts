import type { SordResult } from '@/composable/useSearch'

export interface DataService {
  getData(): Promise<SordResult[]>
}
