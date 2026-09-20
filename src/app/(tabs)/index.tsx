import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Loader from '@/shared/components/Loader/Loader'
import CurrentWeather from '@/widgets/CurrentWeather/CurrentWeather'
import { HourlyForecast } from '@/widgets/HourlyForecast'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'
import { WeatherDetails } from '@/widgets/WeatherDetails'
import WeatherNotFound from '@/widgets/WeatherNotFound/WeatherNotFound'
import { StyleSheet } from 'react-native'

export default function Home() {
  const weather = useWeatherStore((s) => s.weather)
  const status = useWeatherStore((s) => s.weatherStatus)
  const hasHydrated = useWeatherStore((s) => s.hasHydrated)

  if (!hasHydrated || status === 'idle' || status === 'loading') {
    return <Loader />
  }
  if (status === 'error' || !weather) return <WeatherNotFound />

  return (
    <ScreenLayout scrollable contentStyle={styles.container}>
      <CurrentWeather />
      <HourlyForecast />
      <WeatherDetails />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 110,
    gap: 30,
  },
})
