import { getDayOfWeek } from '@/shared/lib/date/getDayOfWeek'
import { getWeatherIconUrl } from '@/shared/lib/getWeatherIconUrl'
import { Language } from '@/shared/types/language'
import { DailyForecast } from '../types/dailyForecast.types'
import { DailySummary } from '../types/dailySummary.types'

export function getDailySummary(
  days: DailyForecast[],
  timezone: number,
  language: Language,
): DailySummary[] {
  return days.map((day) => {
    const temps = day.forecasts.map((item) => item.temp)
    const middayForecast = day.forecasts.find((item) => {
      const localHour = new Date((item.dt + timezone) * 1000).getUTCHours()

      return localHour === 12
    })
    return {
      date: day.date,
      minTemp: Math.round(Math.min(...temps)),
      maxTemp: Math.round(Math.max(...temps)),
      description: middayForecast?.description,
      icon: middayForecast ? getWeatherIconUrl(middayForecast.uri) : '',
      weekDay: middayForecast ? getDayOfWeek(middayForecast.dt, timezone, language) : '',
    }
  })
}
