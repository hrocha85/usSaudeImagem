/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cisto() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesCisto, setFrasesCisto] = useState<any>([]);
  const [ConclusaoCisto, setConclusaoCisto] = useState<any>([]);
  var ArrayConclusao = ['']

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

  // const [PolicisticoCheckBox, setPolicisticoCheckBox] = useState(false);
  // const [PolicisticoSelect, setPolicisticoSelect] = useState("");

  const criaStringConclusao = () => {
    let conclusao = 'Cistos renais.'
    //  removeConclusao(conclusao)
    if (Cisto1CheckBox || Cisto2CheckBox || Cisto3CheckBox || Cisto4CheckBox || Cisto1RimDireitoCheckBox || Cisto1RimEsquerdoCheckBox) {
      FrasesCisto.map((e) => {
        if (e.includes("Cisto")) {
          //ArrayConclusao.shift()
          setConclusaoCisto((arr) => [...arr, conclusao]);
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
  }, [FrasesCisto])

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

  // const criaStringCistoPolicistico = () => {
  //   var conclusao = 'Litíase Policisticoal à'
  //   var string = 'com formação de sombra acústica posterior, de limites precisos e contornos regulares, medindo'
  //   removeItemConclusaoSelect(conclusao)
  //   removeItemStringSelect(string)
  //   if (PolicisticoCheckBox) {
  //     if (PolicisticoSelect !== "") {
  //       string = `Policistico  ${PolicisticoSelect} apresentando em seu interior imagem hiperecogênica em, ${string}  mm.`;
  //       conclusao = `${conclusao} ${PolicisticoSelect}`
  //       setFrasesCisto((arr) => [...arr, string]);
  //       setConclusaoCisto((arr) => [...arr, conclusao])
  //     }
  //   } else {
  //     setPolicisticoSelect("");

  //   }
  // };

  // useEffect(() => {
  //   criaStringCistoPolicistico();
  // }, [PolicisticoCheckBox, PolicisticoSelect]);

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
  const removeItemConclusaoSelect = (value) => {
    ConclusaoCisto.map((e) => {
      if (
        e.includes(value)
      ) {
        var index = ConclusaoCisto.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoCisto.splice(index, 1);
          setConclusaoCisto((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value)
        }
      }
    });
  };

  const [tamanhoCisto1Input, settamanhoCisto1Input] = useState("");
  const [posicaoCisto1Select, setPosicaoCisto1Select] = useState("");
  const [localizacaoCisto1Select, setlocalizacaoCisto1Select] = useState("");
  const [Cisto1CheckBox, setCisto1CheckBox] = useState(false);

  const [tamanhoCisto2Input, settamanhoCisto2Input] = useState("");
  const [posicaoCisto2Select, setPosicaoCisto2Select] = useState("");
  const [localizacaoCisto2Select, setlocalizacaoCisto2Select] = useState("");
  const [Cisto2CheckBox, setCisto2CheckBox] = useState(false);

  const [tamanhoCisto3Input, settamanhoCisto3Input] = useState("");
  const [posicaoCisto3Select, setPosicaoCisto3Select] = useState("");
  const [localizacaoCisto3Select, setlocalizacaoCisto3Select] = useState("");
  const [Cisto3CheckBox, setCisto3CheckBox] = useState(false);

  const [tamanhoCisto4Input, settamanhoCisto4Input] = useState("");
  const [posicaoCisto4Select, setPosicaoCisto4Select] = useState("");
  const [localizacaoCisto4Select, setlocalizacaoCisto4Select] = useState("");
  const [Cisto4CheckBox, setCisto4CheckBox] = useState(false);


  const criaStringCisto = () => {
    let conclusao = 'Cisto renal.'
    var string = 'Nota-se imagem anecóica, arredondada, de limites precisos e contornos regulares, com reforço acústico posterior:'
    removeCisto(string);
    removeItemConclusao(conclusao)
    if (Cisto1CheckBox || Cisto2CheckBox || Cisto3CheckBox || Cisto4CheckBox) {
      if (Cisto1CheckBox) {
        if (tamanhoCisto1Input !== "" && posicaoCisto1Select !== "" && localizacaoCisto1Select !== "") {
          string = `${string} \n ${localizacaoCisto4Select}-  ${posicaoCisto1Select}, medindo ${tamanhoCisto1Input} mm.`;
        }
      } else {
        settamanhoCisto1Input("");
        setPosicaoCisto1Select("");
        setlocalizacaoCisto1Select("");
      }
      if (Cisto2CheckBox) {
        if (tamanhoCisto2Input !== "" && posicaoCisto2Select !== "" && localizacaoCisto2Select !== "") {
          string = `${string} \n ${localizacaoCisto4Select}-  ${posicaoCisto2Select}, medindo ${tamanhoCisto2Input} mm.`;
        }
      } else {
        settamanhoCisto2Input("");
        setPosicaoCisto2Select("");
        setlocalizacaoCisto2Select("");
      }
      if (Cisto3CheckBox) {
        if (tamanhoCisto3Input !== "" && posicaoCisto3Select !== "" && localizacaoCisto3Select !== "") {
          string = `${string} \n ${localizacaoCisto4Select}-  ${posicaoCisto3Select}, medindo ${tamanhoCisto3Input} mm.`;
        }
      } else {
        settamanhoCisto3Input("");
        setPosicaoCisto3Select("");
        setlocalizacaoCisto3Select("");
      }
      if (Cisto4CheckBox) {
        if (tamanhoCisto4Input !== "" && posicaoCisto4Select !== "" && localizacaoCisto4Select !== "") {
          string = `${string} \n ${localizacaoCisto4Select}-  ${posicaoCisto4Select}, medindo ${tamanhoCisto4Input} mm.`;
        }
      } else {
        settamanhoCisto4Input("");
        setPosicaoCisto4Select("");
        setlocalizacaoCisto4Select("");
      }
      setFrasesCisto((arr) => [...arr, string]);
      setConclusaoCisto((arr) => [...arr, conclusao]);
    }
  };


  useEffect(() => {
    criaStringCisto()
  }, [Cisto1CheckBox, posicaoCisto1Select, tamanhoCisto1Input, localizacaoCisto1Select,
    Cisto2CheckBox, posicaoCisto2Select, tamanhoCisto2Input, localizacaoCisto2Select,
    Cisto3CheckBox, posicaoCisto3Select, tamanhoCisto3Input, localizacaoCisto3Select,
    Cisto4CheckBox, posicaoCisto4Select, tamanhoCisto4Input, localizacaoCisto4Select]);



  const removeCisto = (value) => {
    FrasesCisto.map((e) => {
      if (e.includes(value)) {
        var index = FrasesCisto.indexOf(e);

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
          {/* <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox onChange={() => setPolicisticoCheckBox(!PolicisticoCheckBox)}>
              Rim policistico
            </Checkbox>
            <Select
              w="auto"
              isDisabled={!PolicisticoCheckBox}
              onChange={(e) => {
                setPolicisticoSelect(e.target.value);
              }}
              value={PolicisticoSelect}
            >
              <option value="" disabled selected>
                Posição
              </option>
              <option value="rim direito">Rim direito</option>
              <option value="rim esquerdo">Rim esquerdo </option>
              <option value="bilateralmente">Bilateralmente</option>
            </Select>
          </Box> */}

          <Box borderBottom="1px"></Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar Cistos
          </Text>
          <HStack>
            <Checkbox
              onChange={() =>
                setCisto1CheckBox(!Cisto1CheckBox)
              }
            >
              Cisto 1
            </Checkbox>

            <Input
              isDisabled={!Cisto1CheckBox}
              value={tamanhoCisto1Input}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                settamanhoCisto1Input(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!Cisto1CheckBox}
              onChange={(e) => {
                setPosicaoCisto1Select(e.target.value);
              }}
              value={posicaoCisto1Select}
            >
              <option value="" disabled selected>
                no
              </option>
              <option value="terço superior">terço superior</option>
              <option value="terço médio">terço médio </option>
              <option value="terço inferior">terço inferior</option>
            </Select>

            <Select
              w="auto"
              isDisabled={!Cisto1CheckBox}
              onChange={(e) => {
                setlocalizacaoCisto1Select(e.target.value);
              }}
              value={localizacaoCisto1Select}
            >
              <option value="" disabled selected>
                do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim esquerdo</option>
            </Select>
          </HStack>
          <HStack>
            <Checkbox
              onChange={() =>
                setCisto2CheckBox(!Cisto2CheckBox)
              }
            >
              Cisto 2
            </Checkbox>

            <Input
              isDisabled={!Cisto2CheckBox}
              value={tamanhoCisto2Input}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                settamanhoCisto2Input(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!Cisto2CheckBox}
              onChange={(e) => {
                setPosicaoCisto2Select(e.target.value);
              }}
              value={posicaoCisto2Select}
            >
              <option value="" disabled selected>
                no
              </option>
              <option value="terço superior">terço superior</option>
              <option value="terço médio">terço médio </option>
              <option value="terço inferior">terço inferior</option>
            </Select>

            <Select
              w="auto"
              isDisabled={!Cisto2CheckBox}
              onChange={(e) => {
                setlocalizacaoCisto2Select(e.target.value);
              }}
              value={localizacaoCisto2Select}
            >
              <option value="" disabled selected>
                do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim esquerdo</option>
            </Select>
          </HStack>
          <HStack>
            <Checkbox
              onChange={() =>
                setCisto3CheckBox(!Cisto3CheckBox)
              }
            >
              Cisto 3
            </Checkbox>

            <Input
              isDisabled={!Cisto3CheckBox}
              value={tamanhoCisto3Input}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                settamanhoCisto3Input(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!Cisto3CheckBox}
              onChange={(e) => {
                setPosicaoCisto3Select(e.target.value);
              }}
              value={posicaoCisto3Select}
            >
              <option value="" disabled selected>
                no
              </option>
              <option value="terço superior">terço superior</option>
              <option value="terço médio">terço médio </option>
              <option value="terço inferior">terço inferior</option>
            </Select>

            <Select
              w="auto"
              isDisabled={!Cisto3CheckBox}
              onChange={(e) => {
                setlocalizacaoCisto3Select(e.target.value);
              }}
              value={localizacaoCisto3Select}
            >
              <option value="" disabled selected>
                do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim esquerdo</option>
            </Select>
          </HStack>
          <HStack>
            <Checkbox
              onChange={() =>
                setCisto4CheckBox(!Cisto4CheckBox)
              }
            >
              Cisto 4
            </Checkbox>

            <Input
              isDisabled={!Cisto4CheckBox}
              value={tamanhoCisto4Input}
              w="60px"
              h="77x"
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                settamanhoCisto4Input(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Select
              w="auto"
              isDisabled={!Cisto4CheckBox}
              onChange={(e) => {
                setPosicaoCisto4Select(e.target.value);
              }}
              value={posicaoCisto4Select}
            >
              <option value="" disabled selected>
                no
              </option>
              <option value="terço superior">terço superior</option>
              <option value="terço médio">terço médio </option>
              <option value="terço inferior">terço inferior</option>
            </Select>

            <Select
              w="auto"
              isDisabled={!Cisto4CheckBox}
              onChange={(e) => {
                setlocalizacaoCisto4Select(e.target.value);
              }}
              value={localizacaoCisto4Select}
            >
              <option value="" disabled selected>
                do
              </option>
              <option value="Rim direito">Rim direito</option>
              <option value="Rim esquerdo">Rim esquerdo</option>
            </Select>
          </HStack>

        </Stack>
      </Box>
    </Box>
  );
}
export default Cisto;
