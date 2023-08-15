
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";

export default function IndividualizarCalculos({ numCalculo }) {

  const [FraseCalculo, setFraseCalculo] = useState<any>([]);
  const [ConclusoesCalculo, setConclusoesCalculo] = useState<any>([]);

  const [CalculoCheckbox, setCalculoCheckbox] = useState(false)
  const [InputCalculo, setInputCalculo] = useState('')
  const [DisableOptionsCalculo, setDisableOptionsCalculo] = useState(true)
  const [Select01Calculo, setSelect01Calculo] = useState('')
  const [Select02Calculo, setSelect02Calculo] = useState('')

  const criaStringCalculo = () => {
    const conclusao = 'Litíase ureteral'
    let string = `Cálculo ${numCalculo}: Cálculo de`
    removeCalculo()
    removeItemStringConclusao()
    const InputCalculocm = new Convert_Medida(InputCalculo).Convert_Medida()
    if (Select01Calculo != '' && Select02Calculo != '' && InputCalculo != '') {
      string = `${string} ${InputCalculocm} cm no grupamento calicinal ${Select01Calculo} do ${Select02Calculo}`
      setFraseCalculo((arr) => [...arr, string]);
      setConclusoesCalculo([conclusao]);
    }
  }

  const removeCalculo = () => {
    FraseCalculo.map((e) => {
      if (e.includes(`Cálculo ${numCalculo}: Cálculo de`)) {
        const index = FraseCalculo.indexOf(e);

        if (index > -1) {
          FraseCalculo.splice(index, 1);
          setFraseCalculo((arr) => [...arr]);
        }
      }
    });
  };


  const removeItemStringConclusao = () => {
    // console.log("valor remove = ", value);
    const index = ConclusoesCalculo.indexOf('Litíase ureteral');
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusoesCalculo.splice(index, 1);
      setConclusoesCalculo((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao('Litíase ureteral');
    }
  };

  useEffect(() => {
    if (CalculoCheckbox) {
      criaStringCalculo()
      setDisableOptionsCalculo(false)
    } else {
      removeCalculo()
      setDisableOptionsCalculo(true)
      setInputCalculo('')
      setSelect01Calculo('')
      setSelect02Calculo('')
    }
  }, [CalculoCheckbox, InputCalculo, Select01Calculo, Select02Calculo])

  const subExame = `Rins e ureteres. Cálculo ${numCalculo}`;
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(FraseCalculo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseCalculo,
        ConclusoesCalculo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseCalculo,
        ConclusoesCalculo
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseCalculo]);

  return (
    <HStack>
      <Box w='150px'>
        <Checkbox onChange={() => {
          setCalculoCheckbox(!CalculoCheckbox)
        }}
        >
          Cálculo {numCalculo}
        </Checkbox>
        <Input onChange={(e) => {
          setInputCalculo(e.target.value)
        }}
          value={InputCalculo}
          isDisabled={DisableOptionsCalculo}
          placeholder="mm"
        />
        <Select onChange={(e) => {
          setSelect01Calculo(e.target.value)
        }}
          value={Select01Calculo}
          isDisabled={DisableOptionsCalculo}
        >
          <option value="" disabled selected>
            No
          </option>
          <option value="superior">superior</option>
          <option value="médio">médio</option>
          <option value="inferior">inferior</option>
        </Select>
        <Select onChange={(e) => {
          setSelect02Calculo(e.target.value)
        }}
          value={Select02Calculo}
          isDisabled={DisableOptionsCalculo}
        >
          <option value="" disabled selected>
            Do
          </option>
          <option value="rim direito">Rim direito</option>
          <option value="rim esquerdo">Rim esquerdo</option>
        </Select>
      </Box>
    </HStack>
  );
}
