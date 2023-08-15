import { Box, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extras() {
  const altura = "100%";
  const largura = "300px";

  const [frasesExtras, setFrasesExtras] = useState<any>([]);
  const [ConclusaoExtras, setConclusaoExtras] = useState<any>([]);

  const [uteroBiCheckBox, setUteroBiCheckBox] = useState(false);
  const [varizesCheckBox, setVarizesCheckBox] = useState(false);

  const criaStringVarizes = () => {
    const string = "Nota-se em regiões para-uterinas presença de várias imagens anecóicas, tubulares, tortuosas, de limites precisos e contornos regulares.";
    const conclusao = "Varizes pélvicas.";
    removeItemString(string);
    removeItemConclusao(conclusao)
    if (varizesCheckBox) {
      setFrasesExtras((arr) => [...arr, string]);
      setConclusaoExtras((arr) => [...arr, conclusao]);
    }
  };
  const criaStringUteroBi = () => {
    const string = "Nota-se em varredura transversal do fundo uterino, descontinuidade do eco apresentando duplicação da cavidade uterina com interposição de miométrio entre as mesmas."
    const conclusao = "Achados ecográficos sugestivos de malformação mulleriana (útero septado ou bicorno).";
    removeItemString(string);
    removeItemConclusao(conclusao)
    if (uteroBiCheckBox) {
      setFrasesExtras((arr) => [...arr, string]);
      setConclusaoExtras((arr) => [...arr, conclusao]);
    }
  };
  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesExtras.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesExtras.splice(index, 1);
      setFrasesExtras((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    // console.log("valor remove = ", value);
    const index = ConclusaoExtras.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusaoExtras.splice(index, 1);
      setConclusaoExtras((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };


  useEffect(() => {
    criaStringUteroBi();
  }, [uteroBiCheckBox]);

  useEffect(() => {
    criaStringVarizes();
  }, [varizesCheckBox]);

  const subExame = "Extras";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesExtras).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesExtras,
        ConclusaoExtras
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesExtras,
        ConclusaoExtras
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesExtras]);

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
