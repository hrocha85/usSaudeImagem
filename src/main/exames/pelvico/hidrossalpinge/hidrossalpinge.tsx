/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidrossalpinge({ Disable }) {
  const altura = "100%";
  const largura = "33%";

  const [frasesHidrossalpinge, setFrasesHidrossalpinge] = useState<any>([]);
  const [ConclusaoHidrossalpinge, setConclusaoHidrossalpinge] = useState<any>([]);

  const subExame = "Hidrossalpinge";
  const titulo_exame = "Pélvico"

  useEffect(() => {
    if (Object.keys(frasesHidrossalpinge).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHidrossalpinge,
        ConclusaoHidrossalpinge
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHidrossalpinge,
        ConclusaoHidrossalpinge
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHidrossalpinge]);

  const [posicaoHidrossalpingeSelect, setPosicaoHidrossalpingeSelect] =
    useState("");
  const [HidrossalpingeCheckBox, setHidrossalpingeCheckBox] = useState(false);

  const criaStringHidrossalpinge = () => {
    removeStringHidrossalpinge();
    var conclusao = 'Hidrossalpinge'
    if (HidrossalpingeCheckBox && posicaoHidrossalpingeSelect !== "") {
      var string = `Nota-se em região anexial ${posicaoHidrossalpingeSelect} imagem anecóica, tubular, tortuosa, de limites precisos e contornos regulares.`;
      conclusao = `${conclusao} ${posicaoHidrossalpingeSelect}.`
      setFrasesHidrossalpinge((arr) => [...arr, string]);
      setConclusaoHidrossalpinge((arr) => [...arr, conclusao]);
    }
  };

  const removeStringHidrossalpinge = () => {
    frasesHidrossalpinge.map((e) => {
      if (e.includes("Nota-se em região anexial")) {
        var index = frasesHidrossalpinge.indexOf(e);

        if (index > -1) {
          frasesHidrossalpinge.splice(index, 1);
          setFrasesHidrossalpinge((arr) => [...arr]);
        }
      }
    });
    ConclusaoHidrossalpinge.map((e) => {
      if (e.includes("Hidrossalpinge")) {
        var index = ConclusaoHidrossalpinge.indexOf(e);

        if (index > -1) {
          ConclusaoHidrossalpinge.splice(index, 1);
          setConclusaoHidrossalpinge((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Hidrossalpinge');
        }
      }
    });
  };

  useEffect(() => {
    if (HidrossalpingeCheckBox) {
      criaStringHidrossalpinge();
    } else {
      removeStringHidrossalpinge();
      setPosicaoHidrossalpingeSelect("");
    }
  }, [HidrossalpingeCheckBox, posicaoHidrossalpingeSelect]);

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
      <TituloNomeExame titulo="Hidrossalpinge" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox

                  whiteSpace="nowrap"
                  onChange={() => {
                    setHidrossalpingeCheckBox(!HidrossalpingeCheckBox);
                  }}
                >
                  Hidrossalpinge
                </Checkbox>
                <Select
                  isDisabled={!HidrossalpingeCheckBox}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoHidrossalpingeSelect(e.target.value);
                  }}
                  value={posicaoHidrossalpingeSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="à direita">Direita</option>
                  <option value="à esquerda">Esquerda</option>
                  <option value="bilateralmente">Bilateral</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Hidrossalpinge;
