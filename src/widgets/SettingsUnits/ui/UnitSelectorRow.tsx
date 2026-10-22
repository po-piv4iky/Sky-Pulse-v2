import { BottomSheetModal, BottomSheetView } from '@expo/ui/community/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Pressable, StyleSheet, View } from 'react-native'

import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { THEME } from '@/shared/theme'

interface UnitSelectorRowProps<T extends string> {
  options: readonly T[]
  onSelect: (value: T) => void
  icon: React.ComponentProps<typeof Ionicons>['name']
  title: string
  value: T
  isLast?: boolean
}

export default function UnitSelectorRow<T extends string>({
  options,
  onSelect,
  icon,
  title,
  value,
  isLast,
}: UnitSelectorRowProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const sheetRef = useRef<BottomSheetModal>(null)
  const rotation = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(rotation, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start()
  }, [isOpen, rotation])
  const arrowRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })
  const handleSelect = (option: T) => {
    onSelect(option)
    sheetRef.current?.dismiss()
  }

  return (
    <>
      <Pressable
        onPress={() => sheetRef.current?.present()}
        accessibilityRole="button"
        accessibilityLabel={`${title}: ${value}`}
        style={[styles.row, !isLast && styles.rowDivider]}
      >
        <StyledIcon name={icon} />

        <StyledText style={styles.title}>{title}</StyledText>

        <View style={styles.valueContainer}>
          <StyledText style={styles.value}>{value}</StyledText>

          <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
            <Ionicons name="chevron-down" size={18} color="#A8ADBA" />
          </Animated.View>
        </View>
      </Pressable>

      <BottomSheetModal
        ref={sheetRef}
        snapPoints={['40%']}
        enablePanDownToClose
        onChange={(index) => setIsOpen(index >= 0)}
        onDismiss={() => setIsOpen(false)}
        backgroundStyle={{
          backgroundColor: THEME.colors.BG_SECONDARY,
        }}
      >
        <BottomSheetView style={styles.sheetContent}>
          <StyledText style={styles.sheetTitle}>{title}</StyledText>

          {options.map((option) => {
            const selected = option === value

            return (
              <Pressable
                key={option}
                onPress={() => handleSelect(option)}
                accessibilityRole="radio"
                accessibilityState={{ checked: selected }}
                style={[styles.option, selected && styles.selectedOption]}
              >
                <StyledText
                  style={[styles.optionText, selected && styles.selectedOptionText]}
                >
                  {option}
                </StyledText>

                {selected && (
                  <Ionicons
                    name="checkmark-circle"
                    size={22}
                    color={THEME.colors.BUTTON_PRIMARY_ACTIVE}
                  />
                )}
              </Pressable>
            )
          })}
        </BottomSheetView>
      </BottomSheetModal>
    </>
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
  rowDivider: {
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
  sheetContent: {
    padding: 20,
    gap: 10,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  option: {
    minHeight: 52,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#202635',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedOption: {
    borderWidth: 1,
    borderColor: THEME.colors.BUTTON_PRIMARY_ACTIVE,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    fontWeight: '600',
  },
})
