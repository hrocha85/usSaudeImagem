/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
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
import IndividualizarNodulos from "./individualizar_nodulos";

function Calculo() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);

  var numberArray = [1, 2, 3, 4, 5, 6];


  const [AusenciaNodulosCheckbox, setAusenciaNodulosCheckbox] = useState(false);
  const [PresencaNodulosCheckboxHiperdenso, setPresencaNodulosCheckboxHiperdenso] = useState(false);
  const [PresencaNodulosCheckboxIsodenso, setPresencaNodulosCheckboxIsodenso] = useState(false);
  const [PresencaNodulosCheckboxHipodenso, setPresencaNodulosCheckboxHipodenso] = useState(false);
  const [GorduraOvalCheckbox, setGorduraOvalCheckbox] = useState(false);
  const [GorduraRedondaCheckbox, setGorduraRedondaCheckbox] = useState(false);
  const [GorduraIrregularCheckbox, setGorduraIrregularCheckbox] = useState(false);
  const [MargensCircunscritasCheckbox, setMargensCircunscritasCheckbox] = useState(false);
  const [ObscurecidasCheckbox, setObscurecidasCheckbox] = useState(false);
  const [MicrolobuladaCheckbox, setMicrolobuladaCheckbox] = useState(false);
  const [IndistintaCheckbox, setIndistintaCheckbox] = useState(false);
  const [EspiculadaCheckbox, setEspiculadaCheckbox] = useState(false);


  const [checkboxNaoObservado, setCheckboxNaoObservado] = useState(false);
  const [valueSelectNaoObservado, setValueSelectNaoObservado] = useState("");

  const removeItemString = (value) => {
    var index = FrasesNodulos.indexOf(value);
    if (index > -1) {
      FrasesNodulos.splice(index, 1);
      setFrasesNodulos((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Ausência de nódulos.'
    AusenciaNodulosCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenciaNodulosCheckbox])

  useEffect(() => {
    const string = 'Presença de Nódulo hiperdenso.'
    PresencaNodulosCheckboxHiperdenso ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaNodulosCheckboxHiperdenso])

  useEffect(() => {
    const string = 'Presença de Nódulo isodenso.'
    PresencaNodulosCheckboxIsodenso ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaNodulosCheckboxIsodenso])

  useEffect(() => {
    const string = 'Presença de Nódulo hipodenso.'
    PresencaNodulosCheckboxHipodenso ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaNodulosCheckboxHipodenso])

  useEffect(() => {
    const string = 'contendo gordura oval.'
    GorduraOvalCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [GorduraOvalCheckbox])

  useEffect(() => {
    const string = 'contendo gordura redondo.'
    GorduraRedondaCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [GorduraRedondaCheckbox])

  useEffect(() => {
    const string = 'contendo gordura irregular.'
    GorduraIrregularCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [GorduraIrregularCheckbox])

  useEffect(() => {
    const string = 'margens circunscritas.'
    MargensCircunscritasCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [MargensCircunscritasCheckbox])

  useEffect(() => {
    const string = 'obscurecidas.'
    ObscurecidasCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [ObscurecidasCheckbox])

  useEffect(() => {
    const string = 'microlobulada.'
    MicrolobuladaCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [MicrolobuladaCheckbox])

  useEffect(() => {
    const string = 'indistinta.'
    IndistintaCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [IndistintaCheckbox])

  useEffect(() => {
    const string = 'espiculada.'
    EspiculadaCheckbox ? setFrasesNodulos((arr) => [...arr, string]) : removeItemString(string)
  }, [EspiculadaCheckbox])

  const [tamanhoNoduloMamaDireitaInput, setTamanhoNoduloMamaDireitaInput] =
    useState("");
  const [tamanho2NoduloMamaDireitaInput, setTamanho2NoduloMamaDireitaInput] =
    useState("");
  const [
    localizacaoNoduloMamaDireitaSelect,
    setLocalizacaoNoduloMamaDireitaSelect,
  ] = useState("");
  const [distanciaMamiloMamaDireitaInput, setDistanciaMamiloMamaDireitaInput] =
    useState("");
  const [distanciaPeleMamaDireitaInput, setDistanciaPeleMamaDireitaInput] =
    useState("");
  const [formaNoduloMamaDireitaSelect, setFormaNoduloMamaDireitaSelect] =
    useState("");
  const [margensNoduloMamaDireitaSelect, setMargensNoduloMamaDireitaSelect] =
    useState("");
  const [limitesNoduloMamaDireitaSelect, setLimitesNoduloMamaDireitaSelect] =
    useState("");
  const [
    ecogenicidadeNoduloMamaDireitaSelect,
    setEcogenicidadeNoduloMamaDireitaSelect,
  ] = useState("");
  const [
    orientacaoNoduloMamaDireitaSelect,
    setOrientacaoNoduloMamaDireitaSelect,
  ] = useState("");
  const [
    efeitoAcusticoNoduloMamaDireitaSelect,
    setEfeitoAcusticoNoduloMamaDireitaSelect,
  ] = useState("");

  const [
    multiplosNoduloMamaDireitaCheckBox,
    setMultiplosNoduloMamaDireitaCheckBox,
  ] = useState(false);
  const [DisableSelectMamaDireita, setDisableSelectMamaDireita] =
    useState(true);

  const [tamanhoNoduloMamaEsquerdaInput, setTamanhoNoduloMamaEsquerdaInput] =
    useState("");
  const [tamanho2NoduloMamaEsquerdaInput, setTamanho2NoduloMamaEsquerdaInput] =
    useState("");
  const [
    localizacaoNoduloMamaEsquerdaSelect,
    setLocalizacaoNoduloMamaEsquerdaSelect,
  ] = useState("");
  const [
    distanciaMamiloMamaEsquerdaInput,
    setDistanciaMamiloMamaEsquerdaInput,
  ] = useState("");
  const [distanciaPeleMamaEsquerdaInput, setDistanciaPeleMamaEsquerdaInput] =
    useState("");
  const [formaNoduloMamaEsquerdaSelect, setFormaNoduloMamaEsquerdaSelect] =
    useState("");
  const [margensNoduloMamaEsquerdaSelect, setMargensNoduloMamaEsquerdaSelect] =
    useState("");
  const [limitesNoduloMamaEsquerdaSelect, setLimitesNoduloMamaEsquerdaSelect] =
    useState("");
  const [
    ecogenicidadeNoduloMamaEsquerdaSelect,
    setEcogenicidadeNoduloMamaEsquerdaSelect,
  ] = useState("");
  const [
    orientacaoNoduloMamaEsquerdaSelect,
    setOrientacaoNoduloMamaEsquerdaSelect,
  ] = useState("");
  const [
    efeitoAcusticoNoduloMamaEsquerdaSelect,
    setEfeitoAcusticoNoduloMamaEsquerdaSelect,
  ] = useState("");

  const [
    multiplosNoduloMamaEsquerdaCheckBox,
    setMultiplosNoduloMamaEsquerdaCheckBox,
  ] = useState(false);
  const [DisableSelectMamaEsquerda, setDisableSelectMamaEsquerda] =
    useState(true);

  const criaStringMultiplosNodulosMamaDireita = (
    efeitoAcusticoNoduloMamaDireitaSelect,
    orientacaoNoduloMamaDireitaSelect,
    ecogenicidadeNoduloMamaDireitaSelect,
    limitesNoduloMamaDireitaSelect,
    margensNoduloMamaDireitaSelect,
    formaNoduloMamaDireitaSelect,
    distanciaPeleMamaDireitaInput,
    distanciaMamiloMamaDireitaInput,
    localizacaoNoduloMamaDireitaSelect,
    tamanho2NoduloMamaDireitaInput,
    tamanhoNoduloMamaDireitaInput
  ) => {
    removeMultiplosNodulosMamaDireita();

    if (
      tamanhoNoduloMamaDireitaInput !== "" &&
      tamanho2NoduloMamaDireitaInput !== "" &&
      localizacaoNoduloMamaDireitaSelect !== "" &&
      distanciaMamiloMamaDireitaInput !== "" &&
      distanciaPeleMamaDireitaInput !== "" &&
      formaNoduloMamaDireitaSelect !== "" &&
      margensNoduloMamaDireitaSelect !== "" &&
      limitesNoduloMamaDireitaSelect !== "" &&
      ecogenicidadeNoduloMamaDireitaSelect !== "" &&
      orientacaoNoduloMamaDireitaSelect !== "" &&
      efeitoAcusticoNoduloMamaDireitaSelect !== ""
    ) {
      var string = `Múltiplos nodulos na mama direita, o maior mede com as seguintes características: \n 
        - ${localizacaoNoduloMamaDireitaSelect}, medindo ${tamanhoNoduloMamaDireitaInput} x ${tamanho2NoduloMamaDireitaInput} mm, distando ${distanciaMamiloMamaDireitaInput} mm
        do mamilo e ${distanciaPeleMamaDireitaInput} mm da pele, com forma ${formaNoduloMamaDireitaSelect}, ${ecogenicidadeNoduloMamaDireitaSelect},
        com margens ${margensNoduloMamaDireitaSelect}, limites ${limitesNoduloMamaDireitaSelect}, com seu eixo ${orientacaoNoduloMamaDireitaSelect} e 
        apresentando ${efeitoAcusticoNoduloMamaDireitaSelect}.`;
      setFrasesNodulos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulosMamaDireita = () => {
    FrasesNodulos.map((e) => {
      if (e.includes(`Múltiplos nodulos na mama direita`)) {
        var index = FrasesNodulos.indexOf(e);

        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNoduloMamaDireitaCheckBox) {
      setDisableSelectMamaDireita(false);
      criaStringMultiplosNodulosMamaDireita(
        efeitoAcusticoNoduloMamaDireitaSelect,
        orientacaoNoduloMamaDireitaSelect,
        ecogenicidadeNoduloMamaDireitaSelect,
        limitesNoduloMamaDireitaSelect,
        margensNoduloMamaDireitaSelect,
        formaNoduloMamaDireitaSelect,
        distanciaPeleMamaDireitaInput,
        distanciaMamiloMamaDireitaInput,
        localizacaoNoduloMamaDireitaSelect,
        tamanho2NoduloMamaDireitaInput,
        tamanhoNoduloMamaDireitaInput
      );
    } else {
      setDisableSelectMamaDireita(true);
      removeMultiplosNodulosMamaDireita();
      setTamanhoNoduloMamaDireitaInput("");
      setTamanho2NoduloMamaDireitaInput("");
      setDistanciaMamiloMamaDireitaInput("");
      setDistanciaPeleMamaDireitaInput("");
      setFormaNoduloMamaDireitaSelect("");
      setMargensNoduloMamaDireitaSelect("");
      setLimitesNoduloMamaDireitaSelect("");
      setEcogenicidadeNoduloMamaDireitaSelect("");
      setOrientacaoNoduloMamaDireitaSelect("");
      setEfeitoAcusticoNoduloMamaDireitaSelect("");
    }
  }, [
    multiplosNoduloMamaDireitaCheckBox,
    efeitoAcusticoNoduloMamaDireitaSelect,
    orientacaoNoduloMamaDireitaSelect,
    ecogenicidadeNoduloMamaDireitaSelect,
    limitesNoduloMamaDireitaSelect,
    margensNoduloMamaDireitaSelect,
    formaNoduloMamaDireitaSelect,
    distanciaPeleMamaDireitaInput,
    distanciaMamiloMamaDireitaInput,
    localizacaoNoduloMamaDireitaSelect,
    tamanho2NoduloMamaDireitaInput,
    tamanhoNoduloMamaDireitaInput,
  ]);

  const criaStringMultiplosNodulosMamaEsquerda = (
    efeitoAcusticoNoduloMamaEsquerdaSelect,
    orientacaoNoduloMamaEsquerdaSelect,
    ecogenicidadeNoduloMamaEsquerdaSelect,
    limitesNoduloMamaEsquerdaSelect,
    margensNoduloMamaEsquerdaSelect,
    formaNoduloMamaEsquerdaSelect,
    distanciaPeleMamaEsquerdaInput,
    distanciaMamiloMamaEsquerdaInput,
    localizacaoNoduloMamaEsquerdaSelect,
    tamanho2NoduloMamaEsquerdaInput,
    tamanhoNoduloMamaEsquerdaInput
  ) => {
    removeMultiplosNodulosMamaEsquerda();

    if (
      tamanhoNoduloMamaEsquerdaInput !== "" &&
      tamanho2NoduloMamaEsquerdaInput !== "" &&
      localizacaoNoduloMamaEsquerdaSelect !== "" &&
      distanciaMamiloMamaEsquerdaInput !== "" &&
      distanciaPeleMamaEsquerdaInput !== "" &&
      formaNoduloMamaEsquerdaSelect !== "" &&
      margensNoduloMamaEsquerdaSelect !== "" &&
      limitesNoduloMamaEsquerdaSelect !== "" &&
      ecogenicidadeNoduloMamaEsquerdaSelect !== "" &&
      orientacaoNoduloMamaEsquerdaSelect !== "" &&
      efeitoAcusticoNoduloMamaEsquerdaSelect !== ""
    ) {
      var string = `Múltiplos nodulos na mama Esquerda, o maior mede com as seguintes características: \n 
        - ${localizacaoNoduloMamaEsquerdaSelect}, medindo ${tamanhoNoduloMamaEsquerdaInput} x ${tamanho2NoduloMamaEsquerdaInput} mm, distando ${distanciaMamiloMamaEsquerdaInput} mm
        do mamilo e ${distanciaPeleMamaEsquerdaInput} mm da pele, com forma ${formaNoduloMamaEsquerdaSelect}, ${ecogenicidadeNoduloMamaEsquerdaSelect},
        com margens ${margensNoduloMamaEsquerdaSelect}, limites ${limitesNoduloMamaEsquerdaSelect}, com seu eixo ${orientacaoNoduloMamaEsquerdaSelect} e 
        apresentando ${efeitoAcusticoNoduloMamaEsquerdaSelect}.`;
      setFrasesNodulos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulosMamaEsquerda = () => {
    FrasesNodulos.map((e) => {
      if (e.includes(`Múltiplos nodulos na mama Esquerda`)) {
        var index = FrasesNodulos.indexOf(e);

        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNoduloMamaEsquerdaCheckBox) {
      setDisableSelectMamaEsquerda(false);
      criaStringMultiplosNodulosMamaEsquerda(
        efeitoAcusticoNoduloMamaEsquerdaSelect,
        orientacaoNoduloMamaEsquerdaSelect,
        ecogenicidadeNoduloMamaEsquerdaSelect,
        limitesNoduloMamaEsquerdaSelect,
        margensNoduloMamaEsquerdaSelect,
        formaNoduloMamaEsquerdaSelect,
        distanciaPeleMamaEsquerdaInput,
        distanciaMamiloMamaEsquerdaInput,
        localizacaoNoduloMamaEsquerdaSelect,
        tamanho2NoduloMamaEsquerdaInput,
        tamanhoNoduloMamaEsquerdaInput
      );
    } else {
      setDisableSelectMamaEsquerda(true);
      removeMultiplosNodulosMamaEsquerda();
      setTamanhoNoduloMamaEsquerdaInput("");
      setTamanho2NoduloMamaEsquerdaInput("");
      setDistanciaMamiloMamaEsquerdaInput("");
      setDistanciaPeleMamaEsquerdaInput("");
      setFormaNoduloMamaEsquerdaSelect("");
      setMargensNoduloMamaEsquerdaSelect("");
      setLimitesNoduloMamaEsquerdaSelect("");
      setEcogenicidadeNoduloMamaEsquerdaSelect("");
      setOrientacaoNoduloMamaEsquerdaSelect("");
      setEfeitoAcusticoNoduloMamaEsquerdaSelect("");
    }
  }, [
    multiplosNoduloMamaEsquerdaCheckBox,
    efeitoAcusticoNoduloMamaEsquerdaSelect,
    orientacaoNoduloMamaEsquerdaSelect,
    ecogenicidadeNoduloMamaEsquerdaSelect,
    limitesNoduloMamaEsquerdaSelect,
    margensNoduloMamaEsquerdaSelect,
    formaNoduloMamaEsquerdaSelect,
    distanciaPeleMamaEsquerdaInput,
    distanciaMamiloMamaEsquerdaInput,
    localizacaoNoduloMamaEsquerdaSelect,
    tamanho2NoduloMamaEsquerdaInput,
    tamanhoNoduloMamaEsquerdaInput,
  ]);

  const criaStringNaoObservado = () => {
    removeFraseNaoObservado();
    if (checkboxNaoObservado) {
      if (valueSelectNaoObservado !== "") {
        let string = `Não foi visibilizado o nódulo na ${valueSelectNaoObservado} descrito no exame anterior. Sugerimos controle ultra-sonográfico.`;
        setFrasesNodulos((arr) => [...arr, string]);
      }
    } else {
      setValueSelectNaoObservado("");
    }
  };
  const removeFraseNaoObservado = () => {
    FrasesNodulos.map((e) => {
      if (e.includes("Não foi visibilizado o nódulo")) {
        let index = FrasesNodulos.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringNaoObservado();
  }, [valueSelectNaoObservado, checkboxNaoObservado]);

  const subExame = "Nódulos";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FrasesNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesNodulos]);

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
      <TituloNomeExame titulo="Nódulos" />


      <Box gap="30px" display="flex" flexWrap="wrap" borderBottom="1px">
        <Stack gap='30px'>
          <Checkbox
            onChange={(e) => {
              setAusenciaNodulosCheckbox(
                !AusenciaNodulosCheckbox
              );
            }}
          >
            Ausência de nódulos
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setPresencaNodulosCheckboxHiperdenso(!PresencaNodulosCheckboxHiperdenso);
            }}
          >
            Presença de nódulos hiperdenso
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setPresencaNodulosCheckboxIsodenso(!PresencaNodulosCheckboxIsodenso);
            }}
          >
            Presença de nódulos Isodenso
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setPresencaNodulosCheckboxHipodenso(!PresencaNodulosCheckboxHipodenso);
            }}
          >
            Presença de nódulos Hipodenso
          </Checkbox>
        </Stack>

        <Stack>
          <Checkbox
            onChange={(e) => {
              setGorduraOvalCheckbox(
                !GorduraOvalCheckbox
              );
            }}
          >
            Contendo gordura oval
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setGorduraRedondaCheckbox(
                !GorduraRedondaCheckbox
              );
            }}
          >
            Contendo gordura Redonda
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setGorduraIrregularCheckbox(
                !GorduraIrregularCheckbox
              );
            }}
          >
            Contendo gordura Irregular
          </Checkbox>

          <Checkbox
            onChange={(e) => {
              setMargensCircunscritasCheckbox(
                !MargensCircunscritasCheckbox
              );
            }}
          >
            Margens circunscritas
          </Checkbox>

          <Checkbox
            onChange={(e) => {
              setObscurecidasCheckbox(
                !ObscurecidasCheckbox
              );
            }}
          >
            Obscurecidas
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setMicrolobuladaCheckbox(
                !MicrolobuladaCheckbox
              );
            }}
          >
            Microlobulada
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setIndistintaCheckbox(
                !IndistintaCheckbox
              );
            }}
          >
            Indistinta
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setEspiculadaCheckbox(
                !EspiculadaCheckbox
              );
            }}
          >
            Espiculada
          </Checkbox>
        </Stack>

        <Box display="flex" flexWrap="wrap">
          <Checkbox
            onChange={(e) => {
              setCheckboxNaoObservado(!checkboxNaoObservado);
            }}
          >
            Não observado nódulo descrito em exame anterior.
          </Checkbox>
          <Select
            w="150px"
            isDisabled={!checkboxNaoObservado}
            onChange={(e) => {
              setValueSelectNaoObservado(e.target.value);
            }}
            value={valueSelectNaoObservado}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="mama direita">Mama direita</option>
            <option value="mama esquerda">Mama esquerda</option>
          </Select>
        </Box>

      </Box>
      <Box borderBottom="1px">
        <Box borderBottom="1px" gap="5px" display="flex" flexWrap="wrap">
          <Checkbox
            onChange={() =>
              setMultiplosNoduloMamaDireitaCheckBox(
                !multiplosNoduloMamaDireitaCheckBox
              )
            }
          >
            Múltiplos nódulos na mama direita, o maior mede
          </Checkbox>

          <Input
            isDisabled={DisableSelectMamaDireita}
            value={tamanhoNoduloMamaDireitaInput}
            w="60px"
            h="77x"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setTamanhoNoduloMamaDireitaInput(e.target.value);
            }}
            placeholder={"mm"}
          />
          <Text alignSelf="center">x</Text>
          <Input
            isDisabled={DisableSelectMamaDireita}
            value={tamanho2NoduloMamaDireitaInput}
            w="60px"
            h="77x"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setTamanho2NoduloMamaDireitaInput(e.target.value);
            }}
            placeholder={"mm"}
          />
          <Select
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setLocalizacaoNoduloMamaDireitaSelect(e.target.value);
            }}
            value={localizacaoNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Localizado
            </option>
            <option value="à 1 hora">à 1 hora</option>
            <option value="às 2 horas">às 2 horas</option>
            <option value="às 3 horas">às 3 horas</option>
            <option value="às 4 horas">às 4 horas</option>
            <option value="às 5 horas">às 5 horas</option>
            <option value="às 6 horas">às 6 horas</option>
            <option value="às 7 horas">às 7 horas</option>
            <option value="às 8 horas">às 8 horas</option>
            <option value="às 9 horas">às 9 horas</option>
            <option value="às 10 horas">às 10 horas</option>
            <option value="às 11 horas">às 11 horas</option>
            <option value="às 12 horas">às 12 horas</option>
            <option value="na região retropapilar">
              na região retropapilar
            </option>
          </Select>
          <HStack>
            <Text alignSelf="center">a</Text>
            <Input
              isDisabled={DisableSelectMamaDireita}
              value={distanciaMamiloMamaDireitaInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setDistanciaMamiloMamaDireitaInput(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Text alignSelf="center">mm do mamilo e </Text>
            <Input
              isDisabled={DisableSelectMamaDireita}
              value={distanciaPeleMamaDireitaInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setDistanciaPeleMamaDireitaInput(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Text alignSelf="center">mm da pele</Text>
          </HStack>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setFormaNoduloMamaDireitaSelect(e.target.value);
            }}
            value={formaNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Forma
            </option>
            <option value="oval">oval</option>
            <option value="redonda">redonda</option>
            <option value="irregular">irregular</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setMargensNoduloMamaDireitaSelect(e.target.value);
            }}
            value={margensNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Margens
            </option>
            <option value="circunscritas">circunscritas</option>
            <option value="não circunscritas">não circunscritas</option>
            <option value="indistintas">indistintas</option>
            <option value="angulares">angulares</option>
            <option value="microlobuladas">microlobuladas</option>
            <option value="espiculadas">espiculadas</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setLimitesNoduloMamaDireitaSelect(e.target.value);
            }}
            value={limitesNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Limites
            </option>
            <option value="bem definidos">bem definidos</option>
            <option value="com halo ecogênico">com halo ecogênico</option>
            <option value="com halo anecóico">com halo anecóico</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setEcogenicidadeNoduloMamaDireitaSelect(e.target.value);
            }}
            value={ecogenicidadeNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Padrão ecog.
            </option>
            <option value="hipoecogênico">hipoecogênico</option>
            <option value="hiperecogênico">hiperecogênico</option>
            <option value="isoecogênico">isoecogênico</option>
            <option value="anecóico">anecóico</option>
            <option value="complexo">complexo</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setOrientacaoNoduloMamaDireitaSelect(e.target.value);
            }}
            value={orientacaoNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Orientação
            </option>
            <option value="paralelo à pele">paralelo à pele</option>
            <option value="não paralelo à pele">não paralelo à pele</option>
          </Select>
          <Select
            mb="5px"
            w="auto"
            isDisabled={DisableSelectMamaDireita}
            onChange={(e) => {
              setEfeitoAcusticoNoduloMamaDireitaSelect(e.target.value);
            }}
            value={efeitoAcusticoNoduloMamaDireitaSelect}
          >
            <option value="" disabled selected>
              Efeito acúst.
            </option>
            <option value="ausente">ausente</option>
            <option value="sombra acústica">sombra acústica</option>
            <option value="reforço acústico">reforço acústico</option>
          </Select>
        </Box>

        <Box gap="5px" display="flex" flexWrap="wrap">
          <Checkbox
            onChange={() =>
              setMultiplosNoduloMamaEsquerdaCheckBox(
                !multiplosNoduloMamaEsquerdaCheckBox
              )
            }
          >
            Múltiplos nódulos na mama esquerda, o maior mede
          </Checkbox>

          <Input
            isDisabled={DisableSelectMamaEsquerda}
            value={tamanhoNoduloMamaEsquerdaInput}
            w="60px"
            h="77x"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setTamanhoNoduloMamaEsquerdaInput(e.target.value);
            }}
            placeholder={"mm"}
          />
          <Text alignSelf="center">x</Text>
          <Input
            isDisabled={DisableSelectMamaEsquerda}
            value={tamanho2NoduloMamaEsquerdaInput}
            w="60px"
            h="77x"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setTamanho2NoduloMamaEsquerdaInput(e.target.value);
            }}
            placeholder={"mm"}
          />
          <Select
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setLocalizacaoNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={localizacaoNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Localizado
            </option>
            <option value="à 1 hora">à 1 hora</option>
            <option value="às 2 horas">às 2 horas</option>
            <option value="às 3 horas">às 3 horas</option>
            <option value="às 4 horas">às 4 horas</option>
            <option value="às 5 horas">às 5 horas</option>
            <option value="às 6 horas">às 6 horas</option>
            <option value="às 7 horas">às 7 horas</option>
            <option value="às 8 horas">às 8 horas</option>
            <option value="às 9 horas">às 9 horas</option>
            <option value="às 10 horas">às 10 horas</option>
            <option value="às 11 horas">às 11 horas</option>
            <option value="às 12 horas">às 12 horas</option>
            <option value="na região retropapilar">
              na região retropapilar
            </option>
          </Select>
          <HStack>
            <Text alignSelf="center">a</Text>
            <Input
              isDisabled={DisableSelectMamaEsquerda}
              value={distanciaMamiloMamaEsquerdaInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setDistanciaMamiloMamaEsquerdaInput(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Text alignSelf="center">mm do mamilo e </Text>
            <Input
              isDisabled={DisableSelectMamaEsquerda}
              value={distanciaPeleMamaEsquerdaInput}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setDistanciaPeleMamaEsquerdaInput(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Text alignSelf="center">mm da pele</Text>
          </HStack>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setFormaNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={formaNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Forma
            </option>
            <option value="oval">oval</option>
            <option value="redonda">redonda</option>
            <option value="irregular">irregular</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setMargensNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={margensNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Margens
            </option>
            <option value="circunscritas">circunscritas</option>
            <option value="não circunscritas">não circunscritas</option>
            <option value="indistintas">indistintas</option>
            <option value="angulares">angulares</option>
            <option value="microlobuladas">microlobuladas</option>
            <option value="espiculadas">espiculadas</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setLimitesNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={limitesNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Limites
            </option>
            <option value="bem definidos">bem definidos</option>
            <option value="com halo ecogênico">com halo ecogênico</option>
            <option value="com halo anecóico">com halo anecóico</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setEcogenicidadeNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={ecogenicidadeNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Padrão ecog.
            </option>
            <option value="hipoecogênico">hipoecogênico</option>
            <option value="hiperecogênico">hiperecogênico</option>
            <option value="isoecogênico">isoecogênico</option>
            <option value="anecóico">anecóico</option>
            <option value="complexo">complexo</option>
          </Select>
          <Select
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setOrientacaoNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={orientacaoNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Orientação
            </option>
            <option value="paralelo à pele">paralelo à pele</option>
            <option value="não paralelo à pele">não paralelo à pele</option>
          </Select>
          <Select
            mb="5px"
            w="auto"
            isDisabled={DisableSelectMamaEsquerda}
            onChange={(e) => {
              setEfeitoAcusticoNoduloMamaEsquerdaSelect(e.target.value);
            }}
            value={efeitoAcusticoNoduloMamaEsquerdaSelect}
          >
            <option value="" disabled selected>
              Efeito acúst.
            </option>
            <option value="ausente">ausente</option>
            <option value="sombra acústica">sombra acústica</option>
            <option value="reforço acústico">reforço acústico</option>
          </Select>
        </Box>
      </Box>
      <Text fontWeight="semibold" fontSize="16px">
        Individualizar Nódulos
      </Text>
      <Stack>
        <>
          {numberArray.map((num, key) => {
            return <IndividualizarNodulos key={key} numNodulo={num} />;
          })}
        </>
      </Stack>
    </Box>
  );
}
export default Calculo;
