import styled from 'styled-components';
import { Theme } from '../themes/defaultTheme';

interface AppContainerProps {
  theme: Theme;
}

export const AppContainer = styled.div<AppContainerProps>`
  background-image: url(${(props) => props.theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  color: white;
  overflow: hidden;
`;

export const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface H1Props {
  theme: Theme;
}

export const StyledH1 = styled.h1<H1Props>`
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.baseFontFamily};
`;

interface ButtonProps {
  theme: Theme;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size:14px;
  font-weight:600;
  letter-spacing:1px;
  border-radius:7px;
  padding-left:12px;
  padding-right:12px;
  padding-top:7px;
  padding-bottom:7px;
  margin-right:20px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.buttonBgColor};
  outline:none;
  border:none;
  cursor:pointer;
  display:inline-block;
  text-decoration: none;
  transition: .4s;

  &:hover {
    color: #ffffff;
    background-color: ${(props) => props.theme.buttonHoverBgColor};
  }

`;

export const StyledFormButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size:14px;
  font-weight:600;
  letter-spacing:1px;
  border-radius:7px;
  padding-left:12px;
  padding-right:12px;
  padding-top:7px;
  padding-bottom:7px;
  color: ${(props) => props.theme.buttonBgColor};
  background-color: ${(props) => props.theme.formButtonBackgroundColor};
  outline:none;
  border:none;
  cursor:pointer;
  display:inline-block;
  text-decoration: none;
  transition: .3s;

  &:hover {
    color: #ffffff;
    background-color: ${(props) => props.theme.formButtonBackgroundHover};
  }

`;

export const BaseSection = styled.section`
  background-color: #f3eef2;
  min-height: 85%;
  width: 55%;
  margin: auto;
  border-radius: 3px;
  padding: 20px;
  box-shadow: inset 0px 6px 12px #41295f;
`;
