import { Checkbox, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ImpressaoDiagnostica() {
  const altura = "100%";
  const largura = "45%";

  const [frasesProstata, setFrasesProstata] = useState<any>([]);

  const [exameUltrassonograficoCheckbox, setExameUltrassonograficoCheckbox] =
    useState(false);

  const [imagemSugestivaCheckbox, setImagemSugestivaCheckbox] = useState(false);

  const [aumentoVolumeCheckbox, setAumentoVolumeCheckbox] = useState(false);

  const [aumentoVolume2Checkbox, setAumentoVolume2Checkbox] = useState(false);

  const [aumentoVolume3Checkbox, setAumentoVolume3Checkbox] = useState(false);

  const criaString = (string) => {
    removeItemString(string);
    setFrasesProstata((arr) => [...arr, string]);
  };

  const removeItemString = (value) => {
    const index = frasesProstata.indexOf(value);

    if (index > -1) {
      frasesProstata.splice(index, 1);
      setFrasesProstata((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string =
      "Exame ultrassonográfico da bexiga, próstata e vesículas seminais, dentro dos parâmetros da normalidade.";
    if (exameUltrassonograficoCheckbox) {
      criaString(string);
    } else {
      removeItemString(string);
    }
  }, [exameUltrassonograficoCheckbox]);

  useEffect(() => {
    const string =
      "Imagem sugestiva de próstata com  volume e peso normais e associado a alterações texturais difusas conforme relatado no texto.";
    if (imagemSugestivaCheckbox) {
      criaString(string);
    } else {
      removeItemString(string);
    }
  }, [imagemSugestivaCheckbox]);

  useEffect(() => {
    const string =
      "Imagem sugestiva de aumento do volume e peso da próstata, que determina compressão sobre o assoalho vesical.";
    if (aumentoVolumeCheckbox) {
      criaString(string);
    } else {
      removeItemString(string);
    }
  }, [aumentoVolumeCheckbox]);

  useEffect(() => {
    const string =
      "Imagem sugestiva aumento do volume e peso da próstata, que determina compressão sobre o assoalho vesical, associado a alterações texturais difusas";
    if (aumentoVolume2Checkbox) {
      criaString(string);
    } else {
      removeItemString(string);
    }
  }, [aumentoVolume2Checkbox]);

  useEffect(() => {
    const string =
      "Imagem sugestiva aumento do volume e peso da próstata, que determina compressão sobre o assoalho vesical, associado a alterações texturais difusas, com destaque para calcificações parenquimatosas com as demais características descritas no texto.";
    if (aumentoVolume3Checkbox) {
      criaString(string);
    } else {
      removeItemString(string);
    }
  }, [aumentoVolume3Checkbox]);

  const subExame = "Impressão Diagnóstica";
  const titulo_exame = "Próstata";

  useEffect(() => {
    if (Object.keys(frasesProstata).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesProstata
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesProstata
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesProstata]);

  return (
    <Flex
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
      direction="column"
      flex={1}
      flexWrap="wrap"
    >
      <TituloNomeExame titulo="Impressão Diagnóstica" />

      <Flex gap="15px" flexWrap="wrap" flex={1} flexDirection="column">
        <Checkbox
          flexShrink={1}
          onChange={(e) =>
            setExameUltrassonograficoCheckbox(!exameUltrassonograficoCheckbox)
          }
        >
          Exame ultrassonográfico da bexiga, próstata e vesículas seminais,
          dentro dos parâmetros da normalidade.
        </Checkbox>
        <Checkbox
          flexShrink={1}
          onChange={(e) => setImagemSugestivaCheckbox(!imagemSugestivaCheckbox)}
        >
          Imagem sugestiva de próstata com volume e peso normais e associado a
          alterações texturais difusas conforme relatado no texto.
        </Checkbox>
        <Checkbox
          flexShrink={1}
          onChange={(e) => setAumentoVolumeCheckbox(!aumentoVolumeCheckbox)}
        >
          Imagem sugestiva de aumento do volume e peso da próstata, que
          determina compressão sobre o assoalho vesical.
        </Checkbox>
        <Checkbox
          flexShrink={1}
          onChange={(e) => setAumentoVolume2Checkbox(!aumentoVolume2Checkbox)}
        >
          Imagem sugestiva aumento do volume e peso da próstata, que determina
          compressão sobre o assoalho vesical, associado a alterações texturais
          difusas
        </Checkbox>
        <Checkbox
          flexShrink={1}
          onChange={(e) => setAumentoVolume3Checkbox(!aumentoVolume3Checkbox)}
        >
          Imagem sugestiva aumento do volume e peso da próstata, que determina
          compressão sobre o assoalho vesical, associado a alterações texturais
          difusas, com destaque para calcificações parenquimatosas com as demais
          características descritas no texto.
        </Checkbox>
      </Flex>
    </Flex>
  );
}
export default ImpressaoDiagnostica;
