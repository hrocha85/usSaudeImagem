/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarTenossinoviteFlexores({ numCalculo, Disable }) {

  const [fraseTenossinoviteFlexoresDireito, setFraseTenossinoviteFlexoresDireito] = useState<any>([]);

  const subExame = `Tenossinovite dos flexores ${numCalculo} mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseTenossinoviteFlexoresDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseTenossinoviteFlexoresDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseTenossinoviteFlexoresDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseTenossinoviteFlexoresDireito]);

  const [multiplosCalculosCheckbox, setmultiplosCalculosCheckbox] = useState(false);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(false);
  const [EspassamentoTendineoCheckbox, setEspassamentoTendineoCheckbox] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string;
    if (EspessamentoSinovialCheckbox && EspassamentoTendineoCheckbox) {
      string = `Dedo ${numCalculo} com espessamento dos tendões e da bainha sinovial.`;
      setFraseTenossinoviteFlexoresDireito((arr) => [...arr, string]);
    } else if (EspessamentoSinovialCheckbox) {
      string = `Dedo ${numCalculo} com espessamento da bainha sinovial.`;
      setFraseTenossinoviteFlexoresDireito((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculos = () => {
    fraseTenossinoviteFlexoresDireito.map((e) => {
      if (e.includes(`Dedo ${numCalculo}`)) {
        var index = fraseTenossinoviteFlexoresDireito.indexOf(e);

        if (index > -1) {
          fraseTenossinoviteFlexoresDireito.splice(index, 1);
          setFraseTenossinoviteFlexoresDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosCheckbox) {
      setDisableCheckbox(false)
      criaStringMultiplosCalculos();
    } else {
      setDisableCheckbox(true)
      removeMultiplosCalculos();
    }
  }, [
    multiplosCalculosCheckbox,
    EspessamentoSinovialCheckbox,
    EspassamentoTendineoCheckbox
  ]);

  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox
        isDisabled={Disable}
        onChange={() => setmultiplosCalculosCheckbox(!multiplosCalculosCheckbox)}
      >
        {numCalculo}º dedo
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspessamentoSinovialCheckbox(!EspessamentoSinovialCheckbox)}
      >
        Espessamento sinovial
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspassamentoTendineoCheckbox(!EspassamentoTendineoCheckbox)}
      >
        Espessamento sinovial e tendíneo
      </Checkbox>

    </Box>
  );
}
