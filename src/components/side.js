import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { useTheme } from '@contexts';
import { theme, media } from '@styles';
const { yassifyThemeColors, darkThemeColors, loaderDelay } = theme;

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const { themeName } = useTheme();
  const colors = themeName === 'DarkMode' ? darkThemeColors : yassifyThemeColors;

  const StyledContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
    z-index: 10;
    color: ${colors.accent};
    ${media.desktop`right: 25px;`};
    ${media.tablet`display: none;`};
  `;

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;
