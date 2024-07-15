import styled from 'styled-components';

export const AdventureListContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  -webkit-transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  -moz-transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  -ms-transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  opacity: 1;
  visibility: visible;
`;

// AddAdventuresContainer
export const AddAdventuresContainer = styled.div`
  height: 5vh;
  width: 100%;
`;