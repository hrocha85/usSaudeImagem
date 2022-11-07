import { Box, Checkbox, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidatide() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoHidatideInput, settamanhoHidatideInput] = useState("");
  const [posicaoHidatideSelect, setPosicaoHidatideSelect] = useState("");
  const [hidatideCheckBox, setHidatideCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const handleTamanhoHidatideInput = (event) => {
    settamanhoHidatideInput(event.target.value);
  };

  const criaStringHidatide = () => {
    removeStringHidatide();

    if (
      hidatideCheckBox &&
      posicaoHidatideSelect != "" &&
      tamanhoHidatideInput != ""
    ) {
      var string = `Hidátide lado ${posicaoHidatideSelect} mede ${tamanhoHidatideInput} mm `;

      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringHidatide = () => {
    laudoPrin.map((e) => {
      if (e.includes("Hidátide")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (hidatideCheckBox) {
      setDisableSelect(false)
      criaStringHidatide();
    } else {
      setDisableSelect(true)
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
                  whiteSpace="nowrap"
                  onChange={() => {
                    setHidatideCheckBox(!hidatideCheckBox);
                  }}
                >
                  Hidátide
                </Checkbox>
                <Select
                  w="auto"
                  isDisabled={DisableSelect}
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
                  isDisabled={DisableSelect}
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
