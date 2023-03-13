/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistos({ numCisto }) {
  const [frasesIndCisto, setFrasesIndCisto] = useState<any>([]);

  const [tamanhoCistoInput, settamanhoCistoInput] = useState("");
  const [posicaoCistosSelect, setPosicaoCistosSelect] = useState("");
  const [localizacaoCistosSelect, setlocalizacaoCistosSelect] = useState("");
  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCistos = (
    tamanhoCistoInput,
    CistosSelect,
    localizado
  ) => {
    removeMultiplosCistos();

    if (tamanhoCistoInput !== "" && CistosSelect !== "" && localizado !== "") {
      var string = `Cisto ${numCisto} mede ${tamanhoCistoInput} mm ${CistosSelect} localizado ${localizado} `;
      setFrasesIndCisto((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistos = () => {
    frasesIndCisto.map((e) => {
      if (e.includes(`Cisto ${numCisto}`)) {
        var index = frasesIndCisto.indexOf(e);

        if (index > -1) {
          frasesIndCisto.splice(index, 1);
          setFrasesIndCisto((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosCheckBox) {
      setDisableSelect(false);
      criaStringMultiplosCistos(
        tamanhoCistoInput,
        posicaoCistosSelect,
        localizacaoCistosSelect
      );
    } else {
      setDisableSelect(true);
      removeMultiplosCistos();
      settamanhoCistoInput("");
      setPosicaoCistosSelect("");
      setlocalizacaoCistosSelect("");
    }
  }, [
    multiplosCistosCheckBox,
    posicaoCistosSelect,
    tamanhoCistoInput,
    localizacaoCistosSelect,
  ]);

  const subExame = "Individualizar Cistos";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesIndCisto).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesIndCisto
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesIndCisto
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesIndCisto]);

  return (
    <HStack>
      <Checkbox
        onChange={() => setmultiplosCistosCheckBox(!multiplosCistosCheckBox)}
      >
        Cisto {numCisto}
      </Checkbox>

      <Input
        isDisabled={DisableSelect}
        value={tamanhoCistoInput}
        w="60px"
        h="77x"
        padding="5px"
        textAlign="center"
        onChange={(e) => {
          settamanhoCistoInput(e.target.value);
        }}
        placeholder={"mm"}
      />
      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setPosicaoCistosSelect(e.target.value);
        }}
        value={posicaoCistosSelect}
      >
        <option value="" disabled selected>
          no
        </option>
        <option value="terço superior">terço superior</option>
        <option value="terço médio">terço médio </option>
        <option value="terço inferior">terço inferior</option>
      </Select>

      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setlocalizacaoCistosSelect(e.target.value);
        }}
        value={localizacaoCistosSelect}
      >
        <option value="" disabled selected>
          do
        </option>
        <option value="rim direito">rim direito</option>
        <option value="rim esquerdo">rim esquerdo</option>
      </Select>
    </HStack>
  );
}
