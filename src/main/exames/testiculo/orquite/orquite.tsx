import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Orquite() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoOrquiteSelect, setPosicaoOrquiteSelect] = useState("");
  const [OrquiteCheckBox, setOrquiteCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringOrquiteLivre = () => {
    removeStringOrquiteLivre();

    if (OrquiteCheckBox && posicaoOrquiteSelect !== "") {
      var string = `Orquite no local: ${posicaoOrquiteSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringOrquiteLivre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Orquite no local")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (OrquiteCheckBox) {
      setDisableSelect(false)
      criaStringOrquiteLivre();
    } else {
      setDisableSelect(true)
      removeStringOrquiteLivre();
      setPosicaoOrquiteSelect("");
    }
  }, [OrquiteCheckBox, posicaoOrquiteSelect]);

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
      <TituloNomeExame titulo="Orquite" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setOrquiteCheckBox(!OrquiteCheckBox);
                  }}
                >
                  Orquite no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoOrquiteSelect(e.target.value);
                  }}
                  value={posicaoOrquiteSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="ausente">ausente</option>
                  <option value="testículo direito">testículo direito</option>
                  <option value="testículo esquerdo">testículo esquerdo</option>
                  <option value="bilateral">bilateral</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Orquite;
