export function getFeelsLikeDescription(
  temperature: number,
  feelsLike: number,
): string | undefined {
  if (feelsLike > temperature) {
    return 'weather.details.feelsLike.warmer'
  }
  if (feelsLike < temperature) {
    return 'weather.details.feelsLike.colder'
  }
  return 'weather.details.feelsLike.same'
}
