import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLogin from '../../components/Login';
import { AppContainer } from '../../components/StyledComponents';
import { StyledFormButton } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const path = 'path-route';

    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      navigate('/');
    } else {
      alert('Login Falhou');
    }
  };

  return (
    <AppContainer theme={defaultTheme}>
      <StyledLogin>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <StyledFormButton theme={defaultTheme} type="submit">Entrar</StyledFormButton>
        </form>
      </StyledLogin>
    </AppContainer>
  );
}

export default Login;