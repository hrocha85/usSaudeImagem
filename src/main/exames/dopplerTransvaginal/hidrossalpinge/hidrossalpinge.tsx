import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidrossalpinge() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoHidrossalpingeSelect, setPosicaoHidrossalpingeSelect] =
    useState("");
  const [HidrossalpingeCheckBox, setHidrossalpingeCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringHidrossalpinge = () => {
    removeStringHidrossalpinge();

    if (HidrossalpingeCheckBox && posicaoHidrossalpingeSelect != "") {
      var string = `Hidrossalpinge ${posicaoHidrossalpingeSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringHidrossalpinge = () => {
    laudoPrin.map((e) => {
      if (e.includes("Hidrossalpinge")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (HidrossalpingeCheckBox) {
      setDisableSelect(false)
      criaStringHidrossalpinge();
    } else {
      setDisableSelect(true)
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
                  isDisabled={DisableSelect}
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
                  <option value="bilateral">Bilateral</option>
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
