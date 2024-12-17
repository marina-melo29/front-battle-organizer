import styled from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface ModalProps {
  theme: Theme;
};
// Styled Components
export const Overlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div<ModalProps>`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  z-index: 1001;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div<ModalProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2<ModalProps>`
  margin: 0;
  font-size: 1.5em;
`;

export const CloseButton = styled.button<ModalProps>`
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;


export const CancelButton = styled.button<ModalProps>`
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
  color: ${(props) => props.theme.buttonBgColor};
  background-color: ${(props) => props.theme.buttonHoverBgColor};
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

export const ConfirmationButton = styled.button<ModalProps>`
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
  background-color: ${(props) => props.theme.secondaryColor};
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


export const ModalBody = styled.div<ModalProps>`
  padding-bottom: 20px;
`;

export const ModalFooter = styled.div<ModalProps>`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e5e5e5;
  padding-top: 10px;
`;