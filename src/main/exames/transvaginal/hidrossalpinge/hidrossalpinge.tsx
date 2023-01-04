/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidrossalpinge() {
  const altura = "100%";
  const largura = "33%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [frasesHidrossalpinge, setFrasesHidrossalpinge] = useState<any>([]);

  const subExame = "Hidrossalpinge";
  const titulo_exame = "Transvaginal"

  useEffect(() => {
    if (Object.keys(frasesHidrossalpinge).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHidrossalpinge
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHidrossalpinge
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHidrossalpinge]);

  const [posicaoHidrossalpingeSelect, setPosicaoHidrossalpingeSelect] =
    useState("");
  const [HidrossalpingeCheckBox, setHidrossalpingeCheckBox] = useState(false);

  const criaStringHidrossalpinge = () => {
    removeStringHidrossalpinge();

    if (HidrossalpingeCheckBox && posicaoHidrossalpingeSelect !== "") {
      var string = `Nota-se em região anexial ${posicaoHidrossalpingeSelect} imagem anecóica, tubular, tortuosa, de limites precisos e contornos regulares.`;
      setFrasesHidrossalpinge((arr) => [...arr, string]);
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
                  w="auto"
                  onChange={(e) => {
                    setPosicaoHidrossalpingeSelect(e.target.value);
                  }}
                  value={posicaoHidrossalpingeSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="direita">Direita</option>
                  <option value="esquerda">Esquerda</option>
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
