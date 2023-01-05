import { Box, Checkbox, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Pancreas() {
  const altura = "100%";
  const largura = "66%";

  let InputCisto = document.querySelector("#InputCisto") as HTMLInputElement;

  const { laudoNormal } = useContext(NormalContext);
  const [frasesPancreas, setFrasesPancreas] = useState<any>([]);

  const [ValueInputCisto, setValueInputCisto] = useState("");

  const [defaultValueNormal, setDefaultValueNormal] = useState({
    defaultValueNormal: false,
  });

  const [checkValueNormal, setCheckValueNormal] = useState({
    normal: false,
  });

  const [checkValueCisto, setCheckValueCisto] = useState({
    cisto: false,
    input: true,
  });
  const [checkValueNaoVisibilizado, setCheckValueNaoVisibilizado] = useState({
    NaoVisibilizado: false,
  });
  const [checkValuePancreatiteAguda, setCheckValuePancreatiteAguda] = useState({
    PancreatiteAguda: false,
  });
  const [checkValuePancreatiteCronica, setCheckValuePancreatiteCronica] =
    useState({
      PancreatiteCronica: false,
    });
  const criarString = (value, valueId?, valueInput?) => {
    //console.log("Valor cria string = ", value);
    //arr => [...arr] captura os dados que já estavam e os mantem no array
    setFrasesPancreas((arr) => [...arr, value]);
    //console.log("criaString = ", laudoPrin)
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesPancreas.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesPancreas.splice(index, 1);
      setFrasesPancreas((arr) => [...arr]);
    }
  };

  const criaStringInputCisto = (value) => {
    const string = "Pancreas com cisto de " + value.value + "mm ";
    setValueInputCisto(string);
    setFrasesPancreas((arr) => [...arr, string]);
  };

  const removeStringCisto = () => {
    const index = frasesPancreas.indexOf(ValueInputCisto);
    if (index > -1) {
      frasesPancreas.splice(index, 1);
      setFrasesPancreas((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (laudoNormal === true) {
      setDefaultValueNormal({ defaultValueNormal: true });
      criarString("Pâncreas está está normal ");
      setCheckValueCisto({
        cisto: true,
        input: true,
      });
      setCheckValueNaoVisibilizado({
        NaoVisibilizado: true,
      });
      setCheckValuePancreatiteAguda({
        PancreatiteAguda: true,
      });
      setCheckValuePancreatiteCronica({
        PancreatiteCronica: true,
      });
    } else {
      setDefaultValueNormal({ defaultValueNormal: false });
      //   removeNormal()
      setCheckValueCisto({
        cisto: false,
        input: true,
      });
      setCheckValueNaoVisibilizado({
        NaoVisibilizado: false,
      });
      setCheckValuePancreatiteAguda({
        PancreatiteAguda: false,
      });
      setCheckValuePancreatiteCronica({
        PancreatiteCronica: false,
      });
    }
  }, [laudoNormal]);

  const setValueFrasePancreas = (value) => {
    switch (value.id) {
      case "PancreasNormal":
        if (value.checked === true) {
          setDefaultValueNormal({ defaultValueNormal: true });
          setFrasesPancreas((arr) => [...arr, value.value]);
          setCheckValueCisto({
            cisto: true,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: true,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: true,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: true,
          });
        } else {
          setDefaultValueNormal({ defaultValueNormal: false });
          removeItemString(value.value);
          setCheckValueCisto({
            cisto: false,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: false,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: false,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: false,
          });
        }
        break;
      case "NaoVisibilizado":
        if (value.checked === true) {
          setFrasesPancreas((arr) => [...arr, value.value]);
          setCheckValueCisto({
            cisto: true,
            input: true,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: true,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: true,
          });
          setCheckValueNormal({
            normal: true,
          });
        } else {
          removeItemString(value.value);
          setCheckValueCisto({
            cisto: false,
            input: true,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: false,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: false,
          });
          setCheckValueNormal({
            normal: false,
          });
        }
        break;
      case "PancreatiteAguda":
        if (value.checked === true) {
          setFrasesPancreas((arr) => [...arr, value.value]);
          setCheckValueCisto({
            cisto: true,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: true,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: true,
          });
          setCheckValueNormal({
            normal: true,
          });
        } else {
          removeItemString(value.value);
          setCheckValueCisto({
            cisto: false,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: false,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: false,
          });
          setCheckValueNormal({
            normal: false,
          });
        }
        break;
      case "PancreatiteCronica":
        if (value.checked === true) {
          setFrasesPancreas((arr) => [...arr, value.value]);
          setCheckValueCisto({
            cisto: true,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: true,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: true,
          });
          setCheckValueNormal({
            normal: true,
          });
        } else {
          removeItemString(value.value);
          setCheckValueCisto({
            cisto: false,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: false,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: false,
          });
          setCheckValueNormal({
            normal: false,
          });
        }
        break;
      case "cisto":
        if (value.checked === true) {
          setCheckValueCisto({
            cisto: false,
            input: false,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: true,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: true,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: true,
          });
          setCheckValueNormal({
            normal: true,
          });
        } else {
          setCheckValueCisto({
            cisto: false,
            input: true,
          });
          setCheckValueNaoVisibilizado({
            NaoVisibilizado: false,
          });
          setCheckValuePancreatiteAguda({
            PancreatiteAguda: false,
          });
          setCheckValuePancreatiteCronica({
            PancreatiteCronica: false,
          });
          setCheckValueNormal({
            normal: false,
          });
          removeStringCisto();
          InputCisto.value = "";
        }
        break;
      case "InputCisto":
        criaStringInputCisto(value);
        break;
    }
  };
  const subExame = "Pâncreas";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(frasesPancreas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPancreas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPancreas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPancreas]);

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
      <Box>
        <TituloNomeExame titulo="Pâncreas" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box>
            <Checkbox
              isChecked={defaultValueNormal.defaultValueNormal}
              disabled={checkValueNormal.normal}
              value="Pâncreas está está normal "
              id="PancreasNormal"
              onChange={(e) => {
                setValueFrasePancreas(e.target);
              }}
            >
              Pancreas Normal
            </Checkbox>
          </Box>
          <Box w="100px">
            <Checkbox
              disabled={checkValueCisto.cisto}
              id="cisto"
              onChange={(e) => {
                setValueFrasePancreas(e.target);
              }}
            >
              Cisto
            </Checkbox>
            <Input
              disabled={checkValueCisto.input}
              w="80px"
              id="InputCisto"
              onBlur={(e) => {
                setValueFrasePancreas(e.target);
              }}
              placeholder="mm"
            />
          </Box>
          <Box>
            <Checkbox
              disabled={checkValueNaoVisibilizado.NaoVisibilizado}
              value="Pancreas não visibilizado"
              id="NaoVisibilizado"
              onChange={(e) => {
                setValueFrasePancreas(e.target);
              }}
            >
              Não visibilizado
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              disabled={checkValuePancreatiteAguda.PancreatiteAguda}
              value="Pancreas com pancreatite aguda"
              id="PancreatiteAguda"
              onChange={(e) => {
                setValueFrasePancreas(e.target);
              }}
            >
              Pancreatite Aguda
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              disabled={checkValuePancreatiteCronica.PancreatiteCronica}
              value="Pancreas com pancreatite cronica"
              id="PancreatiteCronica"
              onChange={(e) => {
                setValueFrasePancreas(e.target);
              }}
            >
              Pancreatite Crônica
            </Checkbox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pancreas;
