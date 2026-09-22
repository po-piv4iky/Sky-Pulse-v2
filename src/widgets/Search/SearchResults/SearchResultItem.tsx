import { SearchResult } from '@/features/search-city/searchResult.types'
import Card from '@/shared/components/Card/Card'
import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { getWeatherIconUrl } from '@/shared/lib/getWeatherIconUrl'
import { THEME } from '@/shared/theme'
import { Image, StyleSheet, View } from 'react-native'

interface Props {
  cityItem: SearchResult
  onPress: (city: SearchResult) => void
}

export default function SearchResultItem({ cityItem, onPress }: Props) {
  const iconUrl = getWeatherIconUrl(cityItem.icon)

  return (
    <Card
      onPress={() => onPress(cityItem)}
      style={styles.container}
      border="default"
      background="dark"
    >
      <View style={styles.left}>
        <StyledIcon name="search" circle color={THEME.colors.TEXT_SECONDARY} />

        <View style={styles.cityBlock}>
          <StyledText variant="titleMd" numberOfLines={2} ellipsizeMode="tail">
            {cityItem.name}
          </StyledText>

          <View style={styles.locationRow}>
            <StyledText
              variant="bodySm"
              color="secondary"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.locationText}
            >
              {cityItem.state
                ? `${cityItem.state}, ${cityItem.country}`
                : cityItem.country}
            </StyledText>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        {iconUrl && (
          <Image
            source={{ uri: iconUrl }}
            style={styles.weatherIcon}
            resizeMode="contain"
          />
        )}

        <StyledText variant="titleMd">{cityItem.temperature}°</StyledText>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    marginHorizontal: 12,
    marginBottom: 10,
  },

  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginRight: 16,
    minWidth: 0,
  },

  cityBlock: {
    flex: 1,
    minWidth: 0,
  },

  locationRow: {
    marginTop: 2,
  },

  locationText: {
    opacity: 0.7,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flexShrink: 0,
  },

  weatherIcon: {
    width: 34,
    height: 34,
  },
})
