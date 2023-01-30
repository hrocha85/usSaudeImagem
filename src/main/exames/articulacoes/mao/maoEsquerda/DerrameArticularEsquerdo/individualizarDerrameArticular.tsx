/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarDerrameArticular({ numCalculo, desabilita }) {

  const [FraseDerrameArticularEsquerdo, setFraseDerrameArticularEsquerdo] = useState<any>([]);

  const subExame = `${numCalculo}: Derrame Articular`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FraseDerrameArticularEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseDerrameArticularEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseDerrameArticularEsquerdo]);


  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [Proximal, setProximal] = useState(false);
  const [Distal, setDistal] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string = `Dedo ${numCalculo} com descontinuidade das DerrameArticular: `
    if (multiplosDedosCheckbox) {
      if (Proximal) {
        string = `${string} Proximal`
      }
      if (Distal) {
        string = `${string} Distal`
      }
      setFraseDerrameArticularEsquerdo((arr) => [...arr, string]);
    } else {
      removeMultiplosCalculos();
    }
  };



  const removeMultiplosCalculos = () => {
    FraseDerrameArticularEsquerdo.map((e) => {
      if (e.includes(`Dedo ${numCalculo} com descontinuidade das DerrameArticular: `)) {
        var index = FraseDerrameArticularEsquerdo.indexOf(e);

        if (index > -1) {
          FraseDerrameArticularEsquerdo.splice(index, 1);
          setFraseDerrameArticularEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosDedosCheckbox) {
      setDisableCheckbox(false)
      criaStringMultiplosCalculos();
    } else {
      setDisableCheckbox(true)
      removeMultiplosCalculos();
    }
  }, [
    multiplosDedosCheckbox, Distal, Proximal
  ]);

  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox isDisabled={desabilita}
        onChange={() => setmultiplosDedosCheckbox(!multiplosDedosCheckbox)}
      >
        interfalangeana(s) do {numCalculo + 1}º dedo
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setProximal(!Proximal)}
      >
        Proximal
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setDistal(!Distal)}
      >
        Distal
      </Checkbox>
    </Box>
  );
}
