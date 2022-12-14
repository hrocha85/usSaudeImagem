import { Box, Flex, Grid } from "@chakra-ui/react";

const LayoutExame = ({ item }) => {
  return (
    <Flex w="100%">
      <Box h="100%">
        <Grid
          w="100%"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(6, 1fr)"
          gap={1}
        >
          {item}
        </Grid>
      </Box>
    </Flex>
  );
};

export default LayoutExame;
