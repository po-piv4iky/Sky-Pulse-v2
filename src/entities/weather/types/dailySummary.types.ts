export interface DailySummary {
  date: string
  minTemp: number
  maxTemp: number
  description?: string
  icon: string | null
  weekDay: string
}
