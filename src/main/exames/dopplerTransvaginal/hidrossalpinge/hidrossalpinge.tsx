import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidrossalpinge() {
  const altura = "100%";
  const largura = "300px";

  const [frasesHidro, setFrasesHidro] = useState<any>([]);
  const [ConclusaoHidro, setConclusaoHidro] = useState<any>([]);

  const [posicaoHidrossalpingeSelect, setPosicaoHidrossalpingeSelect] =
    useState("");
  const [HidrossalpingeCheckBox, setHidrossalpingeCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringHidrossalpinge = () => {
    removeStringHidrossalpinge();

    if (HidrossalpingeCheckBox && posicaoHidrossalpingeSelect != "") {
      const string = `Nota-se em região anexial ${posicaoHidrossalpingeSelect} imagem anecóica, tubular, tortuosa, de limites precisos e contornos regulares.`;
      const conclusao = `Hidrossalpinge à ${posicaoHidrossalpingeSelect}.`
      setFrasesHidro((arr) => [...arr, string]);
      setConclusaoHidro((arr) => [...arr, conclusao]);
    }
  };

  const removeStringHidrossalpinge = () => {
    frasesHidro.map((e) => {
      if (e.includes("Nota-se em região anexial ")) {
        const index = frasesHidro.indexOf(e);

        if (index > -1) {
          frasesHidro.splice(index, 1);
          setFrasesHidro((arr) => [...arr]);
        }
      }
    });
    ConclusaoHidro.map((e) => {
      if (e.includes('Hidrossalpinge')) {
        const index = ConclusaoHidro.indexOf(e);

        if (index > -1) {
          ConclusaoHidro.splice(index, 1);
          setConclusaoHidro((arr) => [...arr]);
        }
      }
      new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Hidrossalpinge')
    });
  };

  useEffect(() => {
    if (HidrossalpingeCheckBox) {
      setDisableSelect(false);
      criaStringHidrossalpinge();
    } else {
      setDisableSelect(true);
      removeStringHidrossalpinge();
      setPosicaoHidrossalpingeSelect("");
    }
  }, [HidrossalpingeCheckBox, posicaoHidrossalpingeSelect]);

  const subExame = "Hidrossalpinge";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesHidro).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHidro,
        ConclusaoHidro
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHidro,
        ConclusaoHidro
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHidro]);

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
      <TituloNomeExame titulo="Hidrossalpinge" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setHidrossalpingeCheckBox(!HidrossalpingeCheckBox);
                  }}
                >
                  Hidrossalpinge
                </Checkbox>
                <Select
                  isDisabled={DisableSelect}
                  w="auto"
                  onChange={(e) => {
                    setPosicaoHidrossalpingeSelect(e.target.value);
                  }}
                  value={posicaoHidrossalpingeSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="à direita">Direita</option>
                  <option value="à esquerda">Esquerda</option>
                  <option value="bilateral">Bilateral</option>
                </Select>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Hidrossalpinge;
