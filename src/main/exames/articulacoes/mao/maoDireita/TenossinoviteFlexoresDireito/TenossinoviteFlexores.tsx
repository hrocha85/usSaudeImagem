/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Stack } from "@chakra-ui/react";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarTenossinoviteFlexores from "./individualizarTenossinoviteFlexores";

function TenossinoviteFlexoresDireito() {
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
      <TituloNomeExame titulo="Tenosssinovite dos Flexores" />
      <Stack>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarTenossinoviteFlexores
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
export default TenossinoviteFlexoresDireito;
