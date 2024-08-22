import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import { useTheme } from '@contexts';
const { fontSizes } = theme;

const ThemedDot = styled.span`
  color: ${({ theme }) => theme.colors.accent}; // Dot color
  font-size: ${fontSizes.xl}; // Dot size
  padding-right: 6px; // Space between the dot and the title
`;

export default function Dot(props) {
  const { colors } = useTheme();
  return <ThemedDot theme={{ colors }} {...props} />;
}
