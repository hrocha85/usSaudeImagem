/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoPatelarEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "90%";

  const [TendaoPatelarEsquerdo, setTendaoPatelarEsquerdo] = useState<any>([]);
  const [ConclusaoTendaoPatelarEsquerdo, setConclusaoTendaoPatelarEsquerdo] = useState<any>([]);

  const subExame = `Tendão patelar joelho esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(TendaoPatelarEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        TendaoPatelarEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        TendaoPatelarEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [TendaoPatelarEsquerdo]);

  const [LesaoParcialInput, setLesaoParcialInput] = useState("");
  const [LesaoParcialInput2, setLesaoParcialInput2] = useState("");
  const [LesaoParcialInput3, setLesaoParcialInput3] = useState("");
  const [disableLesaoParcialInput, setdisableLesaoParcialInput] = useState(true);
  const [DisableInputPresencaEntesofito, setDisableInputPresencaEntesofito] = useState(true);

  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
  const [disableLesaoParcial, setdisableLesaoParcial] = useState(false);
  const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);
  const [disableAspectoPosCirurgico, setdisableAspectoPosCirurgico] = useState(false);

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [LesaoParcialCheckbox, setLesaoParcialCheckbox] = useState(false);
  const [AspectoPosCirurgicoCheckbox, setAspectoPosCirurgicoCheckbox] = useState(false);

  const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);

  const [PresencaEntesofitoCheckbox, setPresencaEntesofitoCheckbox] = useState(false);
  const [InputMedindoPresencaEntesofito, setInputMedindoPresencaEntesofito] = useState('');
  const [EntesofitoSelect, setEntesofitoSelect] = useState('');


  const criaStringLesaoParcial = (medida1, medida2, medida3) => {
    removeLesaoParcial();
    if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
      const string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    }
  };

  const removeLesaoParcial = () => {
    TendaoPatelarEsquerdo.map((e) => {
      if (e.includes("Espessado, com alteração ecotextural,")) {
        const index = TendaoPatelarEsquerdo.indexOf(e);

        if (index > -1) {
          TendaoPatelarEsquerdo.splice(index, 1);
          setTendaoPatelarEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringConclusao = () => {
    removeItemStringConclusao()
    let conclusao = 'Tendinopatia do bíceps femoral'
    if (TendinopatiaSemRoturaCheckbox && (LesaoParcialInput !== '' && LesaoParcialInput2 !== '' && LesaoParcialInput3 !== '')) {
      conclusao = `${conclusao} com lesão parcial.`
    } else if (TendinopatiaSemRoturaCheckbox) {
      conclusao = `${conclusao}.`
    }
    setConclusaoTendaoPatelarEsquerdo(conclusao)
  }

  useEffect(() => {
    criaStringConclusao()
  }, [TendinopatiaSemRoturaCheckbox, LesaoParcialInput, LesaoParcialInput2, LesaoParcialInput3])

  const removeItemStringConclusao = () => {
    ConclusaoTendaoPatelarEsquerdo.map((e) => {
      if (e.includes("Tendinopatia do bíceps femoral")) {
        const index = ConclusaoTendaoPatelarEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoTendaoPatelarEsquerdo.splice(index, 1);
          setConclusaoTendaoPatelarEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Tendinopatia do bíceps femoral')
        }
      }
    });
  };


  const criaStringAspectoNormal = () => {
    const string = "com ecotextura e espessura preservadas e contornos normais.";
    AspectoNormalCheckbox ? setTendaoPatelarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
  };
  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    const string = "com ecotextura e espessura preservadas e contornos normais.";
    Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
  }, [Normal])


  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])

  const criaStringAspectoPosCirurgico = () => {
    const string = "Tendão patelar espessado e com alteração ecotextural (aspecto pós cirúrgico).";
    AspectoPosCirurgicoCheckbox ? setTendaoPatelarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
  };

  useEffect(() => {
    criaStringAspectoPosCirurgico()
  }, [AspectoPosCirurgicoCheckbox])

  const criaStringTendinopatiaSemRotura = () => {
    const string = "espessado, com alteração ecotextural, sem evidências de rotura.";
    if (TendinopatiaSemRoturaCheckbox) {
      setTendaoPatelarEsquerdo((arr) => [...arr, string])
    } else {
      removeItemString(string);
    }
  };
  useEffect(() => {
    criaStringTendinopatiaSemRotura()
  }, [TendinopatiaSemRoturaCheckbox])

  const criaStringPresencaEntesofito = (dadoscm) => {
    removeFrasePresencaEntesofito()
    const dados = new Convert_Medida(dadoscm).Convert_Medida()
    let string;
    if (PresencaEntesofitoCheckbox && dadoscm !== '' && EntesofitoSelect !== '') {
      string = `Presença de entesófito ${EntesofitoSelect} do tendão patelar medindo ${dados} cm.`;
      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    } else if (PresencaEntesofitoCheckbox && EntesofitoSelect !== '') {
      string = `Presença de entesófito ${EntesofitoSelect} do tendão patelar.`;
      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    } else if (PresencaEntesofitoCheckbox && EntesofitoSelect === '') {
      string = `Presença de entesófito no tendão patelar.`;
      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    }
    // setTendinopatiaSemRoturaCheckbox(false);
  }
  const removeFrasePresencaEntesofito = () => {
    TendaoPatelarEsquerdo.map((e) => {
      if (e.includes("Presença de entesófito")) {
        const index = TendaoPatelarEsquerdo.indexOf(e);

        if (index > -1) {
          TendaoPatelarEsquerdo.splice(index, 1);
          setTendaoPatelarEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (PresencaEntesofitoCheckbox) {
      criaStringPresencaEntesofito(InputMedindoPresencaEntesofito)
      setDisableInputPresencaEntesofito(false)
    } else {
      removeFrasePresencaEntesofito()
      setDisableInputPresencaEntesofito(true)
      setInputMedindoPresencaEntesofito('')
    }
  }, [PresencaEntesofitoCheckbox, EntesofitoSelect, InputMedindoPresencaEntesofito])


  const removeItemString = (value) => {
    const index = TendaoPatelarEsquerdo.indexOf(value);
    if (index > -1) {
      TendaoPatelarEsquerdo.splice(index, 1);
      setTendaoPatelarEsquerdo((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (AspectoNormalCheckbox) {
      setdisableTendinopatiaSemRotura(true)
      setdisableLesaoParcial(true)
      setdisableAspectoPosCirurgico(true)
    } else {
      setdisableTendinopatiaSemRotura(false)
      setdisableLesaoParcial(false)
      setdisableAspectoPosCirurgico(false)
    }
  }, [AspectoNormalCheckbox])

  useEffect(() => {
    if (TendinopatiaSemRoturaCheckbox) {
      setdisableLesaoParcial(true)
      setdisableAspectoNormal(true)
      setdisableAspectoPosCirurgico(true)
    } else {
      setdisableLesaoParcial(false)
      setdisableAspectoNormal(false)
      setdisableAspectoPosCirurgico(false)

    }
  }, [TendinopatiaSemRoturaCheckbox])

  useEffect(() => {
    if (AspectoPosCirurgicoCheckbox) {
      setdisableLesaoParcial(true)
      setdisableAspectoNormal(true)
      setdisableTendinopatiaSemRotura(true)
    } else {
      setdisableTendinopatiaSemRotura(false)
      setdisableLesaoParcial(false)
      setdisableAspectoNormal(false)
    }
  }, [AspectoPosCirurgicoCheckbox])

  useEffect(() => {
    if (LesaoParcialCheckbox) {
      setdisableLesaoParcialInput(false);
      setdisableAspectoNormal(true)
      setdisableTendinopatiaSemRotura(true)
      setdisableAspectoPosCirurgico(true)
    } else {
      removeLesaoParcial();
      setdisableAspectoPosCirurgico(false)
      setdisableLesaoParcialInput(true);
      setdisableAspectoNormal(false)
      setdisableTendinopatiaSemRotura(false)
      setLesaoParcialInput("");
      setLesaoParcialInput2("");
      setLesaoParcialInput3("");
    }
  }, [LesaoParcialCheckbox]);

  useEffect(() => {
    criaStringLesaoParcial(LesaoParcialInput, LesaoParcialInput2, LesaoParcialInput3);
  }, [LesaoParcialInput, LesaoParcialInput2, LesaoParcialInput3]);

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
      <TituloNomeExame titulo="Tendão Patelar" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <Checkbox
          isChecked={Normal}
          isDisabled={disableAspectoNormal}
          onChange={() => {
            setNormal(!Normal)
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>
        <Checkbox
          isDisabled={disableTendinopatiaSemRotura}
          onChange={() => {
            setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
          }}
        >
          Tendinopatia sem rotura
        </Checkbox>

        <HStack>
          <Checkbox
            isDisabled={disableLesaoParcial}
            onChange={() => {
              setLesaoParcialCheckbox(!LesaoParcialCheckbox);
            }}
          >
            Lesão parcial medindo
          </Checkbox>

          <HStack ml='15px'>
            <Input
              isDisabled={disableLesaoParcialInput}
              value={LesaoParcialInput}
              w="45px"
              h="30px"
              padding="5px"

              textAlign="center"
              onChange={(e) => { setLesaoParcialInput(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLesaoParcialInput}
              value={LesaoParcialInput2}
              w="45px"
              h="30px"
              padding="5px"

              textAlign="center"
              onChange={(e) => { setLesaoParcialInput2(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLesaoParcialInput}
              value={LesaoParcialInput3}
              w="45px"
              h="30px"
              padding="5px"

              textAlign="center"
              onChange={(e) => { setLesaoParcialInput3(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
        </HStack>
        <Checkbox
          isDisabled={disableAspectoPosCirurgico}
          onChange={() => {
            setAspectoPosCirurgicoCheckbox(!AspectoPosCirurgicoCheckbox);
          }}
        >
          Aspecto pós cirúrgico
        </Checkbox>

        <Box display='flex' flexWrap='wrap' gap='10px'>

          <Checkbox
            isDisabled={Disable}
            onChange={() => {
              setPresencaEntesofitoCheckbox(!PresencaEntesofitoCheckbox);
            }}
          >
            Presença de entesófito
          </Checkbox>
          <Select
            w='100px'
            isDisabled={DisableInputPresencaEntesofito}
            onChange={(e) => {
              setEntesofitoSelect(e.target.value);
            }}
          >
            <option value="">Não citar tipo</option>
            <option value="na inserção proximal">proximal</option>
            <option value="na inserção distal">distal</option>
          </Select>
          <Text alignSelf='center'>medindo </Text>
          <Input
            isDisabled={DisableInputPresencaEntesofito}
            value={InputMedindoPresencaEntesofito}
            w="45px"
            h="30px"
            padding="5px"

            textAlign="center"
            onChange={(e) => { setInputMedindoPresencaEntesofito(e.target.value) }}
          />
          <Text> mm</Text>

        </Box>

      </Stack >
    </Box >

  );
}
export default TendaoPatelarEsquerdo;
