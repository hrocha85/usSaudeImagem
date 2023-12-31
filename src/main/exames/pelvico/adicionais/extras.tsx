
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extras({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [frasesAdicionais, setFrasesAdicionais] = useState<any>([]);
  const [ConclusaoAdicionais, setConclusaoAdicionais] = useState<any>([]);

  const subExame = "Adicionais";
  const titulo_exame = "Pélvico"

  useEffect(() => {
    if (Object.keys(frasesAdicionais).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAdicionais,
        ConclusaoAdicionais
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAdicionais,
        ConclusaoAdicionais
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAdicionais]);

  const [uteroBiCheckBox, setUteroBiCheckBox] = useState(false);
  const [varizesCheckBox, setVarizesCheckBox] = useState(false);

  const criaStringVarizes = () => {
    const conclusao = 'Varizes pélvicas.'
    removeStringVarizes();
    if (varizesCheckBox) {
      const string =
        "Nota-se em regiões para-uterinas presença de várias imagens anecóicas, tubulares, tortuosas, de limites precisos e contornos regulares.";
      setFrasesAdicionais((arr) => [...arr, string]);
      setConclusaoAdicionais((arr) => [...arr, conclusao]);
    }
  };
  const criaStringUteroBi = () => {
    const conclusao = 'Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).'
    removeStringUteroBi();
    if (uteroBiCheckBox) {
      const string =
        "Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).";
      setFrasesAdicionais((arr) => [...arr, string]);
      setConclusaoAdicionais((arr) => [...arr, conclusao]);
    }
  };

  const removeStringVarizes = () => {
    frasesAdicionais.map((e) => {
      if (e.includes(
        "Nota-se em regiões para-uterinas presença de várias imagens anecóicas, tubulares, tortuosas, de limites precisos e contornos regulares.")) {
        const index = frasesAdicionais.indexOf(e);

        if (index > -1) {
          frasesAdicionais.splice(index, 1);
          setFrasesAdicionais((arr) => [...arr]);
        }
      }
    });
    ConclusaoAdicionais.map((e) => {
      if (e.includes(
        "Varizes pélvicas.")) {
        const index = ConclusaoAdicionais.indexOf(e);

        if (index > -1) {
          ConclusaoAdicionais.splice(index, 1);
          setConclusaoAdicionais((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Varizes pélvicas.');
        }
      }
    });
  };
  const removeStringUteroBi = () => {
    frasesAdicionais.map((e) => {
      if (e.includes("Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).")) {
        const index = frasesAdicionais.indexOf(e);

        if (index > -1) {
          frasesAdicionais.splice(index, 1);
          setFrasesAdicionais((arr) => [...arr]);
        }
      }
    });
    ConclusaoAdicionais.map((e) => {
      if (e.includes("Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).")) {
        const index = ConclusaoAdicionais.indexOf(e);

        if (index > -1) {
          ConclusaoAdicionais.splice(index, 1);
          setConclusaoAdicionais((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).');
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
