
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import { Convert_Medida } from "../../../../../component/function_convert_medidas";

export default function IndividualizarCistos({ numCisto }) {

  const [FraseCisto, setFraseCisto] = useState<any>([]);
  const [ConclusoesCisto, setConclusoesCisto] = useState<any>([]);

  const [CistoCheckbox, setCistoCheckbox] = useState(false)
  const [InputCisto, setInputCisto] = useState('')
  const [DisableOptionsCisto, setDisableOptionsCisto] = useState(true)
  const [Select01Cisto, setSelect01Cisto] = useState('')
  const [Select02Cisto, setSelect02Cisto] = useState('')

  const criaStringCisto = () => {
    const conclusao = 'Cisto renal.'
    let string = `Cisto ${numCisto}: Cisto de conteúdo anecogênico, com paredes finas e contornos regulares, medindo`
    removeCisto()
    removeItemStringConclusao()
    const InputCistocm = new Convert_Medida(InputCisto).Convert_Medida()
    if (Select01Cisto != '' && Select02Cisto != '' && InputCisto != '') {
      string = `${string} ${InputCistocm} cm, visível no ${Select01Cisto} do ${Select02Cisto}`
      setFraseCisto((arr) => [...arr, string]);
      setConclusoesCisto([conclusao]);
    }
  }

  const removeCisto = () => {
    FraseCisto.map((e) => {
      if (e.includes(`Cisto ${numCisto}: Cisto de`)) {
        const index = FraseCisto.indexOf(e);

        if (index > -1) {
          FraseCisto.splice(index, 1);
          setFraseCisto((arr) => [...arr]);
        }
      }
    });
  };


  const removeItemStringConclusao = () => {
    // console.log("valor remove = ", value);
    const index = ConclusoesCisto.indexOf('Cisto renal.');
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusoesCisto.splice(index, 1);
      setConclusoesCisto((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao('Cisto renal.');
    }
  };

  useEffect(() => {
    if (CistoCheckbox) {
      criaStringCisto()
      setDisableOptionsCisto(false)
    } else {
      removeCisto()
      setDisableOptionsCisto(true)
      setInputCisto('')
      setSelect01Cisto('')
      setSelect02Cisto('')
    }
  }, [CistoCheckbox, InputCisto, Select01Cisto, Select02Cisto])

  const subExame = `Rins e ureteres. Cisto ${numCisto}`;
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(FraseCisto).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseCisto,
        ConclusoesCisto
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseCisto,
        ConclusoesCisto
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseCisto]);

  return (
    <HStack>
      <Box w='150px'>
        <Checkbox onChange={() => {
          setCistoCheckbox(!CistoCheckbox)
        }}
        >
          Cisto {numCisto}
        </Checkbox>
        <Input onChange={(e) => {
          setInputCisto(e.target.value)
        }}
          value={InputCisto}
          isDisabled={DisableOptionsCisto}
          placeholder="mm"
        />
        <Select onChange={(e) => {
          setSelect01Cisto(e.target.value)
        }}
          value={Select01Cisto}
          isDisabled={DisableOptionsCisto}
        >
          <option value="" disabled selected>
            No
          </option>
          <option value="superior">superior</option>
          <option value="médio">médio</option>
          <option value="inferior">inferior</option>
        </Select>
        <Select onChange={(e) => {
          setSelect02Cisto(e.target.value)
        }}
          value={Select02Cisto}
          isDisabled={DisableOptionsCisto}
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
