import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { DisableTributariaProvider } from "./context/disableTributariasContext";
import { EnableExamesProvider } from "./context/ExamesEnableContext";
import { JoelhoDireitoNormalProvider } from "./context/JoelhoDireitoNormalContext";
import { JoelhoEsquerdoNormalProvider } from "./context/JoelhoEsquerdoNormalContext";
import { LaudosProvider } from "./context/LuadosContext";
import { MaoDireitoNormalProvider } from "./context/MaoDireitoNormalContext";
import { MaoEsquerdoNormalProvider } from "./context/MaoEsquerdoNormalContext";
import { MenuProvider } from "./context/MenuContext";
import { OmbroDireitoNormalProvider } from "./context/OmbroDireitoNormalContext";
import { OmbroEsquerdoNormalProvider } from "./context/OmbroEsquerdoNormalContext";
import { PunhoDireitoNormalProvider } from "./context/PunhoDireitoNormalContext";
import { PunhoEsquerdoNormalProvider } from "./context/PunhoEsquerdoNormalContext";
import { DerramePleuralDireitaProvider } from "./context/DerramePleuralDireitaContext";
import { StringNormalProvider } from "./context/StringNormalContext";
import { TabExamesProvider } from "./context/TabExameContext";
import tema from "./main/Theme/Tema";
import Rotas from "./Routes/Rotas";
import { DerramePleuralEsquerdaProvider } from "./context/DerramePleuralEsquerdaContext";
import FooterUpbase from "./main/component/FooterUpbase";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthProvider>
      <TabExamesProvider>
        <EnableExamesProvider>
          <DerramePleuralDireitaProvider>
            <DerramePleuralEsquerdaProvider>
              <JoelhoEsquerdoNormalProvider>
                <JoelhoDireitoNormalProvider>
                  <MenuProvider>
                    <MaoDireitoNormalProvider>
                      <MaoEsquerdoNormalProvider>
                        <PunhoEsquerdoNormalProvider>
                          <PunhoDireitoNormalProvider>
                            <OmbroEsquerdoNormalProvider>
                              <OmbroDireitoNormalProvider>
                                <DisableTributariaProvider>
                                  <StringNormalProvider>
                                    <LaudosProvider>
                                      <ChakraProvider theme={tema}>
                                        <Rotas />
                                      </ChakraProvider>
                                    </LaudosProvider>
                                  </StringNormalProvider>
                                </DisableTributariaProvider>
                              </OmbroDireitoNormalProvider>
                            </OmbroEsquerdoNormalProvider>
                          </PunhoDireitoNormalProvider>
                        </PunhoEsquerdoNormalProvider>
                      </MaoEsquerdoNormalProvider>
                    </MaoDireitoNormalProvider>
                  </MenuProvider>
                </JoelhoDireitoNormalProvider>
              </JoelhoEsquerdoNormalProvider>
            </DerramePleuralEsquerdaProvider>
          </DerramePleuralDireitaProvider>
        </EnableExamesProvider>
      </TabExamesProvider>
    </AuthProvider>
  );
}

export default App;
