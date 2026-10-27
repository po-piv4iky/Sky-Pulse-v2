import { useAppTheme } from '@/shared/theme'
import type { AppColors } from '@/shared/theme/colors'
import { BottomSheetModal, BottomSheetView } from '@expo/ui/community/bottom-sheet'
import { Pressable, StyleSheet } from 'react-native'

import StyledText from '../StyledText/StyledText'

interface SelectBottomSheetProps<T extends string> {
  options: readonly T[]
  title: string
  value: T
  ref?: React.Ref<BottomSheetModal>
  onSelect: (value: T) => void
}

export default function SelectBottomSheet<T extends string>({
  options,
  title,
  value,
  ref,
  onSelect,
}: SelectBottomSheetProps<T>) {
  const { colors } = useAppTheme()
  const styles = createStyles(colors)

  return (
    <BottomSheetModal
      snapPoints={['45%']}
      ref={ref}
      enablePanDownToClose
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetView style={styles.content}>
        <StyledText style={styles.title}>{title}</StyledText>

        {options.map((item) => {
          const selected = item === value

          return (
            <Pressable
              key={item}
              onPress={() => onSelect(item)}
              accessibilityRole="radio"
              accessibilityState={{ checked: selected }}
              style={[styles.option, selected && styles.selectedOption]}
            >
              <StyledText
                style={[styles.optionText, selected && styles.selectedOptionText]}
              >
                {item}
              </StyledText>
            </Pressable>
          )
        })}
      </BottomSheetView>
    </BottomSheetModal>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    sheetBackground: {
      backgroundColor: colors.BG_SECONDARY,
    },
    handleIndicator: {
      backgroundColor: colors.BORDER,
    },
    content: {
      flex: 1,
      padding: 20,
      gap: 10,
    },
    title: {
      opacity: 0.8,
      color: colors.TEXT_PRIMARY,
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 12,
    },
    option: {
      minHeight: 52,
      paddingHorizontal: 14,
      borderRadius: 12,
      backgroundColor: colors.SURFACE,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectedOption: {
      borderWidth: 1,
      borderColor: colors.PRIMARY,
    },
    optionText: {
      color: colors.TEXT_PRIMARY,
      fontSize: 16,
    },
    selectedOptionText: {
      fontWeight: '600',
    },
  })
