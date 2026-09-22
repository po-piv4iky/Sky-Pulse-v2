import { DailyForecast } from '../types/dailyForecast.types'

export function getDailySummary(days: DailyForecast[]) {
  return days.map((day) => {
    const temps = day.forecasts.map((item) => item.temp)
    return {
      date: day.date,
      minTemp: Math.round(Math.min(...temps)),
      maxTemp: Math.round(Math.max(...temps)),
    }
  })
}
