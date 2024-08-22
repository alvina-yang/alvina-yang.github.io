import React from 'react';
import PropTypes from 'prop-types';
import { email } from '@config';
import { Side } from '@components';
import styled from 'styled-components';
import { theme } from '@styles';
import { useTheme } from '@contexts';
const { yassifyThemeColors, darkThemeColors, fontSizes, fonts } = theme;

const Email = ({ isHome }) => {
  const { themeName } = useTheme();
  const colors = themeName === 'DarkMode' ? darkThemeColors : yassifyThemeColors;

  const StyledLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: ${colors.lightSlate};
    }
  `;
  const StyledEmailLink = styled.a`
    font-size: ${fontSizes.lg};
    letter-spacing: 0.1em;
    font-family: ${fonts.Title};
    font-weight: 500;
    writing-mode: vertical-rl;
    margin: 20px auto;
    padding: 10px;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  `;
  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
      </StyledLinkWrapper>
    </Side>
  );
};
Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
