import { Box, Button, Checkbox, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Nodulo from "./Nodulos_Individualizados/Nodulo";

function Nodulos() {
  const altura = "100%";
  const largura = "66%";

  const [numberArray, setNumberArray] = useState([1]);

  const [frasesNodulos, setFrasesNodulos] = useState<any>([]);
  const [UpdateCalculos, setUpdateCalculos] = useState(false);

  function Calculos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <Nodulo key={key} numCalculo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCalculos) {
      setUpdateCalculos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Calculos();
    }
  }, [UpdateCalculos]);

  const subExame = "Nódulos";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(frasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesNodulos]);
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
        <TituloNomeExame titulo="Nódulos" />

        <Box gap="25px" display="flex" flexWrap="wrap" mt="20px" mb="10px">

          {Calculos()}
          <Button
            colorScheme="blue"
            onClick={() => {
              setUpdateCalculos(true);
            }}
          >
            +1 Cálculo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Nodulos;
