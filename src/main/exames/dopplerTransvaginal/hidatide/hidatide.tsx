import { Box, Checkbox, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidatide() {
  const altura = "100%";
  const largura = "300px";

  const [frasesHidatide, setFrasesHidate] = useState<any>([]);
  const [ConclusaoHidatide, setConclusaoHidatide] = useState<any>([]);

  const [tamanhoHidatideInput, settamanhoHidatideInput] = useState("");
  const [posicaoHidatideSelect, setPosicaoHidatideSelect] = useState("");
  const [hidatideCheckBox, setHidatideCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const handleTamanhoHidatideInput = (event) => {
    settamanhoHidatideInput(event.target.value);
  };

  const criaStringHidatide = () => {
    removeStringHidatide();

    if (hidatideCheckBox && posicaoHidatideSelect != "" && tamanhoHidatideInput != "") {
      const string = `Nota-se imagem em região anexial ${posicaoHidatideSelect} anecóica, arredondada, de limites precisos e contornos regulares, medindo ${tamanhoHidatideInput} mm.`;
      const conclusao = `Cisto anexial à ${posicaoHidatideSelect} podendo corresponder a hidátide de Morgani.`
      setFrasesHidate((arr) => [...arr, string]);
      setConclusaoHidatide((arr) => [...arr, conclusao]);
    }
  };

  const removeStringHidatide = () => {
    frasesHidatide.map((e) => {
      if (e.includes("Nota-se imagem em região anexial")) {
        const index = frasesHidatide.indexOf(e);

        if (index > -1) {
          frasesHidatide.splice(index, 1);
          setFrasesHidate((arr) => [...arr]);
        }
      }
    });
    ConclusaoHidatide.map((e) => {
      if (e.includes('Cisto anexial à')) {
        const index = ConclusaoHidatide.indexOf(e);

        if (index > -1) {
          ConclusaoHidatide.splice(index, 1);
          setConclusaoHidatide((arr) => [...arr]);
        }
      }
      new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Cisto anexial à')
    });

  };

  useEffect(() => {
    if (hidatideCheckBox) {
      setDisableSelect(false);
      criaStringHidatide();
    } else {
      setDisableSelect(true);
      removeStringHidatide();
      setPosicaoHidatideSelect("");
      settamanhoHidatideInput("");
    }
  }, [hidatideCheckBox, tamanhoHidatideInput, posicaoHidatideSelect]);

  const subExame = "Hidátide";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesHidatide).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHidatide,
        ConclusaoHidatide
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHidatide,
        ConclusaoHidatide
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHidatide]);

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
      <TituloNomeExame titulo="Hidátide" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setHidatideCheckBox(!hidatideCheckBox);
                  }}
                >
                  Hidátide
                </Checkbox>
                <Select
                  w="auto"
                  isDisabled={DisableSelect}
                  onChange={(e) => {
                    setPosicaoHidatideSelect(e.target.value);
                  }}
                  value={posicaoHidatideSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="direito">Direita</option>
                  <option value="esquerdo">Esquerda</option>
                </Select>
                <Input
                  isDisabled={DisableSelect}
                  w="60px"

                  padding="0px"
                  textAlign="center"
                  placeholder={"mm"}
                  value={tamanhoHidatideInput}
                  onChange={handleTamanhoHidatideInput}
                />
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Hidatide;
