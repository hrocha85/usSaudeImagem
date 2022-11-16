/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Button, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../context/LuadosContext";

export default function IndividualizarCalculos({ numCalculo }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoCalculoInput, settamanhoCalculoInput] = useState("");
  const [posicaoCalculosSelect, setPosicaoCalculosSelect] = useState("");
  const [localizacaoCalculosSelect, setlocalizacaoCalculosSelect] = useState("");
  const [multiplosCalculosCheckBox, setmultiplosCalculosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const criaStringMultiplosCalculos = (
    tamanhoCalculoInput,
    CalculosSelect,
    localizado
  ) => {
    removeMultiplosCalculos();

    if (tamanhoCalculoInput !== "" && CalculosSelect !== "" && localizado !== "") {
      var string = `Nódulo ${numCalculo} mede ${tamanhoCalculoInput} mm ${CalculosSelect} localizado ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCalculos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Nódulo ${numCalculo}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCalculosCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosCalculos(
        tamanhoCalculoInput,
        posicaoCalculosSelect,
        localizacaoCalculosSelect
      );
    } else {
      setDisableSelect(true)
      removeMultiplosCalculos();
      settamanhoCalculoInput("");
      setPosicaoCalculosSelect("");
      setlocalizacaoCalculosSelect("");
    }
  }, [
    multiplosCalculosCheckBox,
    posicaoCalculosSelect,
    tamanhoCalculoInput,
    localizacaoCalculosSelect,
  ]);

  return (
    <HStack>
      <Checkbox
        onChange={() => setmultiplosCalculosCheckBox(!multiplosCalculosCheckBox)}
      >
        Cálculo {numCalculo}
      </Checkbox>

      <Input
        isDisabled={DisableSelect}
        value={tamanhoCalculoInput}
        w="60px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        onChange={(e) => { settamanhoCalculoInput(e.target.value) }}
        placeholder={"mm"}
      />
      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setPosicaoCalculosSelect(e.target.value);
        }}
        value={posicaoCalculosSelect}
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
          setlocalizacaoCalculosSelect(e.target.value);
        }}
        value={localizacaoCalculosSelect}
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
