import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Torcao() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoTorcaoSelect, setPosicaoTorcaoSelect] = useState("");
  const [TorcaoCheckBox, setTorcaoCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringTorcaoLivre = () => {
    removeStringTorcaoLivre();

    if (TorcaoCheckBox && posicaoTorcaoSelect !== "") {
      var string = `Torção no local: ${posicaoTorcaoSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringTorcaoLivre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Torção no local")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (TorcaoCheckBox) {
      setDisableSelect(false)
      criaStringTorcaoLivre();
    } else {
      setDisableSelect(true)
      removeStringTorcaoLivre();
      setPosicaoTorcaoSelect("");
    }
  }, [TorcaoCheckBox, posicaoTorcaoSelect]);

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
      <TituloNomeExame titulo="Torção" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setTorcaoCheckBox(!TorcaoCheckBox);
                  }}
                >
                  Torção no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoTorcaoSelect(e.target.value);
                  }}
                  value={posicaoTorcaoSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="ausente">ausente</option>
                  <option value="à direita">à direita</option>
                  <option value="à esquerda">à esquerda</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Torcao;
