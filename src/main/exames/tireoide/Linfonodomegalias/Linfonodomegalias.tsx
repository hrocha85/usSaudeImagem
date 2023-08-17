/* eslint-disable eqeqeq */

import { Box, Checkbox, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Individualiza_Linfonodomegalias from "./Individualiza/individualiza_Linfonodomegalia";
import Individualiza_MultiplosLinfonodos from "./Individualiza/individualiza_mutiplos";


function Linfonodomegalias({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"


  const [FrasesLinfonodomegalias, setFrasesLinfonodomegalias] = useState<any>([]);
  const [NormalCheckbox, setNormalCheckbox] = useState(false);

  useEffect(() => {
    const string = 'Linfonodomegalias normais'
    NormalCheckbox ? setFrasesLinfonodomegalias((arr) => [...arr, string]) : removeFrase(string)
  }, [NormalCheckbox])

  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    Normal ? setNormalCheckbox(true) : setNormalCheckbox(false)
  }, [Normal])

  const removeFrase = (value) => {
    FrasesLinfonodomegalias.map((e) => {
      if (e.includes(value)) {
        const index = FrasesLinfonodomegalias.indexOf(e);
        if (index > -1) {
          FrasesLinfonodomegalias.splice(index, 1);
          setFrasesLinfonodomegalias((arr) => [...arr]);
        }
      }
    });
  };
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

        <Checkbox
          isChecked={Normal}
          onChange={() => {
            setNormal(!Normal)
            setNormalCheckbox(!NormalCheckbox)
          }}>
          Normal
        </Checkbox>
        <Box gap="25px" display="flex" flexWrap="wrap" mt="10px" mb="10px">

          <Individualiza_Linfonodomegalias />
          <Individualiza_MultiplosLinfonodos />
        </Box>
      </Box>
    </Box>
  );
}

export default Linfonodomegalias;
