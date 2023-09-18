import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Orquiepididimite() {
  const altura = "100%";
  const largura = "90%";

  const [frasesOrquiepididimite, setFrasesOrquiepididimite] = useState<any>([]);

  const [posicaoOrquiepididimiteSelect, setPosicaoOrquiepididimiteSelect] =
    useState("");
  const [OrquiepididimiteCheckBox, setOrquiepididimiteCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringOrquiepididimiteLivre = () => {
    removeStringOrquiepididimiteLivre();

    if (OrquiepididimiteCheckBox && posicaoOrquiepididimiteSelect !== "") {
      const string = `Orquiepididimite no local: ${posicaoOrquiepididimiteSelect}`;
      setFrasesOrquiepididimite((arr) => [...arr, string]);
    }
  };

  const removeStringOrquiepididimiteLivre = () => {
    frasesOrquiepididimite.map((e) => {
      if (e.includes("Orquiepididimite no local")) {
        const index = frasesOrquiepididimite.indexOf(e);

        if (index > -1) {
          frasesOrquiepididimite.splice(index, 1);
          setFrasesOrquiepididimite((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (OrquiepididimiteCheckBox) {
      setDisableSelect(false);
      criaStringOrquiepididimiteLivre();
    } else {
      setDisableSelect(true);
      removeStringOrquiepididimiteLivre();
      setPosicaoOrquiepididimiteSelect("");
    }
  }, [OrquiepididimiteCheckBox, posicaoOrquiepididimiteSelect]);

const subExame = "Orquiepididimite";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(frasesOrquiepididimite).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOrquiepididimite
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOrquiepididimite
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOrquiepididimite]);



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
      <TituloNomeExame titulo="Orquiepididimite" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setOrquiepididimiteCheckBox(!OrquiepididimiteCheckBox);
                  }}
                >
                  Orquiepididimite no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoOrquiepididimiteSelect(e.target.value);
                  }}
                  value={posicaoOrquiepididimiteSelect}
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
export default Orquiepididimite;
