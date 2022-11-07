import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Liquido_Livre() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [posicaoLiquidoSelect, setPosicaoLiquidoSelect] = useState("");
  const [LiquidoCheckBox, setLiquidoCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringLiquidoLivre = () => {
    removeStringLiquidoLivre();

    if (LiquidoCheckBox && posicaoLiquidoSelect != "") {
      var string = `Líquido livre ${posicaoLiquidoSelect}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeStringLiquidoLivre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Líquido")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LiquidoCheckBox) {
      setDisableSelect(false)
      criaStringLiquidoLivre();
    } else {
      setDisableSelect(true)
      removeStringLiquidoLivre();
      setPosicaoLiquidoSelect("");
    }
  }, [LiquidoCheckBox, posicaoLiquidoSelect]);

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
      <TituloNomeExame titulo="Líquido Livre" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setLiquidoCheckBox(!LiquidoCheckBox);
                  }}
                >
                  Líquido Livre
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoLiquidoSelect(e.target.value);
                  }}
                  value={posicaoLiquidoSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="pequena">Pequena</option>
                  <option value="moderada">Moderada</option>
                  <option value="grande">Grande</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Liquido_Livre;
