/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoSubescapularOmbroEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [fraseTendaoSubescapuçarEsquerdo, setFraseTendaoSubescapuçarEsquerdo] = useState<any>([]);

  const subExame = 'Tendão Subescapular Esquerdo'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(fraseTendaoSubescapuçarEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        fraseTendaoSubescapuçarEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        fraseTendaoSubescapuçarEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [fraseTendaoSubescapuçarEsquerdo]);

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
        setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeRoturaParcial();
    }
  };

  const removeRoturaParcial = () => {
    fraseTendaoSubescapuçarEsquerdo.map((e) => {
      if (e.includes("espessado, com alteração ecotextural, observando-se sinais de rotura parcial ")) {
        var index = fraseTendaoSubescapuçarEsquerdo.indexOf(e);
        if (index > -1) {
          fraseTendaoSubescapuçarEsquerdo.splice(index, 1);
          setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringAspectoNormal = () => {
    var string = "com ecotextura e espessura preservadas e contornos normais.";
    AspectoNormalCheckbox ? setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
  }

  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])

  const criaStringPequenasCalcificacoes = () => {
    var string = "Há pequenas calcificações junto à inserção do subescapular.";
    if (PequenasCalcificacoesCheckbox) {
      setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  useEffect(() => {
    criaStringPequenasCalcificacoes()
  }, [PequenasCalcificacoesCheckbox])

  const criaStringTendinopatiaSemRotura = (select, medidacm) => {
    var string = 'Tendão do subescapular espessado, com alteração ecotextural, sem evidências de rotura. Presença de '
    removeFraseTendinopatiaSemRotura()

    var medida = new Convert_Medida(medidacm).Convert_Medida()

    if (TendinopatiaSemRoturaCheckbox) {
      if (select !== '' && medidacm !== '') {
        string = `${string} ${select} medindo ${medida} cm`;
        setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]);
      } else {
        string = `${string} ${select}`;
        setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeFraseTendinopatiaSemRotura()
    }
  };

  const removeFraseTendinopatiaSemRotura = () => {
    fraseTendaoSubescapuçarEsquerdo.map((e) => {
      if (e.includes("Tendão do subescapular espessado, com alteração ecotextural, sem evidências de rotura. Presença de")) {
        var index = fraseTendaoSubescapuçarEsquerdo.indexOf(e);

        if (index > -1) {
          fraseTendaoSubescapuçarEsquerdo.splice(index, 1);
          setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringRoturaCompleta = (dados, medidaRetracao) => {
    removeFraseRoturaCompleta()
    var string;
    if (dados !== '' && medidaRetracao !== '') {
      string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo com ${medidaRetracao} mm de retração`;
      setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]);
    } else if (dados !== '') {
      string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo`;
      setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr, string]);
    }
  }
  const removeFraseRoturaCompleta = () => {
    fraseTendaoSubescapuçarEsquerdo.map((e) => {
      if (e.includes("Hipoecogênico, heterogêneo, observando-se sinais de rotura completa")) {
        var index = fraseTendaoSubescapuçarEsquerdo.indexOf(e);

        if (index > -1) {
          fraseTendaoSubescapuçarEsquerdo.splice(index, 1);
          setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr]);
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
    var index = fraseTendaoSubescapuçarEsquerdo.indexOf(value);
    if (index > -1) {
      fraseTendaoSubescapuçarEsquerdo.splice(index, 1);
      setFraseTendaoSubescapuçarEsquerdo((arr) => [...arr]);
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

  useEffect(() => {
    OmbroEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [OmbroEsquerdoLaudoNormal])

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
      <TituloNomeExame titulo="Tendão do Subescapular" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setPequenasCalcificacoesCheckbox(!PequenasCalcificacoesCheckbox);
          }}
        >
          Pequenas calcificações junto à inserção
        </Checkbox>
        <Checkbox
          isDisabled={disableTudo || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>
        <Box display='flex' flexWrap='wrap' gap='5px'>
          <Checkbox
            isDisabled={disableTudo || disableTendinopatiaSemRotura}
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
            <option value="Calcificações intrassubstancial">Calcificações intrassubstancial</option>
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
            isDisabled={disableTudo || disableRoturaParcial}
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
            isDisabled={disableTudo || disableRoturaCompleta}
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
export default TendaoSubescapularOmbroEsquerdo;
