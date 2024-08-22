import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@contexts';
import theme from './theme';

const { colors, fontSizes, fonts } = theme;

const ThemedButton = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  background-color: transparent;
  border: 1px solid ${colors.accent};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.Description};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.transAccent};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default function Button(props) {
  const { colors } = useTheme();
  return <ThemedButton theme={{ colors }} {...props} />;
}
