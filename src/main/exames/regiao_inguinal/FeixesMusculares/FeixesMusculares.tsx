/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function FeixesMusculares() {
  const altura = "100%";
  const largura = "350px";

  const [FraseVagina, setFraseVagina] = useState<any>([]);


  const [TopicaCheckbox, setTopicaCheckbox] = useState(false);
  const [DisableTopica, setDisableTopica] = useState(false);

  const [AtopicaCheckbox, setAtopicaCheckbox] = useState(false);
  const [DisableAtopica, setDisableAtopica] = useState(false);

  const removeItemString = (value) => {
    var index = FraseVagina.indexOf(value);

    if (index > -1) {
      FraseVagina.splice(index, 1);
      setFraseVagina((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Feixes Musculares em situação tópica'
    if (TopicaCheckbox) {
      setDisableAtopica(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableAtopica(false)
      removeItemString(string)
    }
  }, [TopicaCheckbox])
  useEffect(() => {
    const string = 'Feixes Musculares em situação atópicas com descontinuidade dos feixes com morfologia e demais características ecográficas normais'
    if (AtopicaCheckbox) {
      setDisableTopica(true)
      setFraseVagina((arr) => ([...arr, string]))
    } else {
      setDisableTopica(false)
      removeItemString(string)
    }
  }, [AtopicaCheckbox])

  const subExame = "Feixes Musculares";
  const titulo_exame = 'Região Inguinal'

  useEffect(() => {
    if (Object.keys(FraseVagina).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseVagina
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseVagina
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseVagina]);

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
    >
      <TituloNomeExame titulo="Feixes Musculares" />

      <Box gap="5px" display="flex" flexWrap="wrap" mt="10px">
        <Checkbox
          disabled={DisableTopica}
          onChange={() => {
            setTopicaCheckbox(!TopicaCheckbox);
          }}
        >
          Tópica
        </Checkbox>
        <Checkbox
          disabled={DisableAtopica}
          onChange={() => {
            setAtopicaCheckbox(!AtopicaCheckbox);
          }}
        >
          Atópica com descontinuidade dos feixes
        </Checkbox>

      </Box>
    </Box>
  );
}
export default FeixesMusculares;
