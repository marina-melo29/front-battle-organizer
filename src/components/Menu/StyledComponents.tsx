import styled from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface MenuProps {
  theme: Theme;
};

export const SeeMoreBtn = styled.div<MenuProps>`
  background-image: url(${(props) => props.theme.seeMoreImage});
  background-size: cover;
  height: 50px;
  width: 50px;
  position: relative;
`;

export const MenuButton = styled.button<MenuProps>`
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size:12px;
  font-weight:800;
  letter-spacing:1px;
  border-radius:7px;
  padding-left:10px;
  padding-right:10px;
  padding-top:8px;
  padding-bottom:8px;
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