import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface Theme {
  background: string;
  color: string;
  fontColor: string;
}

interface ThemeContextProps {
  theme: Theme;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme: Theme = {
  background: '/assets/images/backgrounds/purple_wpp.png',
  color: '#56387C',
  fontColor: '#FFF'
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value= {{ theme }}>
      <StyledThemeProvider theme= { theme }>
        { children }
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};