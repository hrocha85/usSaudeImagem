/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarLiquidoPerintendineoHexores({ numCalculo, Disable }) {

  const [fraseLiquidoPerintendineoHexoresDireito, setFraseLiquidoPerintendineoHexoresDireito] = useState<any>([]);
  const [ConclusaoLiquidoPerintendineoHexoresDireito, setConclusaoLiquidoPerintendineoHexoresDireito] = useState<any>([]);

  const subExame = `Líquido peritendineo nos hexores ${numCalculo} Direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseLiquidoPerintendineoHexoresDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseLiquidoPerintendineoHexoresDireito,
        ConclusaoLiquidoPerintendineoHexoresDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseLiquidoPerintendineoHexoresDireito,
        ConclusaoLiquidoPerintendineoHexoresDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseLiquidoPerintendineoHexoresDireito]);

  const [multiplosCalculosCheckbox, setmultiplosCalculosCheckbox] = useState(false);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    removeStringConclusao();
    var string;
    const conclusao = `Líquido peritendíneo junto aos flexores do ${numCalculo} dedo.`;
    if (multiplosCalculosCheckbox) {
      string = `Dedo ${numCalculo} com presença de líquido adjacente aos tendões `;
      setFraseLiquidoPerintendineoHexoresDireito((arr) => [...arr, string]);
      setConclusaoLiquidoPerintendineoHexoresDireito((arr) => [...arr, conclusao]);
    }
  }

  const removeStringConclusao = () => {
    ConclusaoLiquidoPerintendineoHexoresDireito.map((e) => {
      if (e.includes(`${numCalculo}`)) {
        var index = ConclusaoLiquidoPerintendineoHexoresDireito.indexOf(e);
        if (index > -1) {
          ConclusaoLiquidoPerintendineoHexoresDireito.splice(index, 1);
          setConclusaoLiquidoPerintendineoHexoresDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(`${numCalculo}`)
        }
      }
    });
  };

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
