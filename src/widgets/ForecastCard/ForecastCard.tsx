import { WeatherForecast } from '@/entities/weather/types/weatherForecast.types'
import Card from '@/shared/components/Card/Card'
import StyledText from '@/shared/components/StyledText/StyledText'
import { Image, StyleSheet } from 'react-native'

type ForecastCardProps = {
  item: WeatherForecast
  timezone: number
}

export default function ForecastCard({ item, timezone }: ForecastCardProps) {
  const date = new Date((item.dt + timezone) * 1000)

  const hours = String(date.getUTCHours()).padStart(2, '0')

  return (
    <Card background="dark" border="subtle" style={styles.card} padding="md">
      <StyledText style={styles.time}>{hours}</StyledText>

      {item.uri && (
        <Image source={{ uri: item.uri }} style={styles.icon} resizeMode="contain" />
      )}

      <StyledText style={styles.temperature}>{Math.round(item.temp)}°</StyledText>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 72,
    minHeight: 108,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  time: {
    fontSize: 13,
    opacity: 0.65,
  },

  icon: {
    width: 34,
    height: 34,
    marginVertical: 6,
  },

  temperature: {
    fontSize: 16,
    fontWeight: '600',
  },
})
