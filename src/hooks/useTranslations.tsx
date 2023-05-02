import { LanguageType, settingsActions } from '../redux/slices/settingsSLice';
import en from '../resources/locales/en.json';
import ru from '../resources/locales/ru.json';
import { useAppDispatch, useAppSelector } from './useRedux';

const translations: { [name in LanguageType]: typeof en & typeof ru } = {
  en,
  ru,
};

const useTranslation = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.settings.language);

  const toggleLanguage = () => dispatch(settingsActions.toggleLanguage());

  return {
    t: translations[language],
    toggleLanguage,
  };
};

export default useTranslation;
