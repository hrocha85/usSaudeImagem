import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Epididimite() {
  const altura = "100%";
  const largura = "90%";

  const [frasesEpididimite, setFrasesEpididimite] = useState<any>([]);

  const [posicaoEpididimiteSelect, setPosicaoEpididimiteSelect] =
    useState("");
  const [EpididimiteCheckBox, setEpididimiteCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringEpididimiteLivre = () => {
    removeStringEpididimiteLivre();

    if (EpididimiteCheckBox && posicaoEpididimiteSelect !== "") {
      var string = `Epididimite no local: ${posicaoEpididimiteSelect}`;
      setFrasesEpididimite((arr) => [...arr, string]);
    }
  };

  const removeStringEpididimiteLivre = () => {
    frasesEpididimite.map((e) => {
      if (e.includes("Epididimite no local")) {
        var index = frasesEpididimite.indexOf(e);

        if (index > -1) {
          frasesEpididimite.splice(index, 1);
          setFrasesEpididimite((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (EpididimiteCheckBox) {
      setDisableSelect(false);
      criaStringEpididimiteLivre();
    } else {
      setDisableSelect(true);
      removeStringEpididimiteLivre();
      setPosicaoEpididimiteSelect("");
    }
  }, [EpididimiteCheckBox, posicaoEpididimiteSelect]);

  const subExame = "Epididimite";
  const titulo_exame = "Doppler Testículo";


  useEffect(() => {
    if (Object.keys(frasesEpididimite).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesEpididimite
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesEpididimite
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesEpididimite]);

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
      <TituloNomeExame titulo="Epididimite" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setEpididimiteCheckBox(!EpididimiteCheckBox);
                  }}
                >
                  Epididimite no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoEpididimiteSelect(e.target.value);
                  }}
                  value={posicaoEpididimiteSelect}
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
export default Epididimite;
