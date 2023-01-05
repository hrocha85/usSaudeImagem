import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Torcao() {
  const altura = "100%";
  const largura = "95%";

  const [frasesTorcao, setFrasesTorcao] = useState<any>([]);

  const [posicaoTorcaoSelect, setPosicaoTorcaoSelect] = useState("");
  const [TorcaoCheckBox, setTorcaoCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringTorcaoLivre = () => {
    removeStringTorcaoLivre();

    if (TorcaoCheckBox && posicaoTorcaoSelect !== "") {
      var string = `Torção no local: ${posicaoTorcaoSelect}`;
      setFrasesTorcao((arr) => [...arr, string]);
    }
  };

  const removeStringTorcaoLivre = () => {
    frasesTorcao.map((e) => {
      if (e.includes("Torção no local")) {
        var index = frasesTorcao.indexOf(e);

        if (index > -1) {
          frasesTorcao.splice(index, 1);
          setFrasesTorcao((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (TorcaoCheckBox) {
      setDisableSelect(false);
      criaStringTorcaoLivre();
    } else {
      setDisableSelect(true);
      removeStringTorcaoLivre();
      setPosicaoTorcaoSelect("");
    }
  }, [TorcaoCheckBox, posicaoTorcaoSelect]);

  const subExame = "Torção";
  const titulo_exame = "Doppler de Bolsa Testicular";

  useEffect(() => {
    if (Object.keys(frasesTorcao).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTorcao
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTorcao
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTorcao]);

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
      <TituloNomeExame titulo="Torção" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setTorcaoCheckBox(!TorcaoCheckBox);
                  }}
                >
                  Torção no local
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoTorcaoSelect(e.target.value);
                  }}
                  value={posicaoTorcaoSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="ausente">ausente</option>
                  <option value="à direita">à direita</option>
                  <option value="à esquerda">à esquerda</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Torcao;
