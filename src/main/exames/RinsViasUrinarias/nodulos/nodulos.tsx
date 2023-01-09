/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Nodulos() {
  const altura = "100%";
  const largura = "95%";

  const [frasesNodulos, setFrasesNodulos] = useState<any>([]);

  const [disableNodulo01, setDisableNodulo01] = useState(true);
  const [checkboxNodulo01, setCheckboxNodulo01] = useState(false);
  const [valueInput01Nodulo01, setValueInput01Nodulo01] = useState("");
  const [valueInput02Nodulo01, setValueInput02Nodulo01] = useState("");
  const [valueSelect01Nodulo01, setValueSelect01Nodulo01] = useState("");
  const [valueSelect02Nodulo01, setValueSelect02Nodulo01] = useState("");
  const [valueSelect03Nodulo01, setValueSelect03Nodulo01] = useState("");
  const [valueSelect04Nodulo01, setValueSelect04Nodulo01] = useState("");

  const [disableNodulo02, setDisableNodulo02] = useState(true);
  const [checkboxNodulo02, setCheckboxNodulo02] = useState(false);
  const [valueInput01Nodulo02, setValueInput01Nodulo02] = useState("");
  const [valueInput02Nodulo02, setValueInput02Nodulo02] = useState("");
  const [valueSelect01Nodulo02, setValueSelect01Nodulo02] = useState("");
  const [valueSelect02Nodulo02, setValueSelect02Nodulo02] = useState("");
  const [valueSelect03Nodulo02, setValueSelect03Nodulo02] = useState("");
  const [valueSelect04Nodulo02, setValueSelect04Nodulo02] = useState("");

  const removeStringNodulo01 = () => {
    frasesNodulos.map((e) => {
      if (e.includes(`Nódulo 01`)) {
        var index = frasesNodulos.indexOf(e);

        if (index > -1) {
          frasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringNodulo01 = (
    Input01Nodulo01,
    Input02Nodulo01,
    Select01Nodulo01,
    Select02Nodulo01,
    Select03Nodulo01,
    Select04Nodulo01
  ) => {
    removeStringNodulo01();
    if (
      Input01Nodulo01 !== "" &&
      Input02Nodulo01 !== "" &&
      Select01Nodulo01 !== "" &&
      Select02Nodulo01 !== "" &&
      Select03Nodulo01 !== "" &&
      Select04Nodulo01 !== ""
    ) {
      const Frase = `Nódulo 01 com ${Input01Nodulo01} x ${Input02Nodulo01} mm localizado no 
             ${Select01Nodulo01} do ${Select02Nodulo01} com contornos ${Select03Nodulo01} do tipo ${Select04Nodulo01}`;
      setFrasesNodulos((arr) => [...arr, Frase]);
    }
  };

  useEffect(() => {
    if (checkboxNodulo01) {
      setDisableNodulo01(false);
    } else {
      removeStringNodulo01();
      setDisableNodulo01(true);
      setValueInput01Nodulo01("");
      setValueInput02Nodulo01("");
      setValueSelect01Nodulo01("");
      setValueSelect02Nodulo01("");
      setValueSelect03Nodulo01("");
      setValueSelect04Nodulo01("");
    }
  }, [checkboxNodulo01]);

  useEffect(() => {
    if (checkboxNodulo01) {
      removeStringNodulo01();
      criaStringNodulo01(
        valueInput01Nodulo01,
        valueInput02Nodulo01,
        valueSelect01Nodulo01,
        valueSelect02Nodulo01,
        valueSelect03Nodulo01,
        valueSelect04Nodulo01
      );
    } else {
    }
  }, [
    valueInput01Nodulo01,
    valueInput02Nodulo01,
    valueSelect01Nodulo01,
    valueSelect02Nodulo01,
    valueSelect03Nodulo01,
    valueSelect04Nodulo01,
  ]);

  const removeStringNodulo02 = () => {
    frasesNodulos.map((e) => {
      if (e.includes(`Nódulo 02`)) {
        var index = frasesNodulos.indexOf(e);

        if (index > -1) {
          frasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringNodulo02 = (
    Input01Nodulo02,
    Input02Nodulo02,
    Select01Nodulo02,
    Select02Nodulo02,
    Select03Nodulo02,
    Select04Nodulo02
  ) => {
    removeStringNodulo02();
    if (
      Input01Nodulo02 !== "" &&
      Input02Nodulo02 !== "" &&
      Select01Nodulo02 !== "" &&
      Select02Nodulo02 !== "" &&
      Select03Nodulo02 !== "" &&
      Select04Nodulo02 !== ""
    ) {
      const Frase = `Nódulo 02 com ${Input01Nodulo02} x ${Input02Nodulo02} mm localizado no 
             ${Select01Nodulo02} do ${Select02Nodulo02} com contornos ${Select03Nodulo02} do tipo ${Select04Nodulo02}`;
      setFrasesNodulos((arr) => [...arr, Frase]);
    }
  };

  useEffect(() => {
    if (checkboxNodulo02) {
      setDisableNodulo02(false);
    } else {
      removeStringNodulo02();
      setDisableNodulo02(true);
      setValueInput01Nodulo02("");
      setValueInput02Nodulo02("");
      setValueSelect01Nodulo02("");
      setValueSelect02Nodulo02("");
      setValueSelect03Nodulo02("");
      setValueSelect04Nodulo02("");
    }
  }, [checkboxNodulo02]);

  useEffect(() => {
    if (checkboxNodulo02) {
      removeStringNodulo02();
      criaStringNodulo02(
        valueInput01Nodulo02,
        valueInput02Nodulo02,
        valueSelect01Nodulo02,
        valueSelect02Nodulo02,
        valueSelect03Nodulo02,
        valueSelect04Nodulo02
      );
    } else {
    }
  }, [
    valueInput01Nodulo02,
    valueInput02Nodulo02,
    valueSelect01Nodulo02,
    valueSelect02Nodulo02,
    valueSelect03Nodulo02,
    valueSelect04Nodulo02,
  ]);

  const subExame = "Nódulos";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesNodulos]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 2px 15px"
      mt="20px"
    >
      <Box h="100%">
        <TituloNomeExame titulo="Nódulos" />

        <Box gap="15px" display="flex" flexWrap="wrap" mt="20px">
          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxNodulo01(!checkboxNodulo01);
              }}
            >
              Nódulo 01
            </Checkbox>
            <Box>
              <Input
                value={valueInput01Nodulo01}
                onChange={(e) => {
                  setValueInput01Nodulo01(e.target.value);
                }}
                isDisabled={disableNodulo01}
                maxLength={3}
                w="55px"
                placeholder="00"
              />
              x
              <Input
                value={valueInput02Nodulo01}
                onChange={(e) => {
                  setValueInput02Nodulo01(e.target.value);
                }}
                isDisabled={disableNodulo01}
                maxLength={3}
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              isDisabled={disableNodulo01}
              value={valueSelect01Nodulo01}
              onChange={(e) => {
                setValueSelect01Nodulo01(e.target.value);
              }}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
            </Select>
            <Select
              isDisabled={disableNodulo01}
              value={valueSelect02Nodulo01}
              onChange={(e) => {
                setValueSelect02Nodulo01(e.target.value);
              }}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim Esquerdo</option>
            </Select>
            <Select
              isDisabled={disableNodulo01}
              value={valueSelect03Nodulo01}
              onChange={(e) => {
                setValueSelect03Nodulo01(e.target.value);
              }}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="regulares">Regulares</option>
              <option value="irregulares">Irregulares</option>
            </Select>
            <Select
              isDisabled={disableNodulo01}
              value={valueSelect04Nodulo01}
              onChange={(e) => {
                setValueSelect04Nodulo01(e.target.value);
              }}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxNodulo02(!checkboxNodulo02);
              }}
            >
              Nódulo 02
            </Checkbox>
            <Box>
              <Input
                value={valueInput01Nodulo02}
                onChange={(e) => {
                  setValueInput01Nodulo02(e.target.value);
                }}
                isDisabled={disableNodulo02}
                w="55px"
                placeholder="00"
              />
              x
              <Input
                value={valueInput02Nodulo02}
                onChange={(e) => {
                  setValueInput02Nodulo02(e.target.value);
                }}
                isDisabled={disableNodulo02}
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              value={valueSelect01Nodulo02}
              onChange={(e) => {
                setValueSelect01Nodulo02(e.target.value);
              }}
              isDisabled={disableNodulo02}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Localizado no
              </option>
              <option value="terço Superior">Terço superior</option>
              <option value="terço Medio">Terço medio</option>
              <option value="terço Inferior">Terço inferior</option>
            </Select>
            <Select
              value={valueSelect02Nodulo02}
              onChange={(e) => {
                setValueSelect02Nodulo02(e.target.value);
              }}
              isDisabled={disableNodulo02}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim Esquerdo</option>
            </Select>
            <Select
              value={valueSelect03Nodulo02}
              onChange={(e) => {
                setValueSelect03Nodulo02(e.target.value);
              }}
              isDisabled={disableNodulo02}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="regulares">Regulares</option>
              <option value="irregulares">Irregulares</option>
            </Select>
            <Select
              value={valueSelect04Nodulo02}
              onChange={(e) => {
                setValueSelect04Nodulo02(e.target.value);
              }}
              isDisabled={disableNodulo02}
              mt="5px"
              w="160px"
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogenico">Hipoecogênico</option>
              <option value="hiperecogenico">Hiperecogênico</option>
              <option value="isoecogenico">Isoecogênico</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Nodulos;
