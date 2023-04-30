/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizar_nodulos";

function NodulosTesticulares() {
  const altura = "100%";
  const largura = "66%";


  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateNodulos, setUpdateNodulos] = useState(false);

  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarNodulos key={key} numNodulo={num} disable={!TesticuloSemNodulosCheckBox} />;
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

  const [TesticuloSemNodulosCheckBox] = useState(true);

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
      <TituloNomeExame titulo="Nódulos testículares" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack w='100%'>
            <Box gap="25px" display="flex" flexWrap="wrap">
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
          </Stack>
        </Stack>
      </Box >
    </Box >
  );
}
export default NodulosTesticulares;
