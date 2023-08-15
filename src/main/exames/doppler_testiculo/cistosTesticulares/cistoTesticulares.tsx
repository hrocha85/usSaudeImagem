/* eslint-disable array-callback-return */

import { Box, Stack, } from "@chakra-ui/react";
import { useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizar_cistos";

function CistosTesticulares() {
  const altura = "100%";
  const largura = "66%";

  const numberArray = [1, 2];

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
            <>
              {numberArray.map((num, key) => {
                return (
                  <IndividualizarCistos
                    key={key}
                    numCisto={num}
                    disable={!TesticuloSemCistosCheckBox}
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
export default CistosTesticulares;
