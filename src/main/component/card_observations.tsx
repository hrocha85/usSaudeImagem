import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const RectangularCard = ({ titulo, altura, item }) => {
  return (
    <Flex w="100%" h="auto">
      <Box
        paddingBottom="16px"
        bg="#FAFAFA"
        w="100%"
        h="100%"
        m="20px"
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
          gap={1}
        >
          {item}
        </Grid>
      </Box>
    </Flex>
  );
};

export default RectangularCard;
