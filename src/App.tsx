import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Routes/Rotas';
import tema from './main/Theme/Tema';
import { LaudosProvider } from './context/LuadosContext'

function App() {
  return (
    <LaudosProvider>
      <ChakraProvider theme={tema}>
        <Rotas />
      </ChakraProvider>
    </LaudosProvider>
  );
}

export default App;