

import { Box, Checkbox, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HerniaUmbilical from "./SubparedeAbdominal/herniaUmbilical";
import Colecao from "./SubparedeAbdominal/colecao";
import { Format_Laudo } from "../../component/function_format_laudo";
import Diastase_Musculo_Reto from "./SubparedeAbdominal/diastase_musculo_reto";




function ParedeAbdominal() {
  const altura = '100%'
  const largura = '220px'
  const [Disable, SetDisable] = useState(false)
  const [FraseNormal, setFraseNormal] = useState<any>([]);

  useEffect(() => {
    const string = 'Pele e tecido subcultaneos bem configurados com espessura, contornos e ecotexturas normais.\nFeixes Musculares em situação tópica com morfologia e demais características ecográficas normais. \nAusência de calcificação patológica.'
    Disable ? setFraseNormal((arr) => [...arr, string]) : removeFrase(string)
  }, [Disable])

  const removeFrase = (value) => {
    FraseNormal.map((e) => {
      if (e.includes(value)) {
        const index = FraseNormal.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseNormal.splice(index, 1);
          setFraseNormal((arr) => [...arr]);
        }
      }
    });
  };
  const subExame = "Parede Abdominal";
  const titulo_exame = "Parede Abdominal";

  useEffect(() => {
    if (Object.keys(FraseNormal).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseNormal,

      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseNormal,

      ).Format_Laudo_Create_Storage();
    }
  }, [FraseNormal]);

  return (
    <>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'>

        <Checkbox
          id="tudoNormal"
          onChange={(e) => { SetDisable(!Disable) }}
        >Parede Abdominal normal</Checkbox>

      </Box >

      <HerniaUmbilical Disable={Disable} />
      <Diastase_Musculo_Reto Disable={Disable} />
    </>
  );
}

export default ParedeAbdominal;
