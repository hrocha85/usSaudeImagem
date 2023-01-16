/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useState } from "react";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarPolias from "./individualizarPolias"

function Polias() {

  const altura = "100%";
  const largura = "95%";

  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AspectoNormal, setAspectoNormal] = useState(false);

  var numberArray = [1, 2, 3, 4];

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
      <TituloNomeExame titulo="Polias" />
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          onChange={() => setAspectoNormal(!AspectoNormal)}
        >
          Aspecto normal
        </Checkbox>
        <Checkbox
          onChange={() => setDisableCheckbox(!DisableCheckbox)}
        >
          Descontinuidade das seguintes polias
        </Checkbox>
      </Box>
      <Stack>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarPolias
                key={key}
                numCalculo={num}
                desabilita={DisableCheckbox}
              />
            );
          })}
        </>
      </Stack>
    </Box>
  );
}
export default Polias;
