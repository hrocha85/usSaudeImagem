import { Button, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { isLineBreak } from "typescript";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo, disable }) {

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);
  const [DisableSelect, setDisableSelect] = useState(true);

  const [frasesMiometrio, setFrasesMiometrio] = useState<any>([]);
  const [ConclusaoMiometrio, setConclusaoMiometrio] = useState<any>([]);

  const subExame = `Miométrio. Nódulo ${numNodulo}`;
  const titulo_exame = "Transvaginal"

  useEffect(() => {
    if (Object.keys(frasesMiometrio).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMiometrio,
        ConclusaoMiometrio
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMiometrio,
        ConclusaoMiometrio
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMiometrio]);

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
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    frasesMiometrio.map((e) => {
      if (e.includes(`Nódulo ${numNodulo}`)) {
        var index = frasesMiometrio.indexOf(e);

        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
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
