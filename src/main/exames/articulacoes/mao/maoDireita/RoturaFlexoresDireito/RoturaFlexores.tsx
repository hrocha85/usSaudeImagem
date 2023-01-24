/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Stack } from "@chakra-ui/react";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarRoturaFlexores from "./individualizarRoturaFlexores";

function RoturaFlexoresDireito() {
  const altura = "100%";
  const largura = "95%";

  var numberArray = [1, 2, 3, 4, 5];

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
      <TituloNomeExame titulo="Rotura dos Flexores" />
      <Stack>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarRoturaFlexores
                key={key}
                numCalculo={num}
              />
            );
          })}
        </>
      </Stack>
    </Box>
  );
}
export default RoturaFlexoresDireito;