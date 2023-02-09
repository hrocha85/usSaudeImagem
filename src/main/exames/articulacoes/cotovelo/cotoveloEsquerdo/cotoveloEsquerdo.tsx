/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Select, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";

function CotoveloEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [EpicondiliteLateraCheckBox, setEpicondiliteLateraCheckBox] = useState(true);
  const [TendiniteTriciptalCheckBox, setTendiniteTriciptalCheckBox] = useState(true);
  const [EpicondiliteMedialCheckBox, setEpicondiliteMedialCheckBox] = useState(true);
  const [BursiteOlecranianaCheckBox, setBursiteOlecranianaCheckBox] = useState(true);
  const [InstabilidadeDerrameArticularCheckBox, setInstabilidadeDerrameArticularCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringEpicondiliteLatera = () => {
    var string = "Cotovelo Esquerdo com Epicondilite Latera";
    if (EpicondiliteLateraCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setEpicondiliteLateraCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringTendiniteTriciptal = () => {
    var string = "Cotovelo Esquerdo com Tendinite triciptal";
    if (TendiniteTriciptalCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTendiniteTriciptalCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringEpicondiliteMedial = () => {
    var string = "Cotovelo Esquerdo com Epicondilite Medial";
    if (EpicondiliteMedialCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setEpicondiliteMedialCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringBursiteOlecraniana = () => {
    var string = "Cotovelo Esquerdo com Bursite olecraniana";
    if (BursiteOlecranianaCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setBursiteOlecranianaCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringInstabilidadeDerrameArticular = () => {
    var string = "Cotovelo Esquerdo com Derrame articular";
    if (InstabilidadeDerrameArticularCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setInstabilidadeDerrameArticularCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim


  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    CotoveloEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [CotoveloEsquerdoLaudoNormal])


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
      <Box columnGap='10px' display="flex" flexWrap="wrap">

        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setEpicondiliteLateraCheckBox(true);
            criaStringEpicondiliteLatera();
          }}
        >
          Epicondilite Latera
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setTendiniteTriciptalCheckBox(true);
            criaStringTendiniteTriciptal();
          }}
        >
          Tendinite triciptal
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setEpicondiliteMedialCheckBox(true);
            criaStringEpicondiliteMedial();
          }}
        >
          Epicondilite Medial
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setBursiteOlecranianaCheckBox(true);
            criaStringBursiteOlecraniana();
          }}
        >
          Bursite olecraniana
        </Checkbox>
        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setInstabilidadeDerrameArticularCheckBox(true);
            criaStringInstabilidadeDerrameArticular();
          }}
        >
          Derrame articular
        </Checkbox>
      </Box>
    </Box>

  );
}
export default CotoveloEsquerdo;
