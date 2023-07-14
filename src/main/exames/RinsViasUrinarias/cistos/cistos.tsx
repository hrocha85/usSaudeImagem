/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Button, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizar_cistos";

function Cisto() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesCisto, setFrasesCisto] = useState<any>([]);
  const [ConclusaoCisto, setConclusaoCisto] = useState<any>([]);
  var ArrayConclusao = ['']

  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateCistos, setUpdateCistos] = useState(false);

  function Cistos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarCistos key={key} numCisto={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCistos) {
      setUpdateCistos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Cistos();
    }
  }, [UpdateCistos]);

  const [tamanhoNoduloDireitoInput, settamanhoNoduloDireitoInput] =
    useState("");
  const [posicaoCistosDireitoSelect, setPosicaoCistosDireitoSelect] =
    useState("");

  const [
    Cisto1RimDireitoCheckBox,
    setCisto1RimDireitoCheckBox,
  ] = useState(false);

  const [tamanhoNoduloEsquerdoInput, settamanhoNoduloEsquerdoInput] = useState("");
  const [posicaoCistosEsquerdoSelect, setPosicaoCistosEsquerdoSelect] = useState("");

  const [Cisto1RimEsquerdoCheckBox, setCisto1RimEsquerdoCheckBox,] = useState(false);


  const criaStringCistoRimDireito = (tamanhoNoduloDireitoInput, localizado) => {
    var string = 'Rim Direito: Notam-se múltiplas imagens anecóicas, arredondadas, de limites precisos e contornos regulares, com reforço acústico posterior bilateralmente, a maior no'
    const conclusao = 'Cistos renais.'
    removeItemConclusao(conclusao)
    removeItemStringSelect(string)
    if (Cisto1RimDireitoCheckBox) {
      if (tamanhoNoduloDireitoInput !== "" && localizado !== "") {
        string = `${string} ${localizado}, medindo ${tamanhoNoduloDireitoInput} mm.`;
        setFrasesCisto((arr) => [...arr, string]);
        setConclusaoCisto((arr) => [...arr, conclusao])
      }
    } else {
      settamanhoNoduloDireitoInput("");
      setPosicaoCistosDireitoSelect("");
    }
  };

  useEffect(() => {
    criaStringCistoRimDireito(tamanhoNoduloDireitoInput, posicaoCistosDireitoSelect);
  }, [
    Cisto1RimDireitoCheckBox,
    posicaoCistosDireitoSelect,
    tamanhoNoduloDireitoInput,
  ]);

  const criaStringCistoRimEsquerdo = (tamanhoNoduloEsquerdoInput, localizado) => {
    var string = 'Rim Esquerdo: Notam-se múltiplas imagens anecóicas, arredondadas, de limites precisos e contornos regulares, com reforço acústico posterior bilateralmente, a maior no'
    const conclusao = 'Cistos renais.'
    removeItemConclusao(conclusao)
    removeItemStringSelect(string)
    if (Cisto1RimEsquerdoCheckBox) {
      if (tamanhoNoduloEsquerdoInput !== "" && localizado !== "") {
        string = `${string} ${localizado}, medindo ${tamanhoNoduloEsquerdoInput} mm.`;
        setFrasesCisto((arr) => [...arr, string]);
        setConclusaoCisto((arr) => [...arr, conclusao])
      }
    } else {
      settamanhoNoduloEsquerdoInput("");
      setPosicaoCistosEsquerdoSelect("");
    }
  };

  useEffect(() => {
    criaStringCistoRimEsquerdo(tamanhoNoduloEsquerdoInput, posicaoCistosEsquerdoSelect);
  }, [
    Cisto1RimEsquerdoCheckBox,
    posicaoCistosEsquerdoSelect,
    tamanhoNoduloEsquerdoInput,
  ]);


  const removeItemStringSelect = (value) => {
    FrasesCisto.map((e) => {
      if (
        e.includes(value)
      ) {
        var index = FrasesCisto.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FrasesCisto.splice(index, 1);
          setFrasesCisto((arr) => [...arr]);
        }
      }
    });
  };


  const removeItemConclusao = (value) => {
    var index = ConclusaoCisto.indexOf(value);

    if (index > -1) {
      ConclusaoCisto.splice(index, 1);
      setConclusaoCisto((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };


  const subExame = "Cistos";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(FrasesCisto).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesCisto,
        ConclusaoCisto
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesCisto,
        ConclusaoCisto
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesCisto]);

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
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={() =>
                setCisto1RimDireitoCheckBox(
                  !Cisto1RimDireitoCheckBox
                )
              }
            >
              Múltiplos Cistos no Rim Direito, o maior mede
            </Checkbox>

            <Input
              isDisabled={!Cisto1RimDireitoCheckBox}
              value={tamanhoNoduloDireitoInput}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => settamanhoNoduloDireitoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!Cisto1RimDireitoCheckBox}
              onChange={(e) => {
                setPosicaoCistosDireitoSelect(e.target.value);
              }}
              value={posicaoCistosDireitoSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso</option>
              <option value="Submucoso">Submucoso</option>
            </Select>
          </Box>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={() =>
                setCisto1RimEsquerdoCheckBox(
                  !Cisto1RimEsquerdoCheckBox
                )
              }
            >
              Múltiplos Cistos no Rim Esquerdo, o maior mede
            </Checkbox>

            <Input
              isDisabled={!Cisto1RimEsquerdoCheckBox}
              value={tamanhoNoduloEsquerdoInput}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => settamanhoNoduloEsquerdoInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!Cisto1RimEsquerdoCheckBox}
              onChange={(e) => {
                setPosicaoCistosEsquerdoSelect(e.target.value);
              }}
              value={posicaoCistosEsquerdoSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso </option>
              <option value="Submucoso">Submucoso</option>
            </Select>
          </Box>


          <Box borderBottom="1px"></Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar Cistos
          </Text>

          <Box gap="10px" display="flex" flexWrap="wrap">
            {Cistos()}
            <Button
              colorScheme="blue"
              onClick={() => {
                setUpdateCistos(true);
              }}
            >
              +1 Cisto
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
export default Cisto;
