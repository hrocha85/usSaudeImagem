/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";

export default function IndividualizarDerrameArticular({ numCalculo, desabilita }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [Proximal, setProximal] = useState(false);
  const [Distal, setDistal] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [frase, setFrase] = useState<any>([])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    if (multiplosDedosCheckbox) {
      setFrase((arr) => [...arr, `Dedo ${numCalculo} com descontinuidade das DerrameArticular: `]);
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
      if (e.includes(`Dedo ${numCalculo} com descontinuidade das DerrameArticular: `)) {
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

  const criaFraseProximal = () => {
    if (Proximal) {
      removeMultiplosCalculos()
      setFrase((arr) => [...arr, 'Proximal'])
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('Proximal')
    }
  }
  useEffect(() => {
    criaFraseProximal()
  }, [Proximal])

  const criaFraseDistal = () => {
    if (Distal) {
      setFrase((arr) => [...arr, 'Distal'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('Distal')
    }
  }
  useEffect(() => {
    criaFraseDistal()
  }, [Distal])

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
