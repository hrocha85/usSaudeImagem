/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarRoturaFlexores({ numCalculo }) {

  const [TenossinoviteExtensoresDireito, setTenossinoviteExtensoresDireito] = useState<any>([]);

  const subExame = `Rotura Extensores ${numCalculo} Direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(TenossinoviteExtensoresDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        TenossinoviteExtensoresDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        TenossinoviteExtensoresDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [TenossinoviteExtensoresDireito]);

  const [multiplosCalculosCheckbox, setmultiplosCalculosCheckbox] = useState(false);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(false);
  const [EspassamentoTendineoCheckbox, setEspassamentoTendineoCheckbox] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string;
    if (EspessamentoSinovialCheckbox && EspassamentoTendineoCheckbox) {
      string = `Dedo ${numCalculo} com espessamento sinovial e tendineo`;
      setTenossinoviteExtensoresDireito((arr) => [...arr, string]);
    } else if (EspessamentoSinovialCheckbox) {
      string = `Dedo ${numCalculo} com espessamento sinovial`;
      setTenossinoviteExtensoresDireito((arr) => [...arr, string]);

    }
  };

  const removeMultiplosCalculos = () => {
    TenossinoviteExtensoresDireito.map((e) => {
      if (e.includes(`Dedo ${numCalculo}`)) {
        var index = TenossinoviteExtensoresDireito.indexOf(e);

        if (index > -1) {
          TenossinoviteExtensoresDireito.splice(index, 1);
          setTenossinoviteExtensoresDireito((arr) => [...arr]);
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
