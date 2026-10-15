import { useEffect, useMemo, useState } from 'react'

export type CityTime = {
  hours: string
  minutes: string
  seconds: string
}

export const useCityTime = (timezoneOffset: number): CityTime => {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return useMemo(() => {
    const utcDate = new Date(now)
    const cityDate = new Date(now + timezoneOffset * 1000)

    return {
      hours: String(cityDate.getUTCHours()).padStart(2, '0'),
      minutes: String(cityDate.getUTCMinutes()).padStart(2, '0'),
      seconds: String(cityDate.getUTCSeconds()).padStart(2, '0'),
    }
  }, [now, timezoneOffset])
}
