import React, { ReactNode } from 'react';
import './SignUp.css'
import defaultTheme from '../../themes/defaultTheme';
import { AppSection, StyledH1 } from '../StyledComponents';

interface LoginProps {
  children: ReactNode;
}

const SignUp: React.FC<LoginProps> = ({ children }) => {
  return (
    <AppSection align_conf='column'>
      <div className='signup-container'>
        <StyledH1 theme={defaultTheme}>Cadastro</StyledH1>
        { children }
      </div>
    </AppSection>
  );
};

export default SignUp;