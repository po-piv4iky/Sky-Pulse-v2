import { getDailySummary } from '@/entities/weather/model/getDailySummary'
import { groupForecastByDay } from '@/entities/weather/model/groupForecastByDay'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Card from '@/shared/components/Card/Card'
import { Language } from '@/shared/types/language'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'
import ForecastCard from './ForecastCard'

export function DailyForecast() {
  const weatherForecast = useWeatherStore((s) => s.weatherForecast)
  const weather = useWeatherStore((s) => s.weather)
  if (!weatherForecast || !weather) return

  const { i18n } = useTranslation()
  const language = i18n.language as Language

  const groupedForecast = groupForecastByDay(weatherForecast, weather.timezone)
  const dailyForecast = getDailySummary(groupedForecast, weather.timezone, language)

  return (
    <Card>
      {dailyForecast.map((item) => (
        <ForecastCard key={item.date} item={item} />
      ))}
    </Card>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})
