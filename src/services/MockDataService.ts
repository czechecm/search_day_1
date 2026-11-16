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
    shortName: 'Bestellung IBM Z16',
    hits: 'Volltext',
    filedBy: 'Felix Unger',
    version: 1,
    metadataForm: 'Vertrag',
    filingDate: '26.05.2026, 22:15',
  },
  {
    shortName: 'Vertrag IBM Server',
    hits: 'Kurzbezeichnung',
    filedBy: 'Fritz Keil',
    version: 4,
    metadataForm: 'Vertrag',
    filingDate: '21.05.2026, 11:12',
  },
  {
    shortName: 'Personalakte Sebastian Maier',
    hits: 'Feld',
    filedBy: 'Ute Schenk',
    version: 2,
    metadataForm: 'Personalakte',
    filingDate: '01.11.2021, 14:35',
  },
  {
    shortName: 'Bericht Controlling 2024',
    hits: 'Kurzbezeichnung',
    filedBy: 'Verona Funk',
    version: 12,
    metadataForm: 'Bericht',
    filingDate: '31.12.2024, 21:00',
  },
  {
    shortName: 'Bericht Marketing 2020',
    hits: 'Feld',
    filedBy: 'Verona Funk',
    version: 9,
    metadataForm: 'Bericht',
    filingDate: '20.12.2020, 07:11',
  },
  {
    shortName: 'Bericht Organisation 2020',
    hits: 'Zusatztext',
    filedBy: 'Gerd Baum',
    version: 4,
    metadataForm: 'Bericht',
    filingDate: '28.12.2020, 18:03',
  },
  {
    shortName: 'Beleg Übernachtungskosten',
    hits: 'Feld',
    filedBy: 'Gerd Baum',
    version: 1,
    metadataForm: 'Rechnung',
    filingDate: '17.06.2026, 09:09',
  },
  {
    shortName: 'Rechnung Büromaterial',
    hits: 'Volltext',
    filedBy: 'Ute Schenk',
    version: 1,
    metadataForm: 'Rechnung',
    filingDate: '14.03.2025, 10:24',
  },
  {
    shortName: 'Vertrag Softwarewartung',
    hits: 'Kurzbezeichnung',
    filedBy: 'Felix Unger',
    version: 3,
    metadataForm: 'Vertrag',
    filingDate: '08.01.2026, 15:42',
  },
  {
    shortName: 'Personalakte Anna Becker',
    hits: 'Feld',
    filedBy: 'Fritz Keil',
    version: 2,
    metadataForm: 'Personalakte',
    filingDate: '12.09.2023, 08:30',
  },
  {
    shortName: 'Bericht Vertrieb 2023',
    hits: 'Zusatztext',
    filedBy: 'Verona Funk',
    version: 5,
    metadataForm: 'Bericht',
    filingDate: '18.12.2023, 16:17',
  },
  {
    shortName: 'Bestellung Netzwerkkomponenten',
    hits: 'Volltext',
    filedBy: 'Gerd Baum',
    version: 1,
    metadataForm: 'Vertrag',
    filingDate: '04.02.2026, 11:05',
  },
  {
    shortName: 'Beleg Reisekosten Berlin',
    hits: 'Feld',
    filedBy: 'Ute Schenk',
    version: 1,
    metadataForm: 'Rechnung',
    filingDate: '22.04.2025, 13:48',
  },
  {
    shortName: 'Bericht Personal 2022',
    hits: 'Kurzbezeichnung',
    filedBy: 'Felix Unger',
    version: 7,
    metadataForm: 'Bericht',
    filingDate: '29.12.2022, 09:12',
  },
  {
    shortName: 'Vertrag Cloud-Dienstleistungen',
    hits: 'Zusatztext',
    filedBy: 'Fritz Keil',
    version: 4,
    metadataForm: 'Vertrag',
    filingDate: '15.07.2025, 14:55',
  },
  {
    shortName: 'Personalakte Martin Wagner',
    hits: 'Volltext',
    filedBy: 'Ute Schenk',
    version: 3,
    metadataForm: 'Personalakte',
    filingDate: '03.06.2024, 08:16',
  },
  {
    shortName: 'Rechnung Serverwartung',
    hits: 'Feld',
    filedBy: 'Gerd Baum',
    version: 2,
    metadataForm: 'Rechnung',
    filingDate: '11.10.2025, 17:20',
  },
]
