import styled, { createGlobalStyle } from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface ListProps {
  theme: Theme;
};


// Estilo Global
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #e0d4f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
`;
// ItemList
export const ItemList = styled.div<ListProps>`
  height: 50vh;
  border-radius: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
  width: 50vw;
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;

// ItemCard
export const ItemCard = styled.div<ListProps>`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    opacity: .9;
  }
`;

// ItemImage
export const ItemImage = styled.img<ListProps>`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

// ItemInfo
export const ItemInfo = styled.div<ListProps>`
  flex-grow: 1;
`;

// ItemName
export const ItemName = styled.p<ListProps>`
  font-size: 1.2em;
  margin: 0;
`;

// ItemRole
export const ItemRole = styled.p<ListProps>`
  font-size: 0.9em;
  color: #666;
`;

// ItemLevel
export const ItemLevel = styled.div<ListProps>`
  background-color: ${(props) => props.theme.color};
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`;

// Highlight
export const Highlight = styled.span<ListProps>`
  color: #007bff;
  font-weight: bold;
`;

// ActionsContainer
export const ActionsContainer = styled.div<ListProps>`
  width: auto;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  padding: 5px;
`;

// ActionsIcons
export const ActionsIcons = styled.div<ListProps>`
  position: relative;
  margin-left: 5px;
  margin-right: 2px;
  height: 20px;
  width: 20px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

// AddButton
export const AddButton = styled.button<ListProps>`
  margin-top: 10px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }

`;

// AddListContainer
export const AddListContainer = styled.div<ListProps>`
  display: flex;
  width: 50vw;
  height: auto;
  align-items: start;
  justify-content: end;
`;