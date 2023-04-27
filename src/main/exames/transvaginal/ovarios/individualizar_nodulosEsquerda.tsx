/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulosEsquerda({ numNodulo }) {

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [TipoNodulosSelect, setTipoNodulosSelect] = useState("");
  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] = useState(false);

  const [frasesMiometrio, setFrasesMiometrio] = useState<any>([]);
  const [ConclusaoMiometrio, setConclusaoMiometrio] = useState<any>([]);

  const subExame = `Ovário Esquerdo. Nódulo ${numNodulo}`;
  const titulo_exame = "Transvaginal";

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


  const criaStringMultiplosNodulos = () => {
    const conclusao = 'Miomatose uterina.'
    removeItemStringConclusao(conclusao)
    removeMultiplosNodulos();
    if (multiplosNodulosCheckBox) {
      if (tamanhoNoduloInput != "" && TipoNodulosSelect != "") {
        var string = `Nódulo de mioma ${numNodulo}:Nódulo medindo ${tamanhoNoduloInput} mm do tipo ${TipoNodulosSelect}.`;
        setFrasesMiometrio((arr) => [...arr, string]);
        setConclusaoMiometrio((arr) => [...arr, conclusao]);
      }
    } else {
      settamanhoNoduloInput("");
      setTipoNodulosSelect("");
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
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    criaStringMultiplosNodulos();

  }, [
    multiplosNodulosCheckBox,
    TipoNodulosSelect,
    tamanhoNoduloInput,
  ]);

  return (
    <HStack>
      <Checkbox
        whiteSpace="nowrap"
        onChange={() => setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
      >
        Nódulo {numNodulo}
      </Checkbox>

      <Input
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
        onChange={(e) => {
          setTipoNodulosSelect(e.target.value);
        }}
        value={TipoNodulosSelect}
      >
        <option value="" disabled selected>
          Tipo
        </option>
        <option value="isoecogenico">isoecogenico</option>
        <option value="hipoecogênico ">hipoecogênico</option>
        <option value="hiperecogenico">Hiperecogenico</option>
      </Select>

    </HStack>
  );
}
