/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

function Obs() {
  const altura = "100%";
  const largura = "350px";

  const [items, setItems] = useState<{ id: string; values: string[] }>({
    id: 'Mamas',
    values: [""],
  });

  const [UltrassonografiaCheckbox, setUltrassonografiaCheckbox] = useState(false);
  const [MamografiaCheckbox, setMamografiaCheckbox] = useState(false);
  const [MamografiaInput1, setMamografiaInput1] = useState('');
  const [MamografiaInput2, setMamografiaInput2] = useState('');
  const [MamografiaInput3, setMamografiaInput3] = useState('');

  const removeItemString = (value) => {
    new Format_Laudo(titulo_exame).Remove_Observacao(value);
  };

  const criaStringUltrassonografia = () => {
    const string = 'Exame correlacionado com ultrassonográfia'
    if (UltrassonografiaCheckbox) {
      setItems({
        id: titulo_exame,
        values: [string]
      })
    } else {
      setItems({
        id: titulo_exame,
        values: ['']
      })
      removeItemString(string)
    }
  }
  const criaStringMamografia = () => {
    var string = 'Exame correlacionado com mamografia de'
    new Format_Laudo(titulo_exame).Remove_Observacao_Select(string);
    if (MamografiaCheckbox) {
      if (MamografiaInput1 != '' && MamografiaInput2 != '' && MamografiaInput3.length == 4) {
        string = `${string} ${MamografiaInput1} / ${MamografiaInput2} / ${MamografiaInput3}.`
        setItems({
          id: titulo_exame,
          values: [string]
        })
      }
    } else {
      setItems({
        id: titulo_exame,
        values: ['']
      })
      setMamografiaInput1("")
      setMamografiaInput2("")
      setMamografiaInput3("")
    }
  }

  useEffect(() => {
    criaStringUltrassonografia()
  }, [UltrassonografiaCheckbox]);

  useEffect(() => {
    criaStringMamografia()

  }, [MamografiaCheckbox, MamografiaInput1, MamografiaInput2, MamografiaInput3]);

  const titulo_exame = "Mamas";

  useEffect(() => {
    new Format_Laudo().Add_Observacao(items, titulo_exame);
  }, [items]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 10px 15px"
      mt="20px"
    >
      <Text mb='5px'>Exame correlacionado com </Text>
      <Box gap="15px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isDisabled={MamografiaCheckbox}
          onChange={(e) => {
            setUltrassonografiaCheckbox(!UltrassonografiaCheckbox);
          }}
        >
          Ultrassonográfia
        </Checkbox>
        <HStack>
          <Checkbox
            isDisabled={UltrassonografiaCheckbox}
            onChange={(e) => {
              setMamografiaCheckbox(!MamografiaCheckbox);
            }}
          >
            Mamografia de
          </Checkbox>
          <Input
            textAlign='center'
            w='30px'
            p='0px'
            maxLength={2}
            isDisabled={!MamografiaCheckbox}
            value={MamografiaInput1}
            onChange={(e) => setMamografiaInput1(e.target.value)} />
          <Text>/</Text>
          <Input
            textAlign='center'
            w='30px'
            p='0px'
            maxLength={2}
            isDisabled={!MamografiaCheckbox}
            value={MamografiaInput2}
            onChange={(e) => setMamografiaInput2(e.target.value)} />
          <Text>/</Text>
          <Input
            textAlign='center'
            w='60px'
            p='0px'
            maxLength={4}
            isDisabled={!MamografiaCheckbox}
            value={MamografiaInput3}
            onChange={(e) => setMamografiaInput3(e.target.value)} />
        </HStack>
      </Box>
    </Box>
  );
}

export default Obs;
