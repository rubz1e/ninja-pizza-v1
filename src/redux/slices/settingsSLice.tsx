import { createSlice } from '@reduxjs/toolkit';

export type LanguageType = 'ru' | 'en';

interface SettingsStateType {
  language: LanguageType;
}

const languages: LanguageType[] = ['ru', 'en'];

const getInitialState = (): SettingsStateType => {
  let language = localStorage.getItem('useLanguage') as LanguageType;
  if (!languages.includes(language)) {
    language = 'ru';
  }

  return {
    language,
  };
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: getInitialState(),
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'ru' ? 'en' : 'ru';
      localStorage.setItem('useLanguage', state.language);
    },
  },
});

export const settingsActions = {
  ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
