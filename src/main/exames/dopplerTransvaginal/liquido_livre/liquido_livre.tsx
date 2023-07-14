/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Liquido_Livre() {
  const altura = "100%";
  const largura = "300px";

  const [frasesLL, setFrasesLL] = useState<any>([]);
  const [ConclusaoLL, setConclusaoLL] = useState<any>([]);

  const [posicaoLiquidoSelect, setPosicaoLiquidoSelect] = useState("");
  const [LiquidoCheckBox, setLiquidoCheckBox] = useState(false);

  const criaStringLiquidoLivre = () => {
    removeStringLiquidoLivre();
    if (LiquidoCheckBox) {
      if (posicaoLiquidoSelect != "") {
        var conclusao = `Líquido livre na pelve.`;
        var string = `Presença de ${posicaoLiquidoSelect} quantidade de líquido livre no fundo de saco posterior.`;
        setFrasesLL((arr) => [...arr, string]);
        setConclusaoLL((arr) => [...arr, conclusao]);
      }
    }
  };

  useEffect(() => {
    criaStringLiquidoLivre();
  }, [LiquidoCheckBox, posicaoLiquidoSelect]);

  const removeStringLiquidoLivre = () => {
    frasesLL.map((e) => {
      if (e.includes("quantidade de líquido livre no fundo de saco posterior.")) {
        var index = frasesLL.indexOf(e);

        if (index > -1) {
          frasesLL.splice(index, 1);
          setFrasesLL((arr) => [...arr]);
        }
      }
    });
    ConclusaoLL.map((e) => {
      if (e.includes('Líquido livre na pelve.')) {
        var index = ConclusaoLL.indexOf(e);

        if (index > -1) {
          ConclusaoLL.splice(index, 1);
          setConclusaoLL((arr) => [...arr]);
        }
      }
      new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Líquido livre na pelve.')
    });
  };

  const subExame = "Líquido Livre";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesLL).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesLL,
        ConclusaoLL
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesLL,
        ConclusaoLL
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesLL]);
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
                  isDisabled={!LiquidoCheckBox}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoLiquidoSelect(e.target.value);
                  }}
                  value={posicaoLiquidoSelect}
                >
                  <option value="" disabled selected>
                    Quantidade
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
