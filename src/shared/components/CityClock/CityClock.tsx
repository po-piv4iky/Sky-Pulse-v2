import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import { useCityTime } from '@/shared/hooks/useCityTime'
import { StyleSheet } from 'react-native'
import StyledText from '../StyledText/StyledText'

export default function CityClock() {
  const weather = useWeatherStore((s) => s.weather)
  if (!weather) return null
  const time = useCityTime(weather.dt, weather.timezone)
  return (
    <StyledText>
      {time.hours}:{time.minutes}:{time.seconds}
    </StyledText>
  )
}

const styles = StyleSheet.create({})
