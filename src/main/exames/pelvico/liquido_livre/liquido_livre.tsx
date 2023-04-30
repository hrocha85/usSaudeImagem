/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Liquido_Livre({ Disable }) {
  const altura = "100%";
  const largura = "33%";

  const [frasesLiquidoLivre, setFrasesLiquidoLivre] = useState<any>([]);
  const [ConclusaoLiquidoLivre, setConclusaoLiquidoLivre] = useState<any>([]);

  const subExame = "Líquido Livre";
  const titulo_exame = "Pélvico"

  useEffect(() => {
    if (Object.keys(frasesLiquidoLivre).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesLiquidoLivre,
        ConclusaoLiquidoLivre
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesLiquidoLivre,
        ConclusaoLiquidoLivre
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesLiquidoLivre]);

  const [QuantidadeLiquidoSelect, setQuantidadeLiquidoSelect] = useState("");
  const [PosicaoLiquidoSelect, setPosicaoLiquidoSelect] = useState("");
  const [LiquidoCheckBox, setLiquidoCheckBox] = useState(false);

  const criaStringLiquidoLivre = () => {
    const conclusao = 'Líquido livre na pelve.'
    removeStringLiquidoLivre();
    if (LiquidoCheckBox && QuantidadeLiquidoSelect !== "" && PosicaoLiquidoSelect !== '') {
      var string = `Presença de ${QuantidadeLiquidoSelect} quantidade de líquido livre no fundo de saco ${PosicaoLiquidoSelect}.`;
      setFrasesLiquidoLivre((arr) => [...arr, string]);
      setConclusaoLiquidoLivre((arr) => [...arr, conclusao]);
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
    ConclusaoLiquidoLivre.map((e) => {
      if (e.includes("Líquido livre na pelve.")) {
        var index = ConclusaoLiquidoLivre.indexOf(e);

        if (index > -1) {
          ConclusaoLiquidoLivre.splice(index, 1);
          setConclusaoLiquidoLivre((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Líquido livre na pelve.');
        }
      }
    });
  };

  useEffect(() => {
    if (LiquidoCheckBox) {
      criaStringLiquidoLivre();
    } else {
      removeStringLiquidoLivre();
      setQuantidadeLiquidoSelect("");
      setPosicaoLiquidoSelect('')
    }
  }, [LiquidoCheckBox, QuantidadeLiquidoSelect, PosicaoLiquidoSelect]);

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
                    setQuantidadeLiquidoSelect(e.target.value);
                  }}
                  value={QuantidadeLiquidoSelect}
                >
                  <option value="" disabled selected>
                    quantidade
                  </option>
                  <option value="pequena">Pequena</option>
                  <option value="moderada">Moderada</option>
                  <option value="grande">Grande</option>
                </Select>
                <Select
                  isDisabled={!LiquidoCheckBox}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoLiquidoSelect(e.target.value);
                  }}
                  value={PosicaoLiquidoSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="posterior">Posterior</option>
                  <option value="anterior">Anterior</option>
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
