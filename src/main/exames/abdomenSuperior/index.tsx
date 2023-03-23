import { Box, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import Baco from "./baco/baco";
import Figado from "./figado/figado";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Pancreas from "./pancreas/pancreas";
import VesiculaBiliar from "./vesicula_biliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";

function AbdomemSuperior() {
  const altura = '100%'
  const largura = '260px'

  const [Normal, setNormal] = useState(false)
  return (
    <>


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
          mb='5px'>
          <Box w='250px' >
            <Checkbox
              id="tudoNormal"
              onChange={(e) => setNormal(!Normal)}
            >Abdomen Superior Normal</Checkbox>
          </Box>
        </Box >

        <Figado></Figado>

        <Baco></Baco>

        <ViasBiliares></ViasBiliares>

        <Pancreas></Pancreas>

        <LiquidoLivre></LiquidoLivre>

        <VesiculaBiliar></VesiculaBiliar>
      </Box>
    </>
  );
}

export default AbdomemSuperior;
