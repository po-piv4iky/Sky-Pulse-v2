export function getPressureDescription(pressure: number): string {
  if (pressure < 1000) {
    return 'weather.details.pressure.low'
  }

  if (pressure <= 1020) {
    return 'weather.details.pressure.normal'
  }

  if (pressure <= 1030) {
    return 'weather.details.pressure.high'
  }

  return 'weather.details.pressure.veryHigh'
}
