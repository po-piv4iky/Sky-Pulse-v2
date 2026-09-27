import { getDayOfWeek } from '@/shared/lib/date/getDayOfWeek'
import { Language } from '@/shared/types/language'
import { DailyForecast } from '../types/dailyForecast.types'
import { DailySummary } from '../types/dailySummary.types'
import { getClosestForecast } from './getClosestForecast'

export function getDailySummary(
  days: DailyForecast[],

  language: Language,
): DailySummary[] {
  return days.map((day) => {
    const temps = day.forecasts.map((item) => item.temp)
    const representativeForecast = getClosestForecast(day.forecasts, 12, day.timezone)
    return {
      date: day.date,
      minTemp: Math.round(Math.min(...temps)),
      maxTemp: Math.round(Math.max(...temps)),
      description: representativeForecast?.description ?? '',
      icon: representativeForecast?.uri ? representativeForecast.uri : null,
      weekDay: representativeForecast
        ? getDayOfWeek(representativeForecast.dt, day.timezone, language)
        : '',
    }
  })
}
