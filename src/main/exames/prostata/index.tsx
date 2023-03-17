/* eslint-disable react/jsx-pascal-case */
import { Box } from "@chakra-ui/react";

import CalculoProstata from "./calculoProstata/calculoProstata";
import CalculoVolume from "./calculoVolume/calculoVolume";
import Extra from "./extra/extra";
import Bexiga from "./bexiga/bexiga";
import ImpressaoDiagnostica from "./impressao_diagnostica/impressao_diagnostica";
function Prostata() {
  return (
    <Box ml="10px">
      <CalculoProstata />
      <Bexiga />

      {/*<CalculoVolume />*/}

      {/*<Extra />*/}
      <ImpressaoDiagnostica />
    </Box>
  );
}

export default Prostata;
