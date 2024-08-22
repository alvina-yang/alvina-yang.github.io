import { css } from 'styled-components';
import theme from './theme';
import media from './media';
const { fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: colors => css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.accent};
      outline: 0;
    }
  `,

  inlineLink: colors => css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.accent};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.accent};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.accent} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      bottom: 0.17em;
      background-color: ${colors.accent};
      transition: ${theme.transition};
      opacity: 0.8;
    }
  `,

  smallButton: colors => css`
    color: ${colors.accent};
    background-color: transparent;
    border: 1px solid ${colors.accent};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smish};
    font-family: ${fonts.Description};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transAccent};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: colors => css`
    color: ${colors.accent};
    background-color: transparent;
    border: 1.5px solid ${colors.accent};
    border-radius: ${theme.borderRadius};
    padding: 1.15rem 1.75rem;
    font-size: ${fontSizes.xl};
    font-weight: 600;
    font-family: ${fonts.Title};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transAccent};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: colors => css`
    box-shadow: 0 10px 30px -15px ${colors.shadowbg};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowbg};
    }
  `,

  fancyList: colors => css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.accent};
      }
    }
  `,
};

export default mixins;
