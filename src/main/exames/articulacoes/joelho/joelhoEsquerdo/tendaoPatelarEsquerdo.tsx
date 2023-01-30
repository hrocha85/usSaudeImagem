/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, HStack, Input, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoPatelarEsquerdo() {
  const altura = "100%";
  const largura = "90%";

  const [TendaoPatelarEsquerdo, setTendaoPatelarEsquerdo] = useState<any>([]);

  const subExame = `Tendão patelar joelho Esquerdo`
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


  let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

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


  const criaStringLesaoParcial = (medida1, medida2, medida3) => {
    removeLesaoParcial();
    if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
      var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    }
  };

  const removeLesaoParcial = () => {
    TendaoPatelarEsquerdo.map((e) => {
      if (e.includes("Espessado, com alteração ecotextural,")) {
        var index = TendaoPatelarEsquerdo.indexOf(e);

        if (index > -1) {
          TendaoPatelarEsquerdo.splice(index, 1);
          setTendaoPatelarEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringAspectoNormal = () => {
    var string = "FALTA";
    AspectoNormalCheckbox ? setTendaoPatelarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
  };

  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])

  const criaStringAspectoPosCirurgico = () => {
    var string = "FALTA";
    AspectoPosCirurgicoCheckbox ? setTendaoPatelarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
  };

  useEffect(() => {
    criaStringAspectoPosCirurgico()
  }, [AspectoPosCirurgicoCheckbox])

  const criaStringTendinopatiaSemRotura = () => {
    var string = "FALTA";
    TendinopatiaSemRoturaCheckbox ? setTendaoPatelarEsquerdo((arr) => [...arr, string]) : removeItemString(string);

  };
  useEffect(() => {
    criaStringTendinopatiaSemRotura()
  }, [TendinopatiaSemRoturaCheckbox])

  const criaStringPresencaEntesofito = (dados) => {
    removeFrasePresencaEntesofito()
    var string;
    if (PresencaEntesofitoCheckbox && dados !== '') {
      string = `Presença de entesófito medindo ${dados}`;

      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    } else if (PresencaEntesofitoCheckbox) {
      string = `Presença de entesófito`;
      setTendaoPatelarEsquerdo((arr) => [...arr, string]);
    }
    console.log(string)
    // setTendinopatiaSemRoturaCheckbox(false);
  }
  const removeFrasePresencaEntesofito = () => {
    TendaoPatelarEsquerdo.map((e) => {
      if (e.includes("Presença de entesófito")) {
        var index = TendaoPatelarEsquerdo.indexOf(e);

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
  }, [PresencaEntesofitoCheckbox, InputMedindoPresencaEntesofito])


  const removeItemString = (value) => {
    var index = TendaoPatelarEsquerdo.indexOf(value);
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



  useEffect(() => {
    CotoveloEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [CotoveloEsquerdoLaudoNormal])

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
          isDisabled={disableTudo || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>
        <Checkbox
          isDisabled={disableTudo || disableTendinopatiaSemRotura}
          onChange={() => {
            setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
          }}
        >
          Tendinopatia sem rotura
        </Checkbox>

        <HStack>
          <Checkbox
            isDisabled={disableTudo || disableLesaoParcial}
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
              maxLength={2}
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
              maxLength={2}
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
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setLesaoParcialInput3(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
        </HStack>
        <Checkbox
          isDisabled={disableTudo || disableAspectoPosCirurgico}
          onChange={() => {
            setAspectoPosCirurgicoCheckbox(!AspectoPosCirurgicoCheckbox);
          }}
        >
          Aspecto pós cirúrgico
        </Checkbox>

        <Wrap spacing='10px'>
          <Center>
            <WrapItem>
              <Checkbox
                isDisabled={disableTudo}
                onChange={() => {
                  setPresencaEntesofitoCheckbox(!PresencaEntesofitoCheckbox);
                }}
              >
                Presença de entesófito
              </Checkbox>
            </WrapItem>
          </Center>
          <WrapItem>
            <Center>
              <Text>medindo </Text>
              <Input
                isDisabled={DisableInputPresencaEntesofito}
                value={InputMedindoPresencaEntesofito}
                w="45px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => { setInputMedindoPresencaEntesofito(e.target.value) }}
              />
              <Text> mm</Text>
            </Center>
          </WrapItem>
        </Wrap>

      </Stack >
    </Box >

  );
}
export default TendaoPatelarEsquerdo;
