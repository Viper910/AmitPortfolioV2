import React, { createContext, useMemo, useState, useContext, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from './Theme';

// Define the structure of the context value
interface ThemeContextType {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

// Create the ThemeContext with a default value (will be overridden by the provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props for the provider
interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoize the theme to optimize performance
  const theme: Theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useThemeToggle = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeToggle must be used within a ThemeProviderWrapper');
  }
  return context;
};
