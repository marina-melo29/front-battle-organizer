import styled from 'styled-components';
import { Theme } from '../themes/defaultTheme';

interface AppContainerProps {
  theme: Theme;
}

export const AppContainer = styled.div<AppContainerProps>`
  background-image: url(${(props) => props.theme.backgroundImage});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  position: relative;
  color: white;  
`;

interface ButtonProps {
  theme: Theme;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: 'Poppins';
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

export const BaseSection = styled.section`
  background-color: #f3eef2;
  min-height: 85%;
  width: 55%;
  margin: auto;
  border-radius: 3px;
  padding: 20px;
  box-shadow: inset 0px 6px 12px #41295f;
`;
