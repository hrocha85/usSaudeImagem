import React from 'react';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Routes/index';
import tema from './main/Theme/Tema';

function App() {
  return (
    <ChakraProvider theme={tema}>
     <Rotas/>
    </ChakraProvider>
  );
}

export default App;
