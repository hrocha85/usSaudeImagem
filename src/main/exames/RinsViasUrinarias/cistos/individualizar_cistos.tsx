
/* eslint-disable array-callback-return */
import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistos({ numCisto }) {
  const [frasesIndCisto, setFrasesIndCisto] = useState<any>([]);
  const [ConclusaoCisto, setConclusaoCisto] = useState<any>([]);

  const [tamanhoCistoInput, settamanhoCistoInput] = useState("");
  const [posicaoCistosSelect, setPosicaoCistosSelect] = useState("");
  const [localizacaoCistosSelect, setlocalizacaoCistosSelect] = useState("");
  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] = useState(false);
  const criaStringMultiplosCistos = () => {
    let string = `Nota-se imagem anecóica, arredondada, de limites precisos e contornos regulares, com reforço acústico posterior: ${numCisto}º Cisto no`
    const conclusao = 'Cisto renal.'
    removeMultiplosCistos();
    removeItemConclusao(conclusao)
    if (multiplosCistosCheckBox) {
      if (tamanhoCistoInput !== "" && posicaoCistosSelect !== "" && localizacaoCistosSelect !== "") {
        string = `${string} ${posicaoCistosSelect}, medindo ${tamanhoCistoInput} cm do ${localizacaoCistosSelect}.`;
        setFrasesIndCisto((arr) => [...arr, string]);
        setConclusaoCisto((arr) => [...arr, conclusao]);
      }
    } else {
      settamanhoCistoInput("");
      setPosicaoCistosSelect("");
      setlocalizacaoCistosSelect("");
    }
  };

  const removeMultiplosCistos = () => {
    frasesIndCisto.map((e) => {
      if (e.includes(` ${numCisto}º Cisto no`)) {
        const index = frasesIndCisto.indexOf(e);

        if (index > -1) {
          frasesIndCisto.splice(index, 1);
          setFrasesIndCisto((arr) => [...arr]);
        }
      }
    });
  };
  const removeItemConclusao = (value) => {
    const index = ConclusaoCisto.indexOf(value);

    if (index > -1) {
      ConclusaoCisto.splice(index, 1);
      setConclusaoCisto((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {

    criaStringMultiplosCistos();
  }, [
    multiplosCistosCheckBox,
    posicaoCistosSelect,
    tamanhoCistoInput,
    localizacaoCistosSelect,
  ]);

  const subExame = `${numCisto} Cisto`;
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesIndCisto).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesIndCisto,
        ConclusaoCisto
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesIndCisto,
        ConclusaoCisto
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
        isDisabled={!multiplosCistosCheckBox}
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
        isDisabled={!multiplosCistosCheckBox}
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
        isDisabled={!multiplosCistosCheckBox}
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
