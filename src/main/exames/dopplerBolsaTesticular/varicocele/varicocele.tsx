import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Varicocele() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoVaricoceleSelect, setPosicaoVaricoceleSelect] = useState("");
  const [VaricoceleCheckBox, setVaricoceleCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringVaricoceleLivre = () => {
    removeStringVaricoceleLivre();

    if (VaricoceleCheckBox && posicaoVaricoceleSelect !== "") {
      var string = `Varicocele no local: ${posicaoVaricoceleSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringVaricoceleLivre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Varicocele no local")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (VaricoceleCheckBox) {
      setDisableSelect(false)
      criaStringVaricoceleLivre();
    } else {
      setDisableSelect(true)
      removeStringVaricoceleLivre();
      setPosicaoVaricoceleSelect("");
    }
  }, [VaricoceleCheckBox, posicaoVaricoceleSelect]);

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
      <TituloNomeExame titulo="Varicocele" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setVaricoceleCheckBox(!VaricoceleCheckBox);
                  }}
                >
                  Varicocele no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoVaricoceleSelect(e.target.value);
                  }}
                  value={posicaoVaricoceleSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="ausente">ausente</option>
                  <option value="à direita">à direita</option>
                  <option value="à esquerda">à esquerda</option>
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
export default Varicocele;
