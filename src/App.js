import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/global.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppContainer } from './components/StyledComponents';

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
