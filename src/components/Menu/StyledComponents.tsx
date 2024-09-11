import styled from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface MenuProps {
  theme: Theme;
};

export const SeeMoreBtn = styled.div<MenuProps>`
  background-image: url(${(props) => props.theme.seeMoreImage});
  background-size: cover;
  height: 30px;
  width: 30px;
  position: relative;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 20px;
    width: 20px;
  }
`;

interface ExpandedBtnDivProps {
  hide: boolean;
}

export const ExpandedBtnDiv = styled.div<ExpandedBtnDivProps>`
  width: 135px;
  height: auto;
  right: 1%;
  margin-top: 4px;
  background-color: #41295f;
  position: fixed;
  box-shadow: 2px 1px 5px 1px #281540;
  visibility: ${(props) => props.hide ? 'hidden' : 'visible' };
  opacity: ${(props) => (props.hide ? 0 : 1)};
  pointer-events: ${(props) => (props.hide ? 'none' : 'auto')};
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
`;

interface ExpandedLinksProps {

}

export const ExpandedLinks = styled.div<ExpandedLinksProps>`
  text-decoration: none;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 13px;
  padding-top: 17px;
  padding-bottom: 5px;
  text-align: end;
  padding-right: 11px;
  border-bottom: 1px solid #cdb5d1;

  &:hover {
    background-color: #553978;
  }
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