import IconButton from '@/shared/components/IconButton/IconButton'
import StyledText from '@/shared/components/StyledText/StyledText'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

type HeaderLeftProps = {
  title: string
  iconName?: React.ComponentProps<typeof Ionicons>['name']
  onIconPress?: () => void
}

export default function HeaderLeft({ title, iconName, onIconPress }: HeaderLeftProps) {
  return (
    <View style={styles.titleContainer}>
      {iconName && (
        <IconButton
          name={iconName}
          color="tertiary"
          size="large"
          iconSize={36}
          onPress={onIconPress}
        />
      )}
      <StyledText variant="headlineLg">{title}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
