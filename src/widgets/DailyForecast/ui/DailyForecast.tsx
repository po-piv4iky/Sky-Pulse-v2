import { getDailySummary } from '@/entities/weather/model/getDailySummary'
import { groupForecastByDay } from '@/entities/weather/model/groupForecastByDay'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Card from '@/shared/components/Card/Card'
import StyledText from '@/shared/components/StyledText/StyledText'
import { StyleSheet, View } from 'react-native'

export function DailyForecast() {
  const weatherForecast = useWeatherStore((s) => s.weatherForecast)
  const weather = useWeatherStore((s) => s.weather)
  if (!weatherForecast || !weather) return

  const groupedForecast = groupForecastByDay(weatherForecast, weather.timezone)
  const dailyForecast = getDailySummary(groupedForecast)

  return (
    <View>
      {dailyForecast.map((item) => (
        <Card key={item.date}>
          <StyledText>{item.date}</StyledText>
          <StyledText>{item.maxTemp}</StyledText>
          <StyledText>{item.minTemp}</StyledText>
        </Card>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})
