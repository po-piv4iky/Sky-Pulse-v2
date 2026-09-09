import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import CurrentWeather from '@/widgets/CurrentWeather/CurrentWeather'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'
import WeatherNotFound from '@/widgets/WeatherNotFound/WeatherNotFound'
import { StyleSheet } from 'react-native'

export default function HomePage() {
  const weather = useWeatherStore((s) => s.weather)

  if (!weather) return <WeatherNotFound />

  return (
    <ScreenLayout>
      <CurrentWeather />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({})
