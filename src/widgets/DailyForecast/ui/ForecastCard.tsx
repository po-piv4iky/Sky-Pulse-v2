import { DailySummary } from '@/entities/weather/types/dailySummary.types'
import StyledText from '@/shared/components/StyledText/StyledText'
import { getWeatherIconUrl } from '@/shared/lib/getWeatherIconUrl'
import { Image, StyleSheet, View } from 'react-native'

interface Props {
  item: DailySummary
}

export default function ForecastCard({ item }: Props) {
  const icon = getWeatherIconUrl(item.icon)
  return (
    <View style={styles.block}>
      <StyledText>{item.weekDay}</StyledText>
      <View>
        {item.icon && <Image source={{ uri: icon }} />}
        <StyledText>{item.description}</StyledText>
      </View>

      <View style={styles.tempBlock}>
        <StyledText>{item.minTemp}</StyledText>
        <StyledText>{item.maxTemp}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tempBlock: {
    flexDirection: 'row',
  },
})
