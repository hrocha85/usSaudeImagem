
import {
  Box,
  Button,
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
import IndividualizarNodulos from "./individualizar_nodulos";

function Miometrio({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [frasesMiometrio, setFrasesMiometrio] = useState<any>([]);
  const [ConclusaoMiometrio, setConclusaoMiometrio] = useState<any>([]);

  const subExame = "Miométrio";
  const titulo_exame = "Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesMiometrio).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMiometrio,
        ConclusaoMiometrio
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMiometrio,
        ConclusaoMiometrio
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMiometrio]);
  const [UpdateNodulos, setUpdateNodulos] = useState(false);
  const [numberArray, setNumberArray] = useState([1]);

  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarNodulos
            key={key}
            numNodulo={num}
            disable={!miometrioSemNodulosCheckBox || Disable}
          />
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

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [miometrioSemNodulosCheckBox, setmiometrioSemNodulosCheckBox] = useState(true);

  const [MiometrioHomogeneoSemNodulosCheckBox, setMiometrioHomogeneoSemNodulosCheckBox] = useState(false);

  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (tamanhoNoduloInput, nodulosSelect, localizado) => {
    const conclusao = 'Miomatose uterina.'
    removeMultiplosNodulos();
    removeItemStringConclusao(conclusao)
    if (tamanhoNoduloInput !== "" && nodulosSelect !== "" && localizado !== "") {
      const string = `O miométrio encontra-se heterogêneo, apresentando de múltiplos nódulos de mioma, o maior ${nodulosSelect}, localizado na parede ${localizado} e medindo ${tamanhoNoduloInput} mm.`;
      setFrasesMiometrio((arr) => [...arr, string]);
      setConclusaoMiometrio((arr) => [...arr, conclusao]);
    }
  };

  const removeMultiplosNodulos = () => {
    frasesMiometrio.map((e) => {
      if (e.includes("O miométrio encontra-se heterogêneo, apresentando de múltiplos nódulos de mioma,")
      ) {
        const index = frasesMiometrio.indexOf(e);

        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMiometrioSemNodulos = () => {
    const string =
      "O miométrio apresenta estratificação normal e ecotextura habitual.";
    const conclusao = 'Alteração textural miometrial.'
    if (miometrioSemNodulosCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
      setConclusaoMiometrio((arr) => [...arr, conclusao]);
      setmiometrioSemNodulosCheckBox(false);
    } else {
      removeItemString(string);
      removeItemStringConclusao(conclusao);
    }
  };
  const criaStringMiometrioHomogeneoSemNodulos = () => {
    const string = 'Miométrio homogêneo sem nódulos'
    const conclusao = 'Miométrio homogêneo sem nódulos.'
    if (MiometrioHomogeneoSemNodulosCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
      setConclusaoMiometrio((arr) => [...arr, conclusao]);
    } else {
      removeItemString(string);
      removeItemStringConclusao(conclusao);
    }
  };
  useEffect(() => {
    criaStringMiometrioHomogeneoSemNodulos()
  }, [MiometrioHomogeneoSemNodulosCheckBox])

  const removeItemString = (value) => {
    const index = frasesMiometrio.indexOf(value);
    if (index > -1) {
      frasesMiometrio.splice(index, 1);
      setFrasesMiometrio((arr) => [...arr]);
    }
  };

  const removeItemStringConclusao = (value) => {
    const index = ConclusaoMiometrio.indexOf(value);
    if (index > -1) {
      ConclusaoMiometrio.splice(index, 1);
      setConclusaoMiometrio((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect
      );
    } else {
      removeItemStringConclusao('Miomatose uterina.')
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
  ]);

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
      <TituloNomeExame titulo="Miométrio" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Checkbox isDisabled={Disable}
              onChange={() => {
                setmiometrioSemNodulosCheckBox(true);
                criaStringMiometrioSemNodulos();
              }}
            >
              Miométrio heterogêneo sem nódulos
            </Checkbox>
            <Checkbox isDisabled={Disable}
              onChange={() => {
                setMiometrioHomogeneoSemNodulosCheckBox(!MiometrioHomogeneoSemNodulosCheckBox);
              }}
            >
              Miométrio homogêneo sem nódulos
            </Checkbox>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  isDisabled={!miometrioSemNodulosCheckBox || Disable}
                  onChange={() =>
                    setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)
                  }
                >
                  Múltiplos nódulos de mioma, o maior mede
                </Checkbox>

                <Input
                  isDisabled={!miometrioSemNodulosCheckBox}
                  value={tamanhoNoduloInput}
                  w="60px"
                  h="77x"
                  padding="5px"
                  textAlign="center"
                  onChange={handleChangeNoduloInput}
                  placeholder={"mm"}
                />
                <Select
                  w="auto"
                  isDisabled={!miometrioSemNodulosCheckBox}
                  onChange={(e) => {
                    setPosicaoNodulosSelect(e.target.value);
                  }}
                  value={posicaoNodulosSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="Intramural">Intramural</option>
                  <option value="Subseroso">Subseroso </option>
                  <option value="Submucoso">Submucoso</option>
                  <option value="médio versão">Médio versão</option>
                </Select>

                <Select
                  w="auto"
                  isDisabled={!miometrioSemNodulosCheckBox}
                  onChange={(e) => {
                    setlocalizacaoNodulosSelect(e.target.value);
                  }}
                  value={localizacaoNodulosSelect}
                >
                  <option value="" disabled selected>
                    Localizado
                  </option>
                  <option value="corporal anterior">Corporal anterior</option>
                  <option value="corporal posterior">Corporal posterior</option>
                  <option value="fúndica">Fúndica</option>
                  <option value="lateral direita">Lateral direita</option>
                  <option value="lateral esquerda">Lateral esquerda</option>
                  <option value="cervical">Cervical</option>
                </Select>
              </HStack>
            </Box>

            <Box borderBottom="1px"></Box>
            <Text fontWeight="semibold" fontSize="16px">
              Individualizar Nódulos
            </Text>
            <Stack>
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
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Miometrio;
