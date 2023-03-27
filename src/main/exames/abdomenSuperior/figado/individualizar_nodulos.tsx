/* eslint-disable no-sparse-arrays */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo, Disable }) {
  const [Medida1NoduloInput, setMedida1NoduloInput] = useState("");
  const [Medida2NoduloInput, setMedida2NoduloInput] = useState("");
  const [Select1Nodulo, setSelect1Nodulo] = useState("");
  const [Select2Nodulo, setSelect2Nodulo] = useState("");
  const [Select3Nodulo, setSelect3Nodulo] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] = useState(false);

  const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);
  const [ConclusaoNodulos, setConclusaoNodulos] = useState<any>([]);

  const subExame = `Fígado - Nódulo ${numNodulo}`;
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesNodulos,
        ConclusaoNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesNodulos,
        ConclusaoNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesNodulos]);


  const criaStringMultiplosNodulos = () => {
    const conclusao = 'Nódulo hepático sugestivo de hemangioma.'
    removeMultiplosNodulos();
    removeItemConclusao(conclusao)
    if (multiplosNodulosCheckBox) {
      if (Medida1NoduloInput != "" && Medida2NoduloInput != "" && Select1Nodulo != '' && Select2Nodulo != '' && Select3Nodulo != '') {
        var string = `Nódulo ${numNodulo}: Nódulo ${Select3Nodulo}, arredondado, de limites precisos e contornos ${Select2Nodulo}, 
        desprovido de sombra acústica posterior, localizado no ${Select1Nodulo} medindo ${Medida1NoduloInput}x${Medida2NoduloInput} mm.`;
        setFrasesNodulos((arr) => [...arr, string]);
        setConclusaoNodulos((arr) => [...arr, conclusao]);
      }
    } else {
      removeMultiplosNodulos();
      setMedida1NoduloInput("");
      setMedida2NoduloInput("");
      setSelect1Nodulo("");
      setSelect2Nodulo("");
      setSelect3Nodulo("");
    }
  };

  const removeItemConclusao = (value) => {
    var index = ConclusaoNodulos.indexOf(value);
    if (index > -1) {
      ConclusaoNodulos.splice(index, 1);
      setConclusaoNodulos((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  const removeMultiplosNodulos = () => {
    FrasesNodulos.map((e) => {
      if (e.includes(`Nódulo ${numNodulo}: `)) {
        var index = FrasesNodulos.indexOf(e);

        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMultiplosNodulos();
  }, [multiplosNodulosCheckBox, Medida1NoduloInput, Medida2NoduloInput, Select1Nodulo, Select2Nodulo, Select3Nodulo]);

  return (
    <Box display="flex" flexWrap='wrap' alignItems='center' gap='5px'>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={Disable}
        onChange={() => setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
      >
        Nódulo {numNodulo}
      </Checkbox>

      <Input
        p='0'
        w='50px'
        textAlign='center'
        isDisabled={!multiplosNodulosCheckBox}
        value={Medida1NoduloInput}
        onChange={(e) => setMedida1NoduloInput(e.target.value)}
        placeholder={"mm"}
      />
      <Text>x</Text>

      <Input
        p='0'
        w='50px'
        textAlign='center'
        isDisabled={!multiplosNodulosCheckBox}
        value={Medida2NoduloInput}
        onChange={(e) => setMedida2NoduloInput(e.target.value)}
        placeholder={"mm"}
      />
      <Select
        isDisabled={!multiplosNodulosCheckBox}
        w='150px'
        onChange={(e) => setSelect1Nodulo(e.target.value)}
        value={Select1Nodulo}
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
      <Select
        isDisabled={!multiplosNodulosCheckBox}
        w='150px'
        onChange={(e) => setSelect2Nodulo(e.target.value)}
        value={Select2Nodulo}
      >
        <option value="" disabled selected>
          Contornos
        </option>
        <option value="Regulares">Regulares</option>
        <option value="Irregulares">Irregulares</option>
        <option value="Lobulados">Lobulados</option>
      </Select>
      <Select
        isDisabled={!multiplosNodulosCheckBox}
        w='150px'
        onChange={(e) => setSelect3Nodulo(e.target.value)}
        value={Select3Nodulo}
      >
        <option value="" disabled selected>
          Ecogenicidade
        </option>
        <option value="Hippoecogenico">Hipoecogênico</option>
        <option value="Hiperecogênico">Hiperecogênico</option>
        <option value="Isoecogênico">Isoecogênico</option>
      </Select>
    </Box>
  );
}
