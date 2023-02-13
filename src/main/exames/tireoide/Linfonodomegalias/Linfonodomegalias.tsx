/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Spacer, Stack, Wrap, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Individualiza_Linfonodomegalias from "./Individualiza/individualiza_Linfonodomegalia";
import Individualiza_MultiplosLinfonodos from "./Individualiza/individualiza_mutiplos";


function Linfonodomegalias() {
  const altura = "100%";
  const largura = "66%";


  const [FrasesLinfonodomegalias, setFrasesLinfonodomegalias] = useState<any>([]);


  const subExame = "Linfonodomegalias";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesLinfonodomegalias).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesLinfonodomegalias
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesLinfonodomegalias
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesLinfonodomegalias]);
  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 24px 15px"
      mt="20px"
    >
      <Box h="100%">
        <TituloNomeExame titulo="Linfonodomegalias" />

        <Box gap="25px" display="flex" flexWrap="wrap" mt="20px" mb="10px">
          <Individualiza_Linfonodomegalias />
          <Individualiza_MultiplosLinfonodos />
        </Box>
      </Box>
    </Box>
  );
}

export default Linfonodomegalias;
