/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Flex, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizarNodulos";

function Nodulos({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [FraseNodulos, setFraseNodulos] = useState<any>([]);


  const subExame = "Nódulos";
  const titulo_exame = "Doppler da Tireóide";

  const [numberArray, setNumberArray] = useState([1, 2, 3, 4, 5]);


  const [updateNodulos, setUpdateNodulos] = useState(false);


  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarNodulos key={key} numCalculo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (Object.keys(FraseNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseNodulos]);

  useEffect(() => {
    if (updateNodulos) {
      setUpdateNodulos(false);
      console.log(numberArray);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Nodulos();
    }
  }, [updateNodulos]);

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
      <TituloNomeExame titulo="Nódulos" />
      <Box
        display="flex" flexWrap="wrap">
        {Nodulos()}
      </Box>
      <Button
        isDisabled={Disable}
        colorScheme="blue"
        onClick={() => {
          setUpdateNodulos(true);
        }}
      >
        +1 Nódulo
      </Button>
    </Box>
  );
}

export default Nodulos;
