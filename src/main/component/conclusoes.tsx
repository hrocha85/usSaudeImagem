import { Box, Button, Flex, Stack, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "./function_format_laudo";
import TituloNomeExame from "./titulo_nome_exame";

export default function Conclusoes({ exame, clean }) {
  const altura = "100%";
  const largura = "100%";

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  const titulo = `Conclusão ${exame.nomeExame} `;

  const [arrayConclusoes, setArrayConclusoes] = useState<any>([]);
  const [handleConclusoes, setHandleConclusoes] = useState<any>({ exames: [] });

  const handleAdd = (exame: string, conclusao: string) => {
    setHandleConclusoes((prevState) => {
      let found = false;
      let newExames = prevState.exames.map((item) => {
        if (item.exame === exame) {
          found = true;
          return { ...item, conclusoes: [...item.conclusoes, conclusao] };
        }
        return item;
      });
      if (!found) {
        newExames = [...newExames, { exame, conclusoes: [conclusao] }];
      }
      return { ...prevState, exames: newExames };
    });
    setValue("");
  };

  const subExame = titulo;
  const titulo_exame = `${exame.nomeExame}`;

  useEffect(() => {
    if (Object.keys(arrayConclusoes).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        arrayConclusoes
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        arrayConclusoes
      ).Format_Laudo_Create_Storage();
    }
  }, [arrayConclusoes]);

  useEffect(() => {
    handleConclusoes.exames.map((e) => {
      if (e.exame.nomeExame == exame.nomeExame) {
        setArrayConclusoes(e.conclusoes);
      }
    });
  }, [handleConclusoes]);

  useEffect(() => {
    if (clean) {
      setValue("");
    }
  }, [clean]);

  return (
    <Flex w="100%" h="327px" paddingStart="20px">
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
        <TituloNomeExame titulo="Conclusão" />

        <Stack>
          <Textarea
            placeholder="Digite as conclusões"
            borderColor="black"
            maxH="300px"
            h="200px"
            value={value}
            onChange={handleInputChange}
          />
          <Button
            isDisabled={value != "" ? false : true}
            colorScheme="blue"
            onClick={() => handleAdd(exame, value)}
          >
            Adicionar Conclusão
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
