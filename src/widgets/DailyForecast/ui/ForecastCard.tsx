import { DailySummary } from '@/entities/weather/types/dailySummary.types'
import StyledText from '@/shared/components/StyledText/StyledText'
import { THEME } from '@/shared/theme'
import { Image, StyleSheet, View } from 'react-native'

interface Props {
  item: DailySummary
  isLast: boolean
}

export default function ForecastCard({ item, isLast }: Props) {
  return (
    <View style={[styles.container, isLast && styles.lastItem]}>
      {/* День */}
      <View style={styles.dayBlock}>
        <StyledText>{item.weekDay}</StyledText>
      </View>

      {/* Погода */}
      <View style={styles.weatherBlock}>
        {item.icon && (
          <Image source={{ uri: item.icon }} style={styles.icon} resizeMode="contain" />
        )}

        <StyledText variant="bodySm" color="secondary" numberOfLines={1}>
          {item.description}
        </StyledText>
      </View>

      {/* Температура */}
      <View style={styles.tempBlock}>
        <StyledText style={styles.maxTemp}>{item.maxTemp}°</StyledText>

        <StyledText variant="bodySm" color="secondary" style={styles.minTemp}>
          {item.minTemp}°
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 64,

    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 12,
    paddingHorizontal: 14,

    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.BORDER_PRIMARY,
  },
  lastItem: {
    borderBottomWidth: 0,
  },

  dayBlock: {
    width: 70,
  },

  weatherBlock: {
    flex: 1,

    flexDirection: 'column',
    alignItems: 'center',

    gap: 8,
  },

  icon: {
    width: 42,
    height: 42,
  },

  tempBlock: {
    width: 60,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    gap: 8,
  },

  maxTemp: {
    fontSize: 17,
    fontWeight: '600',
  },

  minTemp: {
    fontSize: 15,
  },
})
