import * as Location from 'expo-location'
import { Coordinates } from '../types/coordinates.types'

//спрашиваем у ОС статус доступа к местоположению юзера
export function getPermissionStatus(): Promise<Location.LocationPermissionResponse> {
  return Location.getForegroundPermissionsAsync()
}

//спрашиваем разрешеие на получение координат
export function requestPermission(): Promise<Location.LocationPermissionResponse> {
  return Location.requestForegroundPermissionsAsync()
}

//получение координат пользователя
export async function getCurrentLocation(): Promise<Coordinates | null> {
  const enabled = Location.hasServicesEnabledAsync()// проверка включённого jps
  if (!enabled) {
    return null
  }
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  })
  return {
    latitude: coords.latitude,
    longitude: coords.longitude,
  }
}
