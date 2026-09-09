import NetInfo from '@react-native-community/netinfo'

export const isInternetAvailable = async (): Promise<boolean> => {
  const state = await NetInfo.fetch()
  return state.isConnected === true
}
