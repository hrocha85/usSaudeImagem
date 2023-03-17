/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, HStack, Text, useStatStyles } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extra3() {
  const altura = "100%";
  const largura = "66%";

  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false, false, false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked


  const [FraseExtra3, setFraseExtra3] = useState<any>([]);

  const [Data1, setData1] = useState('')
  const [Data2, setData2] = useState('')
  const [Data3, setData3] = useState('')

  const removeItemString = (value) => {
    var index = FraseExtra3.indexOf(value);
    if (index > -1) {
      FraseExtra3.splice(index, 1);
      setFraseExtra3((arr) => [...arr]);
    }
  };
  const removeFraseData = () => {
    FraseExtra3.map((e) => {
      if (e.includes("Exame correlacionado com mamografia de")) {
        let index = FraseExtra3.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseExtra3.splice(index, 1);
          setFraseExtra3((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    removeFraseData()
    let string = 'Exame correlacionado com mamografia de'
    if (checkedItems[0]) {
      if (Data1 !== '' && Data2 !== '' && Data3.length == 4) {
        string = `${string} ${Data1} / ${Data2} / ${Data3}`
        setFraseExtra3((arr) => [...arr, string])
      }
    } else {
      setData1('')
      setData2('')
      setData3('')
    }
  }, [checkedItems[0], Data1, Data2, Data3]);

  useEffect(() => {
    const string = 'Recomendamos manter controle anual.'
    checkedItems[1] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[1]]);

  useEffect(() => {
    const string = 'Enfatizamos a necessidade de correlacionar com o exame físico devido à alta densidade do tecido mamário.'
    checkedItems[2] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[2]]);

  useEffect(() => {
    const string = 'Exames anteriores não disponíveis para estudo comparativo.'
    checkedItems[3] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[3]]);

  useEffect(() => {
    const string = 'Estou à disposição para esclarecimentos adicionais.'
    checkedItems[4] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[4]]);

  useEffect(() => {
    const string = 'Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.'
    checkedItems[5] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[5]]);


  useEffect(() => {
    const string = 'Recomendo associar ultrassonografia mamária à propedêutica de rastreamento anual, conforme evidências publicadas pelo estudo ACRIN 6666 que demonstrou baixa sensibilidade da mamografia isolada para rastrear mamas densas.'
    checkedItems[6] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[6]]);

  useEffect(() => {
    const string = 'Este exame deve ser guardado para comparações futuras.'
    checkedItems[7] ? setFraseExtra3((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[7]]);

  const subExame = "Microcalcificações";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseExtra3).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseExtra3
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseExtra3
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseExtra3]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
    >
      <Box gap="8px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => {
            setCheckedItems([e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked]);
          }}
        >
          <Text fontWeight="semibold" fontSize="16px">
            Marcar todos
          </Text>
        </Checkbox>
        <HStack>
          <Checkbox
            ml='15px'
            isChecked={checkedItems[0]}
            onChange={(e) => {
              setCheckedItems([e.target.checked,
              checkedItems[1],
              checkedItems[2],
              checkedItems[3],
              checkedItems[4],
              checkedItems[5],
              checkedItems[6],
              checkedItems[7]]);
            }}
          >
            Exame correlacionado com mamografia de
          </Checkbox>
          <Input
            textAlign='center'
            padding='0'
            disabled={!checkedItems[0]}
            value={Data1}
            maxLength={2}
            w='30px'
            onChange={(e) => setData1(e.target.value)}>
          </Input>
          <Text>/</Text>
          <Input
            textAlign='center'
            padding='0'
            value={Data2}
            maxLength={2}
            disabled={!checkedItems[0]}
            w='30px'
            onChange={(e) => setData2(e.target.value)}>
          </Input>
          <Text>/</Text>
          <Input
            textAlign='center'
            padding='0'
            value={Data3}
            maxLength={4}
            disabled={!checkedItems[0]}
            w='50px'
            onChange={(e) => setData3(e.target.value)}>
          </Input>
        </HStack>
        <Checkbox
          ml='15px'

          isChecked={checkedItems[1]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            e.target.checked,
            checkedItems[2],
            checkedItems[3],
            checkedItems[4],
            checkedItems[5],
            checkedItems[6],
            checkedItems[7]]);
          }}
        >
          Recomendamos manter controle anual
        </Checkbox>
        <Checkbox
          ml='15px'
          isChecked={checkedItems[2]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            checkedItems[1],
            e.target.checked,
            checkedItems[3],
            checkedItems[4],
            checkedItems[5],
            checkedItems[6],
            checkedItems[7]]);
          }}
        >
          Enfatizamos a necessidade de correlacionar com o exame físico devido à alta densidade do tecido mamário.
        </Checkbox>
        <Checkbox
          ml='15px'
          isChecked={checkedItems[3]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            checkedItems[1],
            checkedItems[2],
            e.target.checked,
            checkedItems[4],
            checkedItems[5],
            checkedItems[6],
            checkedItems[7]]);
          }}
        >
          Exames anteriores não disponíveis para estudo comparativo.
        </Checkbox>
        <Checkbox
          ml='15px'
          isChecked={checkedItems[4]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            checkedItems[1],
            checkedItems[2],
            checkedItems[3],
            e.target.checked,
            checkedItems[5],
            checkedItems[6],
            checkedItems[7]]);

          }}
        >
          Estou à disposição para esclarecimentos adicionais.
        </Checkbox>
        <Checkbox
          ml='15px'
          isChecked={checkedItems[5]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            checkedItems[1],
            checkedItems[2],
            checkedItems[3],
            checkedItems[4],
            e.target.checked,
            checkedItems[6],
            checkedItems[7]]);
          }}
        >
          Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.
        </Checkbox>
        <Checkbox
          ml='15px'
          isChecked={checkedItems[6]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            checkedItems[1],
            checkedItems[2],
            checkedItems[3],
            checkedItems[4],
            checkedItems[5],
            e.target.checked,
            checkedItems[7]]);
          }}
        >
          Recomendo associar ultrassonografia mamária à propedêutica de rastreamento anual, conforme evidências publicadas pelo estudo ACRIN 6666 que demonstrou baixa sensibilidade da mamografia isolada para rastrear mamas densas.
        </Checkbox>
        <Checkbox
          ml='15px'
          isChecked={checkedItems[7]}
          onChange={(e) => {
            setCheckedItems([checkedItems[0],
            checkedItems[1],
            checkedItems[2],
            checkedItems[3],
            checkedItems[4],
            checkedItems[5],
            checkedItems[6],
            e.target.checked]);
          }}
        >
          Este exame deve ser guardado para comparações futuras.
        </Checkbox>

      </Box>
    </Box>
  );
}

export default Extra3;
