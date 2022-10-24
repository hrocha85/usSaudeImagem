import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Routes/Rotas';
import tema from './main/Theme/Tema';
import { LaudosProvider } from './context/LuadosContext'
import { NormalProvider } from './context/NormalContext';
import { StringNormalProvider } from './context/StringNormalContext';

function App() {
  return (
    <StringNormalProvider>
      <NormalProvider>
        <LaudosProvider>
          <ChakraProvider theme={tema}>
            <Rotas />
          </ChakraProvider>
        </LaudosProvider>
      </NormalProvider>
    </StringNormalProvider>
  );
}

export default App;