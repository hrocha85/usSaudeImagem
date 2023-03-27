/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizar_cisto";
import IndividualizarNodulos from "./individualizar_nodulos";

function Figado() {
  const altura = "100%";
  const largura = "66%";


  const [Medida1NoduloInput, setMedida1NoduloInput] = useState("");
  const [Medida2NoduloInput, setMedida2NoduloInput] = useState("");
  const [Select1Nodulo, setSelect1Nodulo] = useState("");
  const [Select2Nodulo, setSelect2Nodulo] = useState("");
  const [Select3Nodulo, setSelect3Nodulo] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] = useState(false);

  const [Medida1CistoInput, setMedida1CistoInput] = useState("");
  const [Select1Cisto, setSelect1Cisto] = useState("");

  const [multiplosCistosCheckBox, setmultiplosCistosCheckBox] = useState(false);

  const [FrasesFigado, setFrasesFigado] = useState<any>([]);
  const [ConclusaoFigado, setConclusaoFigado] = useState<any>([]);
  var numberArray = [1, 2, 3];

  const [CheckboxNormal, setCheckboxNormal] = useState(false);
  const [CheckboxHepatiteAguda, setCheckboxHepatiteAguda] = useState(false);
  const [CheckboxHepatiteCronica, setCheckboxHepatiteCronica] = useState(false);
  const [CheckboxDimensoes, setCheckboxDimensoes] = useState(false);
  const [SelectDimensoes, setSelectDimensoes] = useState('');
  const [CheckboxEsteatose, setCheckboxEsteatose] = useState(false);
  const [SelectEsteatose, setSelectEsteatose] = useState('');

  const [CheckboxCalcificacao, setCheckboxCalcificacao] = useState(false);
  const [SelectCalcificacao, setSelectCalcificacao] = useState('');
  const [InputCalcificacao, setInputCalcificacao] = useState('');

  const criaStringMultiplosNodulos = () => {
    const conclusao = 'Nódulos hepáticos sugestivos de hemangiomas.'
    let string = 'Notam-se múltiplos nódulos, o maior'
    removeItemSelect(string);
    removeItemConclusao(conclusao)
    if (multiplosNodulosCheckBox) {
      if (Medida1NoduloInput != "" && Medida2NoduloInput != "" && Select1Nodulo != '' && Select2Nodulo != '' && Select3Nodulo != '') {
        string = `${string} ${Select3Nodulo},arredondado, de limites precisos e contornos 
         ${Select2Nodulo}, desprovido de sombra acústica posterior, localizado no ${Select1Nodulo} medindo ${Medida1NoduloInput}x${Medida2NoduloInput} mm.`;
        setFrasesFigado((arr) => [...arr, string]);
        setConclusaoFigado((arr) => [...arr, conclusao]);
      }
    } else {
      removeItemSelect(string)
      setMedida1NoduloInput("");
      setMedida2NoduloInput("");
      setSelect1Nodulo("");
      setSelect2Nodulo("");
      setSelect3Nodulo("");
    }
  };

  const criaStringMultiplosCistos = () => {
    const conclusao = 'Cistos hepáticos.'
    let string = 'Notam-se imagens císticas, de paredes finas e regulares, conteúdo anecóide homogêneo, a maior no'
    removeItemSelect(string);
    removeItemConclusao(conclusao)
    if (multiplosCistosCheckBox) {
      if (Medida1CistoInput != "" && Select1Cisto != '') {
        string = `${string} ${Select1Cisto} medindo ${Medida1CistoInput} mm.`;
        setFrasesFigado((arr) => [...arr, string]);
        setConclusaoFigado((arr) => [...arr, conclusao]);
      }
    } else {
      removeItemSelect(string);
      setMedida1CistoInput("");
      setSelect1Cisto("");
    }
  };

  useEffect(() => {
    criaStringMultiplosCistos();
  }, [multiplosCistosCheckBox, Medida1CistoInput, Select1Cisto]);
  useEffect(() => {
    criaStringMultiplosNodulos();
  }, [multiplosNodulosCheckBox, Medida1NoduloInput, Medida2NoduloInput, Select1Nodulo, Select2Nodulo, Select3Nodulo]);
  const removeItemString = (value) => {
    var index = FrasesFigado.indexOf(value);

    if (index > -1) {
      FrasesFigado.splice(index, 1);
      setFrasesFigado((arr) => [...arr]);
    }
  };

  const removeItemConclusao = (value) => {
    var index = ConclusaoFigado.indexOf(value);
    if (index > -1) {
      ConclusaoFigado.splice(index, 1);
      setConclusaoFigado((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };
  useEffect(() => {
    const string = 'A forma é regular, a superfície é lisa e dimensões normais.'
    CheckboxNormal ? setFrasesFigado((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxNormal])

  useEffect(() => {
    const conclusao = `Alteração parenquimatosa hepática. Considerar possibilidade de hepatite aguda.`
    const string = 'Parênquima hepático apresentando discreto aumento da refrigência peri-portal difusamente.'
    CheckboxHepatiteAguda ? setFrasesFigado((arr) => [...arr, string]) : removeItemString(string)
    CheckboxHepatiteAguda ? setConclusaoFigado((arr) => [...arr, conclusao]) : removeItemConclusao(conclusao)
  }, [CheckboxHepatiteAguda])

  useEffect(() => {
    const conclusao = `Hepatopatia crônica.`
    const string = 'Vasos hepáticos de difícil caracterização.'
    CheckboxHepatiteCronica ? setFrasesFigado((arr) => [...arr, string]) : removeItemString(string)
    CheckboxHepatiteCronica ? setConclusaoFigado((arr) => [...arr, conclusao]) : removeItemConclusao(conclusao)
  }, [CheckboxHepatiteCronica])

  const criaStringDimensoes = () => {
    var conclusao = 'Fígado de dimensões'
    var string = 'Dimensões'
    removeItemConclusaoSelect(conclusao)
    removeItemSelect(string)
    if (CheckboxDimensoes) {
      if (SelectDimensoes !== '') {
        string = `${string} ${SelectDimensoes}.`
        conclusao = `${conclusao} ${SelectDimensoes}.`
        if (CheckboxDimensoes) {
          setFrasesFigado((arr) => [...arr, string])
          setConclusaoFigado((arr) => [...arr, conclusao])
        }
      }
    } else {
      removeItemConclusaoSelect(conclusao)
      removeItemString(string)
      setSelectDimensoes('')
    }
  }
  useEffect(() => {
    criaStringDimensoes()
  }, [CheckboxDimensoes, SelectDimensoes])

  const criaStringCalcificacao = () => {
    const conclusao = 'Calcificação hepática de aspecto residual.'
    var string = 'Nota-se foco hiperecogênico, irregular, provido de acústica posterior, no '
    removeItemConclusao(conclusao)
    removeItemSelect(string)
    if (CheckboxCalcificacao) {
      if (SelectCalcificacao !== '' && InputCalcificacao !== '') {
        string = `${string} ${SelectCalcificacao} medindo ${InputCalcificacao} mm.`
        if (CheckboxCalcificacao) {
          setFrasesFigado((arr) => [...arr, string])
          setConclusaoFigado((arr) => [...arr, conclusao])
        }
      }
    } else {
      removeItemConclusao(conclusao)
      removeItemString(string)
      setSelectCalcificacao('')
      setInputCalcificacao('')
    }
  }
  useEffect(() => {
    criaStringCalcificacao()
  }, [CheckboxCalcificacao, SelectCalcificacao, InputCalcificacao])

  const criaStringEsteatose = () => {
    var conclusao = 'Esteatose'
    var string = 'Esteastose'
    removeItemConclusaoSelect(conclusao)
    removeItemSelect(string)
    if (CheckboxEsteatose) {
      if (SelectEsteatose !== '') {
        string = `${string} ${SelectEsteatose}.`
        conclusao = `${conclusao} ${SelectEsteatose}.`
        if (CheckboxEsteatose) {
          setFrasesFigado((arr) => [...arr, string])
          setConclusaoFigado((arr) => [...arr, conclusao])
        }
      }
    } else {
      removeItemConclusaoSelect(conclusao)
      removeItemString(string)
      setSelectEsteatose('')
    }
  }
  useEffect(() => {
    criaStringEsteatose()
  }, [CheckboxEsteatose, SelectEsteatose])

  const removeItemSelect = (value) => {
    FrasesFigado.map((e) => {
      if (e.includes(value)) {
        var index = FrasesFigado.indexOf(e);
        if (index > -1) {
          FrasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  }
  const removeItemConclusaoSelect = (value) => {
    ConclusaoFigado.map((e) => {
      if (e.includes(value)) {
        var index = ConclusaoFigado.indexOf(e);
        if (index > -1) {
          ConclusaoFigado.splice(index, 1);
          setConclusaoFigado((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  }

  const subExame = "Fígado";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesFigado).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesFigado,
        ConclusaoFigado
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesFigado,
        ConclusaoFigado
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesFigado]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 15px 15px"
    >
      <Box borderBottom="1px">
        <TituloNomeExame titulo="Fígado" />

        <Box columnGap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box>
            <Checkbox
              onChange={(e) => setCheckboxNormal(!CheckboxNormal)}
            >
              Normal
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              onChange={(e) => setCheckboxHepatiteAguda(!CheckboxHepatiteAguda)}
            >
              Hepatite Aguda
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              onChange={(e) => setCheckboxHepatiteCronica(!CheckboxHepatiteCronica)}
            >
              Hepatopatia Crônica
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              onChange={(e) => setCheckboxDimensoes(!CheckboxDimensoes)}
            >
              Dimensões
            </Checkbox>
            <Select
              value={SelectDimensoes}
              isDisabled={!CheckboxDimensoes}
              onChange={(e) => setSelectDimensoes(e.target.value)}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="aumentadas">Aumentadas</option>
              <option value="reduzidas">Reduzidas</option>
            </Select>
          </Box>
          <Box>
            <Checkbox
              onChange={(e) => setCheckboxEsteatose(!CheckboxEsteatose)}
            >
              Esteatose
            </Checkbox>
            <Select
              value={SelectEsteatose}
              isDisabled={!CheckboxEsteatose}
              onChange={(e) => setSelectEsteatose(e.target.value)}
              w="100%"
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="leve">Leve</option>
              <option value="moderada">Moderada</option>
              <option value="acentuada">Acentuada</option>
            </Select>
          </Box>

          <Box gap='5px' display='flex' flexWrap='wrap'>
            <Checkbox
              onChange={(e) => setCheckboxCalcificacao(!CheckboxCalcificacao)}
              w='120px'
            >
              Calcificação
            </Checkbox>
            <Select
              value={SelectCalcificacao}
              isDisabled={!CheckboxCalcificacao}
              onChange={(e) => setSelectCalcificacao(e.target.value)}
              p='0px'
              textAlign='center'
              w='140px'
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Segmento I">Segmento I</option>
              <option value="Segmento II">Segmento II</option>
              <option value="Segmento III">Segmento III</option>
              <option value="Segmento IV">Segmento IV</option>
              <option value="Segmento V">Segmento V</option>
              <option value="Segmento VI">Segmento VI</option>
              <option value="Segmento VII">Segmento VII</option>
              <option value="Segmento VIII">Segmento VIII</option>
            </Select>
            <Text alignSelf='center'>mede</Text>
            <Input
              value={InputCalcificacao}
              isDisabled={!CheckboxCalcificacao}
              onChange={(e) => setInputCalcificacao(e.target.value)}
              w='50px'
              p='0px'
              textAlign='center'
            />
            <Text alignSelf='center'>mm</Text>
          </Box>
        </Box>

      </Box>

      {/* ------------------------------------------------------------------------------------------------------------ */}

      <Box
        borderBottom="1px"
        mt="20px"
        gap="25px"
        display="flex"
        flexWrap="wrap"
      >


        <Stack w="100%">
          <>
            {numberArray.map((num, key) => {
              return (
                <IndividualizarNodulos
                  key={key}
                  numNodulo={num}
                  Disable={multiplosNodulosCheckBox}
                />
              );
            })}
          </>
          <Box display="flex" flexWrap='wrap' alignItems='center' gap='5px'>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
            >
              Múltiplos nódulos
            </Checkbox>

            <Input
              p='0'
              w='50px'
              textAlign='center'
              isDisabled={!multiplosNodulosCheckBox}
              value={Medida1NoduloInput}
              onChange={(e) => setMedida1NoduloInput(e.target.value)}
              placeholder={"mm"}
            />
            <Text>x</Text>

            <Input
              p='0'
              w='50px'
              textAlign='center'
              isDisabled={!multiplosNodulosCheckBox}
              value={Medida2NoduloInput}
              onChange={(e) => setMedida2NoduloInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              isDisabled={!multiplosNodulosCheckBox}
              w='150px'
              onChange={(e) => setSelect1Nodulo(e.target.value)}
              value={Select1Nodulo}
            >
              <option value="" disabled selected>
                Localizado
              </option>
              <option value="Segmento I">Segmento I</option>
              <option value="Segmento II">Segmento II</option>
              <option value="Segmento III">Segmento III</option>
              <option value="Segmento IV">Segmento IV</option>
              <option value="Segmento V">Segmento V</option>
              <option value="Segmento VI">Segmento VI</option>
              <option value="Segmento VII">Segmento VII</option>
              <option value="Segmento VIII">Segmento VIII</option>
            </Select>
            <Select
              isDisabled={!multiplosNodulosCheckBox}
              w='150px'
              onChange={(e) => setSelect2Nodulo(e.target.value)}
              value={Select2Nodulo}
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="Regulares">Regulares</option>
              <option value="Irregulares">Irregulares</option>
              <option value="Lobulados">Lobulados</option>
            </Select>
            <Select
              isDisabled={!multiplosNodulosCheckBox}
              w='150px'
              onChange={(e) => setSelect3Nodulo(e.target.value)}
              value={Select3Nodulo}
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="Hippoecogenico">Hipoecogênico</option>
              <option value="Hiperecogênico">Hiperecogênico</option>
              <option value="Isoecogênico">Isoecogênico</option>
            </Select>
          </Box>

        </Stack>
      </Box>
      <Box
        mt="20px"
        gap="25px"
        display="flex"
        flexWrap="wrap"
      >


        <Stack w="100%">
          <>
            {numberArray.map((num, key) => {
              return (
                <IndividualizarCistos
                  key={key}
                  numCisto={num}
                  Disable={multiplosCistosCheckBox}
                />
              );
            })}
          </>
          <Box display="flex" flexWrap='wrap' alignItems='center' gap='5px'>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => setmultiplosCistosCheckBox(!multiplosCistosCheckBox)}
            >Múltiplos cistos
            </Checkbox>

            <Input
              p='0'
              w='50px'
              textAlign='center'
              isDisabled={!multiplosCistosCheckBox}
              value={Medida1CistoInput}
              onChange={(e) => setMedida1CistoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Text alignItems='center'>mm, localizado no</Text>
            <Select
              isDisabled={!multiplosCistosCheckBox}
              w='150px'
              onChange={(e) => setSelect1Cisto(e.target.value)}
              value={Select1Cisto}
            >
              <option value="" disabled selected>
                Localizado
              </option>
              <option value="Segmento I">Segmento I</option>
              <option value="Segmento II">Segmento II</option>
              <option value="Segmento III">Segmento III</option>
              <option value="Segmento IV">Segmento IV</option>
              <option value="Segmento V">Segmento V</option>
              <option value="Segmento VI">Segmento VI</option>
              <option value="Segmento VII">Segmento VII</option>
              <option value="Segmento VIII">Segmento VIII</option>
            </Select>
          </Box>
        </Stack>
      </Box>
    </Box >

  );
}

export default Figado;
