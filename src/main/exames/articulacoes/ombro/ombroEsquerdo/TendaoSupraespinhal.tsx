/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Stack, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function OmbroTendaoSupraespinhalEsquerdo() {
  const altura = "100%";
  const largura = "95%";


  let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
  const [frasesOmbroTendaoSupraespinhalEsquerdo, setFrasesOmbroTendaoSupraespinhalEsquerdo] = useState<any>([]);

  const subExame = 'Tendão do Supraespinhal'
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(frasesOmbroTendaoSupraespinhalEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOmbroTendaoSupraespinhalEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOmbroTendaoSupraespinhalEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOmbroTendaoSupraespinhalEsquerdo]);

  const [disableTudo, setDisableTudo] = useState(false)

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


  const criaStringRoturaParcial = (medida1, medida2, medida3, selectRoturaParcial) => {
    removeRoturaParcial();
    if (RoturaParcialCheckbox) {
      if (medida1 !== "" && medida2 !== "" && medida3 !== "" && selectRoturaParcial !== '') {
        var string = `Frase ${medida1} x ${medida2} x ${medida3} mm, ${selectRoturaParcial}`;
        setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeRoturaParcial();

    }
  };

  const removeRoturaParcial = () => {
    frasesOmbroTendaoSupraespinhalEsquerdo.map((e) => {
      if (e.includes("Frase ")) {
        var index = frasesOmbroTendaoSupraespinhalEsquerdo.indexOf(e);
        if (index > -1) {
          frasesOmbroTendaoSupraespinhalEsquerdo.splice(index, 1);
          setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringAspectoNormal = () => {
    var string = "FALTA essa";
    if (AspectoNormalCheckbox) {
      setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])

  const criaStringPequenasCalcificacoes = () => {
    var string = "FALTA";
    if (PequenasCalcificacoesCheckbox) {
      setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  useEffect(() => {
    criaStringPequenasCalcificacoes()
  }, [PequenasCalcificacoesCheckbox])

  const criaStringTendinopatiaSemRotura = (select, medida) => {
    var string = 'Tendinopatia sem rotura'
    removeFraseTendinopatiaSemRotura()
    console.log(medida)
    if (TendinopatiaSemRoturaCheckbox) {
      if (select !== '' && medida !== '') {
        string = `${string} ${select} medindo ${medida} mm`;
        setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
      } else {
        string = `${string} ${select}`;
        setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
      }
    } else {
      removeFraseTendinopatiaSemRotura()
      //removeItemString(string)
    }
  };

  useEffect(() => {
    criaStringTendinopatiaSemRotura(SelectTendinopatiaSemRotura, InputMedindoTendinopatiaSemRotura)
  }, [SelectTendinopatiaSemRotura, InputMedindoTendinopatiaSemRotura, TendinopatiaSemRoturaCheckbox])

  useEffect(() => {
    if (TendinopatiaSemRoturaCheckbox) {
      setSelectDisableTendinopatiaSemRotura(false)
      setMedindoDisableTendinopatiaSemRotura(false)
      setdisableRoturaParcial(true)
      setdisableAspectoNormal(true)
      setdisableRoturaCompleta(true)
    } else {
      setSelectDisableTendinopatiaSemRotura(true)
      setMedindoDisableTendinopatiaSemRotura(true)
      setdisableRoturaParcial(false)
      setdisableAspectoNormal(false)
      setdisableRoturaCompleta(false)
    }
  }, [TendinopatiaSemRoturaCheckbox])

  useEffect(() => {
    if (TendinopatiaSemRoturaCheckboxMedida) {
      setInputMedindoDisableTendinopatiaSemRotura(false)
    } else {
      setInputMedindoDisableTendinopatiaSemRotura(true)
      setInputMedindoTendinopatiaSemRotura('')
    }
  }, [TendinopatiaSemRoturaCheckboxMedida])

  const removeFraseTendinopatiaSemRotura = () => {
    frasesOmbroTendaoSupraespinhalEsquerdo.map((e) => {
      if (e.includes("Tendinopatia sem rotura")) {
        var index = frasesOmbroTendaoSupraespinhalEsquerdo.indexOf(e);

        if (index > -1) {
          frasesOmbroTendaoSupraespinhalEsquerdo.splice(index, 1);
          setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringRoturaCompleta = (dados, medidaRetracao) => {
    removeFraseRoturaCompleta()
    var string;
    if (dados !== '' && medidaRetracao !== '') {
      string = `Rotura completa medindo ${dados} com retração de ${medidaRetracao} mm`;
      setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
    } else if (dados !== '') {
      string = `Rotura completa medindo ${dados}`;
      setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr, string]);
    }
  }
  const removeFraseRoturaCompleta = () => {
    frasesOmbroTendaoSupraespinhalEsquerdo.map((e) => {
      if (e.includes("Rotura completa medindo")) {
        var index = frasesOmbroTendaoSupraespinhalEsquerdo.indexOf(e);

        if (index > -1) {
          frasesOmbroTendaoSupraespinhalEsquerdo.splice(index, 1);
          setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr]);
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
    var index = frasesOmbroTendaoSupraespinhalEsquerdo.indexOf(value);
    if (index > -1) {
      frasesOmbroTendaoSupraespinhalEsquerdo.splice(index, 1);
      setFrasesOmbroTendaoSupraespinhalEsquerdo((arr) => [...arr]);
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
      <TituloNomeExame titulo="Tendão do Supraespinhal" />

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
            // criaStringAspectoNormal();
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
            <option value="Select 1">corno anterior</option>
            <option value="Select 2">corno posterior</option>
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
            <option value="Tendinopatia sem rotura 1">corno anterior</option>
            <option value="Tendinopatia sem rotura 2">corno posterior</option>
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
        </Box>
      </Stack >
    </Box >

  );
}
export default OmbroTendaoSupraespinhalEsquerdo;
