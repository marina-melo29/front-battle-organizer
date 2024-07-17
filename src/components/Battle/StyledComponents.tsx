import styled from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface CardContainerProps {
  theme: Theme;
}

export const Card = styled.div<CardContainerProps>`
  width: 18vw;
  height: 40vh;
  position: relative;
  border-radius: 10px;
  border: 3px solid #c5bed3;
  box-shadow: 1px 1px 4px 0px #B9B7BD;
  color: ${(props) => props.theme.color};
  overflow-y: auto;

  @media (min-width: 601px) and (max-width: 900px) {
    width: 18vw;
    height: 55vh;
  }
`;

export const CardRow = styled.div<CardContainerProps>`
  border-bottom: 2px solid #8D8585;
  border-left: 1px solid #8D8585;
  border-right: 1px solid #8D8585;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 15px;
  padding: 10px;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .character-name {
    color: ${(props) => props.theme.color};
    font-size: medium;
    font-weight: bold;
    width: 72%;
  }

  .character-class{
    width: 40%;
    text-align: end;
  }
`;