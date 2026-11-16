import type { SordResult } from '@/composable/useSearch'
import type { DataService } from '@/services/DataService'

export class MockDataService implements DataService {
  constructor(private readonly delayMs = 5000) {}

  async getData(): Promise<SordResult[]> {
    await new Promise((resolve) => setTimeout(resolve, this.delayMs))
    return searchResult
  }
}

const searchResult: SordResult[] = [
  {
    shortName: 'IBM Z16 Purchase Order',
    hits: 'Full text',
    filedBy: 'Felix Unger',
    version: 1,
    metadataForm: 'Contract',
    filingDate: '26.05.2026, 22:15',
  },
  {
    shortName: 'IBM Server Contract',
    hits: 'Short name',
    filedBy: 'Fritz Keil',
    version: 4,
    metadataForm: 'Contract',
    filingDate: '21.05.2026, 11:12',
  },
  {
    shortName: 'Sebastian Maier Personnel File',
    hits: 'Fields',
    filedBy: 'Ute Schenk',
    version: 2,
    metadataForm: 'Personnel File',
    filingDate: '01.11.2021, 14:35',
  },
  {
    shortName: 'Controlling Report 2024',
    hits: 'Short name',
    filedBy: 'Verona Funk',
    version: 12,
    metadataForm: 'Report',
    filingDate: '31.12.2024, 21:00',
  },
  {
    shortName: 'Marketing Report 2020',
    hits: 'Fields',
    filedBy: 'Verona Funk',
    version: 9,
    metadataForm: 'Report',
    filingDate: '20.12.2020, 07:11',
  },
  {
    shortName: 'Organization Report 2020',
    hits: 'Extra text',
    filedBy: 'Gerd Baum',
    version: 4,
    metadataForm: 'Report',
    filingDate: '28.12.2020, 18:03',
  },
  {
    shortName: 'Overnight Stay Expense Receipt',
    hits: 'Fields',
    filedBy: 'Gerd Baum',
    version: 1,
    metadataForm: 'Invoice',
    filingDate: '17.06.2026, 09:09',
  },
  {
    shortName: 'Office Supplies Invoice',
    hits: 'Full text',
    filedBy: 'Ute Schenk',
    version: 1,
    metadataForm: 'Invoice',
    filingDate: '14.03.2025, 10:24',
  },
  {
    shortName: 'Software Maintenance Contract',
    hits: 'Short name',
    filedBy: 'Felix Unger',
    version: 3,
    metadataForm: 'Contract',
    filingDate: '08.01.2026, 15:42',
  },
  {
    shortName: 'Anna Becker Personnel File',
    hits: 'Fields',
    filedBy: 'Fritz Keil',
    version: 2,
    metadataForm: 'Personnel File',
    filingDate: '12.09.2023, 08:30',
  },
  {
    shortName: 'Sales Report 2023',
    hits: 'Extra text',
    filedBy: 'Verona Funk',
    version: 5,
    metadataForm: 'Report',
    filingDate: '18.12.2023, 16:17',
  },
  {
    shortName: 'Network Components Purchase Order',
    hits: 'Full text',
    filedBy: 'Gerd Baum',
    version: 1,
    metadataForm: 'Contract',
    filingDate: '04.02.2026, 11:05',
  },
  {
    shortName: 'Berlin Travel Expense Receipt',
    hits: 'Fields',
    filedBy: 'Ute Schenk',
    version: 1,
    metadataForm: 'Invoice',
    filingDate: '22.04.2025, 13:48',
  },
  {
    shortName: 'Personnel Report 2022',
    hits: 'Short name',
    filedBy: 'Felix Unger',
    version: 7,
    metadataForm: 'Report',
    filingDate: '29.12.2022, 09:12',
  },
  {
    shortName: 'Cloud Services Contract',
    hits: 'Extra text',
    filedBy: 'Fritz Keil',
    version: 4,
    metadataForm: 'Contract',
    filingDate: '15.07.2025, 14:55',
  },
  {
    shortName: 'Martin Wagner Personnel File',
    hits: 'Full text',
    filedBy: 'Ute Schenk',
    version: 3,
    metadataForm: 'Personnel File',
    filingDate: '03.06.2024, 08:16',
  },
  {
    shortName: 'Server Maintenance Invoice',
    hits: 'Fields',
    filedBy: 'Gerd Baum',
    version: 2,
    metadataForm: 'Invoice',
    filingDate: '11.10.2025, 17:20',
  },
]
