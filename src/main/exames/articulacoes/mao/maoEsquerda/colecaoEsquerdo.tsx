/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { MaoEsquerdoNormalContext } from "../../../../../context/MaoEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function ColecaoEsquerdo() {
  const altura = "100%";
  const largura = "90%";

  const [ColecaoMaoEsquerdo, setColecaoMaoEsquerdo] = useState<any>([]);

  const subExame = `Coleção mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(ColecaoMaoEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        ColecaoMaoEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        ColecaoMaoEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [ColecaoMaoEsquerdo]);


  let { MaoEsquerdoLaudoNormal } = useContext(MaoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [AlteracaoInput, setAlteracaoInput] = useState("");
  const [AlteracaoInput2, setAlteracaoInput2] = useState("");
  const [AlteracaoInput3, setAlteracaoInput3] = useState("");
  const [disableAlteracaoInput, setdisableAlteracaoInput] = useState(true);

  const [AlteracaoSelect1, setAlteracaoSelect1] = useState("");

  const [AlteracaoCheckbox, setAlteracaoCheckbox] = useState(false);


  const removeColecaoMao = () => {
    ColecaoMaoEsquerdo.map((e) => {
      if (e.includes("FALTA")) {
        var index = ColecaoMaoEsquerdo.indexOf(e);

        if (index > -1) {
          ColecaoMaoEsquerdo.splice(index, 1);
          setColecaoMaoEsquerdo((arr) => [...arr]);
        }
      }
    });
  };
  const criaStringAlteracao = (medida1, medida2, medida3) => {
    var string = 'FALTA'
    var StringFinal;
    removeColecaoMao()
    if (medida1 !== "" && medida2 !== "" && medida3 !== "" && AlteracaoSelect1 !== '') {
      StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${AlteracaoSelect1} `;
      setColecaoMaoEsquerdo((arr) => [...arr, StringFinal]);
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
