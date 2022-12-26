/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extras() {
  const altura = "100%";
  const largura = "33%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [frasesAdicionais, setFrasesAdicionais] = useState<any>([]);

  const subExameUtero = "Adicionais";

  useEffect(() => {
    if (Object.keys(frasesAdicionais).length == 0) {
      new Format_Laudo(
        false,
        subExameUtero,
        true,
        frasesAdicionais
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        true,
        subExameUtero,
        false,
        frasesAdicionais
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAdicionais]);

  const [uteroBiCheckBox, setUteroBiCheckBox] = useState(false);
  const [varizesCheckBox, setVarizesCheckBox] = useState(false);

  const criaStringVarizes = () => {
    removeStringVarizes();

    if (varizesCheckBox) {
      var string =
        "Nota-se em regiões para-uterinas presença de várias imagens anecóicas, tubulares, tortuosas, de limites precisos e contornos regulares.";
      setFrasesAdicionais((arr) => [...arr, string]);
    }
  };
  const criaStringUteroBi = () => {
    removeStringUteroBi();

    if (uteroBiCheckBox) {
      var string =
        "Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).";
      setFrasesAdicionais((arr) => [...arr, string]);
    }
  };

  const removeStringVarizes = () => {
    frasesAdicionais.map((e) => {
      if (
        e.includes(
          "Nota-se em regiões para-uterinas presença de várias imagens anecóicas, tubulares, tortuosas, de limites precisos e contornos regulares."
        )
      ) {
        var index = frasesAdicionais.indexOf(e);

        if (index > -1) {
          frasesAdicionais.splice(index, 1);
          setFrasesAdicionais((arr) => [...arr]);
        }
      }
    });
  };
  const removeStringUteroBi = () => {
    frasesAdicionais.map((e) => {
      if (
        e.includes(
          "Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno)."
        )
      ) {
        var index = frasesAdicionais.indexOf(e);

        if (index > -1) {
          frasesAdicionais.splice(index, 1);
          setFrasesAdicionais((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (uteroBiCheckBox) {
      criaStringUteroBi();
    } else {
      removeStringUteroBi();
    }
  }, [uteroBiCheckBox]);

  useEffect(() => {
    if (varizesCheckBox) {
      criaStringVarizes();
    } else {
      removeStringVarizes();
    }
  }, [varizesCheckBox]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Adicionais" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="35px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setUteroBiCheckBox(!uteroBiCheckBox);
                  }}
                >
                  Útero bicorno
                </Checkbox>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setVarizesCheckBox(!varizesCheckBox);
                  }}
                >
                  Varizes pélvicas
                </Checkbox>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Extras;
