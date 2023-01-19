/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarOssos from "./individualizarOssos"

function OssosDireita() {

  const altura = "100%";
  const largura = "95%";

  const [DisablePrimeiroDedo, setDisablePrimeiroDedo] = useState(true);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AspectoNormal, setAspectoNormal] = useState(false);
  const [PrimeiroDedo, setPrimeiroDedo] = useState(false);
  const [disableDescontinuidade, setdisableDescontinuidade] = useState(false);
  const [disableApectNormal, setdisableApectNormal] = useState(false);
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const [FalangeProximal, setFalangeProximal] = useState(false);
  const [FalangeDistal, setFalangeDistal] = useState(false);
  const [Dedo1, setDedo1] = useState(false);
  const [Dedo2, setDedo2] = useState(false);
  const [Dedo3, setDedo3] = useState(false);
  const [Dedo4, setDedo4] = useState(false);
  const [Dedo5, setDedo5] = useState(false);
  const [frase, setFrase] = useState<any>([])

  var numberArray = [1, 2, 3, 4];

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    !DisableCheckbox ?
      setdisableApectNormal(true) :
      setdisableApectNormal(false)
  })

  useEffect(() => {
    var string = "Aspecto normal"
    AspectoNormal ? setdisableDescontinuidade(true) : setdisableDescontinuidade(false)
    AspectoNormal ? setLaudoPrin((arr) => [...arr, string]) : removeItemString(string)

    //criaStringAspectNormal()
  }, [AspectoNormal])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    if (PrimeiroDedo) {
      setFrase((arr) => [...arr, `Dedo 1 com descontinuidade das Ossos: `]);
      setLaudoPrin((arr) => [...arr, frase]);
    } else {
      removeMultiplosCalculos();
    }
  };

  const removeItemStringFrase = (value) => {
    var index = frase.indexOf(value);
    if (index > -1) {
      frase.splice(index, 1);
      setFrase((arr) => [...arr]);
      setLaudoPrin((arr) => [...arr, frase]);
    }

  };

  const removeMultiplosCalculos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Dedo 1 com descontinuidade das Ossos: `)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PrimeiroDedo) {
      setDisablePrimeiroDedo(false)
      criaStringMultiplosCalculos();
    } else {
      setDisablePrimeiroDedo(true)
      removeMultiplosCalculos();
    }
  }, [
    PrimeiroDedo,
  ]);

  const criaFraseFalangeProximal = () => {
    if (FalangeProximal) {
      removeMultiplosCalculos()
      setFrase((arr) => [...arr, 'FalangeProximal'])
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemStringFrase('FalangeProximal')
    }
  }
  useEffect(() => {
    criaFraseFalangeProximal()
  }, [FalangeProximal])

  const criaFraseFalangeDistal = () => {
    if (FalangeDistal) {
      setFrase((arr) => [...arr, 'FalangeDistal'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemStringFrase('FalangeDistal')
    }
  }
  useEffect(() => {
    criaFraseFalangeDistal()
  }, [FalangeDistal])

  const criaStringMetacarpoDedo1 = () => {
    var string = 'Metacarpo do dedo 1'
    if (Dedo1) {
      setLaudoPrin((arr) => [...arr, string])
    } else {
      removeItemString(string)
    }
  }

  const criaStringMetacarpoDedo2 = () => {
    var string = 'Metacarpo do dedo 2'
    if (Dedo2) {
      setLaudoPrin((arr) => [...arr, string])
    } else {
      removeItemString(string)
    }
  }
  const criaStringMetacarpoDedo3 = () => {
    var string = 'Metacarpo do dedo 3'
    if (Dedo3) {
      setLaudoPrin((arr) => [...arr, string])
    } else {
      removeItemString(string)
    }
  }
  const criaStringMetacarpoDedo4 = () => {
    var string = 'Metacarpo do dedo 4'
    if (Dedo4) {
      setLaudoPrin((arr) => [...arr, string])
    } else {
      removeItemString(string)
    }
  }
  const criaStringMetacarpoDedo5 = () => {
    var string = 'Metacarpo do dedo 5'
    if (Dedo5) {
      setLaudoPrin((arr) => [...arr, string])
    } else {
      removeItemString(string)
    }
  }

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Ossos TESTAR" />
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          isDisabled={disableApectNormal}
          onChange={() => setAspectoNormal(!AspectoNormal)}
        >
          Aspecto normal
        </Checkbox>

        <Checkbox
          isDisabled={disableDescontinuidade}
          onChange={() => setDisableCheckbox(!DisableCheckbox)}
        >
          Descontinuidade das seguintes Ossos
        </Checkbox>
      </Box>
      <Stack>
        <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => setPrimeiroDedo(!PrimeiroDedo)}
          >
            1º dedo
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setFalangeProximal(!FalangeProximal)}
          >
            Falange Proximal
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setFalangeDistal(!FalangeDistal)}
          >
            Falange Distal
          </Checkbox>
        </Box>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarOssos
                key={key}
                numCalculo={num}
                desabilita={DisableCheckbox}
              />
            );
          })}
        </>
        <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
          <Text>Metacarpo (epifise distal):</Text>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              setDedo1(!Dedo1)
              criaStringMetacarpoDedo1()
            }}
          >
            I
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              criaStringMetacarpoDedo2()
              setDedo2(!Dedo2)
            }}
          >
            II
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              criaStringMetacarpoDedo3()
              setDedo3(!Dedo3)
            }}
          >
            III
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              criaStringMetacarpoDedo4()
              setDedo4(!Dedo4)
            }}
          >
            IV
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              criaStringMetacarpoDedo5()
              setDedo5(!Dedo5)
            }}
          >
            V
          </Checkbox>
        </Box>
      </Stack >
    </Box >
  );
}
export default OssosDireita;
