/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { PeDireitoNormalContext } from "../../../../../context/PeDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoAquilesDireito() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { PeDireitoLaudoNormal } = useContext(PeDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States Rotura - input,checkbox e select - Inicio
  const [disableRoturaInput, setdisableRoturaInput] = useState(true);
  const [RoturaCheckbox, setRoturaCheckbox] = useState(false);
  const [RoturaSelect, setRoturaSelect] = useState("");


  const [TenossinoviteCheckbox, setTenossinoviteCheckbox] = useState(true);
  const [TendinoseCheckbox, setTendinoseCheckbox] = useState(true);
  const [EntesofitosCheckbox, setEntesofitosCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTenossinovite = () => {
    var string = "Pe direito com Tenossinovite";
    if (TenossinoviteCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTenossinoviteCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringEntesofitos = () => {
    var string = "Pe direito com Entesofitos";
    if (EntesofitosCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setEntesofitosCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringTendinose = () => {
    var string = "Pe direito com Tendinose";
    if (TendinoseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTendinoseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  //Funcoes Rotura - Inicio
  const criaStringRotura = (Rotura) => {
    removeRotura();
    if (Rotura !== "") {
      var string = `Tendão de aquiles direito com Rotura ${Rotura}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeRotura = () => {
    laudoPrin.map((e) => {
      if (e.includes("Tendão de aquiles direito com Rotura ")) {
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
    if (RoturaCheckbox) {
      setdisableRoturaInput(false);
    } else {
      removeRotura();
      setdisableRoturaInput(true);
    }
  }, [RoturaCheckbox]);

  useEffect(() => {
    criaStringRotura(RoturaSelect);
  }, [RoturaSelect]);

  useEffect(() => {
    PeDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [PeDireitoLaudoNormal])

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
      <TituloNomeExame titulo="Tendão de aquiles" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTenossinoviteCheckbox(true);
            criaStringTenossinovite();
          }}
        >
          Tenossinovite
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setRoturaCheckbox(!RoturaCheckbox)}>
            Rotura
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disableRoturaInput}
            onChange={(e) => {
              setRoturaSelect(e.target.value);
            }}
          >
            <option value="total">total</option>
            <option value="parcial">parcial</option>
          </Select>
        </HStack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTendinoseCheckbox(true);
            criaStringTendinose();
          }}
        >Tendinose
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setEntesofitosCheckbox(true);
            criaStringEntesofitos();
          }}
        >Com entesófitos
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default TendaoAquilesDireito;
