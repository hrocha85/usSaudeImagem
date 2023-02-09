import { Box, Button, Flex, Stack, Textarea } from "@chakra-ui/react";
import React from "react";
import TituloNomeExame from "./titulo_nome_exame";

export default function Conclusoes() {
  let [value, setValue] = React.useState("");
  const altura = "100%";
  const largura = "100%";
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Flex w="100%" h="auto">
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding="24px 15px 20px 15px"
      >
        <TituloNomeExame titulo="Conclusões" />

        <Stack>
          <Textarea
            placeholder="Digite as conclusões"
            borderColor="black"
            maxH="300px"
            h="200px"
          />
          <Button colorScheme="blue">Adicionar Conclusão</Button>
        </Stack>
      </Box>
    </Flex>
  );
}
