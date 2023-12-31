/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MeniscoMedialEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const { JoelhoEsquerdoLaudoNormal } = useContext(JoelhoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States Protrusao - input,checkbox e select - Inicio
  const [disableProtrusaoInput, setdisableProtrusaoInput] = useState(true);
  const [ProtrusaoCheckbox, setProtrusaoCheckbox] = useState(false);
  const [ProtrusaoSelect, setProtrusaoSelect] = useState("");
  const [disableRoturaInput, setdisableRoturaInput] = useState(true);
  const [RoturaCheckbox, setRoturaCheckbox] = useState(false);
  const [RoturaSelect, setRoturaSelect] = useState("");
  const [CistoInput, setCistoInput] = useState("");
  const [CistoInput2, setCistoInput2] = useState("");
  const [disableCistoInput, setdisableCistoInput] = useState(true);
  const [CistoCheckbox, setCistoCheckbox] = useState(false);

  //Funcoes Protrusao - Inicio
  const criaStringProtrusao = (Protrusao) => {
    removeProtrusao();
    if (Protrusao !== "") {
      const string = `Menisco medial Esquerdo com Protrusao  ${Protrusao}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeProtrusao = () => {
    laudoPrin.map((e) => {
      if (e.includes("Menisco medial Esquerdo com Protrusao ")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringRotura = (Rotura) => {
    removeRotura();
    if (Rotura !== "") {
      const string = `Menisco medial Esquerdo com Rotura  ${Rotura}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeRotura = () => {
    laudoPrin.map((e) => {
      if (e.includes("Menisco medial Esquerdo com Rotura ")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringCisto = (medida1, medida2) => {
    removeCisto();
    if (medida1 !== "" && medida2 !== "") {
      const string = `Menisco medial Esquerdo com Cisto e intervalo de ${medida1}x${medida2} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeCisto = () => {
    laudoPrin.map((e) => {
      if (e.includes("Menisco medial Esquerdo com Cisto ")) {
        const index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (ProtrusaoCheckbox) {
      setdisableProtrusaoInput(false);
    } else {
      removeProtrusao();
      setdisableProtrusaoInput(true);
    }
  }, [ProtrusaoCheckbox]);

  useEffect(() => {
    if (RoturaCheckbox) {
      setdisableRoturaInput(false);
    } else {
      removeRotura();
      setdisableRoturaInput(true);
    }
  }, [RoturaCheckbox]);
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
    criaStringProtrusao(ProtrusaoSelect);
  }, [ProtrusaoSelect]);

  useEffect(() => {
    criaStringRotura(RoturaSelect);
  }, [RoturaSelect]);

  useEffect(() => {
    criaStringCisto(CistoInput, CistoInput2);
  }, [CistoInput, CistoInput2]);

  useEffect(() => {
    JoelhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoEsquerdoLaudoNormal])

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
      <TituloNomeExame titulo="Menisco medial" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setProtrusaoCheckbox(!ProtrusaoCheckbox)}>
            Protrusão
          </Checkbox>
          <Select
            w='150px'
            isDisabled={disableProtrusaoInput}
            onChange={(e) => {
              setProtrusaoSelect(e.target.value);
            }}
          >
            <option value="corno anterior">corno anterior</option>
            <option value="corno posterior">corno posterior</option>
          </Select>
        </HStack>

        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setRoturaCheckbox(!RoturaCheckbox)}>
            Rotura
          </Checkbox>
          <Select
            w='150px'
            isDisabled={disableRoturaInput}
            onChange={(e) => {
              setRoturaSelect(e.target.value);
            }}
          >
            <option value="corno anterior">corno anterior</option>
            <option value="corno posterior">corno posterior</option>
          </Select>
        </HStack>

        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setCistoCheckbox(!CistoCheckbox)}>
            Cisto para-meniscal
          </Checkbox>
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
export default MeniscoMedialEsquerdo;
