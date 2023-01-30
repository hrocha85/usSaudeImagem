/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarPolias({ numCalculo, desabilita }) {

  const [FrasePoliasDireito, setFrasePoliasDireito] = useState<any>([]);

  const subExame = `Polias ${numCalculo + 1} Direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FrasePoliasDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasePoliasDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasePoliasDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasePoliasDireito]);

  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [A1, setA1] = useState(false);
  const [A2, setA2] = useState(false);
  const [A3, setA3] = useState(false);
  const [A4, setA4] = useState(false);
  const [A5, setA5] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string = `Dedo ${numCalculo + 1} com descontinuidade das polias:`
    if (multiplosDedosCheckbox) {
      if (A1 || A2 || A3 || A4 || A5) {
        if (A1) {
          string = `${string} A1`
        }
        if (A2) {
          string = `${string} A2`
        }
        if (A3) {
          string = `${string} A3`
        }
        if (A4) {
          string = `${string} A4`
        }
        if (A5) {
          string = `${string} A5`
        }
        string = `${string}, com afastamento dos tendões flexores da cortical óssea na manobra de flexão e descontinuidade das polias:`
        setFrasePoliasDireito((arr) => [...arr, string]);
      }
    } else {
      removeMultiplosCalculos();
    }
  };


  const removeMultiplosCalculos = () => {
    FrasePoliasDireito.map((e) => {
      if (e.includes(`Dedo ${numCalculo + 1} com descontinuidade das polias: `)) {
        var index = FrasePoliasDireito.indexOf(e);

        if (index > -1) {
          FrasePoliasDireito.splice(index, 1);
          setFrasePoliasDireito((arr) => [...arr]);
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
  }, [multiplosDedosCheckbox, A1, A2, A3, A4, A5]);


  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox isDisabled={desabilita}
        onChange={() => setmultiplosDedosCheckbox(!multiplosDedosCheckbox)}
      >
        {numCalculo + 1}º dedo
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setA1(!A1)}
      >
        A1
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setA2(!A2)}
      >
        A2
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setA3(!A3)}
      >
        A3
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setA4(!A4)}
      >
        A4
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setA5(!A5)}
      >
        A5
      </Checkbox>

    </Box>
  );
}
