/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarDerrameArticular from "./individualizarDerrameArticular";

function MaoDerrameArticularDireita() {

  const altura = "100%";
  const largura = "95%";

  const [FraseDerrameArticularDireito, setFraseDerrameArticularDireito] = useState<any>([]);

  const subExame = `Derrame articular Direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(FraseDerrameArticularDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseDerrameArticularDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseDerrameArticularDireito]);

  const [DisablePrimeiroDedo, setDisablePrimeiroDedo] = useState(true);
  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AusenciaDerrame, setAusenciaDerrame] = useState(false);
  const [PrimeiroDedo, setPrimeiroDedo] = useState(false);
  const [disableDerrameArticularLocais, setdisableDerrameArticularLocais] = useState(false);
  const [disableAspectNormal, setdisableAspectNormal] = useState(false);
  const [Proximal, setProximal] = useState(false);
  const [Dedo1, setDedo1] = useState(false);
  const [Dedo2, setDedo2] = useState(false);
  const [Dedo3, setDedo3] = useState(false);
  const [Dedo4, setDedo4] = useState(false);
  const [Dedo5, setDedo5] = useState(false);


  var numberArray = [1, 2, 3, 4];

  const removeItemString = (value) => {
    var index = FraseDerrameArticularDireito.indexOf(value);

    if (index > -1) {
      FraseDerrameArticularDireito.splice(index, 1);
      setFraseDerrameArticularDireito((arr) => [...arr]);
    }
  };

  useEffect(() => {
    !DisableCheckbox ?
      setdisableAspectNormal(true) :
      setdisableAspectNormal(false)
  })

  useEffect(() => {
    var string = "Ausência de derrame articular."
    AusenciaDerrame ? setdisableDerrameArticularLocais(true) : setdisableDerrameArticularLocais(false)
    AusenciaDerrame ? setFraseDerrameArticularDireito((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenciaDerrame])


  const criaStringMultiplosCalculos = () => {
    removeMultiplosCalculos();
    var string = `Dedo 1 com presença de derrame articular: `
    if (PrimeiroDedo) {
      if (Proximal) {
        string = `${string} proximal`
      }
      setFraseDerrameArticularDireito((arr) => [...arr, string]);
    } else {
      removeMultiplosCalculos();
    }
  };

  const removeMultiplosCalculos = () => {
    FraseDerrameArticularDireito.map((e) => {
      if (e.includes(`Dedo 1 com presença de derrame articular: `)) {
        var index = FraseDerrameArticularDireito.indexOf(e);

        if (index > -1) {
          FraseDerrameArticularDireito.splice(index, 1);
          setFraseDerrameArticularDireito((arr) => [...arr]);
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
  }, [PrimeiroDedo, Proximal]);


  useEffect(() => {
    var string = 'Metacarpo do dedo 1'
    Dedo1 ? setFraseDerrameArticularDireito((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo1])

  useEffect(() => {
    var string = 'Metacarpo do dedo 2'
    Dedo2 ? setFraseDerrameArticularDireito((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo2])

  useEffect(() => {
    var string = 'Metacarpo do dedo 3'
    Dedo3 ? setFraseDerrameArticularDireito((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo3])

  useEffect(() => {
    var string = 'Metacarpo do dedo 4'
    Dedo4 ? setFraseDerrameArticularDireito((arr) => [...arr, string]) : removeItemString(string)
  }, [Dedo4])

  useEffect(() => {
    var string = 'Metacarpo do dedo 5'
    Dedo5 ? setFraseDerrameArticularDireito((arr) => [...arr, string]) : removeItemString(string)
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
      <TituloNomeExame titulo="Derrame Articular" />
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          isDisabled={disableAspectNormal}
          onChange={() => setAusenciaDerrame(!AusenciaDerrame)}
        >
          Ausência de derrame articular
        </Checkbox>

        <Checkbox
          isDisabled={disableDerrameArticularLocais}
          onChange={() => setDisableCheckbox(!DisableCheckbox)}
        >
          Derrame articular nos seguintes locais:
        </Checkbox>
      </Box>
      <Stack>
        <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
          <Checkbox
            isDisabled={DisableCheckbox}
            onChange={() => setPrimeiroDedo(!PrimeiroDedo)}
          >
            interfalangeana 1º dedo
          </Checkbox>
          <Checkbox
            isDisabled={DisablePrimeiroDedo}
            onChange={() => setProximal(!Proximal)}
          >
            Proximal
          </Checkbox>
        </Box>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarDerrameArticular
                key={key}
                numCalculo={num}
                desabilita={DisableCheckbox}
              />
            );
          })}
        </>
        <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
          <Text>Metacarpofalangeanas(s)</Text>
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
export default MaoDerrameArticularDireita;
