/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Medidas({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [FrasesMedidas, setFrasesMedidas] = useState<any>([]);

  const [LoboDireitoCheckbox, setLoboDireitoCheckbox] = useState(false);
  const [LoboEsquerdoCheckbox, setLoboEsquerdoCheckbox] = useState(false);
  const [IstmoCheckbox, setIstmoCheckbox] = useState(false);
  const [IstmoDCheckbox, setIstmoDCheckbox] = useState(false);

  const [DisableInputsLoboDireito, setDisableInputsLoboDireito] =
    useState(true);
  const [ValueInput1LoboDireito, setValueInput1LoboDireito] = useState("");
  const [ValueInput2LoboDireito, setValueInput2LoboDireito] = useState("");
  const [ValueInput3LoboDireito, setValueInput3LoboDireito] = useState("");
  const [ValueInput4LoboDireito, setValueInput4LoboDireito] = useState(0);

  const [DisableInputsLoboEsquerdo, setDisableInputsLoboEsquerdo] =
    useState(true);
  const [ValueInput1LoboEsquerdo, setValueInput1LoboEsquerdo] = useState("");
  const [ValueInput2LoboEsquerdo, setValueInput2LoboEsquerdo] = useState("");
  const [ValueInput3LoboEsquerdo, setValueInput3LoboEsquerdo] = useState("");
  const [ValueInput4LoboEsquerdo, setValueInput4LoboEsquerdo] = useState(0);

  const [DisableInputsIstmo, setDisableInputsIstmo] = useState(true);
  const [DisableInputsIstmoFiliforme, setDisableInputsIstmoFiliforme] =
    useState(true);
  const [ValueInput1Istmo, setValueInput1Istmo] = useState("");
  const [ValueInput2Istmo, setValueInput2Istmo] = useState("");
  const [ValueInput3Istmo, setValueInput3Istmo] = useState("");
  const [ValueInput4Istmo, setValueInput4Istmo] = useState(0);
  const [IstmoFiliformeCheckbox, setIstmoFiliformeCheckbox] = useState(false);
  const [IstmoDesprezivelCheckbox, setIstmoDesprezivelCheckbox] =
    useState(false);

  const criaStringLoboDireito = () => {
    var string = "Lobo Direito Falta";
    removeFraseLoboDireito();
    var medida1cm = new Convert_Medida(ValueInput1LoboDireito).Convert_Medida();
    var medida2cm = new Convert_Medida(ValueInput2LoboDireito).Convert_Medida();
    var medida3cm = new Convert_Medida(ValueInput3LoboDireito).Convert_Medida();
    if (
      ValueInput1LoboDireito != "" &&
      ValueInput2LoboDireito != "" &&
      ValueInput3LoboDireito != ""
    ) {
      var medida4 =
        (parseInt(ValueInput1LoboDireito) *
          parseInt(ValueInput2LoboDireito) *
          parseInt(ValueInput3LoboDireito)) /
        1000;
      setValueInput4LoboDireito(medida4);
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm (${medida4} cm³) `;
      setFrasesMedidas((arr) => [...arr, string]);
    }
  };

  const removeFraseLoboDireito = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Direito Falta")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LoboDireitoCheckbox) {
      criaStringLoboDireito();
      setDisableInputsLoboDireito(false);
    } else {
      removeFraseLoboDireito();
      setDisableInputsLoboDireito(true);
      setValueInput1LoboDireito("");
      setValueInput2LoboDireito("");
      setValueInput3LoboDireito("");
      setValueInput4LoboDireito(0);
    }
  }, [
    LoboDireitoCheckbox,
    ValueInput1LoboDireito,
    ValueInput3LoboDireito,
    ValueInput2LoboDireito,
  ]);

  const criaStringLoboEsquerdo = () => {
    var string = "Lobo Esquerdo Falta";
    removeFraseLoboEsquerdo();
    var medida1cm = new Convert_Medida(
      ValueInput1LoboEsquerdo
    ).Convert_Medida();
    var medida2cm = new Convert_Medida(
      ValueInput2LoboEsquerdo
    ).Convert_Medida();
    var medida3cm = new Convert_Medida(
      ValueInput3LoboEsquerdo
    ).Convert_Medida();
    if (
      ValueInput1LoboEsquerdo != "" &&
      ValueInput2LoboEsquerdo != "" &&
      ValueInput3LoboEsquerdo != ""
    ) {
      var medida4 =
        (parseInt(ValueInput1LoboEsquerdo) *
          parseInt(ValueInput2LoboEsquerdo) *
          parseInt(ValueInput3LoboEsquerdo)) /
        1000;
      setValueInput4LoboEsquerdo(medida4);
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm (${medida4} cm³)`;
      setFrasesMedidas((arr) => [...arr, string]);
    }
  };

  const removeFraseLoboEsquerdo = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Esquerdo Falta")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LoboEsquerdoCheckbox) {
      criaStringLoboEsquerdo();
      setDisableInputsLoboEsquerdo(false);
    } else {
      removeFraseLoboEsquerdo();
      setDisableInputsLoboEsquerdo(true);
      setValueInput1LoboEsquerdo("");
      setValueInput2LoboEsquerdo("");
      setValueInput3LoboEsquerdo("");
      setValueInput4LoboEsquerdo(0);
    }
  }, [
    LoboEsquerdoCheckbox,
    ValueInput1LoboEsquerdo,
    ValueInput3LoboEsquerdo,
    ValueInput2LoboEsquerdo,
  ]);

  const criaStringIstmo = () => {
    var string = "Lobo Istmo Falta";
    removeFraseIstmo();
    var medida1cm = new Convert_Medida(ValueInput1Istmo).Convert_Medida();
    var medida2cm = new Convert_Medida(ValueInput2Istmo).Convert_Medida();
    var medida3cm = new Convert_Medida(ValueInput3Istmo).Convert_Medida();
    if (
      ValueInput1Istmo != "" &&
      ValueInput2Istmo != "" &&
      ValueInput3Istmo != ""
    ) {
      setDisableInputsIstmoFiliforme(true);
      var medida4 =
        (parseInt(ValueInput1Istmo) *
          parseInt(ValueInput2Istmo) *
          parseInt(ValueInput3Istmo)) /
        1000;
      setValueInput4Istmo(medida4);
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm ${medida4} cm³`;
      setFrasesMedidas((arr) => [...arr, string]);
    }
  };
  const removeString = (value) => {
    var index = FrasesMedidas.indexOf(value);
    if (index > -1) {
      FrasesMedidas.splice(index, 1);
      setFrasesMedidas((arr) => [...arr]);
    }
  };

  const removeFraseIstmo = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Istmo Falta")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringIstmoFiliforme = () => {
    var string = "Lobo Filoforme Falta";
    removeFraseIstmo();
    if (IstmoFiliformeCheckbox) {
      setFrasesMedidas((arr) => [...arr, string]);
    } else {
      removeString(string);
    }
  };
  
  const criaStringIstmoDesprezivel = () => {
    var string = "Lobo Istmo Desprezível";
    removeFraseIstmo();
    if (IstmoDesprezivelCheckbox) {
      setFrasesMedidas((arr) => [...arr, string]);
    } else {
      removeString(string);
    }
  };

  useEffect(() => {
    var string = "Lobo Filoforme Falta";
    if (IstmoCheckbox) {
      setDisableInputsIstmoFiliforme(false);
      if (IstmoFiliformeCheckbox) {
        criaStringIstmoFiliforme();
        setDisableInputsIstmo(true);
      } else {
        removeString(string);
        setDisableInputsIstmo(false);
        criaStringIstmo();
      }
    } else {
      removeFraseIstmo();
      setDisableInputsIstmo(true);
      setDisableInputsIstmoFiliforme(true);
      setValueInput1Istmo("");
      setValueInput2Istmo("");
      setValueInput3Istmo("");
      setValueInput4Istmo(0);
    }
  }, [
    IstmoCheckbox,
    ValueInput1Istmo,
    ValueInput3Istmo,
    ValueInput2Istmo,
    IstmoFiliformeCheckbox,
  ]);

  useEffect(() => {
    var string = "Lobo Istmo Desprezível";
    if (IstmoCheckbox) {
      setDisableInputsIstmoFiliforme(false);
      if (IstmoDesprezivelCheckbox) {
        criaStringIstmoDesprezivel();
        setDisableInputsIstmo(true);
      } else {
        removeString(string);
        setDisableInputsIstmo(false);
      }
    } else {
      removeFraseIstmo();
      setDisableInputsIstmo(true);
      setDisableInputsIstmoFiliforme(true);
      setValueInput1Istmo("");
      setValueInput2Istmo("");
      setValueInput3Istmo("");
      setValueInput4Istmo(0);
    }
  }, [IstmoDesprezivelCheckbox]);

  const subExame = "Medidas";
  const titulo_exame = "Doppler da Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesMedidas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesMedidas
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesMedidas]);

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
      <TituloNomeExame titulo="Medidas" />

      <Box display="flex" flexWrap="wrap" gap="20px" mb="10px">
        <Box>
          <Checkbox
            isDisabled={Disable}
            onChange={() => {
              setLoboDireitoCheckbox(!LoboDireitoCheckbox);
            }}
          >
            Lobo Direito
          </Checkbox>
          <Box display="flex" flexWrap="wrap">
            <Input
              w="60px"
              value={ValueInput1LoboDireito}
              isDisabled={DisableInputsLoboDireito}
              onChange={(e) => {
                setValueInput1LoboDireito(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">x</Text>
            <Input
              w="60px"
              isDisabled={DisableInputsLoboDireito}
              value={ValueInput2LoboDireito}
              onChange={(e) => {
                setValueInput2LoboDireito(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">x</Text>
            <Input
              w="60px"
              value={ValueInput3LoboDireito}
              isDisabled={DisableInputsLoboDireito}
              onChange={(e) => {
                setValueInput3LoboDireito(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">mm</Text>
            <Text alignSelf="center"> ({ValueInput4LoboDireito} cm³)</Text>
          </Box>
        </Box>
        <Box>
          <Checkbox
            isDisabled={Disable}
            onChange={() => {
              setLoboEsquerdoCheckbox(!LoboEsquerdoCheckbox);
            }}
          >
            Lobo Esquerdo
          </Checkbox>
          <Box display="flex" flexWrap="wrap">
            <Input
              w="60px"
              value={ValueInput1LoboEsquerdo}
              isDisabled={DisableInputsLoboEsquerdo}
              onChange={(e) => {
                setValueInput1LoboEsquerdo(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">x</Text>
            <Input
              w="60px"
              isDisabled={DisableInputsLoboEsquerdo}
              value={ValueInput2LoboEsquerdo}
              onChange={(e) => {
                setValueInput2LoboEsquerdo(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">x</Text>
            <Input
              w="60px"
              value={ValueInput3LoboEsquerdo}
              isDisabled={DisableInputsLoboEsquerdo}
              onChange={(e) => {
                setValueInput3LoboEsquerdo(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">mm</Text>
            <Text alignSelf="center"> ({ValueInput4LoboEsquerdo} cm³)</Text>
          </Box>
        </Box>
        <Box>
          <Checkbox
            isDisabled={Disable}
            onChange={() => {
              setIstmoCheckbox(!IstmoCheckbox);
            }}
          >
            Istmo
          </Checkbox>
          <Box display="flex" flexWrap="wrap">
            <Input
              w="60px"
              value={ValueInput1Istmo}
              isDisabled={DisableInputsIstmo}
              onChange={(e) => {
                setValueInput1Istmo(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">x</Text>
            <Input
              w="60px"
              isDisabled={DisableInputsIstmo}
              value={ValueInput2Istmo}
              onChange={(e) => {
                setValueInput2Istmo(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">x</Text>
            <Input
              w="60px"
              value={ValueInput3Istmo}
              isDisabled={DisableInputsIstmo}
              onChange={(e) => {
                setValueInput3Istmo(e.target.value);
              }}
              placeholder="0"
            />
            <Text alignSelf="center">mm</Text>
            <Text alignSelf="center"> ({ValueInput4Istmo} cm³)</Text>
          </Box>

          <Checkbox
            isDisabled={DisableInputsIstmoFiliforme}
            onChange={(e) => {
              setIstmoFiliformeCheckbox(!IstmoFiliformeCheckbox);
            }}
          >
            o istmo é filiforme? (não mensurável)
          </Checkbox>
          <Checkbox
            isDisabled={DisableInputsIstmoFiliforme}
            onChange={(e) => {
              setIstmoDesprezivelCheckbox(!IstmoDesprezivelCheckbox);
            }}
          >
            Istmo desprezível
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

export default Medidas;
