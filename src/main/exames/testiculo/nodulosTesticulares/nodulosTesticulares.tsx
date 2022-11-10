/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, } from "@chakra-ui/react";
import { useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizar_nodulos";

function NodulosTesticulares() {
  const altura = "100%";
  const largura = "66%";

  var numberArray = [1, 2];

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
            <>
              {numberArray.map((num, key) => {
                return (
                  <IndividualizarNodulos
                    key={key}
                    numNodulo={num}
                    disable={!TesticuloSemNodulosCheckBox}
                  />
                );
              })}
            </>
          </Stack>
        </Stack>
      </Box >
    </Box >
  );
}
export default NodulosTesticulares;
