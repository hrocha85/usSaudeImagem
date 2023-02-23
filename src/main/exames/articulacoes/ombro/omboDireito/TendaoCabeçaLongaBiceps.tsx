/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoCabeçaLongaBicepsDireito({ Disable }) {
  const altura = "100%";
  const largura = "100%";


  const [fraseTendaoCabecaLongaBicepsDireito, setFraseTendaoCabecaLongaBicepsDireito] = useState<any>([]);
  const [ConclusaoTendaoCabecaLongaBicepsDireito, setConclusaoTendaoCabecaLongaBicepsDireito] = useState<any>([]);

  const subExame = 'Tendão da cabeça longa do Bíceps Direito'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseTendaoCabecaLongaBicepsDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseTendaoCabecaLongaBicepsDireito,
        ConclusaoTendaoCabecaLongaBicepsDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseTendaoCabecaLongaBicepsDireito,
        ConclusaoTendaoCabecaLongaBicepsDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseTendaoCabecaLongaBicepsDireito]);



  const [RoturaParcialInput, setRoturaParcialInput] = useState("");
  const [RoturaParcialInput2, setRoturaParcialInput2] = useState("");
  const [RoturaParcialInput3, setRoturaParcialInput3] = useState("");
  const [disableRoturaParcialInput, setdisableRoturaParcialInput] = useState(true);

  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
  const [disableRoturaParcial, setdisableRoturaParcial] = useState(false);
  const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);
  const [disableRoturaCompleta, setdisableRoturaCompleta] = useState(false);
  const [disableRoturaLongitudinal, setdisableRoturaLongitudinal] = useState(false);

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [RoturaParcialCheckbox, setRoturaParcialCheckbox] = useState(false);
  const [PequenasCalcificacoesCheckbox, setPequenasCalcificacoesCheckbox] = useState(false);
  const [RoturaLongitudinalCheckbox, setRoturaLongitudinalCheckbox] = useState(false);

  const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);
  const [MedindoDisableTendinopatiaSemRotura, setMedindoDisableTendinopatiaSemRotura] = useState(true);
  const [LiquidoPeritendineoCheckbox, setLiquidoPeritendineoCheckbox] = useState(false);
  const [EspessamentoSinovialCheckbox, setEspessamentoSinovialCheckbox] = useState(false);

  const [RoturaCompletaCheckbox, setRoturaCompletaCheckbox] = useState(false);
  const [DisableInputRoturaCompleta, setDisableInputRoturaCompleta] = useState(true);
  const [InputMedindoRoturaCompleta, setInputMedindoRoturaCompleta] = useState('');
  const [RoturaCompletaRetracaoCheckbox, setRoturaCompletaRetracaoCheckbox] = useState(false);

  const [DisableInputRetracaoRoturaCompleta, setDisableInputRetracaoRoturaCompleta] = useState(true);
  const [InputRetracaoRoturaCompleta, setInputRetracaoRoturaCompleta] = useState('');

  const [LuxacaoCheckbox, setLuxacaoCheckbox] = useState(false);
  const [DisableLuxacaoCheckbox, setDisableLuxacaoCheckbox] = useState(false);
  const [disableSelectLuxacao, setdisableSelectLuxacao] = useState(true);
  const [SelectLuxacao, setSelectLuxacao] = useState("");

  const criaStringRoturaParcial = (medida1cm, medida2cm, medida3cm) => {
    removeRoturaParcial();
    var medida1 = new Convert_Medida(medida1cm).Convert_Medida()
    var medida2 = new Convert_Medida(medida2cm).Convert_Medida()
    var medida3 = new Convert_Medida(medida3cm).Convert_Medida()

    if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
      var string = `Tendão da cabeça longa do bíceps espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} cm`;
      setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]);
    }
  };

  const removeRoturaParcial = () => {
    fraseTendaoCabecaLongaBicepsDireito.map((e) => {
      if (e.includes("Tendão da cabeça longa do bíceps espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo")) {
        var index = fraseTendaoCabecaLongaBicepsDireito.indexOf(e);

        if (index > -1) {
          fraseTendaoCabecaLongaBicepsDireito.splice(index, 1);
          setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringAspectoNormal = () => {
    var string = "com ecotextura e espessura preservadas e contornos normais.";
    AspectoNormalCheckbox ? setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]) : removeItemString(string);
  };
  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])


  const criaStringPequenasCalcificacoes = () => {
    var string = "Há pequenas calcificações junto à inserção do subescapular.";
    if (PequenasCalcificacoesCheckbox) {
      setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  useEffect(() => {
    criaStringPequenasCalcificacoes()
  }, [PequenasCalcificacoesCheckbox])

  const criaStringTendinopatiaSemRotura = () => {
    removeFraseTendinopatiaSemRotura()
    var string = 'Tendão da cabeça longa do bíceps espessado, com alteração ecotextural, sem evidências de rotura. '
    if (TendinopatiaSemRoturaCheckbox) {

      if (LiquidoPeritendineoCheckbox) {
        string = `${string} Presença de líquido na bainha.`;
      } else {
        string = `${string} Ausência de líquido na bainha.`;
      }
      if (EspessamentoSinovialCheckbox) {
        string = `${string} Espessamento da bainha sinovial. `;
      }
      setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]);
    }
  };
  useEffect(() => {
    criaStringTendinopatiaSemRotura()
  }, [TendinopatiaSemRoturaCheckbox, LiquidoPeritendineoCheckbox, EspessamentoSinovialCheckbox])

  const removeFraseTendinopatiaSemRotura = () => {
    fraseTendaoCabecaLongaBicepsDireito.map((e) => {
      if (e.includes("Tendão da cabeça longa do bíceps espessado, com alteração ecotextural, sem evidências de rotura.")) {
        var index = fraseTendaoCabecaLongaBicepsDireito.indexOf(e);

        if (index > -1) {
          fraseTendaoCabecaLongaBicepsDireito.splice(index, 1);
          setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringRoturaCompleta = (dadosCm, medidaRetracaoCm) => {
    const conclusao = 'Tendinopatia da cabeça longa do bíceps, com sinais de rotura completa.'
    removeFraseRoturaCompleta()
    var string;
    var dados = new Convert_Medida(dadosCm).Convert_Medida()
    var medidaRetracao = new Convert_Medida(medidaRetracaoCm).Convert_Medida()
    if (dadosCm !== '' && medidaRetracaoCm !== '') {
      string = `Tendão da cabeça longa do bíceps hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} cm de intervalo e ${medidaRetracao} cm de retração. Ausência de líquido na bainha.`;
      setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]);
      setConclusaoTendaoCabecaLongaBicepsDireito((arr) => [...arr, conclusao]);
    } else if (dadosCm !== '') {
      string = `Tendão da cabeça longa do bíceps hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} cm. Ausência de líquido na bainha.`;
      setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]);
      setConclusaoTendaoCabecaLongaBicepsDireito((arr) => [...arr, conclusao]);
    }
  }

  useEffect(() => {
    criaStringRoturaCompleta(InputMedindoRoturaCompleta, InputRetracaoRoturaCompleta)
  }, [InputMedindoRoturaCompleta, InputRetracaoRoturaCompleta])

  const removeFraseRoturaCompleta = () => {
    fraseTendaoCabecaLongaBicepsDireito.map((e) => {
      if (e.includes("Tendão da cabeça longa do bíceps hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ")) {
        var index = fraseTendaoCabecaLongaBicepsDireito.indexOf(e);

        if (index > -1) {
          fraseTendaoCabecaLongaBicepsDireito.splice(index, 1);
          setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoTendaoCabecaLongaBicepsDireito.map((e) => {
      if (e.includes("Tendinopatia da cabeça longa do bíceps, com sinais de rotura completa.")) {
        var index = ConclusaoTendaoCabecaLongaBicepsDireito.indexOf(e);

        if (index > -1) {
          ConclusaoTendaoCabecaLongaBicepsDireito.splice(index, 1);
          setConclusaoTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (RoturaCompletaCheckbox) {
      setDisableInputRoturaCompleta(false)
      setdisableAspectoNormal(true)
      setdisableRoturaParcial(true)
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaLongitudinal(true)
      setDisableLuxacaoCheckbox(true)
    } else {
      setDisableLuxacaoCheckbox(false)
      setDisableInputRetracaoRoturaCompleta(true)
      setInputMedindoRoturaCompleta('')
      setdisableRoturaLongitudinal(false)
      setdisableAspectoNormal(false)
      setdisableRoturaParcial(false)
      setdisableTendinopatiaSemRotura(false)
      setDisableInputRoturaCompleta(true)
      setInputRetracaoRoturaCompleta('')
    }
  }, [RoturaCompletaCheckbox])


  const criaStringRoturaLongitudinal = () => {
    var string = "Tendão da cabeça longa do bíceps espessado, com alteração ecotextural, apresentando imagem linear hipoecogênica longitudinal.";
    RoturaLongitudinalCheckbox ? setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]) : removeItemString(string);

  };
  useEffect(() => {
    criaStringRoturaLongitudinal()
  }, [RoturaLongitudinalCheckbox])

  const criaStringLuxacao = (select) => {
    var string;
    var conclusao;
    removeFraseLuxacao();
    if (LuxacaoCheckbox) {
      if (select !== '') {
        string = `Tendão da cabeça longa do bíceps não caracterizado no sulco bicipital, apresentando-se luxado ${select}`
        conclusao = `Luxação ${select} do tendão da cabeça longa do bíceps.`
        setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr, string]);
        setConclusaoTendaoCabecaLongaBicepsDireito((arr) => [...arr, conclusao]);
      }
    } else {
      removeFraseLuxacao();
    }
  }
  const removeFraseLuxacao = () => {
    fraseTendaoCabecaLongaBicepsDireito.map((e) => {
      if (e.includes("Tendão da cabeça longa do bíceps não caracterizado no sulco bicipital, apresentando-se luxado")) {
        var index = fraseTendaoCabecaLongaBicepsDireito.indexOf(e);

        if (index > -1) {
          fraseTendaoCabecaLongaBicepsDireito.splice(index, 1);
          setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoTendaoCabecaLongaBicepsDireito.map((e) => {
      if (e.includes("do tendão da cabeça longa do bíceps")) {
        var index = ConclusaoTendaoCabecaLongaBicepsDireito.indexOf(e);

        if (index > -1) {
          ConclusaoTendaoCabecaLongaBicepsDireito.splice(index, 1);
          setConclusaoTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LuxacaoCheckbox) {
      setdisableSelectLuxacao(false)
    } else {
      setdisableSelectLuxacao(true)
    }
  })

  useEffect(() => {
    criaStringLuxacao(SelectLuxacao)
  }, [SelectLuxacao, LuxacaoCheckbox])

  const removeItemString = (value) => {
    var index = fraseTendaoCabecaLongaBicepsDireito.indexOf(value);
    if (index > -1) {
      fraseTendaoCabecaLongaBicepsDireito.splice(index, 1);
      setFraseTendaoCabecaLongaBicepsDireito((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (AspectoNormalCheckbox) {
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaParcial(true)
      setdisableRoturaLongitudinal(true)
      setdisableRoturaCompleta(true)
      setDisableLuxacaoCheckbox(true)
    } else {
      setdisableTendinopatiaSemRotura(false)
      setdisableRoturaLongitudinal(false)
      setdisableRoturaParcial(false)
      setdisableRoturaCompleta(false)
      setDisableLuxacaoCheckbox(false)
    }
  }, [AspectoNormalCheckbox])
  useEffect(() => {
    if (LuxacaoCheckbox) {
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaParcial(true)
      setdisableRoturaLongitudinal(true)
      setdisableRoturaCompleta(true)
      setdisableAspectoNormal(true)
    } else {
      setdisableAspectoNormal(false)
      setdisableTendinopatiaSemRotura(false)
      setdisableRoturaLongitudinal(false)
      setdisableRoturaParcial(false)
      setdisableRoturaCompleta(false)
    }
  }, [LuxacaoCheckbox])

  useEffect(() => {
    if (TendinopatiaSemRoturaCheckbox) {
      setMedindoDisableTendinopatiaSemRotura(false)
      setdisableRoturaLongitudinal(true)
      setdisableRoturaParcial(true)
      setdisableAspectoNormal(true)
      setdisableRoturaCompleta(true)
      setDisableLuxacaoCheckbox(true)
    } else {
      removeFraseTendinopatiaSemRotura()
      setMedindoDisableTendinopatiaSemRotura(true)
      setDisableLuxacaoCheckbox(false)
      setdisableRoturaParcial(false)
      setdisableRoturaLongitudinal(false)
      setdisableAspectoNormal(false)
      setdisableRoturaCompleta(false)
    }
  }, [TendinopatiaSemRoturaCheckbox])

  useEffect(() => {
    if (RoturaLongitudinalCheckbox) {
      setMedindoDisableTendinopatiaSemRotura(false)
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaParcial(true)
      setdisableAspectoNormal(true)
      setdisableRoturaCompleta(true)
      setDisableLuxacaoCheckbox(true)
    } else {
      removeFraseTendinopatiaSemRotura()
      setMedindoDisableTendinopatiaSemRotura(true)
      setDisableLuxacaoCheckbox(false)
      setdisableRoturaParcial(false)
      setdisableTendinopatiaSemRotura(false)
      setdisableAspectoNormal(false)
      setdisableRoturaCompleta(false)
    }
  }, [RoturaLongitudinalCheckbox])



  useEffect(() => {
    if (RoturaParcialCheckbox) {
      setdisableRoturaParcialInput(false);
      setdisableAspectoNormal(true)
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaLongitudinal(true)
      setdisableRoturaCompleta(true)
      setDisableLuxacaoCheckbox(true)
    } else {
      removeRoturaParcial();
      setdisableRoturaParcialInput(true);
      setdisableRoturaCompleta(false)
      setdisableRoturaLongitudinal(false)
      setdisableAspectoNormal(false)
      setdisableTendinopatiaSemRotura(false)
      setDisableLuxacaoCheckbox(false)
      setRoturaParcialInput("");
      setRoturaParcialInput2("");
      setRoturaParcialInput3("");
    }
  }, [RoturaParcialCheckbox]);

  useEffect(() => {
    criaStringRoturaParcial(RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3);
  }, [RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3]);

  useEffect(() => {
    if (RoturaCompletaRetracaoCheckbox) {
      setDisableInputRetracaoRoturaCompleta(false)
    } else {
      setDisableInputRetracaoRoturaCompleta(true)
      setInputRetracaoRoturaCompleta('')
    }
  }, [RoturaCompletaRetracaoCheckbox])

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
      <TituloNomeExame titulo="Tendão da cabeça longa do Bíceps" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <Checkbox
          isDisabled={Disable}
          onChange={() => {
            setPequenasCalcificacoesCheckbox(!PequenasCalcificacoesCheckbox);
          }}
        >
          Pequenas calcificações junto à inserção
        </Checkbox>
        <Checkbox
          isDisabled={Disable || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>
        <Box display='flex' flexWrap='wrap' gap='5px'>
          <Checkbox
            isDisabled={Disable || disableTendinopatiaSemRotura}
            onChange={() => {
              setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
            }}
          >
            Tendinopatia sem rotura
          </Checkbox>

          <Checkbox
            isDisabled={MedindoDisableTendinopatiaSemRotura}
            onChange={() => {
              setLiquidoPeritendineoCheckbox(!LiquidoPeritendineoCheckbox);
            }}
          >
            Liquido peritendineo
          </Checkbox>

          <Checkbox
            isDisabled={MedindoDisableTendinopatiaSemRotura}
            onChange={() => {
              setEspessamentoSinovialCheckbox(!EspessamentoSinovialCheckbox);
            }}
          >
            Espessamento Sinovial
          </Checkbox>

        </Box >

        <Box display='flex' flexWrap='wrap' gap='5px'>
          <Checkbox
            isDisabled={Disable || disableRoturaParcial}
            onChange={() => {
              setRoturaParcialCheckbox(!RoturaParcialCheckbox);
            }}
          >
            Rotura parcial medindo
          </Checkbox>
          <HStack ml='15px'>
            <Input
              isDisabled={disableRoturaParcialInput}
              value={RoturaParcialInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setRoturaParcialInput(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableRoturaParcialInput}
              value={RoturaParcialInput2}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setRoturaParcialInput2(e.target.value) }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableRoturaParcialInput}
              value={RoturaParcialInput3}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setRoturaParcialInput3(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
        </Box>

        <Box display='flex' flexWrap='wrap' gap='5px'>

          <Checkbox
            isDisabled={Disable || disableRoturaCompleta}
            onChange={() => {
              setRoturaCompletaCheckbox(!RoturaCompletaCheckbox);
            }}
          >
            Rotura completa com
          </Checkbox>

          <Input
            isDisabled={DisableInputRoturaCompleta}
            value={InputMedindoRoturaCompleta}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setInputMedindoRoturaCompleta(e.target.value) }}
          />
          <Text alignSelf='center'>mm</Text>
          <Text alignSelf='center'> de intervalo</Text>
          <Checkbox
            isDisabled={DisableInputRoturaCompleta}
            onChange={() => {
              setRoturaCompletaRetracaoCheckbox(!RoturaCompletaRetracaoCheckbox);
            }}
          >
            Com retração de
          </Checkbox>
          <Input
            isDisabled={DisableInputRetracaoRoturaCompleta}
            value={InputRetracaoRoturaCompleta}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setInputRetracaoRoturaCompleta(e.target.value) }}
          />
        </Box>
        <Checkbox
          isDisabled={Disable || disableRoturaLongitudinal}
          onChange={() => {
            setRoturaLongitudinalCheckbox(!RoturaLongitudinalCheckbox);
          }}
        >
          Rotura Longitudinal
        </Checkbox>
        <Box display='flex' flexWrap='wrap' gap='5px'>
          <Checkbox
            isDisabled={Disable || DisableLuxacaoCheckbox}
            onChange={() => {
              setLuxacaoCheckbox(!LuxacaoCheckbox);
            }}
          >
            Luxação
          </Checkbox>
          <Select
            w='150px'
            isDisabled={disableSelectLuxacao}
            value={SelectLuxacao}
            onChange={(e) => {
              setSelectLuxacao(e.target.value);
            }}
          >
            <option value="medial">medial</option>
            <option value="lateral">lateral</option>
          </Select>
        </Box>

      </Stack >
    </Box >

  );
}
export default TendaoCabeçaLongaBicepsDireito;
