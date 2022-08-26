import {
  Box,
  Button,
  Stack,
  Text,
  IconButton,
  Icon,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import IconButtonPlus from "./iconButtonPlus";
import Clinica from "../configuracao/clinicas";
import ItemObservation from "./itemObeservation";
import Drs from "../configuracao/drs";

const MainCard = ({ titulo }) => {
  function showIcon() {
    return <IconButtonPlus />;
  }

  function cards(titulo) {
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
          if ({titulo == "Clínicas"}) {<IconButtonPlus />}
        </Stack>
      </Box>

      <Box>{cards(titulo)}</Box>
    </Box>
  );
};

export default MainCard;
