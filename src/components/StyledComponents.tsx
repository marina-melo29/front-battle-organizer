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

export const Footer = styled.footer<AppContainerProps>`
  background-color: ${(props) => props.theme.baseMenuColor};
  height: auto;
  min-height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 600px) {
    min-height: 20px;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    min-height: 25px;
  }
`;

interface SectionProps {
  align_conf: string;
}

export const AppSection = styled.div<SectionProps>`
  display: flex;
  flex-direction: ${(props) => props.align_conf};
  align-items: center;
  height: auto;
`;

interface HeaderProps {
  color?: string;
  baseFontFamily?: string;
}

const createStyledHeader = (element: keyof JSX.IntrinsicElements) => {
  return styled(element)<HeaderProps>`
    color: ${(props) => props.color || '#422b5e'};
    font-family: ${(props) => props.baseFontFamily || 'Poppins'};
  `;
};

export const StyledH1 = createStyledHeader('h1');
export const StyledH2 = createStyledHeader('h2');
export const StyledH3 = createStyledHeader('h3');

interface ButtonProps {
  theme: Theme;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size:14px;
  font-weight:800;
  letter-spacing:1px;
  border-radius:7px;
  padding-left:14px;
  padding-right:14px;
  padding-top:10px;
  padding-bottom:10px;
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
  color: #ffffff;
  background-color: ${(props) => props.theme.formButtonBackgroundColor};
  outline:none;
  border:none;
  cursor:pointer;
  display:inline-block;
  text-decoration: none;
  transition: .3s;

  &:hover {
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


// Home

export const PresentationImage = styled.div<AppContainerProps>`
  background-image: url(${(props) => props.theme.homePresentationImage});
  height: 500px;
  background-repeat: no-repeat;
  width: auto;
  background-position: right;
`;