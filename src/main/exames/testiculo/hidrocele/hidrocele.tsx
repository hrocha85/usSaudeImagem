import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidrocele() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoHidroceleSelect, setPosicaoHidroceleSelect] = useState("");
  const [HidroceleCheckBox, setHidroceleCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringHidroceleLivre = () => {
    removeStringHidroceleLivre();

    if (HidroceleCheckBox && posicaoHidroceleSelect !== "") {
      var string = `Hidrocele : ${posicaoHidroceleSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringHidroceleLivre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Hidrocele :")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (HidroceleCheckBox) {
      setDisableSelect(false)
      criaStringHidroceleLivre();
    } else {
      setDisableSelect(true)
      removeStringHidroceleLivre();
      setPosicaoHidroceleSelect("");
    }
  }, [HidroceleCheckBox, posicaoHidroceleSelect]);

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
      <TituloNomeExame titulo="Hidrocele" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setHidroceleCheckBox(!HidroceleCheckBox);
                  }}
                >
                  Hidrocele no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoHidroceleSelect(e.target.value);
                  }}
                  value={posicaoHidroceleSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="Líquido em quantidade fisiológica na bolsa testicular.">ausente</option>
                  <option value="Acúmulo de líquido na hemibolsa testicular direita, em quantidade">testículo direito</option>
                  <option value="Acúmulo de líquido na hemibolsa testicular esquerda, em quantidade">testículo esquerdo</option>
                  <option value="Nota-se acúmulo de líquido na bolsa testicular bilateralmente, em quantidade">bilateral</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Hidrocele;
