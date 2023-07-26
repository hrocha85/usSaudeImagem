import { Flex, Grid } from "@chakra-ui/react";

const LayoutExame = ({ item }) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
      templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={0.5}
    >
      {item}
    </Grid>
  );
};

export default LayoutExame;
