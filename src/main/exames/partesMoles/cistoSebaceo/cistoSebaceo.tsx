/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CistoSebaceo({ Disable }) {
  const altura = "100%";
  const largura = "auto";

  const [frasesCistoSeb, setFrasesCistoSeb] = useState<any>([]);
  const [ConclusaoCistoSeb, setConclusaoCistoSeb] = useState<any>([]);

  const [inputLocalCistoSebaceo, setInputLocalCistoSebaceo] = useState<
    string | null
  >(null);

  const [LocalCistoSebaceoCheckbox, setCheckboxLocalCistoSebaceo] =
    useState(false);
  const [disableInputLocalCistoSebaceo, setDisableInputLocalCistoSebaceo] =
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
    LocalCistoSebaceoCheckbox
      ? setDisableInputLocalCistoSebaceo(false)
      : setDisableInputLocalCistoSebaceo(true);
    removeLocalCistoSebaceo();
    setInputLocalCistoSebaceo("");
  }, [LocalCistoSebaceoCheckbox]);

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

  const criaStringLocalCistoSebaceo = (local) => {
    removeLocalCistoSebaceo();
    const conclusao = 'Provável cisto sebáceo.'
    removeConclusaoCisto()
    if (local !== "" && local !== null) {
      let string = `Presença de imagem cística superficial de conteúdo hipoecogênico, com contornos regulares,sugestiva de cisto sebáceo localizado ${local} `;
      setConclusaoCistoSeb((arr) => [...arr, conclusao])
      setFrasesCistoSeb((arr) => [...arr, string]);
    }
  };

  const criaStringCistoUnico = (
    medida1CistoUnico,
    medida2CistoUnico,
    medida3CistoUnico
  ) => {
    removeCistoUnico();
    removeConclusaoCisto()
    if (
      medida1CistoUnico !== "" &&
      medida2CistoUnico !== "" &&
      medida3CistoUnico !== ""
    ) {
      let string = `Cisto único mede ${medida1CistoUnico}x${medida2CistoUnico}x${medida3CistoUnico}mm`;
      const conclusao = 'Provável cisto sebáceo.'
      setConclusaoCistoSeb((arr) => [...arr, conclusao])
      setFrasesCistoSeb((arr) => [...arr, string]);
    }
  };
  const criaStringMultiplosCistos = (medida1MultiplosCistos, medida2MultiplosCistos, medida3MultiplosCistos) => {
    removeMultiplosCistos();
    removeConclusaoCisto()
    if (medida1MultiplosCistos !== "" && medida2MultiplosCistos !== "" && medida3MultiplosCistos !== "") {
      let string = `Múltiplos cistos o maior mede ${medida1MultiplosCistos} x ${medida2MultiplosCistos} x ${medida3MultiplosCistos} mm`;
      const conclusao = 'Provável cisto sebáceo.'
      setConclusaoCistoSeb((arr) => [...arr, conclusao])
      setFrasesCistoSeb((arr) => [...arr, string]);
    }
  };

  const removeLocalCistoSebaceo = () => {
    frasesCistoSeb.map((e) => {
      if (e.includes("Presença de imagem cística ")) {
        let index = frasesCistoSeb.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCistoSeb.splice(index, 1);
          setFrasesCistoSeb((arr) => [...arr]);
        }
      }
    });
  };

  const removeCistoUnico = () => {
    frasesCistoSeb.map((e) => {
      if (e.includes("Cisto único")) {
        let index = frasesCistoSeb.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCistoSeb.splice(index, 1);
          setFrasesCistoSeb((arr) => [...arr]);
        }
      }
    });
  };
  const removeMultiplosCistos = () => {
    frasesCistoSeb.map((e) => {
      if (e.includes("Múltiplos cistos")) {
        let index = frasesCistoSeb.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCistoSeb.splice(index, 1);
          setFrasesCistoSeb((arr) => [...arr]);
        }
      }
    });
  };
  const removeConclusaoCisto = () => {
    ConclusaoCistoSeb.map((e) => {
      if (e.includes("Provável cisto sebáceo.")) {
        let index = ConclusaoCistoSeb.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoCistoSeb.splice(index, 1);
          setConclusaoCistoSeb((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Provável cisto sebáceo.');
        }
      }
    });
  };

  const criaStringConclusao = () => {
    const conclusao = 'Provável cisto sebáceo.'
    setConclusaoCistoSeb((arr) => [...arr, conclusao])
  }

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
    criaStringLocalCistoSebaceo(inputLocalCistoSebaceo);
  }, [inputLocalCistoSebaceo]);

  const subExame = "Cisto Sebáceo";
  const titulo_exame = "Partes Moles";
  //  const [frasesCistoSeb, setFrasesCistoSeb] = useState<any>([]);

  useEffect(() => {
    if (Object.keys(frasesCistoSeb).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCistoSeb,
        ConclusaoCistoSeb
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCistoSeb,
        ConclusaoCistoSeb
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCistoSeb]);

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
      <TituloNomeExame titulo="Cisto Sebaceo" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Stack>
          <HStack>
            <Checkbox
              isDisabled={Disable}
              onChange={(e) =>
                setCheckboxLocalCistoSebaceo(!LocalCistoSebaceoCheckbox)
              }
              mr="30px"
            >
              Cisto Sebaceo
            </Checkbox>
            <Text>Local</Text>
            <Input
              w="30%"
              isDisabled={disableInputLocalCistoSebaceo}
              h="30px"
              padding="5px"
              textAlign="center"
              onBlur={(e) => {
                setInputLocalCistoSebaceo(e.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setInputLocalCistoSebaceo(event.currentTarget.value);
                }
              }}
            />
          </HStack>

          <HStack>
            <Checkbox
              isDisabled={Disable}
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
              isDisabled={Disable}
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
export default CistoSebaceo;
