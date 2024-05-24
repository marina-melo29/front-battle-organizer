import React, { createContext, useContext, ReactNode } from 'react';
import defaultTheme, { Theme } from '../themes/defaultTheme';

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
