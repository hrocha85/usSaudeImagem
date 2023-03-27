/* eslint-disable no-sparse-arrays */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistos({ numCisto, Disable }) {
  const [Medida1CistoInput, setMedida1CistoInput] = useState("");
  const [Select1Cisto, setSelect1Cisto] = useState("");

  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] = useState(false);

  const [FrasesCistos, setFrasesCistos] = useState<any>([]);
  const [ConclusaoCistos, setConclusaoCistos] = useState<any>([]);

  const subExame = `Fígado - Cisto ${numCisto}`;
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesCistos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesCistos,
        ConclusaoCistos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesCistos,
        ConclusaoCistos
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesCistos]);


  const criaStringMultiplosCistos = () => {
    const conclusao = 'Cisto hepático.'
    removeMultiplosCistos();
    removeItemConclusao(conclusao)
    if (multiplosCistosCheckBox) {
      if (Medida1CistoInput != "" && Select1Cisto != '') {
        var string = `Cisto ${numCisto}: Nota-se imagem cística, de paredes finas e regulares, conteúdo anecóide homogêneo, no 
        ${Select1Cisto} medindo ${Medida1CistoInput} mm.`;
        setFrasesCistos((arr) => [...arr, string]);
        setConclusaoCistos((arr) => [...arr, conclusao]);
      }
    } else {
      removeMultiplosCistos();
      setMedida1CistoInput("");
      setSelect1Cisto("");
    }
  };

  const removeItemConclusao = (value) => {
    var index = ConclusaoCistos.indexOf(value);
    if (index > -1) {
      ConclusaoCistos.splice(index, 1);
      setConclusaoCistos((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  const removeMultiplosCistos = () => {
    FrasesCistos.map((e) => {
      if (e.includes(`Cisto ${numCisto}: `)) {
        var index = FrasesCistos.indexOf(e);

        if (index > -1) {
          FrasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMultiplosCistos();
  }, [multiplosCistosCheckBox, Medida1CistoInput, Select1Cisto]);

  return (
    <Box display="flex" flexWrap='wrap' alignItems='center' gap='5px'>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={Disable}
        onChange={() => setmultiplosCistosCheckBox(!multiplosCistosCheckBox)}
      >
        Cisto {numCisto}
      </Checkbox>

      <Input
        p='0'
        w='50px'
        textAlign='center'
        isDisabled={!multiplosCistosCheckBox}
        value={Medida1CistoInput}
        onChange={(e) => setMedida1CistoInput(e.target.value)}
        placeholder={"mm"}
      />
      <Text alignItems='center'>mm, localizado no</Text>
      <Select
        isDisabled={!multiplosCistosCheckBox}
        w='150px'
        onChange={(e) => setSelect1Cisto(e.target.value)}
        value={Select1Cisto}
      >
        <option value="" disabled selected>
          Localizado
        </option>
        <option value="Segmento I">Segmento I</option>
        <option value="Segmento II">Segmento II</option>
        <option value="Segmento III">Segmento III</option>
        <option value="Segmento IV">Segmento IV</option>
        <option value="Segmento V">Segmento V</option>
        <option value="Segmento VI">Segmento VI</option>
        <option value="Segmento VII">Segmento VII</option>
        <option value="Segmento VIII">Segmento VIII</option>
      </Select>
    </Box>
  );
}
