/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CistoAnecoico() {
  const altura = "100%";
  const largura = "95%";

  const [frasesCistoAne, setFrasesCistoAne] = useState<any>([]);

  const [inputLocalCistoAnecoico, setInputLocalCistoAnecoico] = useState("");
  const [LocalCistoAnecoicoCheckbox, setCheckboxLocalCistoAnecoico] =
    useState(false);
  const [disableInputLocalCistoAnecoico, setDisableInputLocalCistoAnecoico] =
    useState(true);

  const [CistoUnicoCheckbox, setCistoUnicoCheckbox] = useState(false);
  const [disableCistoInput1, setDisableCistoInput1] = useState(true);
  const [medida1CistoUnico, setMedida1CistoUnico] = useState("");
  const [medida2CistoUnico, setMedida2CistoUnico] = useState("");
  const [medida3CistoUnico, setMedida3CistoUnico] = useState("");

  const [MultiplosCistosCheckbox, setMultiplosCistosCheckbox] = useState(false);
  const [disableCistoInput2, setDisableCistoInput2] = useState(true);
  const [medida1MultiplosCistos, setMedida1MultiplosCistos] = useState("");
  const [medida2MultiplosCistos, setMedida2MultiplosCistos] = useState("");
  const [medida3MultiplosCistos, setMedida3MultiplosCistos] = useState("");

  useEffect(() => {
    LocalCistoAnecoicoCheckbox
      ? setDisableInputLocalCistoAnecoico(false)
      : setDisableInputLocalCistoAnecoico(true);
    removeLocalCistoAnecoico();
    setInputLocalCistoAnecoico("");
  }, [LocalCistoAnecoicoCheckbox]);

  useEffect(() => {
    CistoUnicoCheckbox
      ? setDisableCistoInput1(false)
      : setDisableCistoInput1(true);
    removeCistoUnico();
    setMedida1CistoUnico("");
    setMedida2CistoUnico("");
    setMedida3CistoUnico("");
  }, [CistoUnicoCheckbox]);

  useEffect(() => {
    MultiplosCistosCheckbox
      ? setDisableCistoInput2(false)
      : setDisableCistoInput2(true);
    removeMultiplosCistos();
    setMedida1MultiplosCistos("");
    setMedida2MultiplosCistos("");
    setMedida3MultiplosCistos("");
  }, [MultiplosCistosCheckbox]);

  const criaStringLocalCistoAnecoico = (local) => {
    removeLocalCistoAnecoico();
    if (local !== "" && local != null) {
      let string = `Cisto Anecóico localizado ${local} `;
      setFrasesCistoAne((arr) => [...arr, string]);
    }
  };

  const criaStringCistoUnico = (
    medida1CistoUnico,
    medida2CistoUnico,
    medida3CistoUnico
  ) => {
    removeCistoUnico();
    if (
      medida1CistoUnico !== "" &&
      medida2CistoUnico !== "" &&
      medida3CistoUnico !== ""
    ) {
      let string = `Cisto único mede ${medida1CistoUnico}x${medida2CistoUnico}x${medida3CistoUnico}mm`;
      setFrasesCistoAne((arr) => [...arr, string]);
    }
  };
  const criaStringMultiplosCistos = (
    medida1MultiplosCistos,
    medida2MultiplosCistos,
    medida3MultiplosCistos
  ) => {
    removeMultiplosCistos();
    if (
      medida1MultiplosCistos !== "" &&
      medida2MultiplosCistos !== "" &&
      medida3MultiplosCistos !== ""
    ) {
      let string = `Múltiplos cistos o maior mede ${medida1MultiplosCistos}x${medida2MultiplosCistos}x${medida3MultiplosCistos}mm`;
      setFrasesCistoAne((arr) => [...arr, string]);
    }
  };

  const removeLocalCistoAnecoico = () => {
    frasesCistoAne.map((e) => {
      if (e.includes("Cisto Anecóico ")) {
        let index = frasesCistoAne.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCistoAne.splice(index, 1);
          setFrasesCistoAne((arr) => [...arr]);
        }
      }
    });
  };

  const removeCistoUnico = () => {
    frasesCistoAne.map((e) => {
      if (e.includes("Cisto único")) {
        let index = frasesCistoAne.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCistoAne.splice(index, 1);
          setFrasesCistoAne((arr) => [...arr]);
        }
      }
    });
  };
  const removeMultiplosCistos = () => {
    frasesCistoAne.map((e) => {
      if (e.includes("Múltiplos cistos")) {
        let index = frasesCistoAne.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCistoAne.splice(index, 1);
          setFrasesCistoAne((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCistoUnico(
      medida1CistoUnico,
      medida2CistoUnico,
      medida3CistoUnico
    );
  }, [medida1CistoUnico, medida2CistoUnico, medida3CistoUnico]);
  useEffect(() => {
    criaStringMultiplosCistos(
      medida1MultiplosCistos,
      medida2MultiplosCistos,
      medida3MultiplosCistos
    );
  }, [medida1MultiplosCistos, medida2MultiplosCistos, medida3MultiplosCistos]);

  useEffect(() => {
    criaStringLocalCistoAnecoico(inputLocalCistoAnecoico);
  }, [inputLocalCistoAnecoico]);

  const subExame = "Cisto Anecóico";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesCistoAne).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCistoAne
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCistoAne
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCistoAne]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Cisto Anecóico" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Stack>
          <HStack>
            <Checkbox
              onChange={(e) =>
                setCheckboxLocalCistoAnecoico(!LocalCistoAnecoicoCheckbox)
              }
              mr="30px"
            >
              Cisto Anecóico
            </Checkbox>
            <Text>Local</Text>
            <Input
              w="30%"
              isDisabled={disableInputLocalCistoAnecoico}
              h="30px"
              padding="5px"
              textAlign="center"
              onBlur={(e) => {
                setInputLocalCistoAnecoico(e.target.value);
              }}
            />
          </HStack>

          <HStack>
            <Checkbox
              onChange={(e) => setCistoUnicoCheckbox(!CistoUnicoCheckbox)}
            >
              Cisto único
            </Checkbox>
            <Input
              isDisabled={disableCistoInput1}
              w="35px"
              h="30px"
              value={medida1CistoUnico}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1CistoUnico(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableCistoInput1}
              w="35px"
              h="30px"
              value={medida2CistoUnico}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2CistoUnico(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableCistoInput1}
              w="35px"
              h="30px"
              value={medida3CistoUnico}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3CistoUnico(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>

          <HStack>
            <Checkbox
              onChange={(e) =>
                setMultiplosCistosCheckbox(!MultiplosCistosCheckbox)
              }
            >
              Múltiplos cistos
            </Checkbox>
            <Input
              isDisabled={disableCistoInput2}
              w="35px"
              h="30px"
              value={medida1MultiplosCistos}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1MultiplosCistos(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableCistoInput2}
              w="35px"
              h="30px"
              value={medida2MultiplosCistos}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2MultiplosCistos(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableCistoInput2}
              w="35px"
              h="30px"
              value={medida3MultiplosCistos}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3MultiplosCistos(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
export default CistoAnecoico;
