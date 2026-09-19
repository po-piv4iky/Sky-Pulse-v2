export function getWindDirection(degrees: number): string {
  const directions = [
    'north',
    'northEast',
    'east',
    'southEast',
    'south',
    'southWest',
    'west',
    'northWest',
  ] as const

  const index = Math.round(degrees / 45) % 8

  return `weather.directions.${directions[index]}`
}
