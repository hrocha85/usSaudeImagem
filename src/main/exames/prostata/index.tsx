/* eslint-disable react/jsx-pascal-case */
import { Box } from "@chakra-ui/react";
 
import CalculoProstata from "./calculoProstata/calculoProstata";
import CalculoVolume from "./calculoVolume/calculoVolume";
import Extra from "./extra/extra";
function Prostata() {
  return (
    <>
      
      <Box ml="10px">
        <CalculoProstata></CalculoProstata>

        <CalculoVolume></CalculoVolume>

        <Extra></Extra>
      </Box>
    </>
  );
}

export default Prostata;
