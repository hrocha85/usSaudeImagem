import { Box } from "@chakra-ui/react";
import Exames from "../../folha_laudos/Laudos";
import Bexiga from "./bexiga/bexiga";
import Calculo from "./calculos/calculos";
import Cisto from "./cistos/cistos";
import Dilatacao from "./dilatacao/dilatacao";
import Nodulos from "./nodulos/nodulos";
import RimDireito from "./rim_direito/rim_direito";
import RimEsquerdo from "./rim_esquerdo/rim_esquerdo";
function RinseViasUrinarias() {
  return (
    <>
      <Exames></Exames>

      <Box ml="10px">
        <RimDireito />
        <RimEsquerdo />
        <Calculo />
        <Cisto />
        <Dilatacao />
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="400px" mb="15px">
            <Nodulos />
          </Box>
          <Box w="370px" mb="15px">
            <Bexiga />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default RinseViasUrinarias;
