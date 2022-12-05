/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function JoelhoDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { JoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States Bursite - input,checkbox e select - Inicio
  const [disableBursiteInput, setdisableBursiteInput] = useState(true);
  const [BursiteCheckbox, setBursiteCheckbox] = useState(false);
  const [BursiteSelect, setBursiteSelect] = useState("");


  const [disableDerrameArticularInput, setdisableDerrameArticularInput] = useState(true);
  const [DerrameArticularCheckbox, setDerrameArticularCheckbox] = useState(false);
  const [DerrameArticularSelect, setDerrameArticularSelect] = useState("");

  const [ArtroseCheckbox, setArtroseCheckbox] = useState(true);
  const [CistoBakerCheckbox, setCistoBakerCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringArtrose = () => {
    var string = "Joelho direito com Artrose";
    if (ArtroseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtroseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringCistoBaker = () => {
    var string = "Joelho direito com CistoBaker";
    if (CistoBakerCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setCistoBakerCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  //Funcoes Bursite - Inicio
  const criaStringBursite = (Bursite) => {
    removeBursite();
    if (Bursite !== "") {
      var string = `Joelho direito com Bursite ${Bursite}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeBursite = () => {
    laudoPrin.map((e) => {
      if (e.includes("Joelho direito com Bursite ")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringDerrameArticular = (DerrameArticular) => {
    removeDerrameArticular();
    if (DerrameArticular !== "") {
      var string = `Joelho direito com DerrameArticular  ${DerrameArticular}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeDerrameArticular = () => {
    laudoPrin.map((e) => {
      if (e.includes("Joelho direito com DerrameArticular ")) {
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
    if (BursiteCheckbox) {
      setdisableBursiteInput(false);
    } else {
      removeBursite();
      setdisableBursiteInput(true);
    }
  }, [BursiteCheckbox]);
  useEffect(() => {
    if (DerrameArticularCheckbox) {
      setdisableDerrameArticularInput(false);
    } else {
      removeDerrameArticular();
      setdisableDerrameArticularInput(true);
    }
  }, [DerrameArticularCheckbox]);

  useEffect(() => {
    criaStringBursite(BursiteSelect);
  }, [BursiteSelect]);
  useEffect(() => {
    criaStringDerrameArticular(DerrameArticularSelect);
  }, [DerrameArticularSelect]);


  useEffect(() => {
    JoelhoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoDireitoLaudoNormal])

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
      <TituloNomeExame titulo="Joelho" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setArtroseCheckbox(true);
            criaStringArtrose();
          }}
        >
          Artrose
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setBursiteCheckbox(!BursiteCheckbox)}>
            Bursite
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disableBursiteInput}
            onChange={(e) => {
              setBursiteSelect(e.target.value);
            }}
          >
            <option value="leve">leve</option>
            <option value="leve">leve</option>
            <option value="acentuada">acentuada</option>
          </Select>
        </HStack>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setDerrameArticularCheckbox(!DerrameArticularCheckbox)}>
            Derrame articular
          </Checkbox>
          <Select
            w='110px'
            isDisabled={disableDerrameArticularInput}
            onChange={(e) => {
              setDerrameArticularSelect(e.target.value);
            }}
          >
            <option value="leve">leve</option>
            <option value="leve">leve</option>
            <option value="acentuada">acentuada</option>
          </Select>
        </HStack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setCistoBakerCheckbox(true);
            criaStringCistoBaker();
          }}
        >Cisto de Baker
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default JoelhoDireito;
