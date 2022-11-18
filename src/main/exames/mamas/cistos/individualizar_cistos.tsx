/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";

export default function IndividualizarCistos({ numCisto }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoCistoInput, settamanhoCistoInput] = useState("");
  const [posicaoCistosSelect, setPosicaoCistosSelect] = useState("");
  const [ConteudoCistosSelect, setConteudoCistosSelect] = useState("");
  const [localizacaoCistosSelect, setlocalizacaoCistosSelect] = useState("");
  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCistos = (
    tamanhoCistoInput,
    CistosSelect,
    localizado,
    ConteudoCistosSelect
  ) => {
    removeMultiplosCistos();

    if (tamanhoCistoInput !== "" && CistosSelect !== "" && localizado !== "" && ConteudoCistosSelect !== "") {
      var string = `Nódulo ${numCisto} mede ${tamanhoCistoInput} mm ${CistosSelect} localizado ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Nódulo ${numCisto}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosCistos(
        tamanhoCistoInput,
        posicaoCistosSelect,
        localizacaoCistosSelect,
        ConteudoCistosSelect
      );
    } else {
      setDisableSelect(true)
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
    ConteudoCistosSelect
  ]);

  return (
    <HStack>
      <Checkbox
        onChange={() => setmultiplosCistosCheckBox(!multiplosCistosCheckBox)}
      >
        Cisto {numCisto}
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
        maxLength={2}
        textAlign="center"
        onChange={(e) => { settamanhoCistoInput(e.target.value) }}
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
