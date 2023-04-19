/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import {
  Box,
  Button,
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
  const [UpdateNodulos, setUpdateNodulos] = useState(false);

  const [numberArray, setNumberArray] = useState([1]);

  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarNodulos key={key} numNodulo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Nodulos();
    }
  }, [UpdateNodulos]);

  const [AusenciaNodulosCheckbox, setAusenciaNodulosCheckbox] = useState(false);

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


  const [tamanhoNoduloMamaInput, setTamanhoNoduloMamaInput] = useState("");
  const [
    localizacaoNoduloMamaSelect,
    setLocalizacaoNoduloMamaSelect,
  ] = useState("");
  const [distanciaMamiloMamaInput, setDistanciaMamiloMamaInput] =
    useState("");
  const [distanciaPeleMamaInput, setDistanciaPeleMamaInput] =
    useState("");
  const [formaNoduloMamaSelect, setFormaNoduloMamaSelect] =
    useState("");
  const [margensNoduloMamaSelect, setMargensNoduloMamaSelect] =
    useState("");
  const [limitesNoduloMamaSelect, setLimitesNoduloMamaSelect] =
    useState("");
  const [LadoNoduloMamaSelect, setLadoNoduloMamaSelect] =
    useState("");
  const [ecogenicidadeNoduloMamaSelect, setEcogenicidadeNoduloMamaSelect,] = useState("");
  const [orientacaoNoduloMamaSelect, setOrientacaoNoduloMamaSelect,] = useState("");
  const [efeitoAcusticoNoduloMamaSelect, setEfeitoAcusticoNoduloMamaSelect,] = useState("");

  const [multiplosNoduloMamaCheckBox, setMultiplosNoduloMamaCheckBox,] = useState(false);


  const criaStringMultiplosNodulosMama = () => {
    let string = 'o maior com as seguintes características:'
    removeMultiplosNodulosMama(string);
    if (multiplosNoduloMamaCheckBox) {
      if (LadoNoduloMamaSelect &&
        tamanhoNoduloMamaInput &&
        localizacaoNoduloMamaSelect &&
        distanciaMamiloMamaInput &&
        distanciaPeleMamaInput &&
        formaNoduloMamaSelect &&
        margensNoduloMamaSelect &&
        limitesNoduloMamaSelect &&
        ecogenicidadeNoduloMamaSelect &&
        orientacaoNoduloMamaSelect &&
        efeitoAcusticoNoduloMamaSelect) {
        string = `Múltiplos nodulos na ${LadoNoduloMamaSelect}, ${string}\n 
        - ${localizacaoNoduloMamaSelect}, medindo ${tamanhoNoduloMamaInput} cm, distando ${distanciaMamiloMamaInput} cm
        do mamilo e ${distanciaPeleMamaInput} cm da pele, com forma ${formaNoduloMamaSelect}, ${ecogenicidadeNoduloMamaSelect},
        com margens ${margensNoduloMamaSelect}, limites ${limitesNoduloMamaSelect}, com seu eixo ${orientacaoNoduloMamaSelect} e 
        apresentando ${efeitoAcusticoNoduloMamaSelect}.`;
        setFrasesNodulos((arr) => [...arr, string]);
      }
    } else {
      setTamanhoNoduloMamaInput("");
      setDistanciaMamiloMamaInput("");
      setDistanciaPeleMamaInput("");
      setFormaNoduloMamaSelect("");
      setMargensNoduloMamaSelect("");
      setLimitesNoduloMamaSelect("");
      setEcogenicidadeNoduloMamaSelect("");
      setOrientacaoNoduloMamaSelect("");
      setEfeitoAcusticoNoduloMamaSelect("");
      setLadoNoduloMamaSelect("")
    }
  };

  const removeMultiplosNodulosMama = (value) => {
    FrasesNodulos.map((e) => {
      if (e.includes(value)) {
        var index = FrasesNodulos.indexOf(e);

        if (index > -1) {
          FrasesNodulos.splice(index, 1);
          setFrasesNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMultiplosNodulosMama();
  }, [
    multiplosNoduloMamaCheckBox,
    efeitoAcusticoNoduloMamaSelect,
    orientacaoNoduloMamaSelect,
    ecogenicidadeNoduloMamaSelect,
    limitesNoduloMamaSelect,
    margensNoduloMamaSelect,
    formaNoduloMamaSelect,
    distanciaPeleMamaInput,
    distanciaMamiloMamaInput,
    localizacaoNoduloMamaSelect,
    tamanhoNoduloMamaInput,
    LadoNoduloMamaSelect
  ]);



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
        </Stack>

      </Box>
      <Box borderBottom="1px">
        <Box borderBottom="1px" gap="5px" display="flex" flexWrap="wrap">
          <Checkbox
            onChange={() =>
              setMultiplosNoduloMamaCheckBox(
                !multiplosNoduloMamaCheckBox
              )
            }
          >
            Múltiplos nódulos na mama
          </Checkbox>

          <Select
            w="auto"
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setLadoNoduloMamaSelect(e.target.value);
            }}
            value={LadoNoduloMamaSelect}
          >
            <option value="" disabled selected>
              dir/esq
            </option>
            <option value="mama direita">Mama direita</option>
            <option value="mama esquerda">Mama esquerda</option>
          </Select>
          <Text alignSelf='center'>, o maior mede</Text>
          <Input
            isDisabled={!multiplosNoduloMamaCheckBox}
            value={tamanhoNoduloMamaInput}
            w="50px"
            padding="0px"
            textAlign="center"
            onChange={(e) => {
              setTamanhoNoduloMamaInput(e.target.value);
            }}
            placeholder={"cm"}
          />
          <Text alignSelf="center">x</Text>
          <Input
            isDisabled={DisableSelectMamaEsquerda}
            value={tamanho2NoduloMamaEsquerdaInput}
            w="60px"
            h="77x"
            padding="5px"
            
            textAlign="center"
            onChange={(e) => {
              setTamanho2NoduloMamaEsquerdaInput(e.target.value);
            }}
            placeholder={"cm"}
          />

          <Select
            w="auto"
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setLocalizacaoNoduloMamaSelect(e.target.value);
            }}
            value={localizacaoNoduloMamaSelect}
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
              isDisabled={!multiplosNoduloMamaCheckBox}
              value={distanciaMamiloMamaInput}
              w="50px"
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setDistanciaMamiloMamaInput(e.target.value);
              }}
              placeholder={"cm"}
            />
            <Text alignSelf="center">cm do mamilo e </Text>
            <Input
              isDisabled={!multiplosNoduloMamaCheckBox}
              value={distanciaPeleMamaInput}
              w="50px"
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setDistanciaPeleMamaInput(e.target.value);
              }}
              placeholder={"cm"}
            />
            <Text alignSelf="center">cm da pele</Text>
          </HStack>
          <Select
            w="auto"
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setFormaNoduloMamaSelect(e.target.value);
            }}
            value={formaNoduloMamaSelect}
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
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setMargensNoduloMamaSelect(e.target.value);
            }}
            value={margensNoduloMamaSelect}
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
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setLimitesNoduloMamaSelect(e.target.value);
            }}
            value={limitesNoduloMamaSelect}
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
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setEcogenicidadeNoduloMamaSelect(e.target.value);
            }}
            value={ecogenicidadeNoduloMamaSelect}
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
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setOrientacaoNoduloMamaSelect(e.target.value);
            }}
            value={orientacaoNoduloMamaSelect}
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
            isDisabled={!multiplosNoduloMamaCheckBox}
            onChange={(e) => {
              setEfeitoAcusticoNoduloMamaSelect(e.target.value);
            }}
            value={efeitoAcusticoNoduloMamaSelect}
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

      <Box gap="25px" display="flex" flexWrap="wrap">
        {Nodulos()}
        <Button
          colorScheme="blue"
          onClick={() => {
            setUpdateNodulos(true);
          }}
        >
          +1 Nódulo
        </Button>

      </Box>

    </Box>
  );
}
export default Calculo;
