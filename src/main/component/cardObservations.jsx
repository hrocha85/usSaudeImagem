import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import ItemObservation from "./itemObeservation";
import Clinica from "../configuracao/clinicas";

const CardObservation = () => {
  return (
    <Box
      paddingBottom='16px'
      bg="#FAFAFA"
      w="933px"
      h="282px"
      m="20px"
      marginBottom='165px'
      marginStart='37px'
      color="white"
      borderRadius="10.85px"
      boxShadow='dark-lg'

    >
      <p>
        <Text
          color="black"
          fontSize="16px"
          paddingStart="8px"
          paddingTop="16px"
          marginBottom="16px"
        >
          Observações
        </Text>
      </p>
      <Grid
        templateColumns="repeat(4,1fr)"
        templateRows="repeat(6, 1fr)"
        gap={0}
      >
        <ItemObservation />
      </Grid>
    </Box>
  );
};

export default CardObservation;
