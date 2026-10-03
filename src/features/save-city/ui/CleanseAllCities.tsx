import { useSavedCityStore } from '@/entities/city/model/store/useSavedCityStore'
import AppModal from '@/shared/components/AppModal/AppModal'
import StyledButton from '@/shared/components/StyledButton/StyledButton'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ClearAllCities() {
  const clearAllCities = useSavedCityStore((s) => s.clearAllCities)
  const [visible, setVisible] = useState(false)

  const clearCities = () => {
    clearAllCities()
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <StyledButton
        label="Clear all cities"
        style={styles.clearButton}
        onPress={() => setVisible(true)}
      />

      <AppModal
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>
            Clear all cities?
          </Text>

          <Text style={styles.description}>
            All saved cities will be removed. This action cannot be undone.
          </Text>

          <View style={styles.actions}>
            <StyledButton
              label="Cancel"
              style={styles.cancelButton}
              onPress={() => setVisible(false)}
            />

            <StyledButton
              label="Clear"
              style={styles.deleteButton}
              onPress={clearCities}
            />
          </View>
        </View>
      </AppModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },

  clearButton: {
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,

    backgroundColor: 'rgba(239, 68, 68, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.25)',
    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    width: '100%',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
  },

  description: {
    color: '#A1A1AA',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
  },

  cancelButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },

  deleteButton: {
    flex: 1,
    backgroundColor: 'rgba(239, 68, 68, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.4)',
  },
})