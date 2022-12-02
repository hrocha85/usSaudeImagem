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
import { CotoveloDireitoNormalProvider } from './context/CotoveloDireitoNormalContext';
import { CotoveloEsquerdoNormalProvider } from './context/CotoveloEsquerdoNormalContext';
import { PunhoDireitoNormalProvider } from './context/PunhoDireitoNormalContext';
import { PunhoEsquerdoNormalProvider } from './context/PunhoEsquerdoNormalContext';
import { MaoEsquerdoNormalProvider } from './context/MaoEsquerdoNormalContext';
import { MaoDireitoNormalProvider } from './context/MaoDireitoNormalContext';
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
  <MenuProvider>
    <MaoDireitoNormalProvider>
      <MaoEsquerdoNormalProvider>
        <PunhoEsquerdoNormalProvider>
          <PunhoDireitoNormalProvider>
            <CotoveloEsquerdoNormalProvider>
              <CotoveloDireitoNormalProvider>
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
              </CotoveloDireitoNormalProvider>
            </CotoveloEsquerdoNormalProvider>
          </PunhoDireitoNormalProvider>
        </PunhoEsquerdoNormalProvider>
      </MaoEsquerdoNormalProvider>
    </MaoDireitoNormalProvider>
    </MenuProvider>
  );
}

export default App;
