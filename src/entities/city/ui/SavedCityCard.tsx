import Card from '@/shared/components/Card/Card'
import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { Pressable, StyleSheet, View } from 'react-native'
import { SavedCityCardData } from '../types/savedCityCardData.types'

interface Props {
  data: SavedCityCardData
  removeCity: (id: string) => void
}

export default function SavedCityCard({ data, removeCity }: Props) {
  return (
    <Card border="default" style={styles.container}>
      <View style={styles.cityInfo}>
        <StyledText variant="headlineMd">{data.name}</StyledText>

        <StyledText style={styles.country}>{data.country}</StyledText>
      </View>

      <View style={styles.right}>
        <StyledText variant="headlineMd">{Math.round(data.temperature)}°</StyledText>

        <Pressable
          onPress={() => removeCity(data.id)}
          style={styles.deleteButton}
          hitSlop={8}
        >
          <StyledIcon name="trash-outline" size={20} />
        </Pressable>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 18,
  },

  cityInfo: {
    flex: 1,
    gap: 4,
  },

  country: {
    opacity: 0.55,
    fontSize: 13,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  deleteButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.25)',
  },
})
