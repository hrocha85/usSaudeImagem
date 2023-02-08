import { Box, Flex, Grid } from "@chakra-ui/react";

const LayoutExame = ({ item }) => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(6, 1fr)"
      gap={1}
      padding="20px"
    >
      {item}
    </Grid>
  );
};

export default LayoutExame;
