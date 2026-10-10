import IconButton from '@/shared/components/IconButton/IconButton'

import { City } from '@/entities/city/model/types/city.types'
import { useSaveCity } from '../model/useSaveCity'

type SaveCityButtonProps = {
  city: City | null
}

export default function SaveCityButton({ city }: SaveCityButtonProps) {
  const { isSaved, toggleSave } = useSaveCity(city)

  return (
    <IconButton name={isSaved ? 'bookmark' : 'bookmark-outline'} onPress={toggleSave} />
  )
}
