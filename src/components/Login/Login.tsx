import React, { ReactNode } from 'react';
import './Login.css';
import defaultTheme from '../../themes/defaultTheme';
import { AppSection } from '../StyledComponents';
import { StyledH1 } from '../StyledComponents';

interface LoginProps {
  children: ReactNode;
}

const Login: React.FC<LoginProps> = ({ children }) => {
  return (
    <AppSection>
      <div className="login-container">
        <StyledH1 theme={defaultTheme}>Login</StyledH1>
        { children }
      </div>
    </AppSection>
  );
};

export default Login;