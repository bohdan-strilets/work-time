import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAppSelector } from './useAppSelector';
import { getLanguage } from '../redux/settings/settingsSelectors';
import { LanguageEnum } from 'types/enums/LanguageEnum';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const useWeather = (date: Date) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const language = useAppSelector(getLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          toast.error(t(ErrorLngKeys.ErrorObtainingLocation, { ns: LocalesKeys.error }));
        },
      );
    } else {
      toast.error(t(ErrorLngKeys.YourBrowserDoesNotSupportGeolocation, { ns: LocalesKeys.error }));
    }
  }, [t]);

  const transformDateForApi = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const normalizeLanguageForApi = () => {
    if (language === LanguageEnum.ua) {
      return 'uk';
    }
    return language;
  };

  const weatherDto = {
    latitude,
    longitude,
    date: transformDateForApi(date),
    lang: normalizeLanguageForApi(),
  };

  return { weatherDto };
};

export default useWeather;
