export function getHumidityDescription(humidity: number): string | undefined {
  if (humidity < 30) {
    return 'weather.details.humidity.low'
  }

  if (humidity < 60) {
    return 'weather.details.humidity.comfortable'
  }

  if (humidity < 80) {
    return 'weather.details.humidity.high'
  }

  return 'weather.details.humidity.veryHigh'
}
