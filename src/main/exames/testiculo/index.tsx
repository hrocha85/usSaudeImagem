import { Box, Grid } from "@chakra-ui/react";

import CistoEpididimarios from "./cistosEpididimarios/cistoEpididimarios";
import CistosTesticulares from "./cistosTesticulares/cistoTesticulares";
import Hematoma from "./hematoma/hematoma";
import Hidrocele from "./hidrocele/hidrocele";
import Testiculos from "./medidas/medidas";
import Microlitiase from "./microlitiase/microlitiase";
import NodulosTesticulares from "./nodulosTesticulares/nodulosTesticulares";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";
import Doppler from "./Doppler/Doppler";

function Testiculo() {

  const stringPadrao2 =
    "Exame realizado em modo bidimensional, com equipamento dinâmico linear multifrequêncial. Foram feitas varreduras nos sentidos transversal, longitudinal e oblíquos.";

  const [frasesMedidas, setFrasesMedidas] = useState<any>([stringPadrao2]);

  // useEffect(()=>{
  // setFrasesMedidas()
  // },[])
  const subExame = "testículos";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(frasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidas,
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidas,
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidas]);
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
        <Doppler />
      </Box>
    </>
  );
}

export default Testiculo;
