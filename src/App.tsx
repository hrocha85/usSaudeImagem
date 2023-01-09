import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { CotoveloDireitoNormalProvider } from "./context/CotoveloDireitoNormalContext";
import { CotoveloEsquerdoNormalProvider } from "./context/CotoveloEsquerdoNormalContext";
import { DisableTributariaProvider } from "./context/disableTributariasContext";
import { EnableExamesProvider } from "./context/ExamesEnableContext";
import { JoelhoDireitoNormalProvider } from "./context/JoelhoDireitoNormalContext";
import { JoelhoEsquerdoNormalProvider } from "./context/JoelhoEsquerdoNormalContext";
import { LaudosProvider } from "./context/LuadosContext";
import { MaoDireitoNormalProvider } from "./context/MaoDireitoNormalContext";
import { MaoEsquerdoNormalProvider } from "./context/MaoEsquerdoNormalContext";
import { MenuProvider } from "./context/MenuContext";
import { NormalProvider } from "./context/NormalContext";
import { OmbroDireitoNormalProvider } from "./context/OmbroDireitoNormalContext";
import { OmbroEsquerdoNormalProvider } from "./context/OmbroEsquerdoNormalContext";
import { PunhoDireitoNormalProvider } from "./context/PunhoDireitoNormalContext";
import { PunhoEsquerdoNormalProvider } from "./context/PunhoEsquerdoNormalContext";
import { StringNormalProvider } from "./context/StringNormalContext";
import { TabExamesProvider } from "./context/TabExameContext";
import tema from "./main/Theme/Tema";
import Rotas from "./Routes/Rotas";

function App() {
  return (
    <TabExamesProvider>
      <EnableExamesProvider>
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
      </EnableExamesProvider>
    </TabExamesProvider>
  );
}

export default App;
