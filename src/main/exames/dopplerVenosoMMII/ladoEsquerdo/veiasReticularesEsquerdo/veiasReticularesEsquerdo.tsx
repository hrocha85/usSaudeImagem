/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function VeiasReticularesEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesVeiasR, setFrasesVeiasR] = useState<any>([]);

  const [DisableVeiasReticularesCheckBox, setDisableVeiasReticularesCheckBox] =
    useState(false);
  const [DifusasCheckBox, setDifusasCheckBox] = useState(false);
  const [DisableDifusasCheckBox, setDisableDifusasCheckBox] = useState(false);

  const [
    localizacaoVeiasReticular1Select,
    setlocalizacaoVeiasReticular1Select,
  ] = useState("");
  const [MembroVeiasReticular1Select, setMembroVeiasReticular1Select] =
    useState("");
  const [Reticular1CheckBox, setReticular1CheckBox] = useState(false);
  const [DisableSelectReticular1, setDisableSelectReticular1] = useState(true);

  const [
    localizacaoVeiasReticular2Select,
    setlocalizacaoVeiasReticular2Select,
  ] = useState("");
  const [MembroVeiasReticular2Select, setMembroVeiasReticular2Select] =
    useState("");
  const [Reticular2CheckBox, setReticular2CheckBox] = useState(false);
  const [DisableSelectReticular2, setDisableSelectReticular2] = useState(true);

  const [
    localizacaoVeiasReticular3Select,
    setlocalizacaoVeiasReticular3Select,
  ] = useState("");
  const [MembroVeiasReticular3Select, setMembroVeiasReticular3Select] =
    useState("");
  const [Reticular3CheckBox, setReticular3CheckBox] = useState(false);
  const [DisableSelectReticular3, setDisableSelectReticular3] = useState(true);

  const criaStringReticular1 = (localizado, MembroVeiasReticular1Select) => {
    removeReticular1();
    let string;
    if (MembroVeiasReticular1Select !== "" && localizado !== "") {
      string = `Veia Reticular 1 - na face ${localizado} ${MembroVeiasReticular1Select} `;
      setFrasesVeiasR((arr) => [...arr, string]);
    }
  };

  const removeReticular1 = () => {
    frasesVeiasR.map((e) => {
      if (e.includes(`Veia Reticular 1`)) {
        const index = frasesVeiasR.indexOf(e);

        if (index > -1) {
          frasesVeiasR.splice(index, 1);
          setFrasesVeiasR((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Reticular1CheckBox) {
      setDisableSelectReticular1(false);
      criaStringReticular1(
        localizacaoVeiasReticular1Select,
        MembroVeiasReticular1Select
      );
    } else {
      setDisableSelectReticular1(true);
      removeReticular1();
      setlocalizacaoVeiasReticular1Select("");
      setMembroVeiasReticular1Select("");
    }
  }, [
    Reticular1CheckBox,
    localizacaoVeiasReticular1Select,
    MembroVeiasReticular1Select,
  ]);

  const criaStringReticular2 = (localizado, MembroVeiasReticular2Select) => {
    removeReticular2();
    let string;
    if (MembroVeiasReticular2Select !== "" && localizado !== "") {
      string = `Veia Reticular 2 - na face ${localizado} ${MembroVeiasReticular2Select} `;
      setFrasesVeiasR((arr) => [...arr, string]);
    }
  };

  const removeReticular2 = () => {
    frasesVeiasR.map((e) => {
      if (e.includes(`Veia Reticular 2`)) {
        const index = frasesVeiasR.indexOf(e);

        if (index > -1) {
          frasesVeiasR.splice(index, 1);
          setFrasesVeiasR((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Reticular2CheckBox) {
      setDisableSelectReticular2(false);
      criaStringReticular2(
        localizacaoVeiasReticular2Select,
        MembroVeiasReticular2Select
      );
    } else {
      setDisableSelectReticular2(true);

      removeReticular2();
      setlocalizacaoVeiasReticular2Select("");
      setMembroVeiasReticular2Select("");
    }
  }, [
    Reticular2CheckBox,
    localizacaoVeiasReticular2Select,
    MembroVeiasReticular2Select,
  ]);

  const criaStringReticular3 = (localizado, MembroVeiasReticular3Select) => {
    removeReticular3();
    let string;
    if (MembroVeiasReticular3Select !== "" && localizado !== "") {
      string = `Veia Reticular 3 - na face ${localizado} ${MembroVeiasReticular3Select} `;
      setFrasesVeiasR((arr) => [...arr, string]);
    }
  };

  const removeReticular3 = () => {
    frasesVeiasR.map((e) => {
      if (e.includes(`Veia Reticular 3`)) {
        const index = frasesVeiasR.indexOf(e);

        if (index > -1) {
          frasesVeiasR.splice(index, 1);
          setFrasesVeiasR((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (Reticular3CheckBox) {
      setDisableSelectReticular3(false);
      criaStringReticular3(
        localizacaoVeiasReticular3Select,
        MembroVeiasReticular3Select
      );
    } else {
      setDisableSelectReticular3(true);

      removeReticular3();
      setlocalizacaoVeiasReticular3Select("");
      setMembroVeiasReticular3Select("");
    }
  }, [
    Reticular3CheckBox,
    localizacaoVeiasReticular3Select,
    MembroVeiasReticular3Select,
  ]);

  const criaStringDifusas = () => {
    const string = `Veias Reticulares difusas `;
    setFrasesVeiasR((arr) => [...arr, string]);
  };

  const removeDifusas = () => {
    frasesVeiasR.map((e) => {
      if (e.includes(`Veias Reticulares difusas`)) {
        const index = frasesVeiasR.indexOf(e);

        if (index > -1) {
          frasesVeiasR.splice(index, 1);
          setFrasesVeiasR((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    if (DifusasCheckBox) {
      setDisableVeiasReticularesCheckBox(true);
      criaStringDifusas();
    } else {
      setDisableVeiasReticularesCheckBox(false);
      removeDifusas();
    }
  }, [DifusasCheckBox]);

  useEffect(() => {
    if (Reticular1CheckBox || Reticular2CheckBox || Reticular3CheckBox) {
      setDisableDifusasCheckBox(true);
    } else {
      setDisableDifusasCheckBox(false);
    }
  });

  const subExame = "Veias Reticulares Esquerda";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesVeiasR).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVeiasR
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVeiasR
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVeiasR]);

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
        <Box display="flex" flexWrap="wrap">
          <HStack>
            <Checkbox
              isDisabled={DisableVeiasReticularesCheckBox}
              whiteSpace="nowrap"
              onChange={() => setReticular1CheckBox(!Reticular1CheckBox)}
            >
              Reticular 1
            </Checkbox>
            <Text>na face</Text>
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
          <HStack mt="5px">
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
          </HStack>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <HStack>
            <Checkbox
              isDisabled={DisableVeiasReticularesCheckBox}
              whiteSpace="nowrap"
              onChange={() => setReticular2CheckBox(!Reticular2CheckBox)}
            >
              Reticular 2
            </Checkbox>
            <Text>na face</Text>
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
          <HStack mt="5px">
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
          </HStack>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <HStack>
            <Checkbox
              isDisabled={DisableVeiasReticularesCheckBox}
              whiteSpace="nowrap"
              onChange={() => setReticular3CheckBox(!Reticular3CheckBox)}
            >
              Reticular 3
            </Checkbox>
            <Text>na face</Text>
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
          <HStack mt="5px">
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
              <option value="do joelho">do joelho</option>.
              <option value="do tornozelo">do tornozelo</option>
            </Select>
          </HStack>
        </Box>

        <Checkbox
          isDisabled={DisableDifusasCheckBox}
          onChange={() => setDifusasCheckBox(!DifusasCheckBox)}
        >
          Difusas
        </Checkbox>
      </Box>
    </Box>
  );
}
export default VeiasReticularesEsquerdo;
