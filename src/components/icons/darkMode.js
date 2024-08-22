import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { theme } from '@styles';
import { useTheme } from '@contexts';
const { yassifyThemeColors, darkThemeColors } = theme;

const IconDarkMode = () => {
  const { themeName } = useTheme();
  const colors = themeName === 'DarkMode' ? darkThemeColors : yassifyThemeColors;
  return <FontAwesomeIcon icon={faMoon} color={colors.accent} />;
};
export default IconDarkMode;
