import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { useTheme } from '@contexts';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading, Dot } from '@styles';
const { yassifyThemeColors, darkThemeColors, fontSizes, yassifyThemeFonts, darkThemeFonts } = theme;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, buttonText } = frontmatter;
  const revealContainer = useRef(null);

  const { themeName } = useTheme();
  const colors = themeName === 'DarkMode' ? darkThemeColors : yassifyThemeColors;
  const fonts = themeName === 'DarkMode' ? darkThemeFonts : yassifyThemeFonts;
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const StyledContainer = styled(Section)`
    text-align: center;
    max-width: 600px;
    margin: 0 auto 100px;
    a {
      ${mixins.inlineLink(colors)};
    }
    div {
      font-family: ${fonts.Description};
      font-size: ${fontSizes.md};
    }
  `;
  const StyledHeading = styled(Heading)`
    display: block;
    color: ${colors.accent};
    font-size: ${fontSizes.md};
    font-family: ${fonts.Description};
    font-weight: normal;
    margin-bottom: 20px;
    justify-content: center;
    ${media.desktop`font-size: ${fontSizes.sm};`};
    &:before {
      bottom: 0;
      font-size: ${fontSizes.sm};
      ${media.desktop`font-size: ${fontSizes.smish};`};
    }
    &:after {
      display: none;
    }
  `;
  const StyledTitle = styled.h4`
    margin: 0 0 20px;
    font-size: 60px;
    ${media.desktop`font-size: 50px;`};
    ${media.tablet`font-size: 40px;`};
  `;
  const StyledEmailLink = styled.a`
    ${mixins.bigButton};
    margin-top: 50px;
    font-size: ${fontSizes.md} !important;
  `;
  const StyledResumeLink = styled.a`
    && {
      margin-top: 50px;
      color: ${colors.lightSlate};
      font-family: ${fonts.Description};
      font-size: ${fontSizes.sm};
      transition: color 0.3s ease;
      text-decoration: none;

      &:hover,
      &:focus {
        color: ${colors.accent};
      }
    }
  `;

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>well, what now?</StyledHeading>

      <StyledTitle>
        <Dot>.</Dot>
        {title}
      </StyledTitle>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        {buttonText}
      </StyledEmailLink>
      <div />
      <StyledResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
        little souvenir? download my resume
      </StyledResumeLink>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
