/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";

export default function IndividualizarPolias({ numCalculo, desabilita }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [A1, setA1] = useState(false);
  const [A2, setA2] = useState(false);
  const [A3, setA3] = useState(false);
  const [A4, setA4] = useState(false);
  const [A5, setA5] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [frase, setFrase] = useState<any>([])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    if (multiplosDedosCheckbox) {
      setFrase((arr) => [...arr, `Dedo ${numCalculo} com descontinuidade das polias: `]);
      setLaudoPrin((arr) => [...arr, frase]);
    } else {
      removeMultiplosCalculos();
    }
  };


  const removeItemString = (value) => {
    var index = frase.indexOf(value);
    if (index > -1) {
      frase.splice(index, 1);
      setFrase((arr) => [...arr]);
      setLaudoPrin((arr) => [...arr, frase]);
    }

  };

  const removeMultiplosCalculos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Dedo ${numCalculo} com descontinuidade das polias: `)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
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
    multiplosDedosCheckbox,
  ]);

  const criaFraseA1 = () => {
    if (A1) {
      removeMultiplosCalculos()
      setFrase((arr) => [...arr, 'A1'])
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('A1')
    }
  }
  useEffect(() => {
    criaFraseA1()
  }, [A1])

  const criaFraseA2 = () => {
    if (A2) {
      setFrase((arr) => [...arr, 'A2'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('A2')
    }
  }
  useEffect(() => {
    criaFraseA2()
  }, [A2])

  const criaFraseA3 = () => {
    if (A3) {
      setFrase((arr) => [...arr, 'A3'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('A3')
    }
  }
  useEffect(() => {
    criaFraseA3()
  }, [A3])

  const criaFraseA4 = () => {
    if (A4) {
      setFrase((arr) => [...arr, 'A4'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('A4')
    }
  }
  useEffect(() => {
    criaFraseA4()
  }, [A4])

  const criaFraseA5 = () => {
    if (A5) {
      setFrase((arr) => [...arr, 'A5'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('A5')
    }
  }
  useEffect(() => {
    criaFraseA5()
  }, [A5])


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
