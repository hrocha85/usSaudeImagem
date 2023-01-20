/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Center, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../../../context/LuadosContext";

export default function IndividualizarOssos({ numCalculo, desabilita }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [multiplosDedosCheckbox, setmultiplosDedosCheckbox] = useState(false);
  const [FalangeProximal, setFalangeProximal] = useState(false);
  const [FalangeMedia, setFalangeMedia] = useState(false);
  const [FalangeDistal, setFalangeDistal] = useState(false);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [frase, setFrase] = useState<any>([])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    if (multiplosDedosCheckbox) {
      setFrase((arr) => [...arr, `Dedo ${numCalculo} com descontinuidade das Ossos: `]);
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
      if (e.includes(`Dedo ${numCalculo} com descontinuidade das Ossos: `)) {
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

  const criaFraseFalangeProximal = () => {
    if (FalangeProximal) {
      removeMultiplosCalculos()
      setFrase((arr) => [...arr, 'FalangeProximal'])
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('FalangeProximal')
    }
  }
  useEffect(() => {
    criaFraseFalangeProximal()
  }, [FalangeProximal])

  const criaFraseFalangeMedia = () => {
    if (FalangeMedia) {
      setFrase((arr) => [...arr, 'FalangeMedia'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('FalangeMedia')
    }
  }
  useEffect(() => {
    criaFraseFalangeMedia()
  }, [FalangeMedia])

  const criaFraseFalangeDistal = () => {
    if (FalangeDistal) {
      setFrase((arr) => [...arr, 'FalangeDistal'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemString('FalangeDistal')
    }
  }
  useEffect(() => {
    criaFraseFalangeDistal()
  }, [FalangeDistal])

  return (
    <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
      <Checkbox isDisabled={desabilita}
        onChange={() => setmultiplosDedosCheckbox(!multiplosDedosCheckbox)}
      >
        {numCalculo + 1}º dedo
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setFalangeProximal(!FalangeProximal)}
      >
        FalangeProximal
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setFalangeMedia(!FalangeMedia)}
      >
        FalangeMedia
      </Checkbox>
      <Checkbox
        isDisabled={DisableCheckbox}
        onChange={() => setFalangeDistal(!FalangeDistal)}
      >
        FalangeDistal
      </Checkbox>
    </Box>
  );
}
