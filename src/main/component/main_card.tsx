/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, HStack, Stack, Text, background } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Clinica from "../configuracao/clinicas";
import IconButtonPlus from "./icon_button_plus";
import Medico from "../configuracao/medicosNew";
import IconButtonPlusMedicos from "./icon_button_plusMedicos";

const MainCard = ({ titulo, icon, clinica, medicos }) => {
  const [atualizar, setAtualizar] = useState(true);

  function ShowIcon(icon: boolean, clinca) {
    if (icon) {
      return (
        <IconButtonPlusMedicos atualizar={atualizar} setAtualizar={setAtualizar} clinica={clinica} />
      );
    }
  }


  function Cards(titulo) {
    switch (titulo) {

      case "Médicos":
        return <Medico atualizar={atualizar} />;

      default:
        break;
    }
  }

  return (
    <div>
      <Box
        w="100%"
        h="60vh"
        color="white"
        borderRadius="10.85px"
      >
        <Box h={'3.4rem'} w={'30rem'}>

          <Stack direction="row">
            <Text
              color="#1A202C"
              fontSize="20px"
              alignSelf="center"
              fontWeight='semibold'
              mr={2}
            >
              Médicos
            </Text>
            {ShowIcon(icon, clinica)}

          </Stack>
        </Box>

        <Box
          h='50vh'
          overflow='auto'
          css={{ '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' } }}
        >{Cards(titulo)}
        </Box>
      </Box>
    </div>
  );
};

export default MainCard;
