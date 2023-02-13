/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, HStack, Input, Select, Stack, Text, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CistosColoides() {
  const altura = "100%";
  const largura = "66%";

  const [CistosEsparsosCheckbox, setCistosEsparsosCheckbox] = useState(false)
  const [ValueCistosEsparsosSelect, setValueCistosEsparsosSelect] = useState('')
  const [ValueCistosEsparsosInput, setValueCistosEsparsosInput] = useState('')
  const [DisabledCistosEsparsosSelect, setDisabledCistosEsparsosSelect] = useState(true)


  const [CistoColoideCheckbox, setCistoColoideCheckbox] = useState(false)
  const [ValueCistoColoideSelect, setValueCistoColoideSelect] = useState('')
  const [ValueCistoColoideInput, setValueCistoColoideInput] = useState('')
  const [DisabledCistoColoideSelect, setDisabledCistoColoideSelect] = useState(true)

  const criaStringCistoColoide = () => {
    removeCistoColoide()
    let string = 'FALTA CistoColoide'
    let medidacm = new Convert_Medida(ValueCistoColoideInput).Convert_Medida()

    if (ValueCistoColoideSelect != '' && ValueCistoColoideInput != '') {
      string = `${string} ${ValueCistoColoideSelect} ${medidacm} cm`
      setFrasesCistosColoides((arr) => [...arr, string]);
    }

  }

  const removeCistoColoide = () => {
    FrasesCistosColoides.map((e) => {
      if (e.includes("FALTA CistoColoide")) {
        var index = FrasesCistosColoides.indexOf(e);

        if (index > -1) {
          FrasesCistosColoides.splice(index, 1);
          setFrasesCistosColoides((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CistoColoideCheckbox) {
      criaStringCistoColoide()
      setDisabledCistoColoideSelect(false)
    } else {
      setValueCistoColoideSelect('')
      setValueCistoColoideInput('')
      removeCistoColoide()
      setDisabledCistoColoideSelect(true)
    }
  }, [CistoColoideCheckbox, ValueCistoColoideSelect, ValueCistoColoideInput])

  const criaStringCistosEsparsos = () => {
    removeCistosEsparsos()
    let string = 'FALTA CistosEsparsos'
    let medidacm = new Convert_Medida(ValueCistosEsparsosInput).Convert_Medida()

    if (ValueCistosEsparsosSelect != '' && ValueCistosEsparsosInput != '') {
      string = `${string} ${ValueCistosEsparsosSelect} ${medidacm} cm`
      setFrasesCistosColoides((arr) => [...arr, string]);
    }

  }

  const removeCistosEsparsos = () => {
    FrasesCistosColoides.map((e) => {
      if (e.includes("FALTA CistosEsparsos")) {
        var index = FrasesCistosColoides.indexOf(e);

        if (index > -1) {
          FrasesCistosColoides.splice(index, 1);
          setFrasesCistosColoides((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CistosEsparsosCheckbox) {
      criaStringCistosEsparsos()
      setDisabledCistosEsparsosSelect(false)
    } else {
      setValueCistosEsparsosSelect('')
      setValueCistosEsparsosInput('')
      removeCistosEsparsos()
      setDisabledCistosEsparsosSelect(true)
    }
  }, [CistosEsparsosCheckbox, ValueCistosEsparsosSelect, ValueCistosEsparsosInput])

  const [FrasesCistosColoides, setFrasesCistosColoides] = useState<any>([]);

  const subExame = "Cistos coloides";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesCistosColoides).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesCistosColoides
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesCistosColoides
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesCistosColoides]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <Box>
        <TituloNomeExame titulo="Cistos coloides" />

        <Stack gap="15px">

          <Wrap>
            <Checkbox
              onChange={(e) => {
                setCistosEsparsosCheckbox(!CistosEsparsosCheckbox)
              }}
            >
              Cistos coloides esparsos de até
            </Checkbox>
            <Input
              value={ValueCistosEsparsosInput}
              onChange={(e) => setValueCistosEsparsosInput(e.target.value)}
              isDisabled={DisabledCistosEsparsosSelect}
              w='60px'
              placeholder="00"
            />
            <Text alignSelf='center'>mm,</Text>
            <Text alignSelf='center'> o maior deles situado no</Text>
            <Select
              w='auto'
              isDisabled={DisabledCistosEsparsosSelect}
              value={ValueCistosEsparsosSelect}
              onChange={(e) => {
                setValueCistosEsparsosSelect(e.target.value)
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="terço superor do lobo esquerdo ">terço superor do lobo esquerdo</option>
              <option value="terço médio do lobo esquerdo ">terço médio do lobo esquerdo</option>
              <option value="terço inferior do lobo esquerdo ">terço inferior do lobo esquerdo</option>
              <option value="terço superor do lobo direito ">terço superor do lobo direito</option>
              <option value="terço médio do lobo direito ">terço médio do lobo direito</option>
              <option value="terço inferior do lobo direito ">terço inferior do lobo direito</option>
              <option value="istmo ">istmo</option>
              <option value="istmo à direita ">istmo à direita</option>
              <option value="istmo à esquerda ">istmo à esquerda</option>
            </Select>
          </Wrap>

          <Wrap>
            <Checkbox
              onChange={(e) => {
                setCistoColoideCheckbox(!CistoColoideCheckbox)
              }}
            >
              CistoColoide
            </Checkbox>
            <Input
              onChange={(e) => setValueCistoColoideInput(e.target.value)}
              isDisabled={DisabledCistoColoideSelect}
              value={ValueCistoColoideInput}
              w='60px'
              placeholder="00"
            />
            <Text alignSelf='center'>mm no</Text>
            <Select
              w='auto'
              isDisabled={DisabledCistoColoideSelect}
              value={ValueCistoColoideSelect}
              onChange={(e) => {
                setValueCistoColoideSelect(e.target.value)
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="terço superor do lobo esquerdo ">terço superor do lobo esquerdo</option>
              <option value="terço médio do lobo esquerdo ">terço médio do lobo esquerdo</option>
              <option value="terço inferior do lobo esquerdo ">terço inferior do lobo esquerdo</option>
              <option value="terço superor do lobo direito ">terço superor do lobo direito</option>
              <option value="terço médio do lobo direito ">terço médio do lobo direito</option>
              <option value="terço inferior do lobo direito ">terço inferior do lobo direito</option>
              <option value="istmo ">istmo</option>
              <option value="istmo à direita ">istmo à direita</option>
              <option value="istmo à esquerda ">istmo à esquerda</option>
            </Select>
          </Wrap>
        </Stack>
      </Box >
    </Box >
  );
}

export default CistosColoides;
