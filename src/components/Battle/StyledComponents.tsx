import styled from 'styled-components';
import { Theme } from '../../themes/defaultTheme';

interface AppContainerProps {
  theme: Theme;
}

export const Card = styled.div<AppContainerProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
`;