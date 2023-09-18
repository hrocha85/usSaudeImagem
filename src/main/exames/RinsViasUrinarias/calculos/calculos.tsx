
/* eslint-disable array-callback-return */
import { Box, Button, Checkbox, HStack, Input, Select, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCalculos from "./individualizar_calculos";

function Calculo() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [FrasesCalc, setFrasesCalc] = useState<any>([]);
  const [ConclusaoCalc, setConclusaoCalc] = useState<any>([]);
  const ArrayConclusao = ['']

  const [tamanhoNoduloDireitoInput, settamanhoNoduloDireitoInput] =
    useState("");
  const [posicaoCalculosDireitoSelect, setPosicaoCalculosDireitoSelect] =
    useState("");

  const [
    Calculo1RimDireitoCheckBox,
    setCalculo1RimDireitoCheckBox,
  ] = useState(false);

  const [tamanhoNoduloEsquerdoInput, settamanhoNoduloEsquerdoInput] =
    useState("");
  const [posicaoCalculosEsquerdoSelect, setPosicaoCalculosEsquerdoSelect] =
    useState("");

  const [
    Calculo1RimEsquerdoCheckBox,
    setCalculo1RimEsquerdoCheckBox,
  ] = useState(false);

  const [UreterCheckBox, setUreterCheckBox] = useState(false);
  const [UreterSelect, setUreterSelect] = useState("");
  const [posicaoUreterSelect, setPosicaoUreterSelect] = useState("");
  const [tamanhoUreterInput, setTamanhoUreterInput] = useState("");

  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateCalculos, setUpdateCalculos] = useState(false);

  function Calculos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarCalculos key={key} numCalculo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCalculos) {
      setUpdateCalculos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Calculos();
    }
  }, [UpdateCalculos]);

  const criaStringConclusao = () => {
    const conclusao = 'Litíase renal.'
    //  removeConclusao(conclusao)
    if (Calculo1CheckBox || Calculo2CheckBox || Calculo3CheckBox || Calculo4CheckBox || Calculo1RimDireitoCheckBox || Calculo1RimEsquerdoCheckBox) {
      FrasesCalc.map((e) => {
        if (e.includes("Cálculo")) {
          //ArrayConclusao.shift()
          setConclusaoCalc((arr) => [...arr, conclusao]);
          ArrayConclusao.push(conclusao)

        }
      });
    } else {
      ArrayConclusao.shift()
      removeItemConclusao(conclusao)
    }
  }

  useEffect(() => {
    criaStringConclusao()
  }, [FrasesCalc])

  const criaStringCalculo1RimDireito = (tamanhoNoduloDireitoInput, localizado) => {
    let string = 'Rim Direito: Sistema pielo-calicial apresentando  múltiplas imagens hiperecogênicas, com formação de sombra acústica posterior, limites precisos e contornos regulares, a maior em'
    const conclusao = 'Litíase renal.'
    removeItemConclusao(conclusao)
    removeItemStringSelect(string)
    if (Calculo1RimDireitoCheckBox) {
      if (tamanhoNoduloDireitoInput !== "" && localizado !== "") {
        string = `${string} ${localizado}, medindo ${tamanhoNoduloDireitoInput} mm.`;
        setFrasesCalc((arr) => [...arr, string]);
        setConclusaoCalc((arr) => [...arr, conclusao])
      }
    } else {
      settamanhoNoduloDireitoInput("");
      setPosicaoCalculosDireitoSelect("");
    }
  };

  useEffect(() => {
    criaStringCalculo1RimDireito(tamanhoNoduloDireitoInput, posicaoCalculosDireitoSelect);
  }, [
    Calculo1RimDireitoCheckBox,
    posicaoCalculosDireitoSelect,
    tamanhoNoduloDireitoInput,
  ]);


  const criaStringCalculo1RimEsquerdo = (tamanhoNoduloEsquerdoInput, localizado) => {
    let string = 'Rim Esquerdo: Sistema pielo-calicial apresentando  múltiplas imagens hiperecogênicas, com formação de sombra acústica posterior, limites precisos e contornos regulares, a maior em'
    const conclusao = 'Litíase renal.'
    removeItemConclusao(conclusao)
    removeItemStringSelect(string)
    if (Calculo1RimEsquerdoCheckBox) {
      if (tamanhoNoduloEsquerdoInput !== "" && localizado !== "") {
        string = `${string} ${localizado}, medindo ${tamanhoNoduloEsquerdoInput} mm.`;
        setFrasesCalc((arr) => [...arr, string]);
        setConclusaoCalc((arr) => [...arr, conclusao])
      }
    } else {
      settamanhoNoduloEsquerdoInput("");
      setPosicaoCalculosEsquerdoSelect("");
    }
  };

  useEffect(() => {
    criaStringCalculo1RimEsquerdo(tamanhoNoduloEsquerdoInput, posicaoCalculosEsquerdoSelect);
  }, [
    Calculo1RimEsquerdoCheckBox,
    posicaoCalculosEsquerdoSelect,
    tamanhoNoduloEsquerdoInput,
  ]);

  const criaStringCalculoUretal = (UreterSelect, posicaoUreterSelect, tamanhoUreterInput) => {
    let conclusao = 'Litíase ureteral à'
    let string = 'com formação de sombra acústica posterior, de limites precisos e contornos regulares, medindo'
    removeItemConclusaoSelect(conclusao)
    removeItemStringSelect(string)
    if (UreterCheckBox) {
      if (UreterSelect !== "" && posicaoUreterSelect !== "" && tamanhoUreterInput !== "") {
        string = `Ureter  ${UreterSelect} apresentando em seu interior imagem hiperecogênica em ${posicaoUreterSelect}, ${string} ${tamanhoUreterInput} mm.`;
        conclusao = `${conclusao} ${UreterSelect}`
        setFrasesCalc((arr) => [...arr, string]);
        setConclusaoCalc((arr) => [...arr, conclusao])
      }
    } else {
      setUreterSelect("");
      setPosicaoUreterSelect("");
      setTamanhoUreterInput("");
    }
  };

  useEffect(() => {
    criaStringCalculoUretal(
      UreterSelect,
      posicaoUreterSelect,
      tamanhoUreterInput
    );
  }, [UreterCheckBox, UreterSelect, posicaoUreterSelect, tamanhoUreterInput]);
  const removeItemStringSelect = (value) => {
    FrasesCalc.map((e) => {
      if (
        e.includes(value)
      ) {
        const index = FrasesCalc.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FrasesCalc.splice(index, 1);
          setFrasesCalc((arr) => [...arr]);
        }
      }
    });
  };
  const removeItemConclusaoSelect = (value) => {
    ConclusaoCalc.map((e) => {
      if (
        e.includes(value)
      ) {
        const index = ConclusaoCalc.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoCalc.splice(index, 1);
          setConclusaoCalc((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value)
        }
      }
    });
  };

  const [tamanhoCalculo1Input, settamanhoCalculo1Input] = useState("");
  const [posicaoCalculo1Select, setPosicaoCalculo1Select] = useState("");
  const [localizacaoCalculo1Select, setlocalizacaoCalculo1Select] = useState("");
  const [Calculo1CheckBox, setCalculo1CheckBox] = useState(false);

  const [tamanhoCalculo2Input, settamanhoCalculo2Input] = useState("");
  const [posicaoCalculo2Select, setPosicaoCalculo2Select] = useState("");
  const [localizacaoCalculo2Select, setlocalizacaoCalculo2Select] = useState("");
  const [Calculo2CheckBox, setCalculo2CheckBox] = useState(false);

  const [tamanhoCalculo3Input, settamanhoCalculo3Input] = useState("");
  const [posicaoCalculo3Select, setPosicaoCalculo3Select] = useState("");
  const [localizacaoCalculo3Select, setlocalizacaoCalculo3Select] = useState("");
  const [Calculo3CheckBox, setCalculo3CheckBox] = useState(false);

  const [tamanhoCalculo4Input, settamanhoCalculo4Input] = useState("");
  const [posicaoCalculo4Select, setPosicaoCalculo4Select] = useState("");
  const [localizacaoCalculo4Select, setlocalizacaoCalculo4Select] = useState("");
  const [Calculo4CheckBox, setCalculo4CheckBox] = useState(false);

  const criaStringCalculo = () => {
    const conclusao = 'Litíase renal.'
    let string = 'Presença de imagem hiperecogênica, com formação de sombra acústica posterior, de limites precisos e contornos regulares:'
    removeCalculo(string);
    removeItemConclusao(conclusao)
    if (Calculo1CheckBox || Calculo2CheckBox || Calculo3CheckBox || Calculo4CheckBox) {
      if (Calculo1CheckBox) {
        if (tamanhoCalculo1Input !== "" && posicaoCalculo1Select !== "" && localizacaoCalculo1Select !== "") {
          string = `${string} \n ${localizacaoCalculo4Select}-  ${posicaoCalculo1Select}, medindo ${tamanhoCalculo1Input} mm.`;
        }
      } else {
        settamanhoCalculo1Input("");
        setPosicaoCalculo1Select("");
        setlocalizacaoCalculo1Select("");
      }
      if (Calculo2CheckBox) {
        if (tamanhoCalculo2Input !== "" && posicaoCalculo2Select !== "" && localizacaoCalculo2Select !== "") {
          string = `${string} \n ${localizacaoCalculo4Select}-  ${posicaoCalculo2Select}, medindo ${tamanhoCalculo2Input} mm.`;
        }
      } else {
        settamanhoCalculo2Input("");
        setPosicaoCalculo2Select("");
        setlocalizacaoCalculo2Select("");
      }
      if (Calculo3CheckBox) {
        if (tamanhoCalculo3Input !== "" && posicaoCalculo3Select !== "" && localizacaoCalculo3Select !== "") {
          string = `${string} \n ${localizacaoCalculo4Select}-  ${posicaoCalculo3Select}, medindo ${tamanhoCalculo3Input} mm.`;
        }
      } else {
        settamanhoCalculo3Input("");
        setPosicaoCalculo3Select("");
        setlocalizacaoCalculo3Select("");
      }
      if (Calculo4CheckBox) {
        if (tamanhoCalculo4Input !== "" && posicaoCalculo4Select !== "" && localizacaoCalculo4Select !== "") {
          string = `${string} \n ${localizacaoCalculo4Select}-  ${posicaoCalculo4Select}, medindo ${tamanhoCalculo4Input} mm.`;
        }
      } else {
        settamanhoCalculo4Input("");
        setPosicaoCalculo4Select("");
        setlocalizacaoCalculo4Select("");
      }
      setFrasesCalc((arr) => [...arr, string]);
      setConclusaoCalc((arr) => [...arr, conclusao]);
    }
  };


  useEffect(() => {
    criaStringCalculo()
  }, [Calculo1CheckBox, posicaoCalculo1Select, tamanhoCalculo1Input, localizacaoCalculo1Select,
    Calculo2CheckBox, posicaoCalculo2Select, tamanhoCalculo2Input, localizacaoCalculo2Select,
    Calculo3CheckBox, posicaoCalculo3Select, tamanhoCalculo3Input, localizacaoCalculo3Select,
    Calculo4CheckBox, posicaoCalculo4Select, tamanhoCalculo4Input, localizacaoCalculo4Select]);


  const removeCalculo = (value) => {
    FrasesCalc.map((e) => {
      if (e.includes(value)) {
        const index = FrasesCalc.indexOf(e);

        if (index > -1) {
          FrasesCalc.splice(index, 1);
          setFrasesCalc((arr) => [...arr]);
        }
      }
    });
  };
  const removeItemConclusao = (value) => {
    const index = ConclusaoCalc.indexOf(value);

    if (index > -1) {
      ConclusaoCalc.splice(index, 1);
      setConclusaoCalc((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };


  const subExame = "Cálculos";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(FrasesCalc).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesCalc,
        ConclusaoCalc
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesCalc,
        ConclusaoCalc
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesCalc]);

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
      <TituloNomeExame titulo="Calculos" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={() =>
                setCalculo1RimDireitoCheckBox(
                  !Calculo1RimDireitoCheckBox
                )
              }
            >
              Múltiplos calculos no Rim Direito, o maior mede
            </Checkbox>

            <Input
              isDisabled={!Calculo1RimDireitoCheckBox}
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
              isDisabled={!Calculo1RimDireitoCheckBox}
              onChange={(e) => {
                setPosicaoCalculosDireitoSelect(e.target.value);
              }}
              value={posicaoCalculosDireitoSelect}
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
                setCalculo1RimEsquerdoCheckBox(
                  !Calculo1RimEsquerdoCheckBox
                )
              }
            >
              Múltiplos calculos no Rim Esquerdo, o maior mede
            </Checkbox>

            <Input
              isDisabled={!Calculo1RimEsquerdoCheckBox}
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
              isDisabled={!Calculo1RimEsquerdoCheckBox}
              onChange={(e) => {
                setPosicaoCalculosEsquerdoSelect(e.target.value);
              }}
              value={posicaoCalculosEsquerdoSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso </option>
              <option value="Submucoso">Submucoso</option>
            </Select>
          </Box>
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox onChange={() => setUreterCheckBox(!UreterCheckBox)}>
              Cálculo Uretal mede
            </Checkbox>

            <Input
              isDisabled={!UreterCheckBox}
              value={tamanhoUreterInput}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => setTamanhoUreterInput(e.target.value)}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!UreterCheckBox}
              onChange={(e) => {
                setPosicaoUreterSelect(e.target.value);
              }}
              value={posicaoUreterSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="Intramural">Intramural</option>
              <option value="Subseroso">Subseroso </option>
              <option value="Submucoso">Submucoso</option>
            </Select>

            <Select
              w="auto"
              isDisabled={!UreterCheckBox}
              onChange={(e) => {
                setUreterSelect(e.target.value);
              }}
              value={UreterSelect}
            >
              <option value="" disabled selected>
                do Ureter
              </option>
              <option value="Direito">Direito</option>
              <option value="Esquerdo">Esquerdo </option>
            </Select>
          </Box>

          <Box borderBottom="1px"></Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar calculos
          </Text>

          <Stack>
            <Box gap="10px" display="flex" flexWrap="wrap">
              {Calculos()}
              <Button
                colorScheme="blue"
                onClick={() => {
                  setUpdateCalculos(true);
                }}
              >
                +1 Cálculo
              </Button>
            </Box>

          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Calculo;
