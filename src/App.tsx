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
import { JoelhoEsquerdoNormalProvider } from './context/JoelhoEsquerdoNormalContext';
import { JoelhoDireitoNormalProvider } from './context/JoelhoDireitoNormalContext';
import { DedoDireitoNormalProvider } from './context/DedoDireitoNormalContext';
import { DedoEsquerdoNormalProvider } from './context/DedoEsquerdoNormalContext';
import { TornozeloDireitoNormalProvider } from './context/TornozeloDireitoNormalContext';
import { TornozeloEsquerdoNormalProvider } from './context/TornozeloEsquerdoNormalContext';
import { QuadrilDireitoNormalProvider } from './context/QuadrilDireitoNormalContext';
import { QuadrilEsquerdoNormalProvider } from './context/QuadrilEsquerdoNormalContext';
import { CoxaDireitoNormalProvider } from './context/CoxaDireitoNormalContext';
import { CoxaEsquerdoNormalProvider } from './context/CoxaEsquerdoNormalContext';
import { PernaDireitoNormalProvider } from './context/PernaDireitoNormalContext';
import { PernaEsquerdoNormalProvider } from './context/PernaEsquerdoNormalContext';
import { PeDireitoNormalProvider } from './context/PeDireitoNormalContext';
import { PeEsquerdoNormalProvider } from './context/PeEsquerdoNormalContext';

function App() {
  return (
    <PeDireitoNormalProvider>
      <PeEsquerdoNormalProvider>
        <PernaDireitoNormalProvider>
          <PernaEsquerdoNormalProvider>
            <CoxaEsquerdoNormalProvider>
              <CoxaDireitoNormalProvider>
                <QuadrilEsquerdoNormalProvider>
                  <QuadrilDireitoNormalProvider>
                    <TornozeloEsquerdoNormalProvider>
                      <TornozeloDireitoNormalProvider>
                        <DedoEsquerdoNormalProvider>
                          <DedoDireitoNormalProvider>
                            <JoelhoEsquerdoNormalProvider>
                              <JoelhoDireitoNormalProvider>
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
                              </JoelhoDireitoNormalProvider>
                            </JoelhoEsquerdoNormalProvider>
                          </DedoDireitoNormalProvider>
                        </DedoEsquerdoNormalProvider>
                      </TornozeloDireitoNormalProvider>
                    </TornozeloEsquerdoNormalProvider>
                  </QuadrilDireitoNormalProvider>
                </QuadrilEsquerdoNormalProvider>
              </CoxaDireitoNormalProvider>
            </CoxaEsquerdoNormalProvider>
          </PernaEsquerdoNormalProvider>
        </PernaDireitoNormalProvider>
      </PeEsquerdoNormalProvider>
    </PeDireitoNormalProvider>
  );
}

export default App;
