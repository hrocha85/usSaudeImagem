/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Pancreas() {
  const altura = "100%";
  const largura = "66%";


  const [value, setValue] = useState("1");

  useEffect(() => {
    if (value == "1") {
      setFrasesPancreas([]);
    } else {
      setFrasesPancreas([]);
      setFrasesPancreas((arr) => [...arr, value]);
    }
  }, [value]);
  const { laudoNormal } = useContext(NormalContext);

  const [frasesPancreas, setFrasesPancreas] = useState<any>([]);

  const [CabecaCheckbox, setCabecaCheckbox] = useState(false)
  const [CabecaInput, setCabecaInput] = useState('')
  const [DisableCabecaInput, setDisableCabecaInput] = useState(true)

  const [CorpoCheckbox, setCorpoCheckbox] = useState(false)
  const [CorpoInput, setCorpoInput] = useState('')
  const [DisableCorpoInput, setDisableCorpoInput] = useState(true)

  const [CaudaCheckbox, setCaudaCheckbox] = useState(false)
  const [CaudaInput, setCaudaInput] = useState('')
  const [DisableCaudaInput, setDisableCaudaInput] = useState(true)


  const criaStringCabeca = (dados) => {
    var string = 'Cabeça FALTA'
    removeFraseCabeca()
    const medida = new Convert_Medida(dados).Convert_Medida()
    if (dados != '') {
      string = `${string} = ${medida} cm.`
      setFrasesPancreas((arr) => [...arr, string])

    }
  }

  const removeFraseCabeca = () => {
    frasesPancreas.map((e) => {
      if (e.includes("Cabeça FALTA")) {
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
      criaStringCabeca(CabecaInput)
      setDisableCabecaInput(false)
    } else {
      removeFraseCabeca()
      setDisableCabecaInput(true)
      setCabecaInput('')
    }
  }, [CabecaCheckbox, CabecaInput])

  const criaStringCorpo = (dados) => {
    var string = 'Corpo FALTA'
    removeFraseCorpo()
    const medida = new Convert_Medida(dados).Convert_Medida()
    if (dados != '') {
      string = `${string} = ${medida} cm.`
      setFrasesPancreas((arr) => [...arr, string])

    }
  }

  const removeFraseCorpo = () => {
    frasesPancreas.map((e) => {
      if (e.includes("Corpo FALTA")) {
        var index = frasesPancreas.indexOf(e);
        if (index > -1) {
          frasesPancreas.splice(index, 1);
          setFrasesPancreas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CorpoCheckbox) {
      criaStringCorpo(CorpoInput)
      setDisableCorpoInput(false)
    } else {
      removeFraseCorpo()
      setDisableCorpoInput(true)
      setCorpoInput('')
    }
  }, [CorpoCheckbox, CorpoInput])

  const criaStringCauda = (dados) => {
    var string = 'Cauda FALTA'
    removeFraseCauda()
    const medida = new Convert_Medida(dados).Convert_Medida()
    if (dados != '') {
      string = `${string} = ${medida} cm.`
      setFrasesPancreas((arr) => [...arr, string])

    }
  }

  const removeFraseCauda = () => {
    frasesPancreas.map((e) => {
      if (e.includes("Cauda FALTA")) {
        var index = frasesPancreas.indexOf(e);
        if (index > -1) {
          frasesPancreas.splice(index, 1);
          setFrasesPancreas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CaudaCheckbox) {
      criaStringCauda(CaudaInput)
      setDisableCaudaInput(false)
    } else {
      removeFraseCauda()
      setDisableCaudaInput(true)
      setCaudaInput('')
    }
  }, [CaudaCheckbox, CaudaInput])

  const subExame = "Pâncreas";
  const titulo_exame = "Abdomen total";

  useEffect(() => {
    if (Object.keys(frasesPancreas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPancreas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPancreas
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
          <RadioGroup onChange={setValue} value={value} padding="10px">
            <Stack direction="column">
              <Radio value="1">Não citar</Radio>
              <Radio value="Pâncreas de dimensões normais, contornos regulares e ecotextura homogênea. Não há dilatação do ducto pancreático.">Normal</Radio>
              <Radio value="Pâncreas parcialmente visibilizado devido à interposição de alças intestinais.">Parcialmente acessível</Radio>
              <Radio value="Pâncreas inacessível devido à interposição gasosa de alças intestinais.">Inacessível</Radio>
              <Radio value="Pâncreas de aspecto heterogêneo, com espessura aumentada e ecogenicidade reduzida do parênquima.">sinais de pancreatite aguda</Radio>
            </Stack>
          </RadioGroup>
          <Box border='1px' padding='5px' h='100%'>
            <Text fontWeight="bold" textAlign='center'>Dimensões (espessura)</Text>
            <HStack>
              <Checkbox
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
