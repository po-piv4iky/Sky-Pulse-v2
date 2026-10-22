import { THEME } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native'
import StyledIcon from '../StyledIcon/StyledIcon'
import StyledText from '../StyledText/StyledText'

interface SelectRowProps {
  icon: React.ComponentProps<typeof Ionicons>['name']
  title: string
  value: string
  onPress: () => void
  isOpen: boolean
  isLast?: boolean
}

export default function SelectRow({
  title,
  icon,
  value,
  onPress,
  isOpen,
  isLast,
}: SelectRowProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${title}: ${value}`}
      accessibilityState={{ expanded: isOpen }}
      style={[styles.row, !isLast && styles.divider]}
    >
      <StyledIcon name={icon} />
      <StyledText style={styles.title}>{title}</StyledText>

      <View style={styles.valueContainer}>
        <StyledText style={styles.value}>{value}</StyledText>
        <StyledIcon name="chevron-down" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    gap: 12,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: THEME.colors.BORDER_PRIMARY,
  },
  title: {
    flex: 1,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    color: '#A8ADBA',
  },
})
