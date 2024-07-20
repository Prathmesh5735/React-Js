import './App.css'
import React, { useContext } from 'react';
import ThemeToggleButton from './Components/ThemeToggleButton';
import Product from './Components/Product';
import { ThemeContext } from './Context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggleButton />
      <Product />
    </div>
  );
};

export default App
