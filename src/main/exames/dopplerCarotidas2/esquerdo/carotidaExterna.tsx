/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CarotidaExternaEsquerda() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [MedidasCheckBox, setMedidasCheckBox] =
    useState(false);
  const [disableInputsMedidas, setDisableInputsMedidas] = useState(true);


  const [MedidaEsquerdaVPS, setMedidaEsquerdaVPS] = useState("")
  const [MedidaEsquerdaVDF, setMedidaEsquerdaVDF] = useState("")
  const [MedidaEsquerdaEMI, setMedidaEsquerdaEMI] = useState("")
  //States Placa - input,checkbox e select - Inicio
  const [PlacaInput, setPlacaInput] = useState("");
  const [disablePlacaInput, setdisablePlacaInput] = useState(true);
  const [PlacaCheckBox, setPlacaCheckBox] = useState(false);
  const [PlacaSelect, setPlacaSelect] = useState("");


  //States Placa - input,checkbox e select - Fim

  //State checkBox Padrao Micropolicistico
  const [SubOclusaoCheckBox, setSubOclusaoCheckBox] = useState(true);

  const [NaoVisibilizadaCheckBox, setNaoVisibilizadaCheckBox] = useState(true);

  //State Nao Visibilizado
  const [OclusaoCheckBox, setOclusaoCheckBox] = useState(true);



  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida, Placa) => {
    removePlaca();
    if (medida !== "") {
      var string = `Carótida Externa Esquerda com placa ${Placa} medindo ${medida} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    laudoPrin.map((e) => {
      if (e.includes("Carótida Externa Esquerda")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringSubOclusao = () => {
    var string = "Carótida Externa Esquerda com SubOclusão";
    if (SubOclusaoCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setSubOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };


  //Função Nao Visibilizado
  const criaStringOclusao = () => {
    var string = "Carótida Externa Esquerda com oclusão";
    if (OclusaoCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setOclusaoCheckBox(false);
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

  const criaStringNaoVisibilizada = () => {
    var string = "Carótida Externa Esquerda não visibilizada (intra-craniana)";
    if (NaoVisibilizadaCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setNaoVisibilizadaCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringMedidaEsquerdaVPS = (medida) => {
    removeStringMedidaEsquerdaVPS()
    if (MedidaEsquerdaVPS !== "") {
      var string = `Carótida Externa Esquerda medindo: VPS(ACCD)  ${medida} cm/s `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaVPS = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Carótida Externa Esquerda medindo: VPS(ACCD) `)) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaEsquerdaVPS(MedidaEsquerdaVPS)
  }, [MedidaEsquerdaVPS])

  const criaStringMedidaEsquerdaEMI = (medida) => {
    removeStringMedidaEsquerdaEMI()
    if (MedidaEsquerdaEMI !== "") {
      var string = `Carótida Externa Esquerda medindo: EMI(ACCD)  ${medida} cm/s `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaEMI = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Carótida Externa Esquerda medindo: EMI(ACCD) `)) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaEsquerdaEMI(MedidaEsquerdaEMI)
  }, [MedidaEsquerdaEMI])

  const criaStringMedidaEsquerdaVDF = (medida) => {
    removeStringMedidaEsquerdaVDF()
    if (MedidaEsquerdaVDF !== "") {
      var string = `Carótida Externa Esquerda medindo: VDF(ACCD) ${medida} cm/s `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaVDF = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Carótida Externa Esquerda medindo: VDF(ACCD) `)) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaEsquerdaVDF(MedidaEsquerdaVDF)
  }, [MedidaEsquerdaVDF])


  useEffect(() => {
    if (PlacaCheckBox) {
      setdisablePlacaInput(false);
    } else {
      removePlaca();
      setdisablePlacaInput(true);
      setPlacaInput("");
    }
  }, [PlacaCheckBox]);

  useEffect(() => {
    criaStringPlaca(PlacaInput, PlacaSelect);
  }, [PlacaInput, PlacaSelect]);

  useEffect(() => {
    if (MedidasCheckBox) {
      setDisableInputsMedidas(false)
    } else {
      setMedidaEsquerdaVPS('')
      setMedidaEsquerdaVDF('')
      setMedidaEsquerdaEMI('')
      removeStringMedidaEsquerdaVPS()
      removeStringMedidaEsquerdaVDF()
      removeStringMedidaEsquerdaEMI()
      setDisableInputsMedidas(true)
    }
  }, [MedidasCheckBox])


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
      <TituloNomeExame titulo="Carótida Externa ESQ." />

      <Box display="flex" flexWrap="wrap">
        <Box
          display='flex'
          flexWrap='wrap'>
          <Checkbox
            mr='20px'
            onChange={() => setMedidasCheckBox(!MedidasCheckBox)}>
            Citar medidas
          </Checkbox>

          <Box
            mb='5px'
            alignItems='center'
          >
            <Box
              alignItems='center'
              display='flex'
              mb='5px'
            >
              <Text mr='10px'>VPS</Text>
              <Input
                isDisabled={disableInputsMedidas}
                w="60px"
                h="77x"
                padding="5px"
                value={MedidaEsquerdaVPS}
                maxLength={2}
                textAlign="center"
                onChange={(e) => { setMedidaEsquerdaVPS(e.target.value) }}
                placeholder={"00"}
              />
              <Text mr='10px'>cm/s</Text>
            </Box>
            <Box
              alignItems='center'
              display='flex'
            >
              <Text mr='10px'>VDF</Text>
              <Input
                isDisabled={disableInputsMedidas}
                w="60px"
                h="77x"
                padding="5px"
                value={MedidaEsquerdaVDF}
                maxLength={2}
                textAlign="center"
                onChange={(e) => { setMedidaEsquerdaVDF(e.target.value) }}
                placeholder={"00"}
              />
              <Text mr='10px'>cm/s</Text>
            </Box>
          </Box>
        </Box>

        <Stack>
          <HStack>
            <Checkbox onChange={() => setPlacaCheckBox(!PlacaCheckBox)}>
              Placa
            </Checkbox>
            <Select
              w='170px'
              isDisabled={disablePlacaInput}
              onChange={(e) => {
                setPlacaSelect(e.target.value);
              }}
            >
              <option value="não complicada">não complicada</option>
              <option value="complicada">complicada</option>
            </Select>
            <Input
              isDisabled={disablePlacaInput}
              value={PlacaInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setPlacaInput(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
          <Checkbox
            onChange={() => {
              setOclusaoCheckBox(true);
              criaStringOclusao();
            }}
          >
            Oclusão
          </Checkbox>

          <Checkbox
            onChange={() => {
              setSubOclusaoCheckBox(true);
              criaStringSubOclusao();
            }}
          >
            SubOclusão
          </Checkbox>
          <Checkbox
            onChange={() => {
              setNaoVisibilizadaCheckBox(true);
              criaStringNaoVisibilizada();
            }}
          >
            Não visibilizada (intra-craniana)
          </Checkbox>
        </Stack>
      </Box>
    </Box >
  );
}
export default CarotidaExternaEsquerda;
