/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function ColecaoDireito({ Disable }) {
  const altura = "100%";
  const largura = "90%";

  const [ColecaoMaoDireito, setColecaoMaoDireito] = useState<any>([]);
  const [ConclusaoColecaoMaoDireito, setConclusaoColecaoMaoDireito] = useState<any>([]);

  const subExame = `Coleção mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(ColecaoMaoDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        ColecaoMaoDireito,
        ConclusaoColecaoMaoDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        ColecaoMaoDireito,
        ConclusaoColecaoMaoDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [ColecaoMaoDireito]);

  const [AlteracaoInput, setAlteracaoInput] = useState("");
  const [AlteracaoInput2, setAlteracaoInput2] = useState("");
  const [AlteracaoInput3, setAlteracaoInput3] = useState("");
  const [disableAlteracaoInput, setdisableAlteracaoInput] = useState(true);

  const [AlteracaoSelect1, setAlteracaoSelect1] = useState("");
  const [AlteracaoSelect, setAlteracaoSelect] = useState("");

  const [AlteracaoCheckbox, setAlteracaoCheckbox] = useState(false);


  const removeColecaoMao = () => {
    ColecaoMaoDireito.map((e) => {
      if (e.includes('Presença de coleção')) {
        var index = ColecaoMaoDireito.indexOf(e);

        if (index > -1) {
          ColecaoMaoDireito.splice(index, 1);
          setColecaoMaoDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoColecaoMaoDireito.map((e) => {
      if (e.includes('Coleção na')) {
        var index = ConclusaoColecaoMaoDireito.indexOf(e);

        if (index > -1) {
          ConclusaoColecaoMaoDireito.splice(index, 1);
          setConclusaoColecaoMaoDireito((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringAlteracao = (medida1, medida2, medida3) => {
    var string = 'Presença de coleção'
    var conclusao = 'Coleção na'
    var StringFinal;
    var calcVolume = (medida1 * medida2 * medida3) / 10
    removeColecaoMao()
    if (medida1 !== "" && medida2 !== "" && medida3 !== "" && AlteracaoSelect1 !== '' && AlteracaoSelect !== '') {
      StringFinal = `${string} ${AlteracaoSelect} na face ${AlteracaoSelect1},medindo ${medida1} x ${medida2} x ${medida3} mm (volume = ${calcVolume} ml)`;
      conclusao = `${conclusao} ${AlteracaoSelect}`
      setColecaoMaoDireito((arr) => [...arr, StringFinal]);
      setConclusaoColecaoMaoDireito((arr) => [...arr, conclusao]);
    }
  };



  useEffect(() => {
    criaStringAlteracao(AlteracaoInput, AlteracaoInput2, AlteracaoInput3);
    if (AlteracaoCheckbox) {
      setdisableAlteracaoInput(false);
    } else {
      setdisableAlteracaoInput(true);
      setAlteracaoInput("");
      setAlteracaoInput2("");
      setAlteracaoInput3("");
      setAlteracaoSelect("");
      setAlteracaoSelect1("");
    }
  }, [AlteracaoCheckbox, AlteracaoInput, AlteracaoInput2, AlteracaoInput3, AlteracaoSelect1, AlteracaoSelect]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Coleção" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
          <Checkbox
            isDisabled={Disable}
            onChange={() => {
              setAlteracaoCheckbox(!AlteracaoCheckbox);
            }}
          >
            Coleção
          </Checkbox>
          <Select
            w='150px'
            isDisabled={disableAlteracaoInput}
            value={AlteracaoSelect}
            onChange={(e) => {
              setAlteracaoSelect(e.target.value);
            }}
          >
            <option value='' disabled selected>Select</option>
            <option value="anecogênica">anecogênica</option>
            <option value="hipocogênica (líquido espesso)">hipocogênica (líquido espesso)</option>
          </Select>
          <Text alignSelf='center'>na face</Text>
          <Select
            w='150px'
            isDisabled={disableAlteracaoInput}
            value={AlteracaoSelect1}
            onChange={(e) => {
              setAlteracaoSelect1(e.target.value);
            }}
          >
            <option value='' disabled selected>Select</option>
            <option value="dorsal">dorsal</option>
            <option value="ventral">ventral</option>
          </Select>
          <Text alignSelf='center'>da mão</Text>
          <Text alignSelf='center'>medindo</Text>
          <HStack>
            <Input
              isDisabled={disableAlteracaoInput}
              value={AlteracaoInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setAlteracaoInput(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableAlteracaoInput}
              value={AlteracaoInput2}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setAlteracaoInput2(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableAlteracaoInput}
              value={AlteracaoInput3}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setAlteracaoInput3(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
        </Box>

      </Stack >
    </Box >

  );
}
export default ColecaoDireito;
