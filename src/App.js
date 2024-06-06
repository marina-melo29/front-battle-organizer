import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import defaultTheme from './themes/defaultTheme';
import Login from './pages/Login';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </div>
    </ThemeProvider>
  );
};

export default App;
