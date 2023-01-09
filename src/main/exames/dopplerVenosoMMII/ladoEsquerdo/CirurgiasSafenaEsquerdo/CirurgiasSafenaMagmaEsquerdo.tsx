/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function CirurgiaSafenaMagmaEsquerdo() {
  const [frasesSafena, setFrasesSafena] = useState<any>([]);

  const [DisableSelect, setDisableSelect] = useState(true);

  const [DisableSelectMaterialEcogenico, setDisableSelectMaterialEcogenico] =
    useState(true);
  const [DisableSelectRefluxoResidual, setDisableSelectRefluxoResidual] =
    useState(true);

  const [
    LocalizacaoAusenciaParcialSelect,
    setLocalizacaoAusenciaParcialSelect,
  ] = useState("");
  const [LocalizacaoFinalSelect, setLocalizacaoFinalSelect] = useState("");
  const [AusenciaParcialCheckBox, setAusenciaParcialCheckBox] = useState(false);
  const [DisableAusenciaParcialCheckBox, setDisableAusenciaParcialCheckBox] =
    useState(false);

  const [
    LocalizacaoMaterialEcogenicoSelect,
    setLocalizacaoMaterialEcogenicoSelect,
  ] = useState("");
  const [RefluxoResidualSelect, setRefluxoResidualSelect] = useState("");
  const [MaterialEcogenicoCheckBox, setMaterialEcogenicoCheckBox] =
    useState(false);
  const [DisableRefluxoResidualCheckBox, setDisableRefluxoResidualCheckBox] =
    useState(true);
  const [RefluxoResidualCheckBox, setRefluxoResidualCheckBox] = useState(false);

  const [DisableAusenciaTotalCheckBox, setDisableAusenciaTotalCheckBox] =
    useState(false);
  const [AusenciaTotalCheckBox, setAusenciaTotalCheckBox] = useState(true);

  const removeAusenciaParcial = () => {
    frasesSafena.map((e) => {
      if (e.includes("Ausencia Parcial")) {
        var index = frasesSafena.indexOf(e);

        if (index > -1) {
          frasesSafena.splice(index, 1);
          setFrasesSafena((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringAusenciaParcial = (
    LocalizacaoAusenciaParcialSelect,
    localizado
  ) => {
    removeAusenciaParcial();
    var string;
    if (LocalizacaoAusenciaParcialSelect !== "" && localizado !== "") {
      string = `Ausencia Parcial ${LocalizacaoAusenciaParcialSelect} e ${localizado}`;
      setFrasesSafena((arr) => [...arr, string]);
    } else {
      removeAusenciaParcial();
    }
  };

  const criaStringMaterialEcogenico = (valorInicial, valorResidual) => {
    removeMaterialEcogenico();
    var string;
    if (RefluxoResidualCheckBox) {
      if (valorInicial !== "") {
        string = `Material ecogênico na safena magma ${valorInicial} e ${valorResidual}`;
        setFrasesSafena((arr) => [...arr, string]);
      }
    } else {
      if (valorInicial !== "") {
        string = `Material ecogênico na safena magma ${valorInicial}`;
        setFrasesSafena((arr) => [...arr, string]);
      }
    }
  };

  const removeMaterialEcogenico = () => {
    frasesSafena.map((e) => {
      if (e.includes("Material ecogênico na safena magma")) {
        var index = frasesSafena.indexOf(e);

        if (index > -1) {
          frasesSafena.splice(index, 1);
          setFrasesSafena((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringAusenciaTotal = () => {
    var string = "Ausência total de cirurgias Safena Magna lado Esquerdo";
    if (AusenciaTotalCheckBox) {
      setFrasesSafena((arr) => [...arr, string]);
      setAusenciaTotalCheckBox(false);
      setDisableAusenciaParcialCheckBox(true);
    } else {
      setDisableAusenciaParcialCheckBox(false);
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesSafena.indexOf(value);

    if (index > -1) {
      frasesSafena.splice(index, 1);
      setFrasesSafena((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (AusenciaParcialCheckBox) {
      criaStringAusenciaParcial(
        LocalizacaoAusenciaParcialSelect,
        LocalizacaoFinalSelect
      );
      setDisableSelect(false);
    } else {
      setDisableSelect(true);
      removeAusenciaParcial();
      setLocalizacaoAusenciaParcialSelect("");
      setLocalizacaoFinalSelect("");
    }
  }, [
    AusenciaParcialCheckBox,
    LocalizacaoAusenciaParcialSelect,
    LocalizacaoFinalSelect,
  ]);

  useEffect(() => {
    if (MaterialEcogenicoCheckBox) {
      criaStringMaterialEcogenico(
        LocalizacaoMaterialEcogenicoSelect,
        RefluxoResidualSelect
      );
      setDisableRefluxoResidualCheckBox(false);
      setDisableSelectMaterialEcogenico(false);
      if (RefluxoResidualCheckBox) {
        setDisableSelectRefluxoResidual(false);
      } else {
        setDisableSelectRefluxoResidual(true);
      }
    } else {
      setDisableSelectRefluxoResidual(true);
      setDisableSelectMaterialEcogenico(true);
      setDisableRefluxoResidualCheckBox(true);
      removeMaterialEcogenico();
      setLocalizacaoMaterialEcogenicoSelect("");
      setRefluxoResidualSelect("");
    }
  }, [
    MaterialEcogenicoCheckBox,
    LocalizacaoMaterialEcogenicoSelect,
    RefluxoResidualSelect,
    RefluxoResidualCheckBox,
  ]);

  useEffect(() => {
    if (MaterialEcogenicoCheckBox || AusenciaParcialCheckBox) {
      setDisableAusenciaTotalCheckBox(true);
    } else {
      setDisableAusenciaTotalCheckBox(false);
    }
  }, [MaterialEcogenicoCheckBox, AusenciaParcialCheckBox]);

  const subExame = "Cirurgias Safena Magna Esquerda";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesSafena).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesSafena
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesSafena
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesSafena]);

  return (
    <Box>
      <Text fontSize="17px" fontWeight="bold">
        Safena Magna
      </Text>
      <Stack>
        <Checkbox
          isDisabled={DisableAusenciaTotalCheckBox}
          onChange={() => {
            setAusenciaTotalCheckBox(true);
            criaStringAusenciaTotal();
          }}
        >
          Ausência total
        </Checkbox>
      </Stack>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={DisableAusenciaParcialCheckBox}
        onChange={() => setAusenciaParcialCheckBox(!AusenciaParcialCheckBox)}
      >
        Ausencia Parcial
      </Checkbox>
      <Box>
        <Select
          w="200px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setLocalizacaoAusenciaParcialSelect(e.target.value);
          }}
          value={LocalizacaoAusenciaParcialSelect}
        >
          <option value="" disabled selected>
            Posição inicial
          </option>
          <option value="da coxa">da coxa</option>
          <option value="da perna">da perna</option>
          <option value="dos terços superior e médio da coxa">
            dos terços superior e médio da coxa
          </option>
          <option value="do terço superior da coxa">
            do terço superior da coxa
          </option>
          <option value="do terço médio da coxa">do terço médio da coxa</option>
          <option value="do terço inferior da coxa">
            do terço inferior da coxa
          </option>
          <option value="do terço superior da perna">
            do terço superior da perna
          </option>
          <option value="do terço médio da perna">
            do terço médio da perna
          </option>
          <option value="do terço inferior da perna">
            do terço inferior da perna
          </option>
          <option value="do terços médio e inferior da perna">
            do terços médio e inferior da perna
          </option>
        </Select>
        <Text ml="20px" alignSelf="center">
          e
        </Text>
        <Select
          w="200px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setLocalizacaoFinalSelect(e.target.value);
          }}
          value={LocalizacaoFinalSelect}
        >
          <option value="" disabled selected>
            posição final
          </option>
          <option value="não há segundo segmento ausente">
            não há segundo segmento ausente
          </option>
          <option value="da coxa">da coxa</option>
          <option value="da perna">da perna</option>
          <option value="dos terços superior e médio da coxa">
            dos terços superior e médio da coxa
          </option>
          <option value="do terço superior da coxa">
            do terço superior da coxa
          </option>
          <option value="do terço médio da coxa">do terço médio da coxa</option>
          <option value="do terço inferior da coxa">
            do terço inferior da coxa
          </option>
          <option value="do terço superior da perna">
            do terço superior da perna
          </option>
          <option value="do terço médio da perna">
            do terço médio da perna
          </option>
          <option value="do terço inferior da perna">
            do terço inferior da perna
          </option>
          <option value="do terços médio e inferior da perna">
            do terços médio e inferior da perna
          </option>
        </Select>
      </Box>

      <Checkbox
        mt="10px"
        isDisabled={DisableAusenciaParcialCheckBox}
        onChange={() =>
          setMaterialEcogenicoCheckBox(!MaterialEcogenicoCheckBox)
        }
      >
        Material ecogênico
      </Checkbox>

      <Box>
        <Select
          w="200px"
          isDisabled={DisableSelectMaterialEcogenico}
          onChange={(e) => {
            setLocalizacaoMaterialEcogenicoSelect(e.target.value);
          }}
          value={LocalizacaoMaterialEcogenicoSelect}
        >
          <option value="" disabled selected>
            Posição inicial
          </option>
          <option value="da coxa">da coxa</option>
          <option value="da perna">da perna</option>
          <option value="dos terços superior e médio da coxa">
            dos terços superior e médio da coxa
          </option>
          <option value="do terço superior da coxa">
            do terço superior da coxa
          </option>
          <option value="do terço médio da coxa">do terço médio da coxa</option>
          <option value="do terço inferior da coxa">
            do terço inferior da coxa
          </option>
          <option value="do terço superior da perna">
            do terço superior da perna
          </option>
          <option value="do terço médio da perna">
            do terço médio da perna
          </option>
          <option value="do terço inferior da perna">
            do terço inferior da perna
          </option>
          <option value="do terços médio e inferior da perna">
            do terços médio e inferior da perna
          </option>
        </Select>
        <Checkbox
          whiteSpace="nowrap"
          isDisabled={DisableRefluxoResidualCheckBox}
          onChange={() => setRefluxoResidualCheckBox(!RefluxoResidualCheckBox)}
        >
          com refluxo Residual
        </Checkbox>
        <Select
          w="200px"
          isDisabled={DisableSelectRefluxoResidual}
          onChange={(e) => {
            setRefluxoResidualSelect(e.target.value);
          }}
          value={RefluxoResidualSelect}
        >
          <option value="" disabled selected>
            refluxo residual
          </option>
          <option value="não há segundo segmento ausente">
            não há segundo segmento ausente
          </option>
          <option value="da coxa">da coxa</option>
          <option value="da perna">da perna</option>
          <option value="dos terços superior e médio da coxa">
            dos terços superior e médio da coxa
          </option>
          <option value="do terço superior da coxa">
            do terço superior da coxa
          </option>
          <option value="do terço médio da coxa">do terço médio da coxa</option>
          <option value="do terço inferior da coxa">
            do terço inferior da coxa
          </option>
          <option value="do terço superior da perna">
            do terço superior da perna
          </option>
          <option value="do terço médio da perna">
            do terço médio da perna
          </option>
          <option value="do terço inferior da perna">
            do terço inferior da perna
          </option>
          <option value="do terços médio e inferior da perna">
            do terços médio e inferior da perna
          </option>
        </Select>
      </Box>
    </Box>
  );
}
export default CirurgiaSafenaMagmaEsquerdo;
