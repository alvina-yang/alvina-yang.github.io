import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { theme } from '@styles';
const { yassifyThemeColors, darkThemeColors, yassifyThemeFonts, darkThemeFonts } = theme;

// Create a Context for the theme
const ThemeContext = createContext();

// Helper hook to use the context
export const useTheme = () => useContext(ThemeContext);

// Provider in your app
export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('DarkMode'); // Default theme

  // Function to toggle theme
  const toggleTheme = () => {
    setThemeName(prevTheme => (prevTheme === 'DarkMode' ? 'YassifyMode' : 'DarkMode'));
  };

  const colors = themeName === 'DarkMode' ? darkThemeColors : yassifyThemeColors;
  const fonts = themeName === 'DarkMode' ? darkThemeFonts : yassifyThemeFonts;

  // Provide the theme name and toggleTheme function to the context
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme, colors, fonts }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
