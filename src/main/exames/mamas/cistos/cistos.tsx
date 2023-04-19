/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizar_cistos";

function Cisto() {
  const altura = "100%";
  const largura = "66%";

  const [frasesCistos, setFrasesCistos] = useState<any>([]);

  const [UpdateCisto, setUpdateCisto] = useState(false);

  const [numberArray, setNumberArray] = useState([1]);

  function Cisto() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarCistos key={key} numCisto={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCisto) {
      setUpdateCisto(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Cisto();
    }
  }, [UpdateCisto]);

  const [
    multiplosCistosMamaDireitoCheckBox,
    setmultiplosCistosMamaDireitoCheckBox,
  ] = useState(false);

  const [DisableSelectDireito, setDisableSelectDireito] = useState(true);

  const [
    multiplosCistosMamaEsquerdoCheckBox,
    setmultiplosCistosMamaEsquerdoCheckBox,
  ] = useState(false);

  const [DisableSelectEsquerdo, setDisableSelectEsquerdo] = useState(true);

  const [tamanhoCistoMamaDireitoInput, settamanhoCistoMamaDireitoInput] =
    useState("");
  const [posicaoCistosMamaDireitoSelect, setPosicaoCistosMamaDireitoSelect] =
    useState("");
  const [ConteudoCistosMamaDireitoSelect, setConteudoCistosMamaDireitoSelect] =
    useState("");

  const [tamanhoCistoMamaEsquerdoInput, setTamanhoCistoMamaEsquerdoInput] =
    useState("");
  const [posicaoCistosMamaEsquerdoSelect, setPosicaoCistosMamaEsquerdoSelect] =
    useState("");
  const [
    ConteudoCistosMamaEsquerdoSelect,
    setConteudoCistosMamaEsquerdoSelect,
  ] = useState("");

  const criaStringMultiplosCistosMamaDireito = (
    tamanhoNoduloDireitoInput,
    localizado,
    ConteudoCistosMamaDireitoSelect
  ) => {
    removeMultiplosCistosMamaDireito();

    if (
      tamanhoNoduloDireitoInput !== "" &&
      localizado !== "" &&
      ConteudoCistosMamaDireitoSelect !== ""
    ) {
      var string = `Múltiplos Cistos no Mama direito, o maior conteúdo ${ConteudoCistosMamaDireitoSelect} ${localizado}n medindo ${tamanhoNoduloDireitoInput} mm `;
      setFrasesCistos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistosMamaDireito = () => {
    frasesCistos.map((e) => {
      if (e.includes("Múltiplos Cistos no Mama direito")) {
        var index = frasesCistos.indexOf(e);

        if (index > -1) {
          frasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosMamaDireitoCheckBox) {
      setDisableSelectDireito(false);
      criaStringMultiplosCistosMamaDireito(
        tamanhoCistoMamaDireitoInput,
        posicaoCistosMamaDireitoSelect,
        ConteudoCistosMamaDireitoSelect
      );
    } else {
      setDisableSelectDireito(true);
      removeMultiplosCistosMamaDireito();
      settamanhoCistoMamaDireitoInput("");
      setPosicaoCistosMamaDireitoSelect("");
      setConteudoCistosMamaDireitoSelect("");
    }
  }, [
    multiplosCistosMamaDireitoCheckBox,
    tamanhoCistoMamaDireitoInput,
    posicaoCistosMamaDireitoSelect,
    ConteudoCistosMamaDireitoSelect,
  ]);
  const criaStringMultiplosCistosMamaEsquerdo = (
    tamanhoNoduloEsquerdoInput,
    localizado,
    ConteudoCistosMamaEsquerdoSelect
  ) => {
    removeMultiplosCistosMamaEsquerdo();

    if (
      tamanhoNoduloEsquerdoInput !== "" &&
      localizado !== "" &&
      ConteudoCistosMamaEsquerdoSelect !== ""
    ) {
      var string = `Múltiplos Cistos no Mama esquerdo, o maior conteúdo ${ConteudoCistosMamaEsquerdoSelect} ${localizado}n medindo ${tamanhoNoduloEsquerdoInput} mm `;
      setFrasesCistos((arr) => [...arr, string]);
    }
  };

  const removeMultiplosCistosMamaEsquerdo = () => {
    frasesCistos.map((e) => {
      if (e.includes("Múltiplos Cistos no Mama Esquerdo")) {
        var index = frasesCistos.indexOf(e);

        if (index > -1) {
          frasesCistos.splice(index, 1);
          setFrasesCistos((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (multiplosCistosMamaEsquerdoCheckBox) {
      setDisableSelectEsquerdo(false);
      criaStringMultiplosCistosMamaEsquerdo(
        tamanhoCistoMamaEsquerdoInput,
        posicaoCistosMamaEsquerdoSelect,
        ConteudoCistosMamaEsquerdoSelect
      );
    } else {
      setDisableSelectEsquerdo(true);
      removeMultiplosCistosMamaEsquerdo();
      setTamanhoCistoMamaEsquerdoInput("");
      setPosicaoCistosMamaEsquerdoSelect("");
      setConteudoCistosMamaEsquerdoSelect("");
    }
  }, [
    multiplosCistosMamaEsquerdoCheckBox,
    tamanhoCistoMamaEsquerdoInput,
    posicaoCistosMamaEsquerdoSelect,
    ConteudoCistosMamaEsquerdoSelect,
  ]);

  const subExame = "Cistos";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesCistos).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCistos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCistos
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCistos]);

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
      <TituloNomeExame titulo="Cistos" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Checkbox
            onChange={() =>
              setmultiplosCistosMamaDireitoCheckBox(
                !multiplosCistosMamaDireitoCheckBox
              )
            }
          >
            Múltiplos Cistos no Mama Direito, o maior mede
          </Checkbox>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Select
              w="auto"
              isDisabled={DisableSelectDireito}
              onChange={(e) => {
                setConteudoCistosMamaDireitoSelect(e.target.value);
              }}
              value={ConteudoCistosMamaDireitoSelect}
            >
              <option value="" disabled selected>
                conteúdo
              </option>
              <option value="conteúdo anecóico">conteúdo anecóico</option>
              <option value="conteúdo denso">conteúdo denso</option>
              <option value="cisto complexo">cisto complexo</option>
            </Select>

            <Input
              isDisabled={DisableSelectDireito}
              value={tamanhoCistoMamaDireitoInput}
              w="60px"
              h="77x"
              padding="5px"
              
              textAlign="center"
              onChange={(e) => {
                settamanhoCistoMamaDireitoInput(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableSelectDireito}
              onChange={(e) => {
                setPosicaoCistosMamaDireitoSelect(e.target.value);
              }}
              value={posicaoCistosMamaDireitoSelect}
            >
              <option value="" disabled selected>
                Local
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
          </Box>
          <Checkbox
            onChange={() =>
              setmultiplosCistosMamaEsquerdoCheckBox(
                !multiplosCistosMamaEsquerdoCheckBox
              )
            }
          >
            Múltiplos Cistos no Mama Esquerdo, o maior mede
          </Checkbox>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Select
              w="auto"
              isDisabled={DisableSelectEsquerdo}
              onChange={(e) => {
                setConteudoCistosMamaEsquerdoSelect(e.target.value);
              }}
              value={ConteudoCistosMamaEsquerdoSelect}
            >
              <option value="" disabled selected>
                conteúdo
              </option>
              <option value="conteúdo anecóico">conteúdo anecóico</option>
              <option value="conteúdo denso">conteúdo denso</option>
              <option value="cisto complexo">cisto complexo</option>
            </Select>

            <Input
              isDisabled={DisableSelectEsquerdo}
              value={tamanhoCistoMamaEsquerdoInput}
              w="60px"
              h="77x"
              padding="5px"
              
              textAlign="center"
              onChange={(e) => {
                setTamanhoCistoMamaEsquerdoInput(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={DisableSelectEsquerdo}
              onChange={(e) => {
                setPosicaoCistosMamaEsquerdoSelect(e.target.value);
              }}
              value={posicaoCistosMamaEsquerdoSelect}
            >
              <option value="" disabled selected>
                Local
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
          </Box>

          <Box borderBottom="1px"></Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar Cistos
          </Text>
          <Box gap="25px" display="flex" flexWrap="wrap">
            {Cisto()}
            <Button
              colorScheme="blue"
              onClick={() => {
                setUpdateCisto(true);
              }}
            >
              +1 Nódulo
            </Button>

          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
export default Cisto;
