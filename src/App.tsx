import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Routes/Rotas';
import tema from './main/Theme/Tema';
import { LaudosProvider } from './context/LuadosContext'
import { NormalProvider } from './context/NormalContext';
import { StringNormalProvider } from './context/StringNormalContext';
import { DisableTributariaProvider } from './context/disableTributariasContext';
import { OmbroDireitoNormalProvider } from './context/OmbroDireitoNormalContext';
import { OmbroEsquerdoNormalProvider } from './context/OmbroEsquerdoNormalContext';

function App() {
  return (
    <OmbroEsquerdoNormalProvider>
      <OmbroDireitoNormalProvider>
        <DisableTributariaProvider>
          <StringNormalProvider>
            <NormalProvider>
              <LaudosProvider>
                <ChakraProvider theme={tema}>
                  <Rotas />
                </ChakraProvider>
              </LaudosProvider>
            </NormalProvider>
          </StringNormalProvider>
        </DisableTributariaProvider>
      </OmbroDireitoNormalProvider>
    </OmbroEsquerdoNormalProvider>
  );
}

export default App;