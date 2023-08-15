/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function DedoDireito() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const [disableTudo, setDisableTudo] = useState(false)

  //States TenossinoviteFlexor - input,checkbox e select - Inicio
  const [disableTenossinoviteFlexorInput, setdisableTenossinoviteFlexorInput] = useState(true);
  const [TenossinoviteFlexorCheckbox, setTenossinoviteFlexorCheckbox] = useState(false);
  const [TenossinoviteFlexorSelect, setTenossinoviteFlexorSelect] = useState("");

  const [disableTenossinoviteExtensorInput, setdisableTenossinoviteExtensorInput] = useState(true);
  const [TenossinoviteExtensorCheckbox, setTenossinoviteExtensorCheckbox] = useState(false);
  const [TenossinoviteExtensorSelect, setTenossinoviteExtensorSelect] = useState("");

  const [disableDedoGatilhoInput, setdisableDedoGatilhoInput] = useState(true);
  const [DedoGatilhoCheckbox, setDedoGatilhoCheckbox] = useState(false);
  const [DedoGatilhoSelect, setDedoGatilhoSelect] = useState("");

  const criaStringTenossinoviteFlexor = (TenossinoviteFlexor) => {
    removeTenossinoviteFlexor();
    if (TenossinoviteFlexor !== "") {
      const string = `Dedo direito com TenossinoviteFlexor ${TenossinoviteFlexor}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeTenossinoviteFlexor = () => {
    laudoPrin.map((e) => {
      if (e.includes("Dedo direito com TenossinoviteFlexor")) {
        const index = laudoPrin.indexOf(e);
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringTenossinoviteExtensor = (TenossinoviteExtensor) => {
    removeTenossinoviteExtensor();
    if (TenossinoviteExtensor !== "") {
      const string = `Dedo direito com TenossinoviteExtensor ${TenossinoviteExtensor}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeTenossinoviteExtensor = () => {
    laudoPrin.map((e) => {
      if (e.includes("Dedo direito com TenossinoviteExtensor")) {
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
      const string = `Dedo direito com DedoGatilho ${DedoGatilho}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeDedoGatilho = () => {
    laudoPrin.map((e) => {
      if (e.includes("Dedo direito com DedoGatilho")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (TenossinoviteFlexorCheckbox) {
      setdisableTenossinoviteFlexorInput(false);
    } else {
      removeTenossinoviteFlexor();
      setdisableTenossinoviteFlexorInput(true);
    }
  }, [TenossinoviteFlexorCheckbox]);

  useEffect(() => {
    if (TenossinoviteExtensorCheckbox) {
      setdisableTenossinoviteExtensorInput(false);
    } else {
      removeTenossinoviteExtensor();
      setdisableTenossinoviteExtensorInput(true);
    }
  }, [TenossinoviteExtensorCheckbox]);

  useEffect(() => {
    if (DedoGatilhoCheckbox) {
      setdisableDedoGatilhoInput(false);
    } else {
      removeDedoGatilho();
      setdisableDedoGatilhoInput(true);
    }
  }, [DedoGatilhoCheckbox]);

  useEffect(() => {
    criaStringTenossinoviteFlexor(TenossinoviteFlexorSelect);
  }, [TenossinoviteFlexorSelect]);

  useEffect(() => {
    criaStringTenossinoviteExtensor(TenossinoviteExtensorSelect);
  }, [TenossinoviteExtensorSelect]);

  useEffect(() => {
    criaStringDedoGatilho(DedoGatilhoSelect);
  }, [DedoGatilhoSelect]);



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
      <TituloNomeExame titulo="Dedo" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setTenossinoviteFlexorCheckbox(!TenossinoviteFlexorCheckbox)}>
            Tenossinovite dos Flexor
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disableTenossinoviteFlexorInput}
            onChange={(e) => {
              setTenossinoviteFlexorSelect(e.target.value);
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
            onChange={() => setTenossinoviteExtensorCheckbox(!TenossinoviteExtensorCheckbox)}>
            Tenossinovite dos Extensor
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disableTenossinoviteExtensorInput}
            onChange={(e) => {
              setTenossinoviteExtensorSelect(e.target.value);
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
      </Stack>
    </Box>

  );
}
export default DedoDireito;
