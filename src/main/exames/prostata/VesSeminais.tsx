
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Input,
  Select,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";
import TituloNomeExame from "../../component/titulo_nome_exame";

function VesSeminais() {
  const altura = "100%";
  const largura = "45%";

  const [frasesProstata, setFrasesProstata] = useState<any>([]);


  const [VesiculaCheckBox, setVesiculaCheckBox] = useState(false);

  const removeItemString = (value) => {
    const index = frasesProstata.indexOf(value);

    if (index > -1) {
      frasesProstata.splice(index, 1);
      setFrasesProstata((arr) => [...arr]);
    }
  };



  useEffect(() => {
    const string =
      "Vesícula Seminais: Bem individualizadas, com curso, configuração, diâmetros e ecotextura compatíveis com o normal.";
    VesiculaCheckBox ? setFrasesProstata((arr) => [...arr, string]) : removeItemString(string);

  }, [VesiculaCheckBox]);



  const subExame = "Vesicula Seminais";
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
      <TituloNomeExame titulo="Vesicula Seminais" />

      <Flex gap="15px" flexWrap="wrap" flex={1}>
        <Checkbox
          onChange={() => {
            setVesiculaCheckBox(!VesiculaCheckBox);
          }}
        >
          Vesícula Seminais
        </Checkbox>
      </Flex>
    </Flex>
  );
}
export default VesSeminais;
