/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Liquido_Livre() {
  const altura = "100%";
  const largura = "33%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [frasesLiquidoLivre, setFrasesLiquidoLivre] = useState<any>([]);

  const subExameUtero = "Líquido Livre";

  useEffect(() => {
    if (Object.keys(frasesLiquidoLivre).length == 0) {
      new Format_Laudo(
        false,
        subExameUtero,
        true,
        frasesLiquidoLivre
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        true,
        subExameUtero,
        false,
        frasesLiquidoLivre
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesLiquidoLivre]);

  const [posicaoLiquidoSelect, setPosicaoLiquidoSelect] = useState("");
  const [LiquidoCheckBox, setLiquidoCheckBox] = useState(false);

  const criaStringLiquidoLivre = () => {
    removeStringLiquidoLivre();

    if (LiquidoCheckBox && posicaoLiquidoSelect !== "") {
      var string = `Presença de ${posicaoLiquidoSelect} quantidade de líquido livre no fundo de saco posterior.`;
      setFrasesLiquidoLivre((arr) => [...arr, string]);
    }
  };

  const removeStringLiquidoLivre = () => {
    frasesLiquidoLivre.map((e) => {
      if (e.includes("Presença de ")) {
        var index = frasesLiquidoLivre.indexOf(e);

        if (index > -1) {
          frasesLiquidoLivre.splice(index, 1);
          setFrasesLiquidoLivre((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LiquidoCheckBox) {
      criaStringLiquidoLivre();
    } else {
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
