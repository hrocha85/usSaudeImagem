/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function RimEsquerdo({ Nefropatia, CheckboxNefropatia, RimPelvico, CheckboxRimPelvico, RimFerradura }) {
  const altura = "100%";
  const largura = "100%";

  const [frasesRimD, setFrasesRimD] = useState<any>([]);
  const [ConclusaoRimD, setConclusaoRimD] = useState<any>([]);

  const [checkboxMedidas, setCheckboxMedidas] = useState(false);
  const [valueInput1Medida, setValueInput1Medida] = useState("");
  const [valueInput2Medida, setValueInput2Medida] = useState("");
  const [valueParenquima, setValueParenquima] = useState("");

  const [checkboxPresente, setCheckboxPresente] = useState(false);

  const [checkboxAusente, setCheckboxAusente] = useState(false);
  const [valueSelectAusente, setValueSelectAusente] = useState("");

  const [checkboxDimensoes, setCheckboxDimensoes] = useState(false);

  useEffect(() => {
    if (RimFerradura) {
      setFrasesRimD([])
      setConclusaoRimD([])
    }
  }, [RimFerradura])

  useEffect(() => {
    const string = 'em topografia ectópica, na fossa ilíaca direita, de morfologia, contornos e ecotextura normais.'
    removeItemString(string)
    if (RimPelvico === 'Rim esquerdo' && CheckboxRimPelvico) {
      setFrasesRimD((arr) => [...arr, string]);
    }
  }, [RimPelvico, CheckboxRimPelvico])

  useEffect(() => {
    const string = 'de morfologia e topografia habitual, com dimensões reduzidas, contornos lobulados, aumento da ecogenicidade e perda da diferenciação corticomedular.'
    removeItemString(string);
    if (Nefropatia === 'esquerdo' && CheckboxNefropatia) {
      setFrasesRimD((arr) => [...arr, string]);
    }
  }, [CheckboxNefropatia, Nefropatia])


  const criaStringAusente = () => {
    var string = 'não visibilizado.'
    removeItemConclusao('Interposição gasosa das alças intestinais.')
    removeItemConclusao('Nefrectomia à direita.')
    removeItemString(string);
    if (checkboxAusente) {
      if (valueSelectAusente !== "") {
        valueSelectAusente === 'Ausência Cirurgica' ? setConclusaoRimD((arr) => [...arr, 'Nefrectomia à direita.']) : setConclusaoRimD((arr) => [...arr, 'Interposição gasosa das alças intestinais.'])
        setFrasesRimD((arr) => [...arr, string]);
      }
    } else {
      setValueSelectAusente("");
    }
  };

  useEffect(() => {
    criaStringAusente();
  }, [valueSelectAusente, checkboxAusente]);

  const criaStringPresente = () => {
    let string = "Diferenciação córtico-medular preservada. Sistema pielo-calicinal sem alterações ecográficas, não se evidenciando dilatação e/ou cálculos em seu interior. Não há evidências de tumorações renais.";
    const conclusao = 'Rim Esquerdo de dimensões reduzidas.'
    removeFraseSelect(string)
    removeItemConclusao(conclusao)
    if (checkboxPresente) {
      if (checkboxDimensoes) {
        string = `tópico, de limites precisos, ecotextura habitual e dimensões reduzidas. ${string}`
        setConclusaoRimD((arr) => [...arr, conclusao])
      } else {
        string = `tópico, de limites precisos, ecotextura habitual. ${string}`
      }
      setFrasesRimD((arr) => [...arr, string]);
    }
  };

  useEffect(() => {
    criaStringPresente()
  }, [checkboxPresente, checkboxDimensoes])

  const CriaStringMedidas = () => {
    var string = 'Medida do rim Esquerdo:'
    removeFraseSelect(string);
    if (checkboxMedidas) {
      if (valueInput1Medida != '' && valueParenquima != '' && valueInput2Medida != '') {
        const valorInput = `${string} ${valueInput1Medida}x${valueInput2Medida} mm. Espessura do parênquima: ${valueParenquima} mm.`;
        setFrasesRimD((arr) => [...arr, valorInput]);
      }
    } else {
      setValueInput1Medida("");
      setValueInput2Medida("");
      setValueParenquima("");
    }
  };

  useEffect(() => {
    CriaStringMedidas();
  }, [checkboxMedidas, valueInput1Medida, valueInput2Medida, valueParenquima]);

  const removeItemString = (value) => {
    var index = frasesRimD.indexOf(value);

    if (index > -1) {
      frasesRimD.splice(index, 1);
      setFrasesRimD((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusaoRimD.indexOf(value);

    if (index > -1) {
      ConclusaoRimD.splice(index, 1);
      setConclusaoRimD((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };



  const removeFraseSelect = (value) => {
    frasesRimD.map((e) => {
      if (e.includes(value)) {
        let index = frasesRimD.indexOf(e);

        if (index > -1) {
          frasesRimD.splice(index, 1);
          setFrasesRimD((arr) => [...arr]);
        }
      }
    });
  };



  const subExame = "Rim Esquerdo";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesRimD).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesRimD,
        ConclusaoRimD
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesRimD,
        ConclusaoRimD
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesRimD]);

  return (
    <Box
      w={largura}
      h={altura}
      border='1px'
      p='5px'
      borderRadius='10px'
      mt='5px'
    >
      <Box>
        <TituloNomeExame titulo="Rim Esquerdo" />

        <Box
          gap="25px"
          display="flex"
          flexWrap="wrap"
        >
          <Box w="100px">
            <Checkbox
              value="Rim Esquerdo presente"
              isDisabled={checkboxAusente || RimFerradura}
              onChange={() => setCheckboxPresente(!checkboxPresente)}
            >
              Presente
            </Checkbox>
          </Box>

          <Box w="150px">
            <Checkbox
              isDisabled={checkboxPresente || RimFerradura}
              onChange={(e) => {
                setCheckboxAusente(!checkboxAusente);
              }}
            >
              Ausente
            </Checkbox>
            <Select
              isDisabled={!checkboxAusente}
              onChange={(e) => {
                setValueSelectAusente(e.target.value);
              }}
              value={valueSelectAusente}
              w="100%"
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Ausência Cirurgica">Ausência cirúrgica</option>
              <option value="Interposição Gasosa">Interposição gasosa</option>
            </Select>
          </Box>
          <Stack paddingBottom="5px">
            <HStack w="220px">
              <Checkbox
                isDisabled={!checkboxPresente || RimFerradura}
                onChange={(e) => {
                  setCheckboxMedidas(!checkboxMedidas);
                }}
              >
                Medidas
              </Checkbox>
              <Input
                textAlign='center'
                p='0px'
                value={valueInput1Medida}
                onChange={(e) => {
                  setValueInput1Medida(e.target.value);
                }}
                isDisabled={!checkboxMedidas}
                w="auto"
                h='35px'
                placeholder="00"
              />
              <Text>x</Text>
              <Input
                p='0px'
                textAlign='center'
                value={valueInput2Medida}
                onChange={(e) => {
                  setValueInput2Medida(e.target.value);
                }}
                isDisabled={!checkboxMedidas}
                w="auto"
                h='35px'
                placeholder="00"
              />
              <Text>mm</Text>
            </HStack>
            <Input
              p='0px'
              textAlign='center'
              value={valueParenquima}
              onChange={(e) => {
                setValueParenquima(e.target.value);
              }}
              isDisabled={!checkboxMedidas}
              w="auto"
              mt='0'
              h='35px'
              // maxWidth="173px"
              placeholder="Parênquima(mm)"
            />
          </Stack>

          <Box w="200px">
            <Checkbox isDisabled={!checkboxPresente || RimFerradura}
              onChange={(e) => {
                setCheckboxDimensoes(!checkboxDimensoes);
              }}
            >
              Dimensões Reduzidas
            </Checkbox>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default RimEsquerdo;
