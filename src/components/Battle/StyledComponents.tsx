import styled from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface CardContainerProps {
  theme: Theme;
}

export const Card = styled.div<CardContainerProps>`
  width: 18vw;
  height: 40vh;
  position: relative;
  border-radius: 20px;
  border-bottom: 3px solid #e2deeb;
  border-right: 3px solid #e2deeb;
  box-shadow: 4px 4px 8px 2px #B9B7BD;
  color: #422b5e;
  overflow-y: auto;
  // background-color: #563383;
  background-color: #ffffff;

  @media (min-width: 601px) and (max-width: 900px) {
    width: 30vw;
    height: 30vh;
  }
`;

export const CardRow = styled.div<CardContainerProps>`
  border-bottom: 2px solid ${(props) => props.theme.cardsBorderColor};
  border-left: 1px solid ${(props) => props.theme.cardsBorderColor};
  border-right: 1px solid ${(props) => props.theme.cardsBorderColor};
  margin-bottom: 10px;
  border-radius: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 15px;
  padding: 10px;
  background-color: #e2deeb;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }

  .character-name {
    color: ${(props) => props.theme.color};
    font-weight: bold;
    width: 60%;
    overflow: hidden;
  }

  .character-class{
    width: 40%;
    text-align: end;
  }

  .character-iniciative-bonus {
    width: 100%;
    text-align: end;
  }
`;