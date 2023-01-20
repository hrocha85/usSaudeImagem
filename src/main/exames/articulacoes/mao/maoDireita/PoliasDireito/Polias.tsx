/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarPolias from "./individualizarPolias"

function Polias() {

  const altura = "100%";
  const largura = "95%";

  const [DisablePrimeiroDedo, setDisablePrimeiroDedo] = useState(true);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AspectoNormal, setAspectoNormal] = useState(false);
  const [PrimeiroDedo, setPrimeiroDedo] = useState(false);
  const [disableDescontinuidade, setdisableDescontinuidade] = useState(false);
  const [disableApectNormal, setdisableApectNormal] = useState(false);
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const [A1, setA1] = useState(false);
  const [A2, setA2] = useState(false);
  const [AV, setAV] = useState(false);
  const [AO, setAO] = useState(false);
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
      setFrase((arr) => [...arr, `Dedo 1 com descontinuidade das polias: `]);
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
      if (e.includes(`Dedo 1 com descontinuidade das polias: `)) {
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

  const criaFraseA1 = () => {
    if (A1) {
      removeMultiplosCalculos()
      setFrase((arr) => [...arr, 'A1'])
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemStringFrase('A1')
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
      removeItemStringFrase('A2')
    }
  }
  useEffect(() => {
    criaFraseA2()
  }, [A2])

  const criaFraseAV = () => {
    if (AV) {
      setFrase((arr) => [...arr, 'AV'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemStringFrase('AV')
    }
  }
  useEffect(() => {
    criaFraseAV()
  }, [AV])

  const criaFraseAO = () => {
    if (AO) {
      setFrase((arr) => [...arr, 'AO'])
      removeMultiplosCalculos()
      setLaudoPrin((arr) => [...arr, frase])
    } else {
      removeItemStringFrase('AO')
    }
  }
  useEffect(() => {
    criaFraseAO()
  }, [AO])


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
      <TituloNomeExame titulo="Polias TESTAR" />
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
          Descontinuidade das seguintes polias
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
            onChange={() => setA1(!A1)}
          >
            A1
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setA2(!A2)}
          >
            A2
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setAV(!AV)}
          >
            AV
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setAO(!AO)}
          >
            AO
          </Checkbox>
        </Box>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarPolias
                key={key}
                numCalculo={num}
                desabilita={DisableCheckbox}
              />
            );
          })}
        </>
      </Stack>
    </Box>
  );
}
export default Polias;
