import { Flex, Grid } from "@chakra-ui/react";

const LayoutExame = ({ item }) => {
  return (
    <Grid
    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
    templateRows={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
      gap={1}
    >
      {item}
    </Grid>
  );
};

export default LayoutExame;
