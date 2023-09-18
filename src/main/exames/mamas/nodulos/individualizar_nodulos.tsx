
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarNodulos({ numNodulo }) {
  const [frasesINDNodulos, setFrasesINDNodulos] = useState<any>([]);

  const [tamanhoNoduloInput, setTamanhoNoduloInput] = useState("");
  const [tamanho2NoduloInput, setTamanho2NoduloInput] = useState("");
  const [localizacaoNodulosSelect, setLocalizacaoNodulosSelect] = useState("");
  const [mamaNodulosSelect, setMamaNodulosSelect] = useState("");
  const [distanciaMamiloInput, setDistanciaMamiloInput] = useState("");
  const [distanciaPeleInput, setDistanciaPeleInput] = useState("");
  const [formaNodulosSelect, setFormaNodulosSelect] = useState("");
  const [margensNodulosSelect, setMargensNodulosSelect] = useState("");
  const [limitesNodulosSelect, setLimitesNodulosSelect] = useState("");
  const [ecogenicidadeNodulosSelect, setEcogenicidadeNodulosSelect] =
    useState("");
  const [orientacaoNodulosSelect, setOrientacaoNodulosSelect] = useState("");
  const [efeitoAcusticoNodulosSelect, setEfeitoAcusticoNodulosSelect] =
    useState("");
  const [multiplosNodulosCheckBox, setMultiplosNodulosCheckBox] =
    useState(false);

  const criaStringMultiplosNodulos = () => {
    removeMultiplosNodulos();

    if (
      tamanhoNoduloInput !== "" &&
      localizacaoNodulosSelect !== "" &&
      mamaNodulosSelect !== "" &&
      distanciaMamiloInput !== "" &&
      distanciaPeleInput !== "" &&
      formaNodulosSelect !== "" &&
      margensNodulosSelect !== "" &&
      limitesNodulosSelect !== "" &&
      ecogenicidadeNodulosSelect !== "" &&
      orientacaoNodulosSelect !== "" &&
      efeitoAcusticoNodulosSelect !== ""
    ) {
      const string = `Presença do Nódulo ${numNodulo} na ${mamaNodulosSelect} com as seguintes características: \n 
        - ${localizacaoNodulosSelect}, medindo ${tamanhoNoduloInput} cm, distando ${distanciaMamiloInput} cm
        do mamilo e ${distanciaPeleInput} cm da pele, com forma ${formaNodulosSelect}, ${ecogenicidadeNodulosSelect},
        com margens ${margensNodulosSelect}, limites ${limitesNodulosSelect}, com seu eixo ${orientacaoNodulosSelect} e 
        apresentando ${efeitoAcusticoNodulosSelect}.`;
      setFrasesINDNodulos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosNodulos = () => {
    frasesINDNodulos.map((e) => {
      if (e.includes(`Presença do Nódulo ${numNodulo}`)) {
        const index = frasesINDNodulos.indexOf(e);

        if (index > -1) {
          frasesINDNodulos.splice(index, 1);
          setFrasesINDNodulos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      criaStringMultiplosNodulos();
    } else {
      removeMultiplosNodulos();
      setTamanhoNoduloInput("");
      setMamaNodulosSelect("");
      setDistanciaMamiloInput("");
      setDistanciaPeleInput("");
      setFormaNodulosSelect("");
      setMargensNodulosSelect("");
      setLimitesNodulosSelect("");
      setEcogenicidadeNodulosSelect("");
      setOrientacaoNodulosSelect("");
      setEfeitoAcusticoNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    efeitoAcusticoNodulosSelect,
    orientacaoNodulosSelect,
    ecogenicidadeNodulosSelect,
    limitesNodulosSelect,
    margensNodulosSelect,
    formaNodulosSelect,
    distanciaPeleInput,
    distanciaMamiloInput,
    mamaNodulosSelect,
    localizacaoNodulosSelect,
    tamanhoNoduloInput,
  ]);

  const subExame = `Nódulo ${numNodulo}`;
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesINDNodulos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesINDNodulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesINDNodulos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesINDNodulos]);

  return (
    <Box borderBottom="1px" gap="5px" display="flex" flexWrap="wrap">
      <Checkbox
        onChange={() => setMultiplosNodulosCheckBox(!multiplosNodulosCheckBox)}
      >
        Nódulo {numNodulo}
      </Checkbox>

      <Input
        isDisabled={!multiplosNodulosCheckBox}
        value={tamanhoNoduloInput}
        w="60px"
        h="77x"
        padding="5px"
        textAlign="center"
        onChange={(e) => {
          setTamanhoNoduloInput(e.target.value);
        }}
        placeholder={"cm"}
      />
      <Text alignSelf="center">x</Text>
      <Input
        isDisabled={!multiplosNodulosCheckBox}
        value={tamanho2NoduloInput}
        w="60px"
        h="77x"
        padding="5px"
        textAlign="center"
        onChange={(e) => {
          setTamanho2NoduloInput(e.target.value);
        }}
        placeholder={"cm"}
      />
      <Select
        w="auto"
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setLocalizacaoNodulosSelect(e.target.value);
        }}
        value={localizacaoNodulosSelect}
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
        <option value="na região retropapilar">na região retropapilar</option>
      </Select>
      <Select
        w="auto"
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setMamaNodulosSelect(e.target.value);
        }}
        value={mamaNodulosSelect}
      >
        <option value="" disabled selected>
          mama esq. dir.
        </option>
        <option value="mama direita">mama direita</option>
        <option value="mama esquerda">mama esquerda </option>
      </Select>
      <HStack>
        <Text alignSelf="center">a</Text>
        <Input
          isDisabled={!multiplosNodulosCheckBox}
          value={distanciaMamiloInput}
          w="50px"
          padding="0px"
          textAlign="center"
          onChange={(e) => {
            setDistanciaMamiloInput(e.target.value);
          }}
          placeholder={"cm"}
        />
        <Text alignSelf="center">cm do mamilo e </Text>
        <Input
          isDisabled={!multiplosNodulosCheckBox}
          value={distanciaPeleInput}
          w="50px"
          padding="0px"
          textAlign="center"
          onChange={(e) => {
            setDistanciaPeleInput(e.target.value);
          }}
          placeholder={"cm"}
        />
        <Text alignSelf="center">cm da pele</Text>
      </HStack>
      <Select
        w="auto"
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setFormaNodulosSelect(e.target.value);
        }}
        value={formaNodulosSelect}
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
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setMargensNodulosSelect(e.target.value);
        }}
        value={margensNodulosSelect}
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
        <option value="obscurecidas">obscurecidas</option>
      </Select>
      <Select
        w="auto"
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setLimitesNodulosSelect(e.target.value);
        }}
        value={limitesNodulosSelect}
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
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setEcogenicidadeNodulosSelect(e.target.value);
        }}
        value={ecogenicidadeNodulosSelect}
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
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setOrientacaoNodulosSelect(e.target.value);
        }}
        value={orientacaoNodulosSelect}
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
        isDisabled={!multiplosNodulosCheckBox}
        onChange={(e) => {
          setEfeitoAcusticoNodulosSelect(e.target.value);
        }}
        value={efeitoAcusticoNodulosSelect}
      >
        <option value="" disabled selected>
          Efeito acúst.
        </option>
        <option value="ausente">ausente</option>
        <option value="sombra acústica">sombra acústica</option>
        <option value="reforço acústico">reforço acústico</option>
      </Select>
    </Box>
  );
}
