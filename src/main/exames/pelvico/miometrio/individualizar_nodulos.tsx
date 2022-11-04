import { Button, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../context/LuadosContext";

export default function IndividualizarNodulos({ numNodulo, disable }) {
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (
    tamanhoNoduloInput,
    nodulosSelect,
    localizado
  ) => {
    removeMultiplosNodulos();

    if (tamanhoNoduloInput != "" && nodulosSelect != "" && localizado != "") {
      var string = `Nódulo ${numNodulo} mede ${tamanhoNoduloInput} mm ${nodulosSelect} localizado ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Nódulo ${numNodulo}`)) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      setDisableSelect(false)
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect
      );
    } else {
      setDisableSelect(true)
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
  ]);

  return (
    <HStack>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={disable}
        onChange={() => setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
      >
        Nódulo {numNodulo}
      </Checkbox>

      <Input
        isDisabled={DisableSelect}
        value={tamanhoNoduloInput}
        w="60px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        onChange={handleChangeNoduloInput}
        placeholder={"mm"}
      />
      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setPosicaoNodulosSelect(e.target.value);
        }}
        value={posicaoNodulosSelect}
      >
        <option value="" disabled selected>
          Posição
        </option>
        <option value="Intramural">Intramural</option>
        <option value="Subseroso">Subseroso </option>
        <option value="Submucoso">Submucoso</option>
      </Select>

      <Select
        w="auto"
        isDisabled={DisableSelect}
        onChange={(e) => {
          setlocalizacaoNodulosSelect(e.target.value);
        }}
        value={localizacaoNodulosSelect}
      >
        <option value="" disabled selected>
          Localizado
        </option>
        <option value="corporal anterior">Corporal anterior</option>
        <option value="corporal posterior">Corporal posterior</option>
        <option value="fúndica">Fúndica</option>
        <option value="lateral direita">Lateral direita</option>
        <option value="lateral esquerda">Lateral esquerda</option>
        <option value="cervical">Cervical</option>
      </Select>
    </HStack>
  );
}
