/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { MaoDireitoNormalContext } from "../../../../../context/MaoDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MaoDireito() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const { MaoDireitoLaudoNormal } = useContext(MaoDireitoNormalContext)
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

  const [disableDedoGatilhoInput, setdisableDedoGatilhoInput] = useState(true);
  const [DedoGatilhoCheckbox, setDedoGatilhoCheckbox] = useState(false);
  const [DedoGatilhoSelect, setDedoGatilhoSelect] = useState("");

  const [TenossinoviteFlexoresCheckbox, setTenossinoviteFlexoresCheckbox] = useState(true);
  const [RizartroseCheckbox, setRizartroseCheckbox] = useState(true);
  const [DupuytrenCheckbox, setDupuytrenCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTenossinoviteFlexores = () => {
    const string = "Mao direito com TenossinoviteFlexores";
    if (TenossinoviteFlexoresCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTenossinoviteFlexoresCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringRizartrose = () => {
    const string = "Mao direito com Rizartrose";
    if (RizartroseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setRizartroseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringDupuytren = () => {
    const string = "Mao direito com Dupuytren";
    if (DupuytrenCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDupuytrenCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes TenossinoviteExtensores - Inicio
  const criaStringTenossinoviteExtensores = (TenossinoviteExtensores) => {
    removeTenossinoviteExtensores();
    if (TenossinoviteExtensores !== "") {
      const string = `Mao direito com TenossinoviteExtensores Supraespinhal ${TenossinoviteExtensores}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeTenossinoviteExtensores = () => {
    laudoPrin.map((e) => {
      if (e.includes("Mao direito com TenossinoviteExtensores Supraespinhal")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringDedoGatilho = (DedoGatilho) => {
    removeDedoGatilho();
    if (DedoGatilho !== "") {
      const string = `Mao direito com DedoGatilho Supraespinhal ${DedoGatilho}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeDedoGatilho = () => {
    laudoPrin.map((e) => {
      if (e.includes("Mao direito com DedoGatilho Supraespinhal")) {
        const index = laudoPrin.indexOf(e);

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
      const string = `Mao direito com Cisto Supraespinhal ${Cisto} com intervalo de ${medida1}x${medida2} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeCisto = () => {
    laudoPrin.map((e) => {
      if (e.includes("Mao direito com Cisto Supraespinhal")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    const index = laudoPrin.indexOf(value);

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
    if (DedoGatilhoCheckbox) {
      setdisableDedoGatilhoInput(false);
    } else {
      removeDedoGatilho();
      setdisableDedoGatilhoInput(true);
    }
  }, [DedoGatilhoCheckbox]);
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
    criaStringDedoGatilho(DedoGatilhoSelect);
  }, [DedoGatilhoSelect]);

  useEffect(() => {
    criaStringCisto(CistoInput, CistoInput2, CistoSelect);
  }, [CistoInput, CistoInput2, CistoSelect]);

  useEffect(() => {
    MaoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [MaoDireitoLaudoNormal])

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
      <TituloNomeExame titulo="Mão" />

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
            w='110px'
            isDisabled={disableTenossinoviteExtensoresInput}
            onChange={(e) => {
              setTenossinoviteExtensoresSelect(e.target.value);
            }}
          >
            <option value="1° dedo">1° dedo</option>
            <option value="2° dedo">2° dedo</option>
            <option value="3° dedo">3° dedo</option>
            <option value="4° dedo">4° dedo</option>
            <option value="5° dedo">5° dedo</option>
          </Select>
        </HStack>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setDedoGatilhoCheckbox(!DedoGatilhoCheckbox)}>
            Dedo em gatilho
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disableDedoGatilhoInput}
            onChange={(e) => {
              setDedoGatilhoSelect(e.target.value);
            }}
          >
            <option value="1° dedo">1° dedo</option>
            <option value="2° dedo">2° dedo</option>
            <option value="3° dedo">3° dedo</option>
            <option value="4° dedo">4° dedo</option>
            <option value="5° dedo">5° dedo</option>
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
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setRizartroseCheckbox(true);
            criaStringRizartrose();
          }}
        >Rizartrose
        </Checkbox>
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setDupuytrenCheckbox(true);
            criaStringDupuytren();
          }}
        >Dutuytren
        </Checkbox>
      </Stack>
    </Box>

  );
}
export default MaoDireito;
