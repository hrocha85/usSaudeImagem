/* eslint-disable array-callback-return */

import { Box, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Mama_direita() {
  const altura = "100%";
  const largura = "33%";

  const [frasesMamas, setFrasesMamas] = useState<any>([]);
  const [ConclusaoMamas, setConclusaoMamas] = useState<any>([]);

  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false, false, false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  const [QSLCheckbox, setQSLCheckbox] = useState(false);
  const [QSMCheckbox, setQSMCheckbox] = useState(false);
  const [QILCheckbox, setQILCheckbox] = useState(false);
  const [QIMCheckbox, setQIMCheckbox] = useState(false);
  const [PerpendicularPeleInput, setPerpendicularPeleInput] = useState('');
  const [PerpendicularPeleInput2, setPerpendicularPeleInput2] = useState('');
  const [PerpendicularPeleSelect, setPerpendicularPeleSelect] = useState('');


  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesMamas.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesMamas.splice(index, 1);
      setFrasesMamas((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = `Não há evidência de nódulo ou massa de caráter sólido, cístico ou complexo.`
    checkedItems[5] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[5]]);


  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com predomínio do tecido gorduroso.`
    checkedItems[0] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[0]]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com predomínio do tecido fibroglandular.`
    checkedItems[1] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[1]]);

  useEffect(() => {
    const string = `Ecotextura heterogênea de fundo, com predomínio do tecido fibroglandular.`
    checkedItems[2] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[2]]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com o tecido mamário em maiores proporções nos quadrantes súpero-externos e regiões retro areolares.`
    checkedItems[3] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[3]]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com tecido mamário entremeado por tecido gorduroso.`
    checkedItems[4] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[4]]);

  useEffect(() => {
    const string = `Espaço retro mamário normal.`
    checkedItems[7] ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [checkedItems[7]]);


  const criaStringParcialmentePrecisos = () => {
    let string = 'parcialmente precisos e bordos finos, bem circunscrito, de orientação'
    removeFraseSelect(string)
    if (checkedItems[6]) {
      if (PerpendicularPeleInput != '' && PerpendicularPeleSelect != '' && PerpendicularPeleInput2 != '') {
        string = `${string} ${PerpendicularPeleSelect} medindo cerca de ${PerpendicularPeleInput} cm à ${PerpendicularPeleInput2} cm da região aerolar`
        if (QSLCheckbox || QSMCheckbox || QILCheckbox || QIMCheckbox) {
          string = `${string}. Localizado em`
          if (QSLCheckbox) string = `${string}, QSL`
          if (QSMCheckbox) string = `${string}, QSM`
          if (QILCheckbox) string = `${string}, QIL`
          if (QIMCheckbox) string = `${string}, QIM`
        }
        string = `${string}.`

        setFrasesMamas((arr) => [...arr, string]);
      }
    } else {
      setPerpendicularPeleSelect('')
      setPerpendicularPeleInput('')
      setPerpendicularPeleInput2('')
    }
  }
  useEffect(() => {
    criaStringParcialmentePrecisos()
  }, [checkedItems[6], PerpendicularPeleInput, PerpendicularPeleInput2, PerpendicularPeleSelect, QSLCheckbox, QSMCheckbox, QILCheckbox, QIMCheckbox])

  useEffect(() => {
    const conclusao = 'Exame mamario dentro dos padrões da normalidade.'
    removeConclusao(conclusao)
    if (checkedItems[0] && checkedItems[5] && checkedItems[7]) {
      setConclusaoMamas([conclusao])
    }
  }, [checkedItems[0], checkedItems[5], checkedItems[7]])

  const removeConclusao = (value) => {
    ConclusaoMamas.map((e) => {
      if (e.includes(value)) {
        const index = ConclusaoMamas.indexOf(e);

        if (index > -1) {
          ConclusaoMamas.splice(index, 1);
          setConclusaoMamas((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao(value);
        }
      }
    });
  };
  const removeFraseSelect = (value) => {
    frasesMamas.map((e) => {
      if (e.includes(value)) {
        const index = frasesMamas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMamas.splice(index, 1);
          setFrasesMamas((arr) => [...arr]);
        }
      }
    });
  };

  const subExame = "Mama feminina direita";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesMamas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMamas,
        ConclusaoMamas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMamas,
        ConclusaoMamas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMamas]);

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
      mt="20px"
    >
      <Box mb="20px">
        <TituloNomeExame titulo="Mama feminina direita" />

        <Box display="flex" flexWrap="wrap" mb="10px">

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
              e.target.checked,
              ]);
            }}
          >
            <Text fontWeight="semibold" fontSize="16px">
              Marcar todos
            </Text>
          </Checkbox>
          <Stack gap='10px' ml='15px'>
            <Box display="flex">
              <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) => {
                  setCheckedItems([
                    e.target.checked,
                    checkedItems[1],
                    checkedItems[2],
                    checkedItems[3],
                    checkedItems[4],
                    checkedItems[5],
                    checkedItems[6],
                    checkedItems[7],
                  ]);
                }}
              >
                Ecotextura homogênea de fundo, com predomínio do tecido gorduroso.
              </Checkbox>
            </Box>

            <Box display="flex">
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0],
                  e.target.checked,
                  checkedItems[2],
                  checkedItems[3],
                  checkedItems[4],
                  checkedItems[5],
                  checkedItems[6],
                  checkedItems[7],
                  ]);
                }}
              >
                Ecotextura homogênea de fundo, com predomínio do tecido fibroglandular.
              </Checkbox>
            </Box>
            <Box display="flex">
              <Checkbox
                isChecked={checkedItems[2]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0],
                  checkedItems[1],
                  e.target.checked,
                  checkedItems[3],
                  checkedItems[4],
                  checkedItems[5],
                  checkedItems[6],
                  checkedItems[7],
                  ]);
                }}
              >
                Ecotextura heterogênea de fundo, com predomínio do tecido fibroglandular.
              </Checkbox>
            </Box>

            <Box display="flex">
              <Checkbox
                isChecked={checkedItems[3]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0],
                  checkedItems[1],
                  checkedItems[2],
                  e.target.checked,
                  checkedItems[4],
                  checkedItems[5],
                  checkedItems[6],
                  checkedItems[7],
                  ]);

                }}
              >
                Ecotextura homogênea de fundo, com o tecido mamário em maiores proporções nos quadrantes súpero-externos e regiões retro areolares.
              </Checkbox>
            </Box>
            <Box display="flex">
              <Checkbox
                isChecked={checkedItems[4]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0],
                  checkedItems[1],
                  checkedItems[2],
                  checkedItems[3],
                  e.target.checked,
                  checkedItems[5],
                  checkedItems[6],
                  checkedItems[7],
                  ]);
                }}
              >
                Ecotextura homogênea de fundo, com tecido mamário entremeado por tecido gorduroso.
              </Checkbox>
            </Box>
            <Box display="flex">
              <Checkbox
                isChecked={checkedItems[5]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0],
                  checkedItems[1],
                  checkedItems[2],
                  checkedItems[3],
                  checkedItems[4],
                  e.target.checked,
                  checkedItems[6],
                  checkedItems[7],
                  ]);
                }}
              >
                Não há evidência de nódulo ou massa de caráter sólido, cístico ou complexo.
              </Checkbox>
            </Box>

            <Box display="flex" flexWrap='wrap'>
              <Checkbox
                isChecked={checkedItems[6]}
                onChange={(e) => {
                  setCheckedItems([checkedItems[0],
                  checkedItems[1],
                  checkedItems[2],
                  checkedItems[3],
                  checkedItems[4],
                  checkedItems[5],
                  e.target.checked,
                  checkedItems[7],
                  ]);
                }}
              >Parcialmente precisos e bordos finos, bem circunscrito, de orientação
              </Checkbox>
              <Select
                w="150px"
                isDisabled={!checkedItems[6]}
                onChange={(e) => {
                  setPerpendicularPeleSelect(e.target.value);
                }}
                value={PerpendicularPeleSelect}
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="paralela a pele">Paralela a pele</option>
                <option value="perpendicular a pele">Perpendicular a pele</option>

              </Select>
              <Text alignSelf='center'>medindo cerca de</Text>
              <Input
                p='0px'
                textAlign='center'
                w='40px'
                isDisabled={!checkedItems[6]}
                value={PerpendicularPeleInput}
                onChange={(e) => setPerpendicularPeleInput(e.target.value)}
              />
              <Text alignSelf='center'>cm, </Text>
              <Input
                p='0px'
                textAlign='center'
                w='40px'
                isDisabled={!checkedItems[6]}
                value={PerpendicularPeleInput2}
                onChange={(e) => setPerpendicularPeleInput2(e.target.value)}
              />
              <Text alignSelf='center'>cm da região areolar.</Text>
              <Text alignSelf='center'>Localizado em</Text>
              <Checkbox
                isDisabled={!checkedItems[6]}
                onChange={(e) => {
                  setQSLCheckbox(
                    !QSLCheckbox
                  );
                }}
              >QSL
              </Checkbox>
              <Checkbox
                isDisabled={!checkedItems[6]}
                onChange={(e) => {
                  setQSMCheckbox(
                    !QSMCheckbox
                  );
                }}
              >QSM
              </Checkbox>
              <Checkbox
                isDisabled={!checkedItems[6]}
                onChange={(e) => {
                  setQILCheckbox(
                    !QILCheckbox
                  );
                }}
              >QIL
              </Checkbox>
              <Checkbox
                isDisabled={!checkedItems[6]}
                onChange={(e) => {
                  setQIMCheckbox(
                    !QIMCheckbox
                  );
                }}
              >QIM
              </Checkbox>
            </Box>

            <Box display="flex">
              <Checkbox
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
                Espaço retro mamário normal.
              </Checkbox>
            </Box>

          </Stack>

        </Box>
      </Box>
    </Box>
  );
}

export default Mama_direita;
