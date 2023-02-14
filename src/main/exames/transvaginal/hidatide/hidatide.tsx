/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidatide({ Disable }) {
  const altura = "100%";
  const largura = "33%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [frasesHidatide, setFrasesHidatide] = useState<any>([]);

  const subExame = "Hidátide";
  const titulo_exame = "Transvaginal"

  useEffect(() => {
    if (Object.keys(frasesHidatide).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHidatide
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHidatide
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHidatide]);

  const [tamanhoHidatideInput, settamanhoHidatideInput] = useState("");
  const [posicaoHidatideSelect, setPosicaoHidatideSelect] = useState("");
  const [hidatideCheckBox, setHidatideCheckBox] = useState(false);

  const handleTamanhoHidatideInput = (event) => {
    settamanhoHidatideInput(event.target.value);
  };

  const criaStringHidatide = () => {
    removeStringHidatide();

    if (
      hidatideCheckBox &&
      posicaoHidatideSelect !== "" &&
      tamanhoHidatideInput !== ""
    ) {
      var string = `Nota-se imagem em região anexial ${posicaoHidatideSelect} anecóica, arredondada, de limites precisos e contornos regulares, medindo ${tamanhoHidatideInput} mm. `;

      setFrasesHidatide((arr) => [...arr, string]);
    }
  };

  const removeStringHidatide = () => {
    frasesHidatide.map((e) => {
      if (e.includes("Nota-se imagem em região anexial ")) {
        var index = frasesHidatide.indexOf(e);

        if (index > -1) {
          frasesHidatide.splice(index, 1);
          setFrasesHidatide((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (hidatideCheckBox) {
      criaStringHidatide();
    } else {
      removeStringHidatide();
      setPosicaoHidatideSelect("");
      settamanhoHidatideInput("");
    }
  }, [hidatideCheckBox, tamanhoHidatideInput, posicaoHidatideSelect]);

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
      <TituloNomeExame titulo="Hidátide" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  isDisabled={Disable}
                  whiteSpace="nowrap"
                  onChange={() => {
                    setHidatideCheckBox(!hidatideCheckBox);
                  }}
                >
                  Hidátide
                </Checkbox>
                <Select
                  isDisabled={Disable}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoHidatideSelect(e.target.value);
                  }}
                  value={posicaoHidatideSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="direito">Direita</option>
                  <option value="esquerdo">Esquerda</option>
                </Select>
                <Input
                  isDisabled={Disable}
                  w="60px"
                  h="77x"
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  placeholder={"mm"}
                  value={tamanhoHidatideInput}
                  onChange={handleTamanhoHidatideInput}
                />
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Hidatide;
