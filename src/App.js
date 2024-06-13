import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import defaultTheme from './themes/defaultTheme';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <SignUp /> } />
          </Routes>
        </div>
    </ThemeProvider>
  );
};

export default App;
