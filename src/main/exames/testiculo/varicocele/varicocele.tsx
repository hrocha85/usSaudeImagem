import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Varicocele() {
  const altura = "100%";
  const largura = "90%";

  const [frasesVaricocele, setFrasesVaricocele] = useState<any>([]);

  const [posicaoVaricoceleSelect, setPosicaoVaricoceleSelect] = useState("");
  const [VaricoceleCheckBox, setVaricoceleCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringVaricoceleLivre = () => {
    removeStringVaricoceleLivre();

    if (VaricoceleCheckBox && posicaoVaricoceleSelect !== "") {
      const string = `Varicocele no local: ${posicaoVaricoceleSelect}`;
      setFrasesVaricocele((arr) => [...arr, string]);
    }
  };

  const removeStringVaricoceleLivre = () => {
    frasesVaricocele.map((e) => {
      if (e.includes("Varicocele no local")) {
        const index = frasesVaricocele.indexOf(e);

        if (index > -1) {
          frasesVaricocele.splice(index, 1);
          setFrasesVaricocele((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (VaricoceleCheckBox) {
      setDisableSelect(false);
      criaStringVaricoceleLivre();
    } else {
      setDisableSelect(true);
      removeStringVaricoceleLivre();
      setPosicaoVaricoceleSelect("");
    }
  }, [VaricoceleCheckBox, posicaoVaricoceleSelect]);

  const subExame = "Varicocele";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(frasesVaricocele).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVaricocele
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVaricocele
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVaricocele]);

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
