import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const RectangularCard = ({ titulo, altura, item }) => {
  return (
    <Flex w="100%" h="100%">
      <Box

        bg="#FAFAFA"
        w="100%"
        h="100%"
        m="20px 20px 0px 20px "
        color="white"
        borderRadius="10.85px"
        boxShadow="dark-lg"
      >
        <Text
          color="black"
          fontSize="20px"
          paddingStart="20px"
          paddingTop="16px"
          marginBottom="16px"
          fontWeight="semibold"
        >
          {titulo}
        </Text>

        <Grid
          templateColumns="repeat(4,1fr)"
          templateRows="repeat(6, 1fr)"
          gap={1}
        >
          {item}
        </Grid>
      </Box>
    </Flex>
  );
};

export default RectangularCard;
