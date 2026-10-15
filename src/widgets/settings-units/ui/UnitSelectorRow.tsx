import StyledText from '@/shared/components/StyledText/StyledText'
import { useState } from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'

interface UnitSelectorRowProps {
  options: readonly string[]
  onSelect: (value: string) => void
  title: string
  value: string
}

export default function UnitSelectorRow({
  options,
  onSelect,
  title,
  value,
}: UnitSelectorRowProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        accessibilityRole="button"
        accessibilityLabel={`${title}: ${value}`}
      >
        <StyledText style={styles.title}>{title}</StyledText>

        <View style={styles.valueContainer}>
          <StyledText style={styles.value}>{value}</StyledText>

          <StyledText style={styles.arrow}>▼</StyledText>
        </View>
      </Pressable>
      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable onPress={() => setIsOpen(false)}>
          <Pressable onPress={(event) => event.stopPropagation()}>
            <StyledText style={styles.modalTitle}>{title}</StyledText>
            {options.map((option) => {
              const selected = option === value
              return <Pressable key={option}></Pressable>
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  title: {},
  valueContainer: {},
  value: {},
  arrow: {},
  modalTitle: {},
})
