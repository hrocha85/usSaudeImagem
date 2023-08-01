import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Clinica from "../configuracao/clinicas";
import IconButtonPlus from "./icon_button_plus";
import Medico from "../configuracao/medicosNew";

const MainCard = ({ titulo, icon, clinica, medicos }) => {
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
      case "Médicos":
        return <Medico atualizar={atualizar} />;

      default:
        break;
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Box
      // bg="#FAFAFA"
      w="45rem"
      h="100vh"
      color="white"
      
      borderRadius="10.85px"
      marginStart='20px'
      overflow='auto'

    //minW="218px"
    >
      <Box margin="10px">
        <Stack direction="row" spacing="200px">
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
      </Box>

      <Box>{Cards(titulo)}</Box>
    </Box>
    </div>
  );
};

export default MainCard;
