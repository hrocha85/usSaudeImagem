import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import Utero from "./utero/utero";

function Transvaginal() {
  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      alignItems="center"
      backgroundImage={BGImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <BoxTitleBackground titulo="Transvaginal" />

      <Exames></Exames>

      <Box ml="10px">
        <Utero />
      </Box>
    </Box>
  );
}

export default Transvaginal;
