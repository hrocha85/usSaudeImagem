import { Box, Stack, Text } from "@chakra-ui/react";
import Clinica from "../configuracao/clinicas";
import Drs from "../configuracao/drs";
import IconButtonPlus from "./icon_button_plus";

const MainCard = ({ titulo, icon }) => {
  function ShowIcon(icon: boolean) {
    if (icon) {
      return <IconButtonPlus />;
    }
  }

  function Cards(titulo) {
    switch (titulo) {
      case "Clínicas":
        return <Clinica />;

      case "Doutor(a)":
        return <Drs />;

      default:
        break;
    }
  }

  return (
    <Box
      bg="#FAFAFA"
      w="218px"
      h="383px"
      color="white"
      borderRadius="10.85px"
      boxShadow="md"
      //minW="218px"
    >
      <Box margin="10px">
        <Stack direction="row" spacing="100px">
          <Text
            color="#1A202C"
            fontSize="16px"
            paddingStart="8px"
            alignSelf="center"
          >
            {titulo}
          </Text>
          {ShowIcon(icon)}
        </Stack>
      </Box>

      <Box>{Cards(titulo)}</Box>
    </Box>
  );
};

export default MainCard;
