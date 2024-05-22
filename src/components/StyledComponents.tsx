import styled from 'styled-components';

export const AppContainer = styled.div`
  background-image: url(${(props) => props.theme.background});
  color: ${(props) => props.theme.color};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;
