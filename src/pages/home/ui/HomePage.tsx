import { useUserLocationStore } from '@/entities/user-location/store/userLocationStore'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Loader from '@/shared/components/Loader/Loader'
import CurrentWeather from '@/widgets/CurrentWeather/CurrentWeather'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'
import WeatherNotFound from '@/widgets/WeatherNotFound/WeatherNotFound'
import { StyleSheet } from 'react-native'

export default function HomePage() {
  const weather = useWeatherStore((s) => s.weather)
  const isWeatherLoading = useWeatherStore((s) => s.isLoading)
  const isLocationLoading = useUserLocationStore((s) => s.isLoading)

  if (isLocationLoading || isWeatherLoading) {
    return <Loader />
  }
  if (!weather) return <WeatherNotFound />

  return (
    <ScreenLayout scrollable>
      <CurrentWeather />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({})
