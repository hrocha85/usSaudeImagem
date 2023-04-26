/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizar_cistos";

function CistosTesticulares() {
  const altura = "100%";
  const largura = "66%";

  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateCistos, setUpdateCistos] = useState(false);

  function Cistos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarCistos key={key} numCisto={num} disable={!TesticuloSemCistosCheckBox} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCistos) {
      setUpdateCistos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Cistos();
    }
  }, [UpdateCistos])

  const [TesticuloSemCistosCheckBox] = useState(true);

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
      <TituloNomeExame titulo="Cistos testículares" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack w='100%'>
            <Box gap="25px" display="flex" flexWrap="wrap">
              {Cistos()}
              <Button

                colorScheme="blue"
                onClick={() => {
                  setUpdateCistos(true);
                }}
              >
                +1 Cisto
              </Button>

            </Box>
          </Stack>
        </Stack>
      </Box >
    </Box >
  );
}
export default CistosTesticulares;
