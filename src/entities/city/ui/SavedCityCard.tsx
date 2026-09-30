import Card from '@/shared/components/Card/Card'
import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { StyleSheet, View } from 'react-native'
import { SavedCityCardData } from '../types/savedCityCardData.types'

interface Props {
  data: SavedCityCardData
}

export default function SavedCityCard({ data }: Props) {
  return (
    <Card style={styles.container}>
      <View>
        <StyledText>{data.name}</StyledText>
      </View>
      <View>
        <StyledText variant="headlineMd">{data.temperature}</StyledText>
        <StyledIcon name="basket-outline" />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})
