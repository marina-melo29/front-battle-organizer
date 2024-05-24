import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import defaultTheme from './themes/defaultTheme';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
};

export default App;
