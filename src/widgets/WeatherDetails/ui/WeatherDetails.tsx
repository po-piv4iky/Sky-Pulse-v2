import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Card from '@/shared/components/Card/Card'
import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { getWeatherDetails } from '../model/getWeatherDetails'

export function WeatherDetails() {
  const weather = useWeatherStore((s) => s.weather)
  if (!weather) return null
  const details = getWeatherDetails(weather)
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      {details.map((item) => (
        <Card key={item.labelKey} border="default" style={styles.cardWrapper}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <StyledIcon name={item.icon} />
            <StyledText>{t(item.labelKey)}</StyledText>
          </View>
          <StyledText>{item.value}</StyledText>
          {item.description && <StyledText>{t(item.description)}</StyledText>}
        </Card>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  cardWrapper: {
    width: '48%',
    gap: 20,
  },
})
