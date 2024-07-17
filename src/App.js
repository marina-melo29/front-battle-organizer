import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import defaultTheme from './themes/defaultTheme';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import Adventure from './pages/Adventure';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* PRIVATE */}
          <Route element={<PrivateRoutes />}>
            {/* PRIVATE routes */}
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
};

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return navigate("/login");
  }
};

export default App;
