import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Clinica from "../configuracao/clinicas";
import IconButtonPlus from "./icon_button_plus";
import Medicos from '../configuracao/medicos'


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

  const getMedicos = () => {
    var medicos;
    var item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");

      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };

  const [medicoss, setMedicoss] = useState<any[]>(getMedicos);



  function Cards(titulo) {
    switch (titulo) {
      case "Clínicas":
        return <Clinica atualizar={atualizar} />;
      case "Medicos":
        return <Medicos />;
      // break
      //   break;
      default:
    }
  }

  return (
    <Box
      // bg="#FAFAFA"
      w="358px"
      h="62vh"
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
  );
};

export default MainCard;
