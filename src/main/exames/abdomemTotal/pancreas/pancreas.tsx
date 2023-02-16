/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Pancreas({ Disable }) {
  const altura = "100%";
  const largura = "66%";


  const [value, setValue] = useState("1");

  useEffect(() => {
    if (value == "1") {
      setFrasesPancreas([]);
    } else {
      if (value == 'Pâncreas de aspecto heterogêneo, com espessura aumentada e ecogenicidade reduzida do parênquima.') {
        setConclusoesPancreas((arr) => [...arr, 'Sinais compatíveis com pancreatite aguda.']);
      } else {
        removeItemConclusao('Sinais compatíveis com pancreatite aguda.')
      }
      setFrasesPancreas([]);
      setFrasesPancreas((arr) => [...arr, value]);
    }
  }, [value]);
  const removeItemConclusao = (value) => {
    var index = ConclusoesPancreas.indexOf(value);
    if (index > -1) {
      ConclusoesPancreas.splice(index, 1);
      setConclusoesPancreas((arr) => [...arr]);
    }
  };

  const [frasesPancreas, setFrasesPancreas] = useState<any>([]);
  const [ConclusoesPancreas, setConclusoesPancreas] = useState<any>([]);

  const [CabecaCheckbox, setCabecaCheckbox] = useState(false)
  const [CabecaInput, setCabecaInput] = useState('')
  const [DisableCabecaInput, setDisableCabecaInput] = useState(true)

  const [CorpoCheckbox, setCorpoCheckbox] = useState(false)
  const [CorpoInput, setCorpoInput] = useState('')
  const [DisableCorpoInput, setDisableCorpoInput] = useState(true)

  const [CaudaCheckbox, setCaudaCheckbox] = useState(false)
  const [CaudaInput, setCaudaInput] = useState('')
  const [DisableCaudaInput, setDisableCaudaInput] = useState(true)


  const criaStringDimensoes = (dadosCabeca, dadosCorpo, dadosCauda) => {
    var string = 'A espessura pancreática foi mensurada em '
    removeFraseDimensoes()
    const medida1 = new Convert_Medida(dadosCabeca).Convert_Medida()
    const medida2 = new Convert_Medida(dadosCorpo).Convert_Medida()
    const medida3 = new Convert_Medida(dadosCauda).Convert_Medida()
    if (dadosCabeca != '' || dadosCorpo != '' || dadosCorpo != '') {
      if (dadosCabeca != '') {
        string = `${string} ${medida1} cm na cabeça `
      }
      if (dadosCorpo != '') {
        string = `${string} ${medida2} cm no corpo `
      }
      if (dadosCauda != '') {
        string = `${string} ${medida3} cm na cauda.`
      }
      setFrasesPancreas((arr) => [...arr, string])
    }
  }

  const removeFraseDimensoes = () => {
    frasesPancreas.map((e) => {
      if (e.includes("A espessura pancreática foi mensurada em ")) {
        var index = frasesPancreas.indexOf(e);
        if (index > -1) {
          frasesPancreas.splice(index, 1);
          setFrasesPancreas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CabecaCheckbox) {
      criaStringDimensoes(CabecaInput, CorpoInput, CaudaInput)
      setDisableCabecaInput(false)
    } else {
      removeFraseDimensoes()
      setDisableCabecaInput(true)
      setCabecaInput('')
    }
  }, [CabecaCheckbox, CabecaInput, CorpoInput, CaudaInput])


  useEffect(() => {
    if (CorpoCheckbox) {
      setDisableCorpoInput(false)
    } else {

      setDisableCorpoInput(true)
      setCorpoInput('')
    }
  }, [CorpoCheckbox])

  useEffect(() => {
    if (CaudaCheckbox) {

      setDisableCaudaInput(false)
    } else {
      setDisableCaudaInput(true)
      setCaudaInput('')
    }
  }, [CaudaCheckbox])

  const subExame = "Pâncreas";
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(frasesPancreas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPancreas,
        ConclusoesPancreas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPancreas,
        ConclusoesPancreas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPancreas]);

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
        <TituloNomeExame titulo="Pâncreas" />
        <Box gap="25px" display="flex" flexWrap="wrap" >
          <RadioGroup
            isDisabled={Disable}
            onChange={setValue} value={value} padding="10px">
            <Stack direction="column">
              <Radio value="1">Não citar</Radio>
              <Radio value="Pâncreas de dimensões normais, contornos regulares e ecotextura homogênea. Não há dilatação do ducto pancreático.">Normal</Radio>
              <Radio value="Pâncreas parcialmente visibilizado devido à interposição de alças intestinais.">Parcialmente acessível</Radio>
              <Radio value="Pâncreas inacessível devido à interposição gasosa de alças intestinais.">Inacessível</Radio>
              <Radio value="Pâncreas de aspecto heterogêneo, com espessura aumentada e ecogenicidade reduzida do parênquima.">Sinais de pancreatite aguda</Radio>
            </Stack>
          </RadioGroup>
          <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%'>
            <Text fontWeight="bold" textAlign='center'>Dimensões (espessura)</Text>
            <HStack>
              <Checkbox
                isDisabled={Disable}
                onChange={(e) => {
                  setCabecaCheckbox(!CabecaCheckbox);
                }}
              >
                Cabeça
              </Checkbox>
              <Input
                w='55px'
                value={CabecaInput}
                onChange={(e) => setCabecaInput(e.target.value)}
                disabled={DisableCabecaInput}
                placeholder="00"
              />
              <Text alignItems='center'>mm</Text>
            </HStack>
            <HStack>
              <Checkbox
                isDisabled={Disable}
                onChange={(e) => {
                  setCorpoCheckbox(!CorpoCheckbox);
                }}
              >
                Corpo
              </Checkbox>
              <Input
                w='55px'
                value={CorpoInput}
                onChange={(e) => setCorpoInput(e.target.value)}
                disabled={DisableCorpoInput}
                placeholder="00"
              />
              <Text alignItems='center'>mm</Text>
            </HStack>
            <HStack>
              <Checkbox
                isDisabled={Disable}
                onChange={(e) => {
                  setCaudaCheckbox(!CaudaCheckbox);
                }}
              >
                Cauda
              </Checkbox>
              <Input
                w='55px'
                value={CaudaInput}
                onChange={(e) => setCaudaInput(e.target.value)}
                disabled={DisableCaudaInput}
                placeholder="00"
              />
              <Text alignItems='center'>mm</Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box >
  );
}

export default Pancreas;
