/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";

export default function IndividualizarPolias({ numCalculo, desabilita }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [multiplosCalculosCheckbox, setmultiplosCalculosCheckbox] = useState(false);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(false);
  const [EspassamentoTendineoCheckbox, setEspassamentoTendineoCheckbox] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string;
    if (EspessamentoSinovialCheckbox) {
      string = `Dedo ${numCalculo} com espessamento sinovial`;
      setLaudoPrin((arr) => [...arr, string]);
    } else if (EspessamentoSinovialCheckbox && EspassamentoTendineoCheckbox) {
      string = `Dedo ${numCalculo} com espessamento sinovial e tendineo`;
      setLaudoPrin((arr) => [...arr, string]);

    }
    console.log(desabilita)
  };

  const removeMultiplosCalculos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Dedo ${numCalculo}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
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
      <Checkbox isDisabled={desabilita}
        onChange={() => setmultiplosCalculosCheckbox(!multiplosCalculosCheckbox)}
      >
        {numCalculo + 1}º dedo
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspessamentoSinovialCheckbox(!EspessamentoSinovialCheckbox)}
      >
        A1
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspassamentoTendineoCheckbox(!EspassamentoTendineoCheckbox)}
      >
        A2
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspassamentoTendineoCheckbox(!EspassamentoTendineoCheckbox)}
      >
        A3
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspassamentoTendineoCheckbox(!EspassamentoTendineoCheckbox)}
      >
        A4
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setEspassamentoTendineoCheckbox(!EspassamentoTendineoCheckbox)}
      >
        A5
      </Checkbox>

    </Box>
  );
}
