import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Хук "useTheme" можно использовать только внутри компонента <ThemeProvider>.');
  }

  return context;
};
