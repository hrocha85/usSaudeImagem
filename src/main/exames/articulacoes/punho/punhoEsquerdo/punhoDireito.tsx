/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { PunhoEsquerdoNormalContext } from "../../../../../context/PunhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function PunhoEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { PunhoEsquerdoLaudoNormal } = useContext(PunhoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States TenossinoviteExtensores - input,checkbox e select - Inicio
  const [disableTenossinoviteExtensoresInput, setdisableTenossinoviteExtensoresInput] = useState(true);
  const [TenossinoviteExtensoresCheckbox, setTenossinoviteExtensoresCheckbox] = useState(false);
  const [TenossinoviteExtensoresSelect, setTenossinoviteExtensoresSelect] = useState("");
  const [CistoInput, setCistoInput] = useState("");
  const [CistoInput2, setCistoInput2] = useState("");
  const [disableCistoInput, setdisableCistoInput] = useState(true);
  const [CistoCheckbox, setCistoCheckbox] = useState(false);
  const [CistoSelect, setCistoSelect] = useState("");

  const [TenossinoviteFlexoresCheckbox, setTenossinoviteFlexoresCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTenossinoviteFlexores = () => {
    var string = "Punho Esquerdo com TenossinoviteFlexores";
    if (TenossinoviteFlexoresCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTenossinoviteFlexoresCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes TenossinoviteExtensores - Inicio
  const criaStringTenossinoviteExtensores = (TenossinoviteExtensores) => {
    removeTenossinoviteExtensores();
    if (TenossinoviteExtensores !== "") {
      var string = `Punho Esquerdo com TenossinoviteExtensores Supraespinhal ${TenossinoviteExtensores}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeTenossinoviteExtensores = () => {
    laudoPrin.map((e) => {
      if (e.includes("Punho Esquerdo com TenossinoviteExtensores Supraespinhal")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringCisto = (medida1, medida2, Cisto) => {
    removeCisto();
    if (medida1 !== "" && medida2 !== "") {
      var string = `Punho Esquerdo com Cisto Supraespinhal ${Cisto} com intervalo de ${medida1}x${medida2} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeCisto = () => {
    laudoPrin.map((e) => {
      if (e.includes("Punho Esquerdo com Cisto Supraespinhal")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };



  useEffect(() => {
    if (TenossinoviteExtensoresCheckbox) {
      setdisableTenossinoviteExtensoresInput(false);
    } else {
      removeTenossinoviteExtensores();
      setdisableTenossinoviteExtensoresInput(true);
    }
  }, [TenossinoviteExtensoresCheckbox]);
  useEffect(() => {
    if (CistoCheckbox) {
      setdisableCistoInput(false);
    } else {
      removeCisto();
      setdisableCistoInput(true);
      setCistoInput("");
      setCistoInput2("");
    }
  }, [CistoCheckbox]);

  useEffect(() => {
    criaStringTenossinoviteExtensores(TenossinoviteExtensoresSelect);
  }, [TenossinoviteExtensoresSelect]);

  useEffect(() => {
    criaStringCisto(CistoInput, CistoInput2, CistoSelect);
  }, [CistoInput, CistoInput2, CistoSelect]);

  useEffect(() => {
    PunhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [PunhoEsquerdoLaudoNormal])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Punho" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTenossinoviteFlexoresCheckbox(true);
            criaStringTenossinoviteFlexores();
          }}
        >
          Tenossinovite dos Flexores
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setTenossinoviteExtensoresCheckbox(!TenossinoviteExtensoresCheckbox)}>
            Tenossinovite dos extensores
          </Checkbox>
          <Select
            w='150px'
            isDisabled={disableTenossinoviteExtensoresInput}
            onChange={(e) => {
              setTenossinoviteExtensoresSelect(e.target.value);
            }}
          >
            <option value="1° túnel dorsal">1° túnel dorsal</option>
            <option value="2° túnel dorsal">2° túnel dorsal</option>
            <option value="3° túnel dorsal">3° túnel dorsal</option>
            <option value="4° túnel dorsal">4° túnel dorsal</option>
            <option value="5° túnel dorsal">5° túnel dorsal</option>
            <option value="6° túnel dorsal">6° túnel dorsal</option>
          </Select>
        </HStack>

        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setCistoCheckbox(!CistoCheckbox)}>
            Cisto artrossinovial
          </Checkbox>
          <Select
            w='170px'
            isDisabled={disableCistoInput}
            onChange={(e) => {
              setCistoSelect(e.target.value);
            }}
          >
            <option value="entre o 3° e 4° túneis dorsais">entre o 3° e 4° túneis dorsais</option>
            <option value="entre o 1° e 2° túneis dorsais">entre o 1° e 2° túneis dorsais</option>
            <option value="na face flexora">na face flexora</option>
          </Select>
          <Input
            isDisabled={disableCistoInput}
            value={CistoInput}
            w="45px"
            h="30px"
            padding="5px"
            
            textAlign="center"
            onChange={(e) => { setCistoInput(e.target.value) }}
          />

          <Text> x </Text>
          <Input
            isDisabled={disableCistoInput}
            value={CistoInput2}
            w="45px"
            h="30px"
            padding="5px"
            
            textAlign="center"
            onChange={(e) => { setCistoInput2(e.target.value) }}
          />

          <Text>mm</Text>
        </HStack>

      </Stack>
    </Box>

  );
}
export default PunhoEsquerdo;
