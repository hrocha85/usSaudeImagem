/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function VeiasReticularesDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [DisableVeiasReticularesCheckBox, setDisableVeiasReticularesCheckBox] = useState(false);
  const [DifusasCheckBox, setDifusasCheckBox] = useState(false);
  const [DisableDifusasCheckBox, setDisableDifusasCheckBox] = useState(false);

  const [localizacaoVeiasReticular1Select, setlocalizacaoVeiasReticular1Select] = useState("");
  const [MembroVeiasReticular1Select, setMembroVeiasReticular1Select] = useState("");
  const [Reticular1CheckBox, setReticular1CheckBox] = useState(false);
  const [DisableSelectReticular1, setDisableSelectReticular1] = useState(true);

  const [localizacaoVeiasReticular2Select, setlocalizacaoVeiasReticular2Select] = useState("");
  const [MembroVeiasReticular2Select, setMembroVeiasReticular2Select] = useState("");
  const [Reticular2CheckBox, setReticular2CheckBox] = useState(false);
  const [DisableSelectReticular2, setDisableSelectReticular2] = useState(true);

  const [localizacaoVeiasReticular3Select, setlocalizacaoVeiasReticular3Select] = useState("");
  const [MembroVeiasReticular3Select, setMembroVeiasReticular3Select] = useState("");
  const [Reticular3CheckBox, setReticular3CheckBox] = useState(false);
  const [DisableSelectReticular3, setDisableSelectReticular3] = useState(true);

  const criaStringReticular1 = (localizado, MembroVeiasReticular1Select) => {
    removeReticular1();
    var string;
    if (MembroVeiasReticular1Select !== '' && localizado !== "") {
      string = `Veia Reticular 1 - na face ${localizado} ${MembroVeiasReticular1Select} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  }

  const removeReticular1 = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Veia Reticular 1`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Reticular1CheckBox) {
      setDisableSelectReticular1(false)
      criaStringReticular1(
        localizacaoVeiasReticular1Select,
        MembroVeiasReticular1Select
      );
    } else {
      setDisableSelectReticular1(true)
      removeReticular1();
      setlocalizacaoVeiasReticular1Select("");
      setMembroVeiasReticular1Select("");
    }
  }, [
    Reticular1CheckBox,
    localizacaoVeiasReticular1Select,
    MembroVeiasReticular1Select
  ]);

  const criaStringReticular2 = (localizado, MembroVeiasReticular2Select) => {
    removeReticular2();
    var string;
    if (MembroVeiasReticular2Select !== '' && localizado !== "") {
      string = `Veia Reticular 2 - na face ${localizado} ${MembroVeiasReticular2Select} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  }

  const removeReticular2 = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Veia Reticular 2`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Reticular2CheckBox) {
      setDisableSelectReticular2(false)
      criaStringReticular2(
        localizacaoVeiasReticular2Select,
        MembroVeiasReticular2Select
      );
    } else {
      setDisableSelectReticular2(true)

      removeReticular2();
      setlocalizacaoVeiasReticular2Select("");
      setMembroVeiasReticular2Select("");
    }
  }, [
    Reticular2CheckBox,
    localizacaoVeiasReticular2Select,
    MembroVeiasReticular2Select
  ]);

  const criaStringReticular3 = (localizado, MembroVeiasReticular3Select) => {
    removeReticular3();
    var string;
    if (MembroVeiasReticular3Select !== '' && localizado !== "") {
      string = `Veia Reticular 3 - na face ${localizado} ${MembroVeiasReticular3Select} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  }

  const removeReticular3 = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Veia Reticular 3`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Reticular3CheckBox) {
      setDisableSelectReticular3(false)
      criaStringReticular3(
        localizacaoVeiasReticular3Select,
        MembroVeiasReticular3Select
      );
    } else {
      setDisableSelectReticular3(true)

      removeReticular3();
      setlocalizacaoVeiasReticular3Select("");
      setMembroVeiasReticular3Select("");
    }
  }, [
    Reticular3CheckBox,
    localizacaoVeiasReticular3Select,
    MembroVeiasReticular3Select
  ]);


  const criaStringDifusas = () => {
    const string = `Veias Reticulares difusas `;
    setLaudoPrin((arr) => [...arr, string]);

  }

  const removeDifusas = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Veias Reticulares difusas`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    if (DifusasCheckBox) {
      setDisableVeiasReticularesCheckBox(true)
      criaStringDifusas()
    } else {
      setDisableVeiasReticularesCheckBox(false)
      removeDifusas()
    }
  }, [DifusasCheckBox])

  useEffect(() => {
    if (Reticular1CheckBox || Reticular2CheckBox || Reticular3CheckBox) {
      setDisableDifusasCheckBox(true)
    } else {
      setDisableDifusasCheckBox(false)
    }
  })


  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Veias Reticulares" />

      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Box
          display='flex'
          flexWrap="wrap">
          <HStack>

            <Checkbox
              isDisabled={DisableVeiasReticularesCheckBox}
              whiteSpace="nowrap"
              onChange={() => setReticular1CheckBox(!Reticular1CheckBox)}
            >
              Reticular 1
            </Checkbox>
            <Text>
              na face
            </Text>
            <Select
              w="120px"
              isDisabled={DisableSelectReticular1}
              onChange={(e) => {
                setlocalizacaoVeiasReticular1Select(e.target.value);
              }}
              value={localizacaoVeiasReticular1Select}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="medial">medial</option>
              <option value="anterior">anterior</option>
              <option value="posterior">posterior</option>
              <option value="lateral">lateral</option>
            </Select>
          </HStack>
          <HStack
            mt='5px'
          >

            <Select
              w="120px"
              isDisabled={DisableSelectReticular1}
              onChange={(e) => {
                setMembroVeiasReticular1Select(e.target.value);
              }}
              value={MembroVeiasReticular1Select}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="da perna">da perna</option>
              <option value="da coxa">da coxa</option>
              <option value="do joelho">do joelho</option>
              <option value="do tornozelo">do tornozelo</option>
            </Select>
          </HStack >
        </Box>
        <Box
          display='flex'
          flexWrap="wrap">
          <HStack>

            <Checkbox
              isDisabled={DisableVeiasReticularesCheckBox}
              whiteSpace="nowrap"
              onChange={() => setReticular2CheckBox(!Reticular2CheckBox)}
            >
              Reticular 2
            </Checkbox>
            <Text>
              na face
            </Text>
            <Select
              w="120px"
              isDisabled={DisableSelectReticular2}
              onChange={(e) => {
                setlocalizacaoVeiasReticular2Select(e.target.value);
              }}
              value={localizacaoVeiasReticular2Select}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="medial">medial</option>
              <option value="anterior">anterior</option>
              <option value="posterior">posterior</option>
              <option value="lateral">lateral</option>
            </Select>
          </HStack>
          <HStack
            mt='5px'
          >

            <Select
              w="120px"
              isDisabled={DisableSelectReticular2}
              onChange={(e) => {
                setMembroVeiasReticular2Select(e.target.value);
              }}
              value={MembroVeiasReticular2Select}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="da perna">da perna</option>
              <option value="da coxa">da coxa</option>
              <option value="do joelho">do joelho</option>
              <option value="do tornozelo">do tornozelo</option>
            </Select>
          </HStack >
        </Box>
        <Box
          display='flex'
          flexWrap="wrap">
          <HStack>

            <Checkbox
              isDisabled={DisableVeiasReticularesCheckBox}
              whiteSpace="nowrap"
              onChange={() => setReticular3CheckBox(!Reticular3CheckBox)}
            >
              Reticular 3
            </Checkbox>
            <Text>
              na face
            </Text>
            <Select
              w="120px"
              isDisabled={DisableSelectReticular3}
              onChange={(e) => {
                setlocalizacaoVeiasReticular3Select(e.target.value);
              }}
              value={localizacaoVeiasReticular3Select}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="medial">medial</option>
              <option value="anterior">anterior</option>
              <option value="posterior">posterior</option>
              <option value="lateral">lateral</option>
            </Select>
          </HStack>
          <HStack
            mt='5px'
          >

            <Select
              w="120px"
              isDisabled={DisableSelectReticular3}
              onChange={(e) => {
                setMembroVeiasReticular3Select(e.target.value);
              }}
              value={MembroVeiasReticular3Select}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="da perna">da perna</option>
              <option value="da coxa">da coxa</option>
              <option value="do joelho">do joelho</option>
              .<option value="do tornozelo">do tornozelo</option>
            </Select>
          </HStack >
        </Box>

        <Checkbox
          isDisabled={DisableDifusasCheckBox}
          onChange={() => setDifusasCheckBox(!DifusasCheckBox)}
        >
          Difusas
        </Checkbox>
      </Box >
    </Box >
  );
}
export default VeiasReticularesDireito;

