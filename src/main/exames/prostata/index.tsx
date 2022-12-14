/* eslint-disable react/jsx-pascal-case */
import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import CalculoProstata from "./calculoProstata/calculoProstata";
import CalculoVolume from "./calculoVolume/calculoVolume";
import Extra from "./extra/extra";
function Prostata() {
  return (
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="20px"
        fontsize="19px"
        tamanho="180px"
        titulo="Prostata"
      />
      <Exames></Exames>
      <Box ml="10px">
        <CalculoProstata></CalculoProstata>

        <CalculoVolume></CalculoVolume>

        <Extra></Extra>
      </Box>
    </Box_Default_With_Sidebar>
  );
}

export default Prostata;
