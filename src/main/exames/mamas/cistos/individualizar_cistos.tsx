
/* eslint-disable array-callback-return */
import { Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistos({ numCisto }) {
  const [frasesIndCis, setFrasesIndCis] = useState<any>([]);

  const [tamanhoCistoInput, settamanhoCistoInput] = useState("");
  const [posicaoCistosSelect, setPosicaoCistosSelect] = useState("");
  const [ConteudoCistosSelect, setConteudoCistosSelect] = useState("");
  const [localizacaoCistosSelect, setlocalizacaoCistosSelect] = useState("");
  const [OrientacaoCistosSelect, setOrientacaoCistosSelect] = useState("");
  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] = useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCistos = (
    tamanhoCistoInput,
    CistosSelect,
    localizado,
    ConteudoCistosSelect
  ) => {
    removeMultiplosCistos();

    if (
      tamanhoCistoInput !== "" &&
      CistosSelect !== "" &&
      localizado !== "" &&
      ConteudoCistosSelect !== "" &&
      OrientacaoCistosSelect
    ) {
      const string = `Nódulo ${numCisto} mede ${tamanhoCistoInput} cm ${CistosSelect} localizado ${localizado} no ${OrientacaoCistosSelect}.`;
      setFrasesIndCis((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistos = () => {
    frasesIndCis.map((e) => {
      if (e.includes(`Nódulo ${numCisto}`)) {
        const index = frasesIndCis.indexOf(e);

        if (index > -1) {
          frasesIndCis.splice(index, 1);
          setFrasesIndCis((arr) => [...arr]);
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
        localizacaoCistosSelect,
        ConteudoCistosSelect
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
    ConteudoCistosSelect,
  ]);

  const subExame = `Individualizar Cisto ${numCisto}`;
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesIndCis).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesIndCis
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesIndCis
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesIndCis]);

  return (
    <HStack>
      <Checkbox
        onChange={() => setmultiplosCistosCheckBox(!multiplosCistosCheckBox)}
      >
        <Text textAlign='center'> Cisto {numCisto}</Text>
      </Checkbox>

      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setConteudoCistosSelect(e.target.value);
        }}
        value={ConteudoCistosSelect}
      >
        <option value="" disabled selected>
          conteúdo
        </option>
        <option value="conteúdo anecóico">conteúdo anecóico</option>
        <option value="conteúdo denso">conteúdo denso</option>
        <option value="cisto complexo">cisto complexo</option>
      </Select>

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
        placeholder={"cm"}
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
          Local
        </option>
        <option value="à 1 hora">à 1 hora</option>
        <option value="às 2 horas">às 2 horas</option>
        <option value="às 3 horas">às 3 horas</option>
        <option value="às 4 horas">às 4 horas</option>
        <option value="às 5 horas">às 5 horas</option>
        <option value="às 6 horas">às 6 horas</option>
        <option value="às 7 horas">às 7 horas</option>
        <option value="às 8 horas">às 8 horas</option>
        <option value="às 9 horas">às 9 horas</option>
        <option value="às 10 horas">às 10 horas</option>
        <option value="às 11 horas">às 11 horas</option>
        <option value="às 12 horas">às 12 horas</option>
        <option value="na região retropapilar">na região retropapilar</option>
      </Select>
      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setOrientacaoCistosSelect(e.target.value);
        }}
        value={OrientacaoCistosSelect}
      >
        <option value="" disabled selected>
          no
        </option>
        <option value="QSL">QSL</option>
        <option value="QSM">QSM</option>
        <option value="QIL">QIL</option>
        <option value="QIM">QIM</option>
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
        <option value="mama direita">Mama direita</option>
        <option value="mama esquerda">Mama esquerda</option>
      </Select>
    </HStack>
  );
}
