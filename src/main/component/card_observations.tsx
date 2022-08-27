import { Box, Grid, GridItem, Text } from "@chakra-ui/react";


const RectangularCard = ({titulo, altura, item }) => {
  return (
    <Box
      paddingBottom="16px"
      bg="#FAFAFA"
      w="933px"
      h={altura}
      m="20px"
      marginBottom="165px"
      marginStart="37px"
      color="white"
      borderRadius="10.85px"
      boxShadow="dark-lg"
    >
      <p>
        <Text
          color="black"
          fontSize="16px"
          paddingStart="8px"
          paddingTop="16px"
          marginBottom="16px"
        >
         {titulo}
        </Text>
      </p>
      <Grid
        templateColumns="repeat(4,1fr)"
        templateRows="repeat(6, 1fr)"
        gap={0}
      >
        {item}
      </Grid>
    </Box>
  );
};

export default RectangularCard ;
