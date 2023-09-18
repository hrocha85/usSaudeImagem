
/* eslint-disable array-callback-return */
import {
  Box,
  Center,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Colecao({ Disable }) {
  const altura = "auto";
  const largura = "auto";

  const [frasesColecao, setFrasesColecao] = useState<any>([]);
  const [ConclusaoColecao, setConclusaoColecao] = useState<any>([]);


  const [inputLocalColecao, setInputLocalColecao] = useState("");
  const [LocalColecaoCheckbox, setCheckboxLocalColecao] = useState(false);
  const [disableInputLocalColecao, setDisableInputLocalColecao] =
    useState(true);

  const [ecogenicidadeColecaoSelect, setEcogenicidadeColecaoSelect] =
    useState("");
  const [planoColecaoSelect, setPlanoColecaoSelect] = useState("");
  const [medida1Colecao, setMedida1Colecao] = useState("");
  const [medida2Colecao, setMedida2Colecao] = useState("");
  const [medida3Colecao, setMedida3Colecao] = useState("");
  const [MedidaDistanciaPele, setMedidaDistanciaPele] = useState("");


  const criaStringLocalColecao = () => {
    removeLocalColecao();
    removeConclusao();
    if (
      planoColecaoSelect !== "" &&
      medida1Colecao !== "" &&
      medida2Colecao !== "" &&
      medida3Colecao !== ""
    ) {
      const soma = (parseFloat(medida1Colecao) + parseFloat(medida2Colecao) + parseFloat(medida3Colecao)) / 1000
      const conclusao = `Coleção líquida com volume estimado em ${soma} ml.`
      const string = `Presença de coleção bem delimitada medindo ${medida1Colecao} x ${medida2Colecao} x ${medida3Colecao} cm (volume estimado em ${soma} ml), contendo ${planoColecaoSelect}.`;
      setFrasesColecao((arr) => [...arr, string]);
      setConclusaoColecao((arr) => [...arr, conclusao]);
    }
  };

  const removeLocalColecao = () => {
    frasesColecao.map((e) => {
      if (e.includes("Presença de coleção bem delimitada medindo ")) {
        const index = frasesColecao.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesColecao.splice(index, 1);
          setFrasesColecao((arr) => [...arr]);
        }
      }
    });
  };

  const removeConclusao = () => {
    ConclusaoColecao.map((e) => {
      if (e.includes("Coleção líquida com volume estimado em ")) {
        const index = ConclusaoColecao.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoColecao.splice(index, 1);
          setConclusaoColecao((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Coleção líquida com volume estimado em ');
        }
      }
    });
  };

  useEffect(() => {
    LocalColecaoCheckbox
      ? setDisableInputLocalColecao(false)
      : setDisableInputLocalColecao(true);
    removeLocalColecao();
    setInputLocalColecao("");
    setEcogenicidadeColecaoSelect("");
    setPlanoColecaoSelect("");
    setMedida1Colecao("");
    setMedida2Colecao("");
    setMedida3Colecao("");
    setMedidaDistanciaPele("");
  }, [LocalColecaoCheckbox]);

  useEffect(() => {
    criaStringLocalColecao();
  }, [planoColecaoSelect, medida1Colecao, medida2Colecao, medida3Colecao]);

  const subExame = "Coleção";
  const titulo_exame = "Parede Abdominal";

  useEffect(() => {
    if (Object.keys(frasesColecao).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesColecao,
        ConclusaoColecao
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesColecao,
        ConclusaoColecao
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesColecao]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Coleção" />

      <Box display="flex" flexWrap="wrap">
        <Stack w="100%">
          <HStack>
            <Checkbox
              isDisabled={Disable}
              onChange={(e) => setCheckboxLocalColecao(!LocalColecaoCheckbox)}
              mr="30px"
            >
              Coleção
            </Checkbox>
            <HStack>
              <Text>medindo</Text>
              <Input
                isDisabled={disableInputLocalColecao}
                w="35px"
                h="30px"
                value={medida1Colecao}
                padding="0px"

                textAlign="center"
                onChange={(e) => {
                  setMedida1Colecao(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableInputLocalColecao}
                w="35px"
                h="30px"
                value={medida2Colecao}
                padding="0px"

                textAlign="center"
                onChange={(e) => {
                  setMedida2Colecao(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableInputLocalColecao}
                w="35px"
                h="30px"
                value={medida3Colecao}
                padding="0px"

                textAlign="center"
                onChange={(e) => {
                  setMedida3Colecao(e.target.value);
                }}
              />
              <Text>cm</Text>
            </HStack>
          </HStack>
          <Center>
            <Select
              isDisabled={disableInputLocalColecao}
              value={planoColecaoSelect}
              onChange={(e) => {
                setPlanoColecaoSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Coleção
              </option>
              <option value="líquido anecogênico com finos debris">
                líquido anecogênico com finos debris
              </option>
              <option value="líquido anecogênico">líquido anecogênico</option>
              <option value="líquido hipoecogênico">
                líquido hipoecogênico
              </option>
              <option value="material heterogêneo">material heterogêneo</option>
            </Select>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
}
export default Colecao;
