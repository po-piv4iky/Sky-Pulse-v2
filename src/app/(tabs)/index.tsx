import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import { useInitializationStore } from '@/features/initialize/model/initializationStore'
import Loader from '@/shared/components/Loader/Loader'
import CurrentWeather from '@/widgets/CurrentWeather/CurrentWeather'
import { DailyForecast } from '@/widgets/DailyForecast'
import { HourlyForecast } from '@/widgets/HourlyForecast'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'
import { WeatherDetails } from '@/widgets/WeatherDetails'
import WeatherNotFound from '@/widgets/WeatherNotFound/WeatherNotFound'
import { StyleSheet } from 'react-native'

export default function Home() {
  const weather = useWeatherStore((s) => s.weather)
  const initializationStatus = useInitializationStore((s) => s.status)

  if (initializationStatus === 'idle' || initializationStatus === 'loading') {
    return <Loader />
  }

  if (initializationStatus === 'error' || !weather) {
    return <WeatherNotFound />
  }

  return (
    <ScreenLayout scrollable contentStyle={styles.container}>
      <CurrentWeather />
      <HourlyForecast />
      <WeatherDetails />
      <DailyForecast />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 110,
    gap: 30,
  },
})
