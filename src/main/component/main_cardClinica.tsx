import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Clinica from "../configuracao/clinicas";
import IconButtonPlus from "./icon_button_plus";
import Medico from "../configuracao/medicosNew";

const MainCardClinica = ({ titulo, icon, clinica, medicos }) => {
  const [atualizar, setAtualizar] = useState(true);

  useEffect(() => { }, [atualizar]);

  function ShowIcon(icon: boolean) {
    if (icon) {
      return (
        <IconButtonPlus atualizar={atualizar} setAtualizar={setAtualizar} />
      );
    }
  }

  function Cards(titulo) {
    switch (titulo) {
      case "Clínicas":
        return <Clinica atualizar={atualizar} />;


      default:
        break;
    }
  }

  return (
    <Box
      // bg="#FAFAFA"
      w="20rem"
      h="60vh"
      color="white"
      borderRadius="10.85px"
      overflow='auto'
      css={{ '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' } }}

    //minW="218px"
    >
      {/* <Box bg={'#c1e4f9'}pl={'1rem'} zIndex={90} w={'25rem'} h={'2.8rem'}>
        <Stack
          direction="row" spacing="200px">
          <Text
            color="#1A202C"
            fontSize="20px"
            paddingStart="8px"
            alignSelf="center"
            fontWeight='semibold'
          >
            {medicos ? medicos.nome : titulo}
          </Text>
          {ShowIcon(icon)}
        </Stack>
      </Box> */}

      <Box>{Cards(titulo)}</Box>
    </Box>
  );
};

export default MainCardClinica;
