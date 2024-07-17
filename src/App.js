import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import defaultTheme from './themes/defaultTheme';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Adventure from './pages/Adventure';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

const App = () => {

  return (
    // Precisamos carregar primeiro AuthProvider
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* PRIVATE */}
          <Route element={<PrivateRoute element={<Adventure />} />}>
            <Route path="/adventures" element={<Adventure />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
};

const PrivateRoute = (param) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return navigate("/login");
  } else {
    return param['element'];
  }
};

export default App;