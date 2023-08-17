
/* eslint-disable array-callback-return */
import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizar_nodulos";

function Nodulos() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"


  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateNodulos, setUpdateNodulos] = useState(false);

  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarNodulos key={key} numNodulo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Nodulos();
    }
  }, [UpdateNodulos]);



  const subExame = "Nódulos";
  const titulo_exame = "Rins e Vias Urinárias";


  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 2px 15px"
      mt="20px"
    >
      <Box h="100%">
        <TituloNomeExame titulo="Nódulos" />
        <Box gap="10px" display="flex" flexWrap="wrap">
          {Nodulos()}
          <Button
            colorScheme="blue"
            onClick={() => {
              setUpdateNodulos(true);
            }}
          >
            +1 Nódulo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Nodulos;
