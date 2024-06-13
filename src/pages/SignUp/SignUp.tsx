import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContainer, StyledFormButton, StyledH3 } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';
import Menu from '../../components/Menu';
import SignUpContainer from '../../components/SignUp';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_confirmation, setPasswordConfirmation] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const path = 'http://localhost:3000/signup';

    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('authToken', token);

      navigate('/');
    } else {
      alert('Login Falhou');
    }
  };

  return (
    <AppContainer theme={defaultTheme}>
      <Menu/>
      <SignUpContainer>
        <form onSubmit={handleSubmit}>
          <StyledH3>Email:</StyledH3>
          <input 
            type="email" 
            placeholder="Escolha um email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <StyledH3>Senha:</StyledH3>
          <input 
            type="password" 
            placeholder="Escolha uma senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <StyledH3>Confirme sua senha:</StyledH3>
          <input 
            type="password_confirmation" 
            placeholder="Confirme sua senha" 
            value={password_confirmation} 
            onChange={(e) => setPasswordConfirmation(e.target.value)} 
            required
          />
          <StyledFormButton theme={defaultTheme} type="submit">Cadastrar</StyledFormButton>
        </form>
      </SignUpContainer>
    </AppContainer>
  );
}

export default SignUp;