export function getSunPosition(
  sunrise: number,
  sunset: number,
  currentTime: number,
  width: number,
  height: number,
) {
  const duration = sunset - sunrise

  if (duration <= 0) {
    return {
      progress: 0,
      x: 0,
      y: height,
    }
  }

  const progress = (currentTime - sunrise) / duration

  const clampedProgress = Math.max(0, Math.min(1, progress))

  const x = width * clampedProgress

  const y = height - height * Math.sin(Math.PI * clampedProgress)

  return {
    progress: clampedProgress,
    x,
    y,
  }
}
