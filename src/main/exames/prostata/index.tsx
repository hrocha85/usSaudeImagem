/* eslint-disable react/jsx-pascal-case */
import { Box } from "@chakra-ui/react";
import Exames from "../../folha_laudos/Laudos";
import CalculoProstata from "./calculoProstata/calculoProstata";
import CalculoVolume from "./calculoVolume/calculoVolume";
import Extra from "./extra/extra";
function Prostata() {
  return (
    <>
      <Exames></Exames>
      <Box ml="10px">
        <CalculoProstata></CalculoProstata>

        <CalculoVolume></CalculoVolume>

        <Extra></Extra>
      </Box>
    </>
  );
}

export default Prostata;
