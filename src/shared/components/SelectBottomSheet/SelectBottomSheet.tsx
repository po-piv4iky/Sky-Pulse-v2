import { THEME } from '@/shared/theme'
import { BottomSheetModal, BottomSheetView } from '@expo/ui/community/bottom-sheet'
import { Pressable, StyleSheet } from 'react-native'
import StyledText from '../StyledText/StyledText'

interface SelectBottomSheetProps<T extends string> {
  options?: readonly T[]
  title: string
  value: string
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
  return (
    <BottomSheetModal snapPoints={['45%']} ref={ref} enablePanDownToClose>
      <BottomSheetView>
        <StyledText style={styles.title}>{title}</StyledText>
        {options?.map((item) => {
          const selected = item === value
          return (
            <Pressable
              key={item}
              onPress={() => onSelect(item)}
              accessibilityRole="radio"
              accessibilityState={{ checked: selected }}
              style={[styles.option, selected && styles.selectedOption]}
            >
              <StyledText>{item}</StyledText>
            </Pressable>
          )
        })}
      </BottomSheetView>
    </BottomSheetModal>
  )
}

const styles = StyleSheet.create({
  title: {
    opacity: 80,
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
    borderColor: THEME.colors.PRIMARY,
  },
})
