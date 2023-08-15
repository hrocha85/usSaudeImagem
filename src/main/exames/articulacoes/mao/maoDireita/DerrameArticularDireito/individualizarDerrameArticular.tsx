
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarDerrameArticular({ numCalculo, desabilita }) {

  const [FraseDerrameArticularDireito, setFraseDerrameArticularDireito] = useState<any>([]);
  const [ConclusaoDerrameArticularDireito, setConclusaoDerrameArticularDireito] = useState<any>([]);

  const subExame = `${numCalculo + 1}: Derrame Articular`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FraseDerrameArticularDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseDerrameArticularDireito,
        ConclusaoDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseDerrameArticularDireito,
        ConclusaoDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseDerrameArticularDireito]);


  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [Proximal, setProximal] = useState(false);
  const [Distal, setDistal] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);

  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    const conclusao = 'Derrame articular.'
    let string = `Dedo ${numCalculo + 1} com presença de derrame articular: `
    if (multiplosDedosCheckbox) {
      if (Proximal) {
        string = `${string} Proximal`
      }
      if (Distal) {
        string = `${string} Distal`
      }
      setFraseDerrameArticularDireito((arr) => [...arr, string]);
      setConclusaoDerrameArticularDireito((arr) => [...arr, conclusao]);
    } else {
      removeMultiplosCalculos();
    }
  };



  const removeMultiplosCalculos = () => {
    FraseDerrameArticularDireito.map((e) => {
      if (e.includes(`Dedo ${numCalculo + 1} com presença de derrame articular: `)) {
        const index = FraseDerrameArticularDireito.indexOf(e);

        if (index > -1) {
          FraseDerrameArticularDireito.splice(index, 1);
          setFraseDerrameArticularDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoDerrameArticularDireito.map((e) => {
      if (e.includes(`Derrame articular.`)) {
        const index = ConclusaoDerrameArticularDireito.indexOf(e);

        if (index > -1) {
          ConclusaoDerrameArticularDireito.splice(index, 1);
          setConclusaoDerrameArticularDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Derrame articular.')
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
