import { Box, Checkbox, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Medidas() {
  const altura = "100%";
  const largura = "66%";

  let inputPrimeiraMedidaLoboDireito = document.querySelector(
    "#InputPrimeiraMedidaLoboDireito"
  ) as HTMLInputElement;
  let inputSegundaMedidaLoboDireito = document.querySelector(
    "#InputSegundaMedidaLoboDireito"
  ) as HTMLInputElement;
  let inputTerceiraMedidaLoboDireito = document.querySelector(
    "#InputTerceiraMedidaLoboDireito"
  ) as HTMLInputElement;

  let inputPrimeiraMedidaLoboEsquerdo = document.querySelector(
    "#InputPrimeiraMedidaLoboEsquerdo"
  ) as HTMLInputElement;
  let inputSegundaMedidaLoboEsquerdo = document.querySelector(
    "#InputSegundaMedidaLoboEsquerdo"
  ) as HTMLInputElement;
  let inputTerceiraMedidaLoboEsquerdo = document.querySelector(
    "#InputTerceiraMedidaLoboEsquerdo"
  ) as HTMLInputElement;
  let inputIstmo = document.querySelector("#InputIstmo") as HTMLInputElement;

  const [frasesMedidas, setFrasesMedidas] = useState<any>([]);

  const [valueInput1Medida, setValueInput1Medida] = useState("");
  const [valueInput2Medida, setValueInput2Medida] = useState("");
  const [valueFraseMedidaLoboDireito, setValueFraseMedidaLoboDireito] =
    useState("");
  const [valueFraseMedidaLoboEsquerdo, setValueFraseMedidaLoboEsquerdo] =
    useState("");
  const [valueFraseIstmo, setValueFraseIstmo] = useState("");

  const [checkValueMedidasLoboDireito, setCheckvalueMedidasLoboDireito] =
    useState({
      inputMedidaLoboDireito: true,
    });
  const [checkValueMedidasLoboEsquerdo, setCheckvalueMedidasLoboEsquerdo] =
    useState({
      inputMedidaLoboEsquerdo: true,
    });

  const [checkValueIstmo, setCheckvalueIstmo] = useState({
    inputIstmo: true,
  });

  const CriaStringMedidaLoboDireito = (value) => {
    let dadoInputTerceiraMedidaLoboDireito = value;
    const valorInput =
      "Lobo Direito com " +
      valueInput1Medida +
      " x " +
      valueInput2Medida +
      " x " +
      dadoInputTerceiraMedidaLoboDireito +
      "mm ";
    setFrasesMedidas((arr) => [...arr, valorInput]);
    setValueFraseMedidaLoboDireito(valorInput);
  };

  const removeStringMedidaLoboDireito = () => {
    const index = frasesMedidas.indexOf(valueFraseMedidaLoboDireito);
    if (index > -1) {
      frasesMedidas.splice(index, 1);
      setFrasesMedidas((arr) => [...arr]);
    }
    inputPrimeiraMedidaLoboDireito.value = "";
    inputSegundaMedidaLoboDireito.value = "";
    inputTerceiraMedidaLoboDireito.value = "";
  };

  const CriaStringMedidaLoboEsquerdo = (value) => {
    let dadoInputTerceiraMedidaLoboEsquerdo = value;
    const valorInput =
      "Lobo Esquerdo com " +
      valueInput1Medida +
      " x " +
      valueInput2Medida +
      " x " +
      dadoInputTerceiraMedidaLoboEsquerdo +
      "mm ";
    setFrasesMedidas((arr) => [...arr, valorInput]);
    setValueFraseMedidaLoboEsquerdo(valorInput);
  };

  const removeStringMedidaLoboEsquerdo = () => {
    const index = frasesMedidas.indexOf(valueFraseMedidaLoboEsquerdo);
    if (index > -1) {
      frasesMedidas.splice(index, 1);
      setFrasesMedidas((arr) => [...arr]);
    }
    inputPrimeiraMedidaLoboEsquerdo.value = "";
    inputSegundaMedidaLoboEsquerdo.value = "";
    inputTerceiraMedidaLoboEsquerdo.value = "";
  };

  const pegaValorInputIstmo = (value) => {
    let dadoInputIstmo = value;
    const valorInput = "Istmo com " + dadoInputIstmo + "mm ";
    setFrasesMedidas((arr) => [...arr, valorInput]);
    setValueFraseIstmo(valorInput);
  };

  const removeStringIstmo = () => {
    const index = frasesMedidas.indexOf(valueFraseIstmo);
    if (index > -1) {
      frasesMedidas.splice(index, 1);
      setFrasesMedidas((arr) => [...arr]);
    }
    inputIstmo.value = "";
  };

  const verificaChecked = (value) => {
    switch (value.id) {
      case "LoboDireito":
        if (value.checked === true) {
          setCheckvalueMedidasLoboDireito({
            inputMedidaLoboDireito: false,
          });
        } else {
          setCheckvalueMedidasLoboDireito({
            inputMedidaLoboDireito: true,
          });
          removeStringMedidaLoboDireito();
        }
        break;
      case "InputPrimeiraMedidaLoboDireito":
        setValueInput1Medida(value.value);
        break;
      case "InputSegundaMedidaLoboDireito":
        setValueInput2Medida(value.value);
        break;
      case "InputTerceiraMedidaLoboDireito":
        CriaStringMedidaLoboDireito(value.value);
        break;
      case "LoboEsquerdo":
        if (value.checked === true) {
          setCheckvalueMedidasLoboEsquerdo({
            inputMedidaLoboEsquerdo: false,
          });
        } else {
          setCheckvalueMedidasLoboEsquerdo({
            inputMedidaLoboEsquerdo: true,
          });
          removeStringMedidaLoboEsquerdo();
        }
        break;
      case "InputPrimeiraMedidaLoboEsquerdo":
        setValueInput1Medida(value.value);
        break;
      case "InputSegundaMedidaLoboEsquerdo":
        setValueInput2Medida(value.value);
        break;
      case "InputTerceiraMedidaLoboEsquerdo":
        CriaStringMedidaLoboEsquerdo(value.value);
        break;
      case "Istmo":
        if (value.checked === true) {
          setCheckvalueIstmo({
            inputIstmo: false,
          });
        } else {
          setCheckvalueIstmo({
            inputIstmo: true,
          });
          removeStringIstmo();
        }
        break;
      case "InputIstmo":
        pegaValorInputIstmo(value.value);
        break;
    }
  };

  const subExame = "Medidas";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(frasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidas]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Box mb="20px">
        <TituloNomeExame titulo="Medidas" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box w="200px">
            <Checkbox
              id="LoboDireito"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Lobo Direito
            </Checkbox>
            <Box>
              <Input
                id="InputPrimeiraMedidaLoboDireito"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueMedidasLoboDireito.inputMedidaLoboDireito}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                id="InputSegundaMedidaLoboDireito"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueMedidasLoboDireito.inputMedidaLoboDireito}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                id="InputTerceiraMedidaLoboDireito"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueMedidasLoboDireito.inputMedidaLoboDireito}
                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
          <Box w="200px">
            <Checkbox
              id="LoboEsquerdo"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Lobo Esquerdo
            </Checkbox>
            <Box>
              <Input
                id="InputPrimeiraMedidaLoboEsquerdo"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueMedidasLoboEsquerdo.inputMedidaLoboEsquerdo}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                id="InputSegundaMedidaLoboEsquerdo"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueMedidasLoboEsquerdo.inputMedidaLoboEsquerdo}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                id="InputTerceiraMedidaLoboEsquerdo"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueMedidasLoboEsquerdo.inputMedidaLoboEsquerdo}
                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
          <Box w="200px">
            <Checkbox
              id="Istmo"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Istmo
            </Checkbox>
            <Box>
              <Input
                id="InputIstmo"
                onBlur={(e) => {
                  verificaChecked(e.target);
                }}
                disabled={checkValueIstmo.inputIstmo}
                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Medidas;
