/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function Veias_Superficiais_Refluxo_Esquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesMedidasE, setFrasesMedidasE] = useState<any>([]);

  const criaString = (string) => {
    setFrasesMedidasE((arr) => [...arr, string]);
  };

  const removeString = (string) => {
    frasesMedidasE.map((e) => {
      if (e.includes("Veia safena magna direita insuficiente desde")) {
        let index = frasesMedidasE.indexOf(e);
        if (index > -1) {
          frasesMedidasE.splice(index, 1);
          setFrasesMedidasE((arr) => [...arr]);
        }
      }
    });
  };

  //SAFENA MAGNA
  const [safenaMagna, setSafenaMagna] = useState(false);
  const [disableMagna, setdisableSafenaMagna] = useState(false);

  //SAFENA MAGNA AUSENTE

  const [safenaMagnaAusente, setSafenaMagnaAusente] = useState(false);
  const [disableMagnaAusente, setdisableSafenaMagnaAusente] = useState(false);

  //CHECKBOX DESDE PRIMARIO

  const [disableCheckBoxDesde_Primario, setDisablecheckBoxDesde_Primario] =
    useState(true);
  const [checkBoxDesde_Primario, setCheckBoxDesde_Primario] = useState(false);

  //SELECT DESDE PRIMARIO

  const [disableSelectDesde_Primario, setDisableSelectBoxDesde_Primario] =
    useState(true);
  const [valueSelectDesde_Primario, setValueSelectBoxDesde_Primario] =
    useState("");
  const handleSelectDesde_Primario = (event) => {
    setValueSelectBoxDesde_Primario(event.target.value);
  };

  //CHECKBOX DESDE SECUNDARIO

  const [disableCheckBoxDesde_Secundario, setDisablecheckBoxDesde_Secundario] =
    useState(true);
  const [checkBoxDesde_Secundario, setCheckBoxDesde_Secundario] =
    useState(false);

  //INPUT DESDE
  const [disableInputDesde, setDisableInputDesde] = useState(true);
  const [inputDesde, setInputDesde] = useState("");

  // SELECT SECUNDARIO

  const [disableSelectDesde_Secundario, setDisableSelectBoxDesde_Secundario] =
    useState(true);
  const [valueSelectDesde_Secundario, setValueSelectBoxDesde_Secundario] =
    useState("");
  const handleSelectDesde_Secundario = (event) => {
    setValueSelectBoxDesde_Secundario(event.target.value);
  };

  // SELECT DESDE TERCIARIO

  const [disableSelectDesde_Terciario, setDisableSelectBoxDesde_Terciario] =
    useState(true);
  const [valueSelectDesde_Terciario, setValueSelectBoxDesde_Terciario] =
    useState("");
  const handleSelectDesde_Terciario = (event) => {
    setValueSelectBoxDesde_Terciario(event.target.value);
  };

  //CHECKBOX ATE PRIMARIO

  const [disableCheckBoxAte_Primario, setDisablecheckBoxAte_Primario] =
    useState(true);
  const [checkBoxAte_Primario, setCheckBoxAte_Primario] = useState(false);

  //SELECT ATE PRIMARIO

  const [disableSelectAte_Primario, setDisableSelectBoxAte_Primario] =
    useState(true);
  const [valueSelectAte_Primario, setValueSelectBoxAte_Primario] = useState("");
  const handleSelectAte_Primario = (event) => {
    setValueSelectBoxAte_Primario(event.target.value);
  };

  //CHECKBOX ATE SECUNDARIO

  const [disableCheckBoxAte_Secundario, setDisablecheckBoxAte_Secundario] =
    useState(true);
  const [checkBoxAte_Secundario, setCheckBoxAte_Secundario] = useState(false);

  //INPUT ATE
  const [disableInputAte, setDisableInputAte] = useState(true);
  const [inputAte, setInputAte] = useState("");

  // SELECT SECUNDARIO

  const [disableSelectAte_Secundario, setDisableSelectBoxAte_Secundario] =
    useState(true);
  const [valueSelectAte_Secundario, setValueSelectBoxAte_Secundario] =
    useState("");
  const handleSelectAte_Secundario = (event) => {
    setValueSelectBoxAte_Secundario(event.target.value);
  };

  // SELECT ATE TERCIARIO

  const [disableSelectAte_Terciario, setDisableSelectBoxAte_Terciario] =
    useState(true);
  const [valueSelectAte_Terciario, setValueSelectBoxAte_Terciario] =
    useState("");
  const handleSelectAte_Terciario = (event) => {
    setValueSelectBoxAte_Terciario(event.target.value);
  };

  const subExame = "Veias Superficiais com Refluxo Esquerdo";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesMedidasE).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidasE
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidasE
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidasE]);

  useEffect(() => {
    const string = "";

    if (safenaMagna) {
      setdisableSafenaMagnaAusente(true);
      setDisablecheckBoxDesde_Primario(false);
      setDisablecheckBoxDesde_Secundario(false);
    } else {
      setDisablecheckBoxDesde_Primario(true);
      setDisablecheckBoxDesde_Secundario(true);
      setdisableSafenaMagnaAusente(false);
      removeString(string);
      setFrasesMedidasE([]);
    }
  }, [safenaMagna]);

  useEffect(() => {
    const string =
      "Veias safenas magnas e parvas pérvias e suficientes, com compressibilidade preservada e calibre normal.";
    if (safenaMagnaAusente) {
      setdisableSafenaMagna(true);
      criaString(string);
    } else {
      setdisableSafenaMagna(false);
      removeString(string);
      setFrasesMedidasE([]);
    }
  }, [safenaMagnaAusente]);

  useEffect(() => {
    if (checkBoxDesde_Primario) {
      setDisableSelectBoxDesde_Primario(false);
      setDisablecheckBoxAte_Primario(false);
      setDisablecheckBoxDesde_Secundario(true)
    } else {
      setDisableSelectBoxDesde_Primario(true);
      setDisablecheckBoxDesde_Secundario(false)
      setDisablecheckBoxAte_Primario(true);
      setValueSelectBoxDesde_Primario("");
    }
  }, [checkBoxDesde_Primario]);

  useEffect(() => {
    if (checkBoxDesde_Secundario) {
      setDisableInputDesde(false);
      setDisableSelectBoxDesde_Secundario(false);
      setDisableSelectBoxDesde_Terciario(false);
      setValueSelectBoxDesde_Primario("");
    } else {
      setDisableInputDesde(true);
      setInputDesde("");
      setDisableSelectBoxDesde_Secundario(true);
      setDisableSelectBoxDesde_Terciario(true);
      setValueSelectBoxDesde_Secundario("");
      setValueSelectBoxDesde_Terciario("");
    }
  }, [checkBoxDesde_Secundario]);

  useEffect(() => {
    if (checkBoxAte_Primario) {
      setDisableSelectBoxAte_Primario(false);
      setDisablecheckBoxAte_Secundario(false);
    } else {
      setDisableSelectBoxAte_Primario(true);
      setValueSelectBoxAte_Primario("");
    }
  }, [checkBoxAte_Primario]);

  useEffect(() => {
    if (checkBoxAte_Secundario) {
      setDisableInputAte(false);
      setDisableSelectBoxAte_Secundario(false);
      setDisableSelectBoxAte_Terciario(false);
    } else {
      setDisableInputAte(true);
      setInputAte("");
      setDisableSelectBoxAte_Secundario(true);
      setDisableSelectBoxAte_Terciario(true);
      setValueSelectBoxAte_Secundario("");
      setValueSelectBoxAte_Terciario("");
    }
  }, [checkBoxAte_Secundario]);

  useEffect(() => {
    if (
      valueSelectDesde_Primario != "" &&
      valueSelectAte_Primario &&
      !disableCheckBoxDesde_Secundario &&
      !disableCheckBoxDesde_Primario
    ) {
      const string = `Veia safena magna direita insuficiente desde ${valueSelectDesde_Primario} até ${valueSelectAte_Primario}.`;
      removeString(string);
      criaString(string);
    }
    if (
      inputDesde != "" &&
      inputAte != "" &&
      valueSelectDesde_Primario != "" &&
      valueSelectDesde_Secundario != "" &&
      valueSelectDesde_Terciario != "" &&
      valueSelectAte_Primario != "" &&
      valueSelectAte_Secundario != "" &&
      valueSelectAte_Terciario
    ) {
      const string = `Veia safena magna direita insuficiente desde ${inputDesde} cm ${valueSelectDesde_Secundario} da ${valueSelectDesde_Terciario} até ${inputAte}
      cm ${valueSelectAte_Secundario} da ${valueSelectAte_Terciario}`;
      removeString(string);
      criaString(string);
    }
  }, [
    inputDesde,
    valueSelectDesde_Primario,
    valueSelectDesde_Secundario,
    valueSelectAte_Terciario,
    inputAte,
    valueSelectAte_Primario,
    valueSelectAte_Secundario,
    valueSelectAte_Terciario,
  ]);
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
      <TituloNomeExame titulo="Veias Superficiais com refluxo" />

      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <HStack>
          <Checkbox
            isDisabled={disableMagna}
            value="Safena Magna"
            onChange={(e) => {
              setSafenaMagna(!safenaMagna);
            }}
          >
            Safena Magna
          </Checkbox>
          <Checkbox
            isDisabled={disableMagnaAusente}
            value="Safena Magna"
            onChange={(e) => {
              setSafenaMagnaAusente(!safenaMagnaAusente);
            }}
          >
            Safena Magna Ausente {"(Safenectomia Total)"}
          </Checkbox>
        </HStack>
        <HStack>
          <Text>Desde: </Text>
          <Checkbox
            isDisabled={disableCheckBoxDesde_Primario}
            onChange={(e) => {
              setCheckBoxDesde_Primario(!checkBoxDesde_Primario);
            }}
          ></Checkbox>
          <Select
            borderColor="black"
            w="200px"
            isDisabled={disableSelectDesde_Primario}
            onChange={handleSelectDesde_Primario}
          >
            <option value="" disabled selected>
              Opção
            </option>
            <option value="a crossa">a crossa</option>
            <option value="o terço proximal da coxa">
              o terço proximal da coxa
            </option>
            <option value="o terço médio da coxa">o terço médio da coxa</option>
            <option value="o terço distal da coxa">
              o terço distal da coxa
            </option>
            <option value="o joelho">o joelho</option>
            <option value="o terço proximal da perna">
              o terço proximal da perna
            </option>
            <option value="o terço médio da perna">
              o terço médio da perna
            </option>
          </Select>
        </HStack>
        <HStack>
          <Checkbox
            isDisabled={disableCheckBoxDesde_Secundario}
            onChange={(e) => {
              setCheckBoxDesde_Secundario(!checkBoxDesde_Secundario);
            }}
          ></Checkbox>
          <Input
            isDisabled={disableInputDesde}
            onChange={(e) => setInputDesde(e.target.value)}
            borderColor="black"
            placeholder="CM"
            value={inputDesde}
            size="sm"
            h="40px"
            w="50px"
            borderRadius="md"
            maxLength={3}
          />
          <Select
            borderColor="black"
            w="auto"
            isDisabled={disableSelectDesde_Secundario}
            onChange={handleSelectDesde_Secundario}
          >
            <option value="" disabled selected>
              Opção
            </option>
            <option value="acima">acima</option>
            <option value="abaixo">abaixo</option>
          </Select>
          <Select
            borderColor="black"
            w="auto"
            isDisabled={disableSelectDesde_Terciario}
            onChange={handleSelectDesde_Terciario}
          >
            <option value="" disabled selected>
              Opção
            </option>
            <option value="da crossa">da crossa</option>
            <option value="da linha interarticular do joelho">
              da linha interarticular do joelho
            </option>
            <option value="da região plantar">da região plantar</option>
          </Select>
        </HStack>
        <HStack>
          <Text>Ate: </Text>
          <Checkbox
            isDisabled={disableCheckBoxAte_Primario}
            onChange={(e) => {
              setCheckBoxAte_Primario(!checkBoxAte_Primario);
            }}
          ></Checkbox>
          <Select
            borderColor="black"
            w="200px"
            isDisabled={disableSelectAte_Primario}
            onChange={handleSelectAte_Primario}
          >
            <option value="" disabled selected>
              Opção
            </option>
            <option value="o terço proximal da coxa">
              o terço proximal da coxa
            </option>
            <option value="o terço médio da coxa">o terço médio da coxa</option>
            <option value="o terço distal da coxa">
              o terço distal da coxa
            </option>
            <option value="o joelho">o joelho</option>
            <option value="o terço proximal da perna">
              o terço proximal da perna
            </option>
            <option value="o terço médio da perna">
              o terço médio da perna
            </option>
            <option value="o terço distal da perna">
              o terço distal da perna
            </option>
            <option value="o tornozelo">o tornozelo</option>
          </Select>
        </HStack>
        <HStack>
          <Checkbox
            isDisabled={disableCheckBoxAte_Secundario}
            onChange={(e) => {
              setCheckBoxAte_Secundario(!checkBoxAte_Secundario);
            }}
          ></Checkbox>
          <Input
            isDisabled={disableInputAte}
            onChange={(e) => setInputAte(e.target.value)}
            borderColor="black"
            placeholder="CM"
            value={inputAte}
            size="sm"
            h="40px"
            w="50px"
            borderRadius="md"
            maxLength={3}
          />
          <Select
            borderColor="black"
            w="auto"
            isDisabled={disableSelectAte_Secundario}
            onChange={handleSelectAte_Secundario}
          >
            <option value="" disabled selected>
              Opção
            </option>
            <option value="acima">acima</option>
            <option value="abaixo">abaixo</option>
          </Select>
          <Select
            borderColor="black"
            w="auto"
            isDisabled={disableSelectAte_Terciario}
            onChange={handleSelectAte_Terciario}
          >
            <option value="" disabled selected>
              Opção
            </option>
            <option value="da crossa">da crossa</option>
            <option value="da linha interarticular do joelho">
              da linha interarticular do joelho
            </option>
            <option value="da região plantar">da região plantar</option>
          </Select>
        </HStack>
      </Box>
    </Box>
  );
}
export default Veias_Superficiais_Refluxo_Esquerdo;
