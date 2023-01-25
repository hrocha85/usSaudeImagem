/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarLiquidoPerintendineoHexores({ numCalculo }) {

  const [fraseLiquidoPerintendineoHexoresDireito, setFraseLiquidoPerintendineoHexoresDireito] = useState<any>([]);

  const subExame = `Líquido peritendineo nos hexores ${numCalculo} Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseLiquidoPerintendineoHexoresDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseLiquidoPerintendineoHexoresDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseLiquidoPerintendineoHexoresDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseLiquidoPerintendineoHexoresDireito]);

  const [multiplosCalculosCheckbox, setmultiplosCalculosCheckbox] = useState(false);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string;
    if (multiplosCalculosCheckbox) {
      string = `Dedo ${numCalculo} com liquido peritendineo nos hexores`;
      setFraseLiquidoPerintendineoHexoresDireito((arr) => [...arr, string]);
    }
  }

  const removeMultiplosCalculos = () => {
    fraseLiquidoPerintendineoHexoresDireito.map((e) => {
      if (e.includes(`Dedo ${numCalculo}`)) {
        var index = fraseLiquidoPerintendineoHexoresDireito.indexOf(e);

        if (index > -1) {
          fraseLiquidoPerintendineoHexoresDireito.splice(index, 1);
          setFraseLiquidoPerintendineoHexoresDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosCheckbox) {
      criaStringMultiplosCalculos();
    } else {
      removeMultiplosCalculos();
    }
  }, [
    multiplosCalculosCheckbox,
  ]);

  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox
        onChange={() => setmultiplosCalculosCheckbox(!multiplosCalculosCheckbox)}
      >
        {numCalculo}º dedo
      </Checkbox>
    </Box>
  );
}
