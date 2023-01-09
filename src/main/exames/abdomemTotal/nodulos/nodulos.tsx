import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Nodulos() {
  const altura = "100%";
  const largura = "66%";

  let input01Nodulo01 = document.querySelector(
    "#Input01Nodulo01"
  ) as HTMLInputElement;
  let input02Nodulo01 = document.querySelector(
    "#Input02Nodulo01"
  ) as HTMLInputElement;
  let select01Nodulo01 = document.querySelector(
    "#Select01Nodulo01"
  ) as HTMLInputElement;
  let select02Nodulo01 = document.querySelector(
    "#Select02Nodulo01"
  ) as HTMLInputElement;
  let select03Nodulo01 = document.querySelector(
    "#Select03Nodulo01"
  ) as HTMLInputElement;
  let select04Nodulo01 = document.querySelector(
    "#Select04Nodulo01"
  ) as HTMLInputElement;

  let input01Nodulo02 = document.querySelector(
    "#Input01Nodulo02"
  ) as HTMLInputElement;
  let input02Nodulo02 = document.querySelector(
    "#Input02Nodulo02"
  ) as HTMLInputElement;
  let select01Nodulo02 = document.querySelector(
    "#Select01Nodulo02"
  ) as HTMLInputElement;
  let select02Nodulo02 = document.querySelector(
    "#Select02Nodulo02"
  ) as HTMLInputElement;
  let select03Nodulo02 = document.querySelector(
    "#Select03Nodulo02"
  ) as HTMLInputElement;
  let select04Nodulo02 = document.querySelector(
    "#Select04Nodulo02"
  ) as HTMLInputElement;

  const [frasesNodulos, setFrasesNodulos] = useState<any>([]);

  const [valueInput01Nodulo01, setValueInput01Nodulo01] = useState("");
  const [valueInput02Nodulo01, setValueInput02Nodulo01] = useState("");
  const [fraseNodulo01, setFraseNodulo01] = useState("");

  const [valueSelect01Nodulo01, setValueSelect01Nodulo01] = useState("");

  const [valueSelect02Nodulo01, setValueSelect02Nodulo01] = useState("");
  const [valueSelect03Nodulo01, setValueSelect03Nodulo01] = useState("");

  const [fraseNodulo02, setFraseNodulo02] = useState("");
  const [valueInput01Nodulo02, setValueInput01Nodulo02] = useState("");
  const [valueInput02Nodulo02, setValueInput02Nodulo02] = useState("");

  const [valueSelect01Nodulo02, setValueSelect01Nodulo02] = useState("");

  const [valueSelect02Nodulo02, setValueSelect02Nodulo02] = useState("");
  const [valueSelect03Nodulo02, setValueSelect03Nodulo02] = useState("");

  const [valueNodulo01, setValueNodulo01] = useState({
    inputNodulo01: true,
    selectNodulo01: true,
  });
  const [valueNodulo02, setValueNodulo02] = useState({
    inputNodulo02: true,
    selectNodulo02: true,
  });

  const removeItemString = (value) => {
    var index = frasesNodulos.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
  };

  const criaStringNodulo01 = (value) => {
    let dadoSelect04Nodulo01 = value;
    const Frase =
      "Nódulo 01 com" +
      valueInput01Nodulo01 +
      " x " +
      valueInput02Nodulo01 +
      "mm localizado no " +
      valueSelect01Nodulo01 +
      " do " +
      valueSelect02Nodulo01 +
      " com contornos " +
      valueSelect03Nodulo01 +
      " do tipo " +
      dadoSelect04Nodulo01;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo01(Frase);
  };

  const removeStringNodulo01 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo01);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo01.value = "";
    input02Nodulo01.value = "";
    select01Nodulo01.value = "";
    select01Nodulo01.value = "";
    select02Nodulo01.value = "";
    select03Nodulo01.value = "";
    select04Nodulo01.value = "";
  };

  const criaStringNodulo02 = (value) => {
    let dadoSelect04Nodulo02 = value;
    const Frase =
      "Nódulo 01 com" +
      valueInput01Nodulo02 +
      " x " +
      valueInput02Nodulo02 +
      "mm localizado no " +
      valueSelect01Nodulo02 +
      " do " +
      valueSelect02Nodulo02 +
      " com contornos " +
      valueSelect03Nodulo02 +
      " do tipo " +
      dadoSelect04Nodulo02;
    setFrasesNodulos((arr) => [...arr, Frase]);
    setFraseNodulo02(Frase);
  };

  const removeStringNodulo02 = () => {
    const index = frasesNodulos.indexOf(fraseNodulo02);
    if (index > -1) {
      frasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
    input01Nodulo02.value = "";
    input02Nodulo02.value = "";
    select01Nodulo02.value = "";
    select01Nodulo02.value = "";
    select02Nodulo02.value = "";
    select03Nodulo02.value = "";
    select04Nodulo02.value = "";
  };

  const verificaChecked = (value) => {
    switch (value.id) {
      case "Nodulo01":
        if (value.checked === true) {
          setValueNodulo01({
            inputNodulo01: false,
            selectNodulo01: false,
          });
        } else {
          setValueNodulo01({
            inputNodulo01: true,
            selectNodulo01: true,
          });
          removeStringNodulo01();
        }
        break;
      case "Input01Nodulo01":
        setValueInput01Nodulo01(value.value);
        break;
      case "Input02Nodulo01":
        setValueInput02Nodulo01(value.value);
        break;
      case "Select01Nodulo01":
        if (value.value === "terço Superior") {
          removeItemString("terço Medio");
          removeItemString("terço Inferior");
          setValueSelect01Nodulo01(value.value);
        } else if (value.value === "terço Medio") {
          removeItemString("terço Superior");
          removeItemString("terço Inferior");
          setValueSelect01Nodulo01(value.value);
        } else {
          removeItemString("terço Superior");
          removeItemString("terço Medio");
          setValueSelect01Nodulo01(value.value);
        }
        break;
      case "Select02Nodulo01":
        if (value.value === "Rim direito") {
          removeItemString("Rim esquerdo");
          setValueSelect02Nodulo01(value.value);
        } else {
          removeItemString("Rim direito");
          setValueSelect02Nodulo01(value.value);
        }
        break;
      case "Select03Nodulo01":
        if (value.value === "regulares") {
          removeItemString("irregulares");
          setValueSelect03Nodulo01(value.value);
        } else {
          removeItemString("regulares");
          setValueSelect03Nodulo01(value.value);
        }
        break;
      case "Select04Nodulo01":
        criaStringNodulo01(value.value);
        break;
      case "Nodulo02":
        if (value.checked === true) {
          setValueNodulo02({
            inputNodulo02: false,
            selectNodulo02: false,
          });
        } else {
          setValueNodulo02({
            inputNodulo02: true,
            selectNodulo02: true,
          });
          removeStringNodulo02();
        }

        break;
      case "Input01Nodulo02":
        setValueInput01Nodulo02(value.value);
        break;
      case "Input02Nodulo02":
        setValueInput02Nodulo02(value.value);
        break;
      case "Select01Nodulo02":
        if (value.value === "terço Superior") {
          removeItemString("terço Medio");
          removeItemString("terço Inferior");
          setValueSelect01Nodulo02(value.value);
        } else if (value.value === "terço Medio") {
          removeItemString("terço Superior");
          removeItemString("terço Inferior");
          setValueSelect01Nodulo02(value.value);
        } else {
          removeItemString("terço Superior");
          removeItemString("terço Medio");
          setValueSelect01Nodulo02(value.value);
        }
        break;
      case "Select02Nodulo02":
        if (value.value === "Rim direito") {
          removeItemString("Rim esquerdo");
          setValueSelect02Nodulo02(value.value);
        } else {
          removeItemString("Rim direito");
          setValueSelect02Nodulo02(value.value);
        }
        break;
      case "Select03Nodulo02":
        if (value.value === "regulares") {
          removeItemString("irregulares");
          setValueSelect03Nodulo02(value.value);
        } else {
          removeItemString("regulares");
          setValueSelect03Nodulo02(value.value);
        }
        break;
      case "Select04Nodulo02":
        criaStringNodulo02(value.value);
        break;
    }
  };
  const subExame = "Nódulos";
  const titulo_exame = "Abdomen total";

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
      padding="24px 15px 24px 15px"
      mt="20px"
    >
      <Box h="100%">
        <TituloNomeExame titulo="Nódulos" />

        <Box gap="30px" display="flex" flexWrap="wrap" mt="20px" mb="10px">
          <Box w="200px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo01"
            >
              Nódulo 01
            </Checkbox>
            <Box>
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo01.inputNodulo01}
                id="Input01Nodulo01"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo01.inputNodulo01}
                id="Input02Nodulo01"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              id="Select01Nodulo01"
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
              mt="5px"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              id="Select02Nodulo01"
              w="160px"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim Esquerdo</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select03Nodulo01"
              w="160px"
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="regulares">Regulares</option>
              <option value="irregulares">Irregulares</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo01.selectNodulo01}
              mt="5px"
              id="Select04Nodulo01"
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

          <Box w="200px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="Nodulo02"
            >
              Nódulo 02
            </Checkbox>
            <Box>
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo02.inputNodulo02}
                id="Input01Nodulo02"
                w="55px"
                placeholder="00"
              />
              x
              <Input
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={valueNodulo02.inputNodulo02}
                id="Input02Nodulo02"
                w="55px"
                placeholder="00"
              />
              mm
            </Box>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              id="Select01Nodulo02"
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
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              mt="5px"
              id="Select02Nodulo02"
              disabled={valueNodulo02.selectNodulo02}
              w="160px"
            >
              <option value="" disabled selected>
                Do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim Esquerdo</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select03Nodulo02"
              w="160px"
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="regulares">Regulares</option>
              <option value="irregulares">Irregulares</option>
            </Select>
            <Select
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={valueNodulo02.selectNodulo02}
              mt="5px"
              id="Select04Nodulo02"
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
