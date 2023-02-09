import { Box, Grid } from "@chakra-ui/react";

import CistoEpididimarios from "./cistosEpididimarios/cistoEpididimarios";
import CistosTesticulares from "./cistosTesticulares/cistoTesticulares";
import Hematoma from "./hematoma/hematoma";
import Hidrocele from "./hidrocele/hidrocele";
import Utero from "./medidas/medidas";
import Microlitiase from "./microlitiase/microlitiase";
import NodulosTesticulares from "./nodulosTesticulares/nodulosTesticulares";
import Orquiepididimite from "./orquiepididimite/orquiepididimite";
import Orquite from "./orquite/orquite";
import Torcao from "./torcao/torcao";
import Virococele from "./varicocele/varicocele";

function Testiculo() {
  return (
    <>
      <Box ml="10px" paddingBottom="1%">
        <Utero />
        <CistosTesticulares />
        <CistoEpididimarios />
        <NodulosTesticulares />

        <Grid
          templateColumns="repeat(2,1fr)"
          templateRows="repeat(2, 1fr)"
          gap={2}
          maxW="95%"
        >
          <Microlitiase />
          <Hidrocele />
          <Hematoma />
          <Orquite />
          <Orquiepididimite />
          <Torcao />
          <Virococele />
        </Grid>
      </Box>
    </>
  );
}

export default Testiculo;
