import IconButton from '@/shared/components/IconButton/IconButton'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import SearchInput from './SearchInput'

type SearchHeaderProps = {
  text: string
  onTextChange: (text: string) => void
}

export default function HeaderSearch({ text, onTextChange }: SearchHeaderProps) {
  const opacity = useSharedValue(0)
  const translateX = useSharedValue(20)

  useEffect(() => {
    if (text.length > 0) {
      opacity.value = withTiming(1, { duration: 180 })
      translateX.value = withTiming(0, { duration: 250 })
    } else {
      opacity.value = withTiming(0, { duration: 180 })
      translateX.value = withTiming(20, { duration: 250 })
    }
  }, [text])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }))

  const router = useRouter()
  const handleBackHome = () => {
    router.back()
  }
  return (
    <View style={styles.searchContainer}>
      <IconButton
        onPress={handleBackHome}
        name="arrow-back-sharp"
        color="tertiary"
        size="large"
      />
      <SearchInput value={text} onChangeText={onTextChange} />
      <Animated.View style={[animatedStyle]}>
        <IconButton name="search" color="tertiary" />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
})
