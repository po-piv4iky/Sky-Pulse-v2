export function getVisibilityDescription(visibility: number): string {
  const visibilityKm = visibility / 1000 //переводим в километры
  if (visibilityKm < 1) {
    return 'weather.details.visibility.veryLow'
  }

  if (visibilityKm < 4) {
    return 'weather.details.visibility.low'
  }

  if (visibilityKm < 10) {
    return 'weather.details.visibility.moderate'
  }

  return 'weather.details.visibility.good'
}
