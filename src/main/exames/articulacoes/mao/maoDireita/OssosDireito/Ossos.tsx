
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarOssos from "./individualizarOssos";

function OssosDireita({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [OssosMaoDireita, setOssosMaoDireita] = useState<any>([]);

  const subExame = `Ossos mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(OssosMaoDireita).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        OssosMaoDireita
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        OssosMaoDireita
      ).Format_Laudo_Create_Storage();
    }
  }, [OssosMaoDireita]);

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

  const numberArray = [1, 2, 3, 4];

  const removeItemString = (value) => {
    const index = OssosMaoDireita.indexOf(value);

    if (index > -1) {
      OssosMaoDireita.splice(index, 1);
      setOssosMaoDireita((arr) => [...arr]);
    }
  };

  useEffect(() => {
    !DisableCheckbox ?
      setdisableApectNormal(true) :
      setdisableApectNormal(false)
  })

  useEffect(() => {
    const string = "Superfícies ósseas regulares."
    AspectoNormal ? setdisableDescontinuidade(true) : setdisableDescontinuidade(false)
    AspectoNormal ? setOssosMaoDireita((arr) => [...arr, string]) : removeItemString(string)

    //criaStringAspectNormal()
  }, [AspectoNormal])


  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    const string = "Superfícies ósseas regulares."
    Normal ? setAspectoNormal(true) : setAspectoNormal(false)
  }, [Normal])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    let string = `Dedo I com osteófitos marginais na falange`
    if (PrimeiroDedo) {
      if (FalangeProximal && !FalangeDistal) {
        string = `${string} proximal.`
      }
      if (FalangeDistal && !FalangeProximal) {
        string = `${string} distal.`
      } else if (FalangeProximal && FalangeDistal) {
        string = `${string} proximal e distal.`
      }
      setOssosMaoDireita((arr) => [...arr, string]);
    } else {
      removeMultiplosCalculos();
    }
  };


  const removeMultiplosCalculos = () => {
    OssosMaoDireita.map((e) => {
      if (e.includes(`Dedo I com osteófitos marginais na falange`)) {
        const index = OssosMaoDireita.indexOf(e);

        if (index > -1) {
          OssosMaoDireita.splice(index, 1);
          setOssosMaoDireita((arr) => [...arr]);
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


  const criaStringMetacarpo = () => {
    removeMetacarpo();
    let string = `Osteófitos marginais nas epífises distais:`
    if (!DisableCheckbox) {
      if (Dedo1 || Dedo2 || Dedo3 || Dedo4 || Dedo5) {
        if (Dedo1) {
          string = `${string} I `
        }
        if (Dedo2) {
          string = `${string} II `
        }
        if (Dedo3) {
          string = `${string} III `
        }
        if (Dedo4) {
          string = `${string} IV `
        }
        if (Dedo5) {
          string = `${string} V `
        }
        string = `${string} metacarpos.`
        setOssosMaoDireita((arr) => [...arr, string]);
      }
    } else {
      removeMetacarpo()
    }
  };

  useEffect(() => {
    criaStringMetacarpo()
  }, [DisableCheckbox, Dedo1, Dedo2, Dedo3, Dedo4, Dedo5])

  const removeMetacarpo = () => {
    OssosMaoDireita.map((e) => {
      if (e.includes(`Osteófitos marginais nas epífises distais:`)) {
        const index = OssosMaoDireita.indexOf(e);

        if (index > -1) {
          OssosMaoDireita.splice(index, 1);
          setOssosMaoDireita((arr) => [...arr]);
        }
      }
    });
  };

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
      <TituloNomeExame titulo="Ossos" />
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          isChecked={Normal}
          isDisabled={disableApectNormal}
          onChange={() => {
            setNormal(!Normal)
            setAspectoNormal(!AspectoNormal)
          }}
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
export default OssosDireita;
