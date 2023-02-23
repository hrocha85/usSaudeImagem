/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoInfraespinhalOmbroEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";



  const [fraseTendaoInfraespinhalEsquerdo, setFraseTendaoInfraespinhalEsquerdo] = useState<any>([]);
  const [ConclusaoTendaoInfraespinhalEsquerdo, setConclusaoTendaoInfraespinhalEsquerdo] = useState<any>([]);

  const subExame = 'Tendão Infraespinhal Esquerdo'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseTendaoInfraespinhalEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseTendaoInfraespinhalEsquerdo,
        ConclusaoTendaoInfraespinhalEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseTendaoInfraespinhalEsquerdo,
        ConclusaoTendaoInfraespinhalEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseTendaoInfraespinhalEsquerdo]);

  const [RoturaParcialInput, setRoturaParcialInput] = useState("");
  const [RoturaParcialInput2, setRoturaParcialInput2] = useState("");
  const [RoturaParcialInput3, setRoturaParcialInput3] = useState("");
  const [disableRoturaParcialInput, setdisableRoturaParcialInput] = useState(true);
  const [SelectRoturaParcial, setSelectRoturaParcial] = useState("");

  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
  const [disableRoturaParcial, setdisableRoturaParcial] = useState(false);
  const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);
  const [disableRoturaCompleta, setdisableRoturaCompleta] = useState(false);

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [RoturaParcialCheckbox, setRoturaParcialCheckbox] = useState(false);
  const [PequenasCalcificacoesCheckbox, setPequenasCalcificacoesCheckbox] = useState(false);

  const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);
  const [SelectTendinopatiaSemRotura, setSelectTendinopatiaSemRotura] = useState("");
  const [SelectDisableTendinopatiaSemRotura, setSelectDisableTendinopatiaSemRotura] = useState(true);
  const [MedindoDisableTendinopatiaSemRotura, setMedindoDisableTendinopatiaSemRotura] = useState(true);
  const [InputMedindoDisableTendinopatiaSemRotura, setInputMedindoDisableTendinopatiaSemRotura] = useState(true);
  const [InputMedindoTendinopatiaSemRotura, setInputMedindoTendinopatiaSemRotura] = useState('');
  const [TendinopatiaSemRoturaCheckboxMedida, setTendinopatiaSemRoturaCheckboxMedida] = useState(false);

  const [RoturaCompletaCheckbox, setRoturaCompletaCheckbox] = useState(false);
  const [DisableInputRoturaCompleta, setDisableInputRoturaCompleta] = useState(true);
  const [InputMedindoRoturaCompleta, setInputMedindoRoturaCompleta] = useState('');
  const [RoturaCompletaRetracaoCheckbox, setRoturaCompletaRetracaoCheckbox] = useState(false);

  const [DisableInputRetracaoRoturaCompleta, setDisableInputRetracaoRoturaCompleta] = useState(true);
  const [InputRetracaoRoturaCompleta, setInputRetracaoRoturaCompleta] = useState('');

  const criaStringRoturaParcial = (medida1cm, medida2cm, medida3cm, selectRoturaParcial) => {
    removeRoturaParcial();
    const medida1 = new Convert_Medida(medida1cm).Convert_Medida()
    const medida2 = new Convert_Medida(medida2cm).Convert_Medida()
    const medida3 = new Convert_Medida(medida3cm).Convert_Medida()
    if (RoturaParcialCheckbox) {
      if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "" && selectRoturaParcial !== '') {
        var string = `${selectRoturaParcial} espessado, com alteração ecotextural, observando-se sinais de rotura parcial ${medida1} x ${medida2} x ${medida3} cm`;
        setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeRoturaParcial();
    }
  };

  const removeRoturaParcial = () => {
    fraseTendaoInfraespinhalEsquerdo.map((e) => {
      if (e.includes("espessado, com alteração ecotextural, observando-se sinais de rotura parcial ")) {
        var index = fraseTendaoInfraespinhalEsquerdo.indexOf(e);
        if (index > -1) {
          fraseTendaoInfraespinhalEsquerdo.splice(index, 1);
          setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr]);
        }
      }
    });
  };


  const criaStringAspectoNormal = () => {
    var string = "com ecotextura e espessura preservadas e contornos normais.";
    AspectoNormalCheckbox ? setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]) : removeItemString(string);
  };
  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])

  const criaStringPequenasCalcificacoes = () => {
    var string = "Há pequenas calcificações junto à inserção do infraespinhal.";
    const conclusao = 'Pequenas calcificações na inserção do infraespinhal.'
    if (PequenasCalcificacoesCheckbox) {
      setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]);
      setConclusaoTendaoInfraespinhalEsquerdo((arr) => [...arr, conclusao]);
    } else {
      removeItemString(string);
      removeItemConclusao(conclusao);
    }
  };

  useEffect(() => {
    criaStringPequenasCalcificacoes()
  }, [PequenasCalcificacoesCheckbox])

  const criaStringTendinopatiaSemRotura = (select, medidacm) => {
    var string = 'Tendão do infraespinhal espessado, com alteração ecotextural, sem evidências de rotura. '
    removeFraseTendinopatiaSemRotura()

    var medida = new Convert_Medida(medidacm).Convert_Medida()

    if (TendinopatiaSemRoturaCheckbox) {
      if (select !== '' && medidacm !== '') {
        string = `${string} ${select} medindo ${medida} cm`;
        setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]);
      } else {
        string = `${string} ${select}`;
        setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeFraseTendinopatiaSemRotura()
    }
  };
  const removeFraseTendinopatiaSemRotura = () => {
    fraseTendaoInfraespinhalEsquerdo.map((e) => {
      if (e.includes("Tendão do infraespinhal espessado, com alteração ecotextural, sem evidências de rotura.")) {
        var index = fraseTendaoInfraespinhalEsquerdo.indexOf(e);

        if (index > -1) {
          fraseTendaoInfraespinhalEsquerdo.splice(index, 1);
          setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringRoturaCompleta = (dados, medidaRetracao) => {
    removeFraseRoturaCompleta()
    var string;
    if (dados !== '' && medidaRetracao !== '') {
      string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo com ${medidaRetracao} mm de retração`;
      setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]);
    } else if (dados !== '') {
      string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo`;
      setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr, string]);
    }
  }
  const removeFraseRoturaCompleta = () => {
    fraseTendaoInfraespinhalEsquerdo.map((e) => {
      if (e.includes("Hipoecogênico, heterogêneo, observando-se sinais de rotura completa")) {
        var index = fraseTendaoInfraespinhalEsquerdo.indexOf(e);

        if (index > -1) {
          fraseTendaoInfraespinhalEsquerdo.splice(index, 1);
          setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr]);
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
    } else {
      setDisableInputRetracaoRoturaCompleta(true)
      setInputMedindoRoturaCompleta('')
      setdisableAspectoNormal(false)
      setdisableRoturaParcial(false)
      setdisableTendinopatiaSemRotura(false)
      setDisableInputRoturaCompleta(true)
      setInputRetracaoRoturaCompleta('')
    }
  }, [RoturaCompletaCheckbox])

  useEffect(() => {
    criaStringRoturaCompleta(InputMedindoRoturaCompleta, InputRetracaoRoturaCompleta)
  }, [InputMedindoRoturaCompleta, InputRetracaoRoturaCompleta])


  const removeItemString = (value) => {
    var index = fraseTendaoInfraespinhalEsquerdo.indexOf(value);
    if (index > -1) {
      fraseTendaoInfraespinhalEsquerdo.splice(index, 1);
      setFraseTendaoInfraespinhalEsquerdo((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusaoTendaoInfraespinhalEsquerdo.indexOf(value);
    if (index > -1) {
      ConclusaoTendaoInfraespinhalEsquerdo.splice(index, 1);
      setConclusaoTendaoInfraespinhalEsquerdo((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (AspectoNormalCheckbox) {
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaParcial(true)
      setdisableRoturaCompleta(true)
    } else {
      setdisableTendinopatiaSemRotura(false)
      setdisableRoturaParcial(false)
      setdisableRoturaCompleta(false)
    }
  }, [AspectoNormalCheckbox])

  useEffect(() => {
    if (TendinopatiaSemRoturaCheckbox) {
      setSelectDisableTendinopatiaSemRotura(false)
      setMedindoDisableTendinopatiaSemRotura(false)
      setInputMedindoDisableTendinopatiaSemRotura(false)
      setdisableRoturaParcial(true)
      setdisableAspectoNormal(true)
      setdisableRoturaCompleta(true)
    } else {
      setInputMedindoDisableTendinopatiaSemRotura(true)
      removeFraseTendinopatiaSemRotura()
      setInputMedindoTendinopatiaSemRotura('')
      setSelectDisableTendinopatiaSemRotura(true)
      setMedindoDisableTendinopatiaSemRotura(true)
      setdisableRoturaParcial(false)
      setdisableAspectoNormal(false)
      setdisableRoturaCompleta(false)
    }
  }, [TendinopatiaSemRoturaCheckbox])

  useEffect(() => {
    criaStringTendinopatiaSemRotura(SelectTendinopatiaSemRotura, InputMedindoTendinopatiaSemRotura)
  }, [SelectTendinopatiaSemRotura, InputMedindoTendinopatiaSemRotura])

  useEffect(() => {
    if (RoturaParcialCheckbox) {
      setdisableRoturaParcialInput(false);
      setdisableAspectoNormal(true)
      setdisableTendinopatiaSemRotura(true)
      setdisableRoturaCompleta(true)
    } else {
      removeRoturaParcial();
      setdisableRoturaParcialInput(true);
      setdisableRoturaCompleta(false)
      setdisableAspectoNormal(false)
      setdisableTendinopatiaSemRotura(false)
      setRoturaParcialInput("");
      setRoturaParcialInput2("");
      setRoturaParcialInput3("");
    }
  }, [RoturaParcialCheckbox]);

  useEffect(() => {
    criaStringRoturaParcial(RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3, SelectRoturaParcial);
  }, [RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3, SelectRoturaParcial]);

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
      <TituloNomeExame titulo="Tendão do Infraespinhal" />

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
          <Select
            w='150px'
            isDisabled={SelectDisableTendinopatiaSemRotura}
            onChange={(e) => {
              setSelectTendinopatiaSemRotura(e.target.value);
            }}
          >
            <option value="">não citar calcificações</option>
            <option value="Presença de calcificações intrassubstancial">Calcificações intrassubstancial</option>
          </Select>
          <Checkbox
            isDisabled={MedindoDisableTendinopatiaSemRotura}
            onChange={() => {
              setTendinopatiaSemRoturaCheckboxMedida(!TendinopatiaSemRoturaCheckboxMedida);
            }}
          >
            Medindo
          </Checkbox>
          <Input
            isDisabled={InputMedindoDisableTendinopatiaSemRotura}
            value={InputMedindoTendinopatiaSemRotura}
            w="45px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => { setInputMedindoTendinopatiaSemRotura(e.target.value) }}
          />
          <Text alignSelf='center'>mm</Text>
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
          <Select
            w='150px'
            isDisabled={disableRoturaParcialInput}
            value={SelectRoturaParcial}
            onChange={(e) => {
              setSelectRoturaParcial(e.target.value);
            }}
          >
            <option value="Não citar tipo">Não citar tipo</option>
            <option value="intrassubstancial">intrassubstancial</option>
            <option value="superficial">superficial</option>
            <option value="profunda">profunda</option>

          </Select>
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
          <Text alignSelf='center'>mm</Text>
        </Box>
      </Stack >
    </Box >

  );
}
export default TendaoInfraespinhalOmbroEsquerdo;
