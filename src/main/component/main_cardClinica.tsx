import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Clinica from "../configuracao/clinicas";
import IconButtonPlus from "./icon_button_plus";
import Medico from "../configuracao/medicosNew";

const MainCardClinica = ({ titulo, icon, clinica, medicos }) => {
  const [atualizar, setAtualizar] = useState(true);


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
      w="100%"
      h="95%"
      color="white"
      borderRadius="10.85px"
      mt={'5%'}
    >
      <Box h={'3.4rem'} w={'100%'}>

        <Stack direction="row" justifyContent={'center'}>
          <Text
            color="#1A202C"
            fontSize="20px"
            alignSelf="center"
            fontWeight='semibold'
            mr={2}
          >
            Clínicas
          </Text>
          {ShowIcon(icon)}

        </Stack>
      </Box>

      <Box
        h={'100%'}
        overflow='auto'
        css={{ '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' } }}
      >{Cards(titulo)}</Box>
    </Box>
  );
};

export default MainCardClinica;
