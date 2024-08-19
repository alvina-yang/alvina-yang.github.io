import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { theme } from '@styles';
const { colors } = theme;

const IconDarkMode = () => <FontAwesomeIcon icon={faMoon} color={colors.accent} />;

export default IconDarkMode;
