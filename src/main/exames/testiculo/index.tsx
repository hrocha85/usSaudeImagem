import { Box, Grid } from "@chakra-ui/react";

import CistoEpididimarios from "./cistosEpididimarios/cistoEpididimarios";
import CistosTesticulares from "./cistosTesticulares/cistoTesticulares";
import Hematoma from "./hematoma/hematoma";
import Hidrocele from "./hidrocele/hidrocele";
import Testiculos from "./medidas/medidas";
import Microlitiase from "./microlitiase/microlitiase";
import NodulosTesticulares from "./nodulosTesticulares/nodulosTesticulares";

function Testiculo() {
  return (
    <>
      <Box ml="10px" paddingBottom="1%">
        <Testiculos />
        <CistosTesticulares />
        <CistoEpididimarios />
        <NodulosTesticulares />
        <Grid
          templateColumns="repeat(2,1fr)"
          gap={2}
          maxW="69%"
        >
          <Microlitiase />
          <Hematoma />
          {/*<Orquite />*/}
          {/*<Orquiepididimite />*/}
          {/*<Torcao />*/}
          {/*<Virococele />*/}
        </Grid>
        <Hidrocele />
      </Box>
    </>
  );
}

export default Testiculo;
