import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAppSelector } from './useAppSelector';
import { getLanguage } from '../redux/settings/settingsSelectors';
import { LanguageEnum } from 'types/enums/LanguageEnum';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const weatherApiPaths = {
  History: 'http://api.weatherapi.com/v1/history.json',
  Future: 'http://api.weatherapi.com/v1/future.json',
  Forecast: 'http://api.weatherapi.com/v1/forecast.json',
};

const useWeather = (date: Date) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [forecast, setForecast] = useState<any | null>(null);
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

  useEffect(() => {
    const normalizeLanguageForApi = () => {
      if (language === LanguageEnum.ua) {
        return 'uk';
      }
      return language;
    };

    const fetchWeather = async () => {
      if (latitude && longitude) {
        const params = {
          key: 'b96306c2a3de4de6b8d194843241202',
          q: `${latitude},${longitude}`,
          dt: transformDateForApi(date),
          lang: normalizeLanguageForApi(),
        };

        try {
          const today = new Date();
          if (date.getTime() < today.getTime()) {
            const response = await axios.get(weatherApiPaths.History, { params });
            return setForecast(response.data);
          }
          let futureDate = new Date(today);
          futureDate.setDate(futureDate.getDate() + 14);
          if (date.getTime() > futureDate.getTime()) {
            const response = await axios.get(weatherApiPaths.Future, { params });
            return setForecast(response.data);
          }
          if (date.getTime() > today.getTime()) {
            const response = await axios.get(weatherApiPaths.Forecast, { params });
            return setForecast(response.data);
          }
        } catch (error) {
          toast.error(t(ErrorLngKeys.ErrorRequestingWeatherData, { ns: LocalesKeys.error }));
        }
      }
    };
    fetchWeather();
  }, [date, language, latitude, longitude, t]);

  return { forecast };
};

export default useWeather;
