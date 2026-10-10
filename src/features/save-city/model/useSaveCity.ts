import { useSavedCityStore } from '@/entities/city/model/store/useSavedCityStore'
import { City } from '@/entities/city/model/types/city.types'
import { useToastStore } from '@/shared/ui/Toast/toast.store'
import { useTranslation } from 'react-i18next'

export function useSaveCity(city: City | null) {
  const { t } = useTranslation()

  const cities = useSavedCityStore((state) => state.cities)
  const toggleCity = useSavedCityStore((state) => state.toggleCity)

  const showToast = useToastStore((state) => state.showToast)

  const isSaved = city ? cities.some((item) => item.id === city.id) : false

  const toggleSave = () => {
    if (!city) return

    toggleCity(city)

    showToast(
      isSaved ? 'info' : 'success',
      isSaved ? t('savedCity.removed') : t('savedCity.added'),
    )
  }

  return {
    isSaved,
    toggleSave,
  }
}
