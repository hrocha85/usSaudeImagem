
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hematoma() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [frasesHematoma, setFrasesHematoma] = useState<any>([]);
  const [ConclusaoHematoma, setConclusaoHematoma] = useState<any>([]);

  const [tamanhoHematomaInput, settamanhoHematomaInput] = useState("");
  const [tamanho2HematomaInput, settamanho2HematomaInput] = useState("");
  const [posicaoHematomaSelect, setPosicaoHematomaSelect] = useState("");
  const [HematomaCheckBox, setHematomaCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringHematoma = () => {
    removeStringHematoma();
    let conclusao = 'Imagem heterogênea adjacente ao testículo à'
    removeItemConclusao(conclusao)
    if (
      HematomaCheckBox &&
      posicaoHematomaSelect !== "" &&
      tamanhoHematomaInput !== "" &&
      tamanho2HematomaInput !== ""
    ) {
      conclusao = `${conclusao} ${posicaoHematomaSelect}. Considerar a possibilidade de hematoma.`
      const string = `Observa-se em testículo ${posicaoHematomaSelect} imagem heterogênea, de contornos irregulares, sem fluxo ao Doppler, com septações e moderados debris de permeio, sugerindo conteúdo cístico-espesso, adjacente ao testículo, medindo cerca de ${tamanhoHematomaInput} x ${tamanho2HematomaInput} cm. `;
      setFrasesHematoma((arr) => [...arr, string]);
      setConclusaoHematoma((arr) => [...arr, conclusao]);
    }
  };
  const removeItemConclusao = (value) => {
    ConclusaoHematoma.map((e) => {
      if (e.includes(value)) {
        const index = ConclusaoHematoma.indexOf(e);

        if (index > -1) {
          ConclusaoHematoma.splice(index, 1);
          setConclusaoHematoma((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value)
        }
      }
    });
  };
  const removeStringHematoma = () => {
    frasesHematoma.map((e) => {
      if (e.includes("Observa-se em testículo")) {
        const index = frasesHematoma.indexOf(e);

        if (index > -1) {
          frasesHematoma.splice(index, 1);
          setFrasesHematoma((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringHematoma();
    if (HematomaCheckBox) {
      setDisableSelect(false);
    } else {
      setDisableSelect(true);
      removeStringHematoma();
      setPosicaoHematomaSelect("");
      settamanhoHematomaInput("");
      settamanho2HematomaInput("");
    }
  }, [
    HematomaCheckBox,
    tamanhoHematomaInput,
    posicaoHematomaSelect,
    tamanho2HematomaInput,
  ]);

  const subExame = "Hematoma";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(frasesHematoma).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHematoma,
        ConclusaoHematoma
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHematoma,
        ConclusaoHematoma
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHematoma]);

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
      <TituloNomeExame titulo="Hematoma" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <HStack>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => {
                setHematomaCheckBox(!HematomaCheckBox);
              }}
            >
              Hematoma
            </Checkbox>
            <Select
              w="auto"
              isDisabled={DisableSelect}
              onChange={(e) => {
                setPosicaoHematomaSelect(e.target.value);
              }}
              value={posicaoHematomaSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="ausente">Ausente</option>
              <option value="testículo direito">testículo direito</option>
              <option value="testículo esquerdo">testículo esquerdo</option>
            </Select>
            <Input
              isDisabled={DisableSelect}
              w="60px"
              h="77x"
              padding="0px"

              textAlign="center"
              placeholder={"cm"}
              value={tamanhoHematomaInput}
              onChange={(e) => settamanhoHematomaInput(e.target.value)}
            />
            <Text>x</Text>
            <Input
              isDisabled={DisableSelect}
              w="60px"
              h="77x"
              padding="0px"

              textAlign="center"
              placeholder={"cm"}
              value={tamanho2HematomaInput}
              onChange={(e) => settamanho2HematomaInput(e.target.value)}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
export default Hematoma;
