/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarOssos from "./individualizarOssos"

function OssosEsquerda() {
  const altura = "100%";
  const largura = "95%";

  const [OssosMaoEsquerda, setOssosMaoEsquerda] = useState<any>([]);

  const subExame = `Ossos mão Esquerda`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(OssosMaoEsquerda).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        OssosMaoEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        OssosMaoEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [OssosMaoEsquerda]);

  const [DisablePrimeiroDedo, setDisablePrimeiroDedo] = useState(true);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AspectoNormal, setAspectoNormal] = useState(false);
  const [PrimeiroDedo, setPrimeiroDedo] = useState(false);
  const [disableDescontinuidade, setdisableDescontinuidade] = useState(false);
  const [disableApectNormal, setdisableApectNormal] = useState(false);

  const [FalangeProximal, setFalangeProximal] = useState(false);
  const [FalangeDistal, setFalangeDistal] = useState(false);
  const [Dedo1, setDedo1] = useState(false);
  const [Dedo2, setDedo2] = useState(false);
  const [Dedo3, setDedo3] = useState(false);
  const [Dedo4, setDedo4] = useState(false);
  const [Dedo5, setDedo5] = useState(false);

  var numberArray = [1, 2, 3, 4];

  const removeItemString = (value) => {
    var index = OssosMaoEsquerda.indexOf(value);

    if (index > -1) {
      OssosMaoEsquerda.splice(index, 1);
      setOssosMaoEsquerda((arr) => [...arr]);
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
    AspectoNormal ? setOssosMaoEsquerda((arr) => [...arr, string]) : removeItemString(string)

    //criaStringAspectNormal()
  }, [AspectoNormal])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string = `Dedo 1 com descontinuidade das Ossos: `
    if (PrimeiroDedo) {
      if (FalangeProximal) {
        string = `${string} falange Proximal`
      }
      if (FalangeDistal) {
        string = `${string} falange Distal`
      }
      setOssosMaoEsquerda((arr) => [...arr, string]);
    } else {
      removeMultiplosCalculos();
    }
  };


  const removeMultiplosCalculos = () => {
    OssosMaoEsquerda.map((e) => {
      if (e.includes(`Dedo 1 com descontinuidade das Ossos: `)) {
        var index = OssosMaoEsquerda.indexOf(e);

        if (index > -1) {
          OssosMaoEsquerda.splice(index, 1);
          setOssosMaoEsquerda((arr) => [...arr]);
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
    FalangeProximal,
    FalangeDistal
  ]);


  useEffect(() => {
    var string = 'Metacarpo do dedo 1'
    Dedo1 ? setOssosMaoEsquerda((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo1])

  useEffect(() => {
    var string = 'Metacarpo do dedo 2'
    Dedo2 ? setOssosMaoEsquerda((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo2])

  useEffect(() => {
    var string = 'Metacarpo do dedo 3'
    Dedo3 ? setOssosMaoEsquerda((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo3])

  useEffect(() => {
    var string = 'Metacarpo do dedo 4'
    Dedo4 ? setOssosMaoEsquerda((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo4])

  useEffect(() => {
    var string = 'Metacarpo do dedo 5'
    Dedo5 ? setOssosMaoEsquerda((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo5])

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
            }}
          >
            I
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              setDedo2(!Dedo2)
            }}
          >
            II
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              setDedo3(!Dedo3)
            }}
          >
            III
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
              setDedo4(!Dedo4)
            }}
          >
            IV
          </Checkbox>
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => {
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
export default OssosEsquerda;
