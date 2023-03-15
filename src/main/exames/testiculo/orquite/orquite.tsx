import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Orquite() {
  const altura = "100%";
  const largura = "87%";

  const [frasesOrquite, setFrasesOrquite] = useState<any>([]);

  const [posicaoOrquiteSelect, setPosicaoOrquiteSelect] = useState("");
  const [OrquiteCheckBox, setOrquiteCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringOrquiteLivre = () => {
    removeStringOrquiteLivre();

    if (OrquiteCheckBox && posicaoOrquiteSelect !== "") {
      var string = `Orquite no local: ${posicaoOrquiteSelect}`;
      setFrasesOrquite((arr) => [...arr, string]);
    }
  };

  const removeStringOrquiteLivre = () => {
    frasesOrquite.map((e) => {
      if (e.includes("Orquite no local")) {
        var index = frasesOrquite.indexOf(e);

        if (index > -1) {
          frasesOrquite.splice(index, 1);
          setFrasesOrquite((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (OrquiteCheckBox) {
      setDisableSelect(false);
      criaStringOrquiteLivre();
    } else {
      setDisableSelect(true);
      removeStringOrquiteLivre();
      setPosicaoOrquiteSelect("");
    }
  }, [OrquiteCheckBox, posicaoOrquiteSelect]);

  const subExame = "Orquite";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(frasesOrquite).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOrquite
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOrquite
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOrquite]);

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
      <TituloNomeExame titulo="Orquite" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setOrquiteCheckBox(!OrquiteCheckBox);
                  }}
                >
                  Orquite no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoOrquiteSelect(e.target.value);
                  }}
                  value={posicaoOrquiteSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="ausente">ausente</option>
                  <option value="testículo direito">testículo direito</option>
                  <option value="testículo esquerdo">testículo esquerdo</option>
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
export default Orquite;
