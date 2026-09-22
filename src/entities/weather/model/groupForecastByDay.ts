import { getLocalDate } from '@/shared/lib/date/getLocalDate'
import { DailyForecast } from '../types/dailyForecast.types'
import { WeatherForecast } from '../types/weatherForecast.types'

export function groupForecastByDay(
  forecast: WeatherForecast[],
  timezone: number,
): DailyForecast[] {
  const grouped: Record<string, WeatherForecast[]> = {}
  forecast.forEach((item) => {
    const date = getLocalDate(item.dt, timezone)
    if (!grouped[date]) {
      grouped[date] = []
    }
    grouped[date].push(item)
  })
  return Object.entries(grouped).map(([date, forecasts]) => ({
    date,
    forecasts,
  }))
}
