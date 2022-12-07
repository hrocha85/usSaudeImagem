/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { TornozeloDireitoNormalContext } from "../../../../../context/TornozeloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function ExtraDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { TornozeloDireitoLaudoNormal } = useContext(TornozeloDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States CistoArtrossinovial - input,checkbox e select - Inicio
  const [disableCistoArtrossinovialInput, setdisableCistoArtrossinovialInput] = useState(true);
  const [CistoArtrossinovialCheckbox, setCistoArtrossinovialCheckbox] = useState(false);
  const [CistoArtrossinovialSelect, setCistoArtrossinovialSelect] = useState("");

  const [FascitePlantarInput, setFascitePlantarInput] = useState("");
  const [disableFascitePlantarInput, setdisableFascitePlantarInput] = useState(true);
  const [FascitePlantarCheckbox, setFascitePlantarCheckbox] = useState(false);

  const [NeuromaMortonInput, setNeuromaMortonInput] = useState("");
  const [disableNeuromaMortonInput, setdisableNeuromaMortonInput] = useState(true);
  const [NeuromaMortonCheckbox, setNeuromaMortonCheckbox] = useState(false);

  const [FibromatosePlantarInput, setFibromatosePlantarInput] = useState("");
  const [disableFibromatosePlantarInput, setdisableFibromatosePlantarInput] = useState(true);
  const [FibromatosePlantarCheckbox, setFibromatosePlantarCheckbox] = useState(false);

  const [ArtroseCheckbox, setArtroseCheckbox] = useState(true);
  const [TalalgiaImpactoCheckbox, setTalalgiaImpactoCheckbox] = useState(true);
  const [DerrameTibioTalarCheckbox, setDerrameTibioTalarCheckbox] = useState(true);

  const criaStringCistoArtrossinovial = (CistoArtrossinovial) => {
    removeCistoArtrossinovial();
    if (CistoArtrossinovial !== "") {
      var string = `Cisto Artrossinovial direito ${CistoArtrossinovial}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeCistoArtrossinovial = () => {
    laudoPrin.map((e) => {
      if (e.includes("Cisto Artrossinovial direito")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringFascitePlantar = (medida1) => {
    removeFascitePlantar();
    if (medida1 !== "") {
      var string = `Fascite plantar direito de ${medida1} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeFascitePlantar = () => {
    laudoPrin.map((e) => {
      if (e.includes("Fascite plantar direito")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringFibromatosePlantar = (medida1) => {
    removeFibromatosePlantar();
    if (medida1 !== "") {
      var string = `Fibromatose plantar direito de ${medida1} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeFibromatosePlantar = () => {
    laudoPrin.map((e) => {
      if (e.includes("Fibromatose plantar direito")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringNeuromaMorton = (medida1) => {
    removeNeuromaMorton();
    if (medida1 !== "") {
      var string = `Neuroma de Morton direito de ${medida1} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeNeuromaMorton = () => {
    laudoPrin.map((e) => {
      if (e.includes("Neuroma de Morton direito")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringArtrose = () => {
    var string = "Fibulares direito com Artrose";
    if (ArtroseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtroseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringDerrameTibioTalar = () => {
    var string = "Fibulares direito com Derrame Tíbio-Talar";
    if (DerrameTibioTalarCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDerrameTibioTalarCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringTalalgiaImpacto = () => {
    var string = "Fibulares direito com TalalgiaImpacto";
    if (TalalgiaImpactoCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTalalgiaImpactoCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (FascitePlantarCheckbox) {
      setdisableFascitePlantarInput(false);
    } else {
      removeFascitePlantar();
      setdisableFascitePlantarInput(true);
      setFascitePlantarInput("");
    }
  }, [FascitePlantarCheckbox]);

  useEffect(() => {
    if (FibromatosePlantarCheckbox) {
      setdisableFibromatosePlantarInput(false);
    } else {
      removeFibromatosePlantar();
      setdisableFibromatosePlantarInput(true);
      setFibromatosePlantarInput("");
    }
  }, [FibromatosePlantarCheckbox]);

  useEffect(() => {
    if (NeuromaMortonCheckbox) {
      setdisableNeuromaMortonInput(false);
    } else {
      removeNeuromaMorton();
      setdisableNeuromaMortonInput(true);
      setNeuromaMortonInput("");
    }
  }, [NeuromaMortonCheckbox]);

  useEffect(() => {
    criaStringFascitePlantar(FascitePlantarInput);
  }, [FascitePlantarInput]);

  useEffect(() => {
    criaStringFibromatosePlantar(FibromatosePlantarInput);
  }, [FibromatosePlantarInput]);

  useEffect(() => {
    criaStringNeuromaMorton(NeuromaMortonInput);
  }, [NeuromaMortonInput]);

  useEffect(() => {
    if (CistoArtrossinovialCheckbox) {
      setdisableCistoArtrossinovialInput(false);
    } else {
      removeCistoArtrossinovial();
      setdisableCistoArtrossinovialInput(true);
    }
  }, [CistoArtrossinovialCheckbox]);

  useEffect(() => {
    criaStringCistoArtrossinovial(CistoArtrossinovialSelect);
  }, [CistoArtrossinovialSelect]);

  useEffect(() => {
    TornozeloDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [TornozeloDireitoLaudoNormal])

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
      {/* <TituloNomeExame titulo="Fascite plantar" /> */}

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
            onChange={() => setCistoArtrossinovialCheckbox(!CistoArtrossinovialCheckbox)}>
            Cisto artrossinovial
          </Checkbox>
          <Select
            w='150px'
            isDisabled={disableCistoArtrossinovialInput}
            onChange={(e) => {
              setCistoArtrossinovialSelect(e.target.value);
            }}
          >
            <option value="na face dorsal do pé">na face dorsal do pé</option>
            <option value="na articulação talo-navicular">na articulação talo-navicular</option>
            <option value="na articulação fíbulo-calcânea">na articulação fíbulo-calcânea</option>
            <option value="na articulação calcâneo-cubóide">na articulação calcâneo-cubóide</option>
          </Select>
        </HStack>

        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setFascitePlantarCheckbox(!FascitePlantarCheckbox)}>
            Fascite plantar
          </Checkbox>
          <Input
            isDisabled={disableFascitePlantarInput}
            value={FascitePlantarInput}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setFascitePlantarInput(e.target.value) }}
          />
          <Text>mm</Text>
        </HStack>

        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setNeuromaMortonCheckbox(!NeuromaMortonCheckbox)}>
            Neuroma de Morton
          </Checkbox>
          <Input
            isDisabled={disableNeuromaMortonInput}
            value={NeuromaMortonInput}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setNeuromaMortonInput(e.target.value) }}
          />
          <Text>mm</Text>
        </HStack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTalalgiaImpactoCheckbox(true);
            criaStringTalalgiaImpacto();
          }}
        >
          Talalgia de Impacto
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setFibromatosePlantarCheckbox(!FibromatosePlantarCheckbox)}>
            Fibromatose plantar
          </Checkbox>
          <Input
            isDisabled={disableFibromatosePlantarInput}
            value={FibromatosePlantarInput}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setFibromatosePlantarInput(e.target.value) }}
          />
          <Text>mm</Text>
        </HStack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setDerrameTibioTalarCheckbox(true);
            criaStringDerrameTibioTalar();
          }}
        >
          Derrame Tíbio-Talar
        </Checkbox>
      </Stack>
    </Box>

  );
}
export default ExtraDireito;
