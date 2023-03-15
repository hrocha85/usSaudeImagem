import { Box, Grid, Stack } from "@chakra-ui/react";

import CistoEpididimarios from "./cistosEpididimarios/cistoEpididimarios";
import CistosTesticulares from "./cistosTesticulares/cistoTesticulares";
import Hematoma from "./hematoma/hematoma";
import Hidrocele from "./hidrocele/hidrocele";
import Testiculos from "./medidas/medidas";
import Microlitiase from "./microlitiase/microlitiase";
import NodulosTesticulares from "./nodulosTesticulares/nodulosTesticulares";
import Epididimite from "./orquiepididimite/orquiepididimite";

function DopplerTesticulo() {
  return (
    <>
      <Box ml="10px" paddingBottom="1%">
        <Testiculos />
        <CistosTesticulares />
        <CistoEpididimarios />
        <NodulosTesticulares />
        <Grid templateColumns="repeat(2,1fr)" gap={2} maxW="69%">
          <Microlitiase />
          <Hematoma />
          {/*<Orquite />*/}
          {/*<Torcao />*/}
          {/*<Virococele />*/}
        </Grid>
        <Grid templateColumns="repeat(2,1fr)" gap={2} maxW="69%" marginTop='15px'>
          <Hidrocele />
          <Epididimite />
        </Grid>
      </Box>
    </>
  );
}

export default DopplerTesticulo;
