/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo, disable }) {

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

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

  const criaStringMultiplosNodulos = (tamanhoNoduloInput, nodulosSelect, localizado) => {
    const conclusao = 'Miomatose uterina.'
    removeMultiplosNodulos();
    removeItemStringConclusao(conclusao)
    if (tamanhoNoduloInput != "" && nodulosSelect != "" && localizado != "") {
      var string = `Nódulo de mioma ${numNodulo}: ${nodulosSelect} localizado na parede ${localizado} e medindo ${tamanhoNoduloInput} mm.`;
      setFrasesMiometrio((arr) => [...arr, string]);
      setConclusaoMiometrio((arr) => [...arr, conclusao]);
    }
  };

  const removeMultiplosNodulos = () => {
    frasesMiometrio.map((e) => {
      if (e.includes(`Nódulo de mioma ${numNodulo}`)) {
        var index = frasesMiometrio.indexOf(e);

        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };
  const removeItemStringConclusao = (value) => {
    var index = ConclusaoMiometrio.indexOf(value);
    if (index > -1) {
      ConclusaoMiometrio.splice(index, 1);
      setConclusaoMiometrio((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect
      );
    } else {
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
        isDisabled={disable}
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
        isDisabled={disable}
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
        isDisabled={disable}
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
