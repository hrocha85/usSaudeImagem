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

const MainCard = (props) => {
  function iconButtonorNot(titulo) {
    switch (titulo) {
      case "Clínicas":
        return (
          <>
            <IconButtonPlus />
          </>
        );
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
      <Stack direction="row" marginTop="20px" spacing="100px">
        <Text
          color="#1A202C"
          fontSize="16px"
          paddingStart="8px"
          alignSelf="center"
        >
          {props.titulo}
        </Text>
        {iconButtonorNot(props.titulo)}
      </Stack>

    
    </Box>
  );
};

export default MainCard;
