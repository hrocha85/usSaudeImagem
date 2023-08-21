
import { Box, Checkbox, useMediaQuery } from "@chakra-ui/react";

import CalculoProstata from "./calculoProstata/calculoProstata";
import CalculoVolume from "./calculoVolume/calculoVolume";
import Extra from "./extra/extra";
import Bexiga from "./bexiga/bexiga";
import ImpressaoDiagnostica from "./impressao_diagnostica/impressao_diagnostica";
import Calcificacao from "./Calcificacao/Calcificacao";
import { useState } from "react";
import VesSeminais from "./VesSeminais";
function Prostata() {
  const altura = '100%'
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"
  const [Disable, SetDisable] = useState(false)



  return (
    <Box ml="10px">
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'
        display='flex'
        flexWrap='wrap'
        alignItems='center' gap='5px'>

        <Box w='150px' >
          <Checkbox
            onChange={(e) => { SetDisable(!Disable) }}
          >Próstata normal</Checkbox>
        </Box>
      </Box>
      <CalculoProstata />
      <VesSeminais />
      <Bexiga Disable={Disable} />

      {/*<CalculoVolume />*/}

      {/*<Extra />*/}
      <Calcificacao Disable={Disable} />
      <ImpressaoDiagnostica />
    </Box>
  );
}

export default Prostata;
