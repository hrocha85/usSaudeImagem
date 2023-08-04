import { Box, Stack, Text, background } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Clinica from "../configuracao/clinicas";
import IconButtonPlus from "./icon_button_plus";
import Medico from "../configuracao/medicosNew";
import IconButtonPlusMedicos from "./icon_button_plusMedicos";

const MainCard = ({ titulo, icon, clinica, medicos }) => {
  const [atualizar, setAtualizar] = useState(true);

  useEffect(() => { }, [atualizar]);

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
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop:'4rem'}}>
      <Box
        // bg="#FAFAFA"
        w="23rem"
        h="50vh"
        color="white"

        borderRadius="10.85px"
        marginStart='20px'
        overflow='auto'
        css={{ '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' } }}

      //minW="218px"
      >
        <Box 
        position="absolute" bg={'#c1e4f9'}pl={'1rem'} zIndex={90} w={'25rem'} h={'3.4rem'} top={'5.0rem'}>
          <Stack direction="row" spacing="8.4rem">
            <Text
              color="#1A202C"
              fontSize="20px"
              paddingStart="10px"
              alignSelf="center"
              fontWeight='semibold'
            >
              {medicos ? medicos.nome : titulo}
            </Text>
            <Box pt={3}> {ShowIcon(icon, clinica)}</Box>
           
          </Stack>
        </Box>

        <Box>{Cards(titulo)}</Box>
      </Box>
    </div>
  );
};

export default MainCard;
