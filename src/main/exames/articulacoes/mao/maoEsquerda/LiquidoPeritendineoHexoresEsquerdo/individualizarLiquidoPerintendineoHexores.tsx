/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarLiquidoPerintendineoHexores({ numCalculo }) {

  const [fraseLiquidoPerintendineoHexoresEsquerdo, setFraseLiquidoPerintendineoHexoresEsquerdo] = useState<any>([]);

  const subExame = `Líquido peritendineo nos hexores ${numCalculo} Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseLiquidoPerintendineoHexoresEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseLiquidoPerintendineoHexoresEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseLiquidoPerintendineoHexoresEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseLiquidoPerintendineoHexoresEsquerdo]);

  const [multiplosCalculosCheckbox, setmultiplosCalculosCheckbox] = useState(false);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string;
    if (multiplosCalculosCheckbox) {
      string = `Dedo ${numCalculo} com presença de líquido adjacente aos tendões `;
      setFraseLiquidoPerintendineoHexoresEsquerdo((arr) => [...arr, string]);
    }
  }

  const removeMultiplosCalculos = () => {
    fraseLiquidoPerintendineoHexoresEsquerdo.map((e) => {
      if (e.includes(`Dedo ${numCalculo}`)) {
        var index = fraseLiquidoPerintendineoHexoresEsquerdo.indexOf(e);

        if (index > -1) {
          fraseLiquidoPerintendineoHexoresEsquerdo.splice(index, 1);
          setFraseLiquidoPerintendineoHexoresEsquerdo((arr) => [...arr]);
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
