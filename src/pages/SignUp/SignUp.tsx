import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContainer, StyledFormButton, StyledH3 } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';
import Menu from '../../components/Menu';
import SignUpContainer from '../../components/SignUp';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmation_password, setPasswordConfirmation] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const path = 'http://localhost:3000/signup';

    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, confirmation_password})
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

  const verifyAuth = async () => {
    // todo: add auth verifing when route ON
    if (false) {
      navigate('/');
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AppContainer theme={defaultTheme}>
      <Menu/>
      <SignUpContainer>
        <form onSubmit={handleSubmit}>
          <StyledH3>Nome:</StyledH3>
          <input
            type="text"
            placeholder="Escolha um nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            type="password"
            placeholder="Confirme sua senha"
            value={confirmation_password}
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