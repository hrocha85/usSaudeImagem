/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function SubescapularOmbroEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
  //States Tendinite - input,checkbox e select - Inicio
  const [TendiniteInput, setTendiniteInput] = useState("");
  const [disableTendiniteInput, setdisableTendiniteInput] = useState(true);
  const [TendiniteCheckBox, setTendiniteCheckBox] = useState(false);
  const [TendiniteSelect, setTendiniteSelect] = useState("");

  const [RoturaInput, setRoturaInput] = useState("");
  const [disableRoturaInput, setdisableRoturaInput] = useState(true);
  const [RoturaCheckBox, setRoturaCheckBox] = useState(false);
  const [RoturaSelect, setRoturaSelect] = useState("");

  const [TendinoseCheckBox, setTendinoseCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTendinose = () => {
    var string = "Ombro Esquerdo com Tendinose";
    if (TendinoseCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTendinoseCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Tendinite - Inicio
  const criaStringTendinite = (medida, Tendinite) => {
    removeTendinite();
    if (medida !== "") {
      var string = `Ombro Esquerdo com Tendinite Subescapular ${Tendinite} com calcificação de ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeTendinite = () => {
    laudoPrin.map((e) => {
      if (e.includes("Ombro Esquerdo com Tendinite Subescapular")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringRotura = (medida, Rotura) => {
    removeRotura();
    if (medida !== "") {
      var string = `Ombro Esquerdo com Rotura Subescapular ${Rotura} com intervalo de ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeRotura = () => {
    laudoPrin.map((e) => {
      if (e.includes("Ombro Esquerdo com Rotura Subescapular")) {
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
    if (TendiniteCheckBox) {
      setdisableTendiniteInput(false);
    } else {
      removeTendinite();
      setdisableTendiniteInput(true);
      setTendiniteInput("");
    }
  }, [TendiniteCheckBox]);
  useEffect(() => {
    if (RoturaCheckBox) {
      setdisableRoturaInput(false);
    } else {
      removeRotura();
      setdisableRoturaInput(true);
      setRoturaInput("");
    }
  }, [RoturaCheckBox]);

  useEffect(() => {
    criaStringTendinite(TendiniteInput, TendiniteSelect);
  }, [TendiniteInput, TendiniteSelect]);

  useEffect(() => {
    criaStringRotura(RoturaInput, RoturaSelect);
  }, [RoturaInput, RoturaSelect]);

  useEffect(() => {
    OmbroEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [OmbroEsquerdoLaudoNormal])


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
      <TituloNomeExame titulo="Subescapular" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <HStack>
          <Checkbox isDisabled={disableTudo} onChange={() => setTendiniteCheckBox(!TendiniteCheckBox)}>
            Tendinite
          </Checkbox>
          <Select
            w='170px'
            isDisabled={disableTendiniteInput}
            onChange={(e) => {
              setTendiniteSelect(e.target.value);
            }}
          >
            <option value="não calcárea">não calcárea</option>
            <option value="calcárea">calcárea</option>
          </Select>
          <Text>Calcificação</Text>
          <Input
            isDisabled={disableTendiniteInput}
            value={TendiniteInput}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setTendiniteInput(e.target.value) }}
          />
          <Text>mm</Text>
        </HStack>

        <HStack>
          <Checkbox isDisabled={disableTudo} onChange={() => setRoturaCheckBox(!RoturaCheckBox)}>
            Rotura
          </Checkbox>
          <Select
            w='170px'
            isDisabled={disableRoturaInput}
            onChange={(e) => {
              setRoturaSelect(e.target.value);
            }}
          >
            <option value="total">total</option>
            <option value="parcial">parcial</option>
          </Select>
          <Text>Intervalo</Text>
          <Input
            isDisabled={disableRoturaInput}
            value={RoturaInput}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setRoturaInput(e.target.value) }}
          />
          <Text>mm</Text>
        </HStack>

        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setTendinoseCheckBox(true);
            criaStringTendinose();
          }}
        >
          Tendinose
        </Checkbox>
      </Stack>
    </Box>

  );
}
export default SubescapularOmbroEsquerdo;
