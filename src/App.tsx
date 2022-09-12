import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Routes/Rotas';
import tema from './Main/Theme/Tema';

function App() {
  return (
    <ChakraProvider theme={tema}>
      <Rotas />
    </ChakraProvider>
  );
}

export default App;
