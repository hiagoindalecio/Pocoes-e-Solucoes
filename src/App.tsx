import React from 'react';
import './App.css';

// Components
import Routes from './routes'
import { PotionsProvider } from './contexts/potions';

function App() {
  return (
    <PotionsProvider>
      <Routes />
    </PotionsProvider>
  );
}

export default App;