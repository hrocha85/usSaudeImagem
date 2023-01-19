/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Stack, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { MaoEsquerdoNormalContext } from "../../../../../context/MaoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function ColecaoEsquerdo() {
  const altura = "100%";
  const largura = "90%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { MaoEsquerdoLaudoNormal } = useContext(MaoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [AlteracaoInput, setAlteracaoInput] = useState("");
  const [AlteracaoInput2, setAlteracaoInput2] = useState("");
  const [AlteracaoInput3, setAlteracaoInput3] = useState("");
  const [disableAlteracaoInput, setdisableAlteracaoInput] = useState(true);

  const [AlteracaoSelect1, setAlteracaoSelect1] = useState("");

  const [AlteracaoCheckbox, setAlteracaoCheckbox] = useState(false);



  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };


  const criaStringAlteracao = (medida1, medida2, medida3) => {
    var string = 'Alteração pós cirúrgicas'
    var StringFinal;
    removeItemString(string)
    if (medida1 !== "" && medida2 !== "" && medida3 !== "" && AlteracaoSelect1 !== '') {
      StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${AlteracaoSelect1} `;
      setLaudoPrin((arr) => [...arr, StringFinal]);
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
      setAlteracaoSelect1("")
    }
  }, [AlteracaoCheckbox, AlteracaoInput, AlteracaoInput2, AlteracaoInput3, AlteracaoSelect1]);

  useEffect(() => {
    MaoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [MaoEsquerdoLaudoNormal])

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
            isDisabled={disableTudo}
            onChange={() => {
              setAlteracaoCheckbox(!AlteracaoCheckbox);
            }}
          >
            Coleção
          </Checkbox>
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
            <option value="corno anterior">corno anterior</option>
            <option value="corno posterior">corno posterior</option>
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
export default ColecaoEsquerdo;
