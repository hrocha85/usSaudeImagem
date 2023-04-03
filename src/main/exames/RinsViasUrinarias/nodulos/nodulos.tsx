/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Nodulos() {
  const altura = "100%";
  const largura = "95%";

  const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);
  const [ConclusaoNodulos, setConclusaoNodulos] = useState<any>([]);

  const [checkboxNodulo01, setCheckboxNodulo01] = useState(false);
  const [valueInput01Nodulo01, setValueInput01Nodulo01] = useState("");
  const [valueInput02Nodulo01, setValueInput02Nodulo01] = useState("");
  const [valueSelect01Nodulo01, setValueSelect01Nodulo01] = useState("");
  const [valueSelect02Nodulo01, setValueSelect02Nodulo01] = useState("");
  const [valueSelect03Nodulo01, setValueSelect03Nodulo01] = useState("");
  const [valueSelect04Nodulo01, setValueSelect04Nodulo01] = useState("");


  const [checkboxNodulo02, setCheckboxNodulo02] = useState(false);
  const [valueInput01Nodulo02, setValueInput01Nodulo02] = useState("");
  const [valueInput02Nodulo02, setValueInput02Nodulo02] = useState("");
  const [valueSelect01Nodulo02, setValueSelect01Nodulo02] = useState("");
  const [valueSelect02Nodulo02, setValueSelect02Nodulo02] = useState("");
  const [valueSelect03Nodulo02, setValueSelect03Nodulo02] = useState("");
  const [valueSelect04Nodulo02, setValueSelect04Nodulo02] = useState("");

  const removeStringNodulo = (value) => {
    FrasesNodulos.map((e) => {
      if (e.includes(value)) {
        var index = FrasesNodulos.indexOf(e);

        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };
  const removeFraseConclusao = (value) => {
    ConclusaoNodulos.map((e) => {
      if (e.includes(value)) {
        var index = ConclusaoNodulos.indexOf(e);
        if (index > -1) {
          ConclusaoNodulos.splice(index, 1);
          setConclusaoNodulos((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  };

  const criaStringNodulo = () => {
    const conclusao = 'Nódulos renais.'
    var string = 'Nota-se imagens nodulares sólidas,corticais, sem alterara a arquitetura vascular e pielo-calicinal.'
    removeStringNodulo(string);
    removeFraseConclusao(conclusao)

    if (checkboxNodulo01 || checkboxNodulo02) {
      if (checkboxNodulo01) {
        if (valueInput01Nodulo01 !== "" && valueInput02Nodulo01 !== "" && valueSelect01Nodulo01 !== "" && valueSelect02Nodulo01 !== "" && valueSelect03Nodulo01 !== "" && valueSelect04Nodulo01 !== "") {
          string = `${string} \n ${valueSelect02Nodulo01}: Uma com conteúdo ${valueSelect04Nodulo01}, no ${valueSelect01Nodulo01}, homogêneo, contornos ${valueSelect03Nodulo01}, medindo ${valueInput01Nodulo01} x ${valueInput02Nodulo01} mm.`;
        }
      } else {
        setValueInput01Nodulo01("");
        setValueInput02Nodulo01("");
        setValueSelect01Nodulo01("");
        setValueSelect02Nodulo01("");
        setValueSelect03Nodulo01("");
        setValueSelect04Nodulo01("");
      }
      if (checkboxNodulo02) {
        if (valueInput01Nodulo02 !== "" && valueInput02Nodulo02 !== "" && valueSelect01Nodulo02 !== "" && valueSelect02Nodulo02 !== "" && valueSelect03Nodulo02 !== "" && valueSelect04Nodulo02 !== "") {
          string = `${string} \n ${valueSelect02Nodulo02}: Uma com conteúdo ${valueSelect04Nodulo02}, no ${valueSelect01Nodulo02}, homogêneo, contornos ${valueSelect03Nodulo02}, medindo ${valueInput01Nodulo02} x ${valueInput02Nodulo02} mm.`;
        }
      } else {
        setValueInput01Nodulo02("");
        setValueInput02Nodulo02("");
        setValueSelect01Nodulo02("");
        setValueSelect02Nodulo02("");
        setValueSelect03Nodulo02("");
        setValueSelect04Nodulo02("");
      }
      setFrasesNodulos((arr) => [...arr, string]);
      setConclusaoNodulos((arr) => [...arr, conclusao]);
    }
  };

  useEffect(() => {
    criaStringNodulo();
  }, [checkboxNodulo01,
    valueInput01Nodulo01,
    valueInput02Nodulo01,
    valueSelect01Nodulo01,
    valueSelect02Nodulo01,
    valueSelect03Nodulo01,
    valueSelect04Nodulo01,
    checkboxNodulo02,
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
    if (Object.keys(FrasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesNodulos,
        ConclusaoNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesNodulos,
        ConclusaoNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesNodulos]);

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
                isDisabled={!checkboxNodulo01}
                w="55px"
                placeholder="00"
              />
              x
              <Input
                value={valueInput02Nodulo01}
                onChange={(e) => {
                  setValueInput02Nodulo01(e.target.value);
                }}
                isDisabled={!checkboxNodulo01}
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              isDisabled={!checkboxNodulo01}
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
              isDisabled={!checkboxNodulo01}
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
              isDisabled={!checkboxNodulo01}
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
              isDisabled={!checkboxNodulo01}
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
                isDisabled={!checkboxNodulo02}
                w="55px"
                placeholder="00"
              />
              x
              <Input
                value={valueInput02Nodulo02}
                onChange={(e) => {
                  setValueInput02Nodulo02(e.target.value);
                }}
                isDisabled={!checkboxNodulo02}
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
              isDisabled={!checkboxNodulo02}
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
              isDisabled={!checkboxNodulo02}
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
              isDisabled={!checkboxNodulo02}
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
              isDisabled={!checkboxNodulo02}
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
