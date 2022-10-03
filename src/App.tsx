import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Routes/Rotas';
import tema from './main/Theme/Tema';
import { LaudosProvider } from './context/LuadosContext'
import { InputsProvider } from './context/InputsContext'


function App() {
  return (
    <InputsProvider>
      <LaudosProvider>
        <ChakraProvider theme={tema}>
          <Rotas />
        </ChakraProvider>
      </LaudosProvider>
    </InputsProvider>
  );
}

export default App;