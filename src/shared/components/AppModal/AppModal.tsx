import { Modal, Pressable, StyleSheet, View } from 'react-native'

type AppModalProps = {
  visible: boolean
  children: React.ReactNode
  onClose: () => void
}

export default function AppModal({ visible, children, onClose }: AppModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        {/* Фон */}
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />

        {/* Окно */}
        <View style={styles.modal}>{children}</View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,

    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },

  modal: {
    width: '100%',
    maxWidth: 400,

    padding: 24,

    borderRadius: 22,

    backgroundColor: 'rgba(25, 25, 32, 0.96)',

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
})
