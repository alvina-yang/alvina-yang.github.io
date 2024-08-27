import React from 'react';
import { useTheme } from '@contexts';
import styled from 'styled-components';
import theme from './theme';

const StyledInlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${theme.transition};
  }
`;

export default function InlineLink(props) {
  const { colors } = useTheme();
  return <StyledInlineLink theme={{ colors }} {...props} />;
}
