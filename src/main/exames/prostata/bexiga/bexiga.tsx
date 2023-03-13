import {
    Box,
    Checkbox,
    Flex,
    HStack,
    Input,
    Select,
    Text
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { Format_Laudo } from "../../../component/function_format_laudo";
  import TituloNomeExame from "../../../component/titulo_nome_exame";
  
  function Bexiga() {
    const altura = "100%";
    const largura = "45%";
  
    const [frasesBexiga, setFrasesBexiga] = useState<any>([]);
  
    const [CalcProstataCheckbox, setCalcProstataCheckbox] = useState(false);
    const [disableProstataInput1, setDisableProstataInput1] = useState(true);
    const [medida1CalcProstata, setMedida1CalcProstata] = useState("");
    const [medida2CalcProstata, setMedida2CalcProstata] = useState("");
    const [medida3CalcProstata, setMedida3CalcProstata] = useState("");
  
    const [CalcVolumePosCheckbox, setCalcVolumePosCheckbox] = useState(false);
    const [disableVolumePosInput1, setDisableVolumePosInput1] = useState(true);
    const [medida1CalcVolumePos, setMedida1CalcVolumePos] = useState("");
    const [medida2CalcVolumePos, setMedida2CalcVolumePos] = useState("");
    const [medida3CalcVolumePos, setMedida3CalcVolumePos] = useState("");
  
    const [CalcVolumePreCheckbox, setCalcVolumePreCheckbox] = useState(false);
    const [disableVolumePreInput1, setDisableVolumePreInput1] = useState(true);
    const [medida1CalcVolumePre, setMedida1CalcVolumePre] = useState("");
    const [medida2CalcVolumePre, setMedida2CalcVolumePre] = useState("");
    const [medida3CalcVolumePre, setMedida3CalcVolumePre] = useState("");
  
    const [ProstataEcotexturaCheckBox, setProstataEcotexturaCheckBox] =
      useState(true);
    const [Ecotextura, setEcotextura] = useState("");
    const [Dimensoes, setDimensoes] = useState("");
    const [Textura, setTextura] = useState("");
  
    const [TexturaCheckBox, setTexturaCheckBox] = useState(true);
  
    const [VesiculaCheckBox, setVesiculaCheckBox] = useState(true);
  
    const criaStringCalcProstata = (
      medida1CalcProstata,
      medida2CalcProstata,
      medida3CalcProstata
    ) => {
      removeCalcProstata();
      let dimensao;
      switch (Dimensoes) {
        case "Normais":
          dimensao = `Com configuração cônica característica, apresentando superfície regular e cápsula 	íntegra,medindo  ${medida1CalcProstata} x ${medida2CalcProstata} x ${medida3CalcProstata} cm, em relação aos maiores diâmetros.`;
          break;
        case "Aumentadas":
          dimensao = `Com configuração cônica característica, apresentando superfície bocelada e cápsula aparentemente íntegra, medindo  ${medida1CalcProstata} x ${medida2CalcProstata} x ${medida3CalcProstata} cm, em relação aos maiores diâmetros.`;
          break;
        default:
          break;
      }
  
      let string = `${dimensao}\r\nVolume próstata: ${calculoVolume().toFixed(
        2
      )} cm³.\r\nPeso Aproximado: ${calculoGramas().toFixed(2)} gramas`;
  
      setFrasesBexiga((arr) => [...arr, string]);
    };
  
    const removeCalcProstata = () => {
      frasesBexiga.map((e) => {
        if (e.includes("Com configuração cônica característica")) {
          let index = frasesBexiga.indexOf(e);
  
          if (index > -1) {
            frasesBexiga.splice(index, 1);
            setFrasesBexiga((arr) => [...arr]);
          }
        }
      });
    };
  
    const calculoGramas = () => {
      return calculoVolume() * 1.05;
    };
  
    const calculoVolume = () => {
      return (
        Number(medida1CalcProstata) *
        Number(medida2CalcProstata) *
        Number(medida3CalcProstata) *
        0.52
      );
    };
  
    const criaStringCalcVolumePre = (
      medida1CalcVolumePre,
      medida2CalcVolumePre,
      medida3CalcVolumePre
    ) => {
      removeCalcVolumePre();
  
      if (
        medida1CalcVolumePre != "" &&
        medida2CalcVolumePre != "" &&
        medida3CalcVolumePre != ""
      ) {
        let conta =
          Number(medida1CalcVolumePre) *
          Number(medida2CalcVolumePre) *
          Number(medida3CalcVolumePre) *
          0.52;
        let string = `Volume vesical pré-miccional de: ${conta.toFixed(2)} cm³`;
        setFrasesBexiga((arr) => [...arr, string]);
      }
    };
  
    const removeCalcVolumePre = () => {
      frasesBexiga.map((e) => {
        if (e.includes("Volume vesical pré-miccional de:")) {
          let index = frasesBexiga.indexOf(e);
  
          if (index > -1) {
            frasesBexiga.splice(index, 1);
            setFrasesBexiga((arr) => [...arr]);
          }
        }
      });
    };
  
    const criaStringCalcVolumePos = (
      medida1CalcVolumePos,
      medida2CalcVolumePos,
      medida3CalcVolumePos
    ) => {
      removeCalcVolumePos();
  
      if (
        medida1CalcVolumePos != "" &&
        medida2CalcVolumePos != "" &&
        medida3CalcVolumePos != ""
      ) {
        let conta =
          Number(medida1CalcVolumePos) *
          Number(medida2CalcVolumePos) *
          Number(medida3CalcVolumePos) *
          0.52;
        let string = `Volume residual pós-miccional de: ${conta.toFixed(1)} cm³`;
        setFrasesBexiga((arr) => [...arr, string]);
      }
    };
  
    const removeCalcVolumePos = () => {
      frasesBexiga.map((e) => {
        if (e.includes("Volume residual pós-miccional de:")) {
          let index = frasesBexiga.indexOf(e);
          if (index > -1) {
            frasesBexiga.splice(index, 1);
            setFrasesBexiga((arr) => [...arr]);
          }
        }
      });
    };
  
    const removeEcotextura = () => {
      frasesBexiga.map((e) => {
        if (e.includes("Próstata com ecotextura ")) {
          let index = frasesBexiga.indexOf(e);
          if (index > -1) {
            frasesBexiga.splice(index, 1);
            setFrasesBexiga((arr) => [...arr]);
          }
        }
      });
    };
  
    const removeTextura = () => {
      frasesBexiga.map((e) => {
        if (e.includes("Tecido prostático com textura")) {
          let index = frasesBexiga.indexOf(e);
          if (index > -1) {
            frasesBexiga.splice(index, 1);
            setFrasesBexiga((arr) => [...arr]);
          }
        }
      });
    };
  
    const criaStringProstataEcotextura = () => {
      var string = `Próstata com ecotextura ${Ecotextura}`;
      if (!ProstataEcotexturaCheckBox) {
        setFrasesBexiga((arr) => [...arr, string]);
      } else {
        removeItemString(string);
      }
    };
  
    const criaStringTextura = () => {
      var string = "";
  
      switch (Textura) {
        case "Uniforme":
          string =
            "Tecido prostático com textura uniforme, sem alterações de ecogenicidade.";
          break;
        case "Heterogênea":
          string =
            "Tecido prostático com textura heterogênea, com destaque para calcificações parenquimatosas, traduzidas por imagens ecorrefringentes, produtoras de sombras acústicas.";
          break;
      }
  
      if (!TexturaCheckBox) {
        setFrasesBexiga((arr) => [...arr, string]);
      } else {
        removeItemString(string);
      }
    };
  
    const criaStringVesicula = () => {
      var string =
        "Vesícula Seminais: Bem individualizadas, com curso, configuração, diâmetros e ecotextura compatíveis com o normal.";
  
      setFrasesBexiga((arr) => [...arr, string]);
    };
  
    const removeVesicula = () => {
      frasesBexiga.map((e) => {
        if (e.includes("Vesícula Seminais: Bem individualizadas, ")) {
          let index = frasesBexiga.indexOf(e);
          if (index > -1) {
            frasesBexiga.splice(index, 1);
            setFrasesBexiga((arr) => [...arr]);
          }
        }
      });
    };
  
    const removeItemString = (value) => {
      var index = frasesBexiga.indexOf(value);
  
      if (index > -1) {
        frasesBexiga.splice(index, 1);
        setFrasesBexiga((arr) => [...arr]);
      }
    };
  
    useEffect(() => {
      CalcVolumePosCheckbox
        ? setDisableVolumePosInput1(false)
        : setDisableVolumePosInput1(true);
      removeCalcVolumePos();
      setMedida1CalcVolumePos("");
      setMedida2CalcVolumePos("");
      setMedida3CalcVolumePos("");
    }, [CalcVolumePosCheckbox]);
  
    useEffect(() => {
      CalcProstataCheckbox
        ? setDisableProstataInput1(false)
        : setDisableProstataInput1(true);
      removeCalcProstata();
      setMedida1CalcProstata("");
      setMedida2CalcProstata("");
      setMedida3CalcProstata("");
      setDimensoes("");
    }, [CalcProstataCheckbox]);
  
    useEffect(() => {
      removeEcotextura();
      setEcotextura("");
    }, [ProstataEcotexturaCheckBox]);
  
    useEffect(() => {
      removeTextura();
      setTextura("");
    }, [TexturaCheckBox]);
  
    useEffect(() => {
      if (!VesiculaCheckBox) {
        criaStringVesicula();
      } else {
        removeVesicula();
      }
    }, [VesiculaCheckBox]);
  
    useEffect(() => {
      criaStringCalcVolumePos(
        medida1CalcVolumePos,
        medida2CalcVolumePos,
        medida3CalcVolumePos
      );
    }, [medida1CalcVolumePos, medida2CalcVolumePos, medida3CalcVolumePos]);
  
    useEffect(() => {
      criaStringCalcVolumePre(
        medida1CalcVolumePre,
        medida2CalcVolumePre,
        medida3CalcVolumePre
      );
    }, [medida1CalcVolumePre, medida2CalcVolumePre, medida3CalcVolumePre]);
  
    useEffect(() => {
      if (Ecotextura != "") {
        removeEcotextura();
        criaStringProstataEcotextura();
      }
    }, [Ecotextura]);
  
    useEffect(() => {
      if (Textura != "") {
        removeTextura();
        criaStringTextura();
      }
    }, [Textura]);
  
    useEffect(() => {
      if (
        Dimensoes != "" &&
        medida1CalcProstata != "" &&
        medida2CalcProstata != "" &&
        medida3CalcProstata != ""
      ) {
        removeCalcProstata();
        criaStringCalcProstata(
          medida1CalcProstata,
          medida2CalcProstata,
          medida3CalcProstata
        );
      }
    }, [
      Dimensoes,
      medida1CalcProstata,
      medida2CalcProstata,
      medida3CalcProstata,
    ]);
  
    const subExame = "Bexiga";
    const titulo_exame = "Bexiga";
  
    useEffect(() => {
      if (Object.keys(frasesBexiga).length == 0) {
        new Format_Laudo(
          titulo_exame,
          subExame,
          true,
          frasesBexiga
        ).Format_Laudo_Create_Storage();
      } else {
        new Format_Laudo(
          titulo_exame,
          subExame,
          false,
          frasesBexiga
        ).Format_Laudo_Create_Storage();
      }
    }, [frasesBexiga]);
  
    return (
      <Flex
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding="15px 15px 20px 15px"
        mt="10px"
        direction="column"
        flex={1}
        flexWrap="wrap"
      >
        <TituloNomeExame titulo="Bexiga" />
  
        <Flex gap="15px" flexWrap="wrap" flex={1}>
          <HStack>
            <Checkbox
              whiteSpace="nowrap"
              onChange={(e) => setCalcProstataCheckbox(!CalcProstataCheckbox)}
            >
              Dimensões Prostata
            </Checkbox>
            <Input
              maxLength={2}
              isDisabled={disableProstataInput1}
              w="35px"
              h="30px"
              value={medida1CalcProstata}
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setMedida1CalcProstata(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              maxLength={2}
              isDisabled={disableProstataInput1}
              w="35px"
              h="30px"
              value={medida2CalcProstata}
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setMedida2CalcProstata(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              maxLength={2}
              isDisabled={disableProstataInput1}
              w="35px"
              h="30px"
              value={medida3CalcProstata}
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setMedida3CalcProstata(e.target.value);
              }}
            />
            <Text>cm</Text>
            <Select
              isDisabled={!CalcProstataCheckbox}
              placeholder="Dimensões"
              value={Dimensoes}
              borderColor="black"
              w="28%"
              onChange={(e) => setDimensoes(e.target.value)}
              flexShrink={1}
            >
              <option value="Normais">Normais</option>
              <option value="Aumentadas">Aumentadas</option>
            </Select>
          </HStack>
          <Box gap="15px" display="flex" flexWrap="wrap">
            <HStack>
              <Checkbox
                onChange={(e) => setCalcVolumePreCheckbox(!CalcVolumePreCheckbox)}
              >
                <Text>Volume pré-miccional</Text>
              </Checkbox>
              <Input
                isDisabled={disableVolumePreInput1}
                w="35px"
                h="30px"
                value={medida1CalcVolumePre}
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setMedida1CalcVolumePre(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableVolumePreInput1}
                w="35px"
                h="30px"
                value={medida2CalcVolumePre}
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setMedida2CalcVolumePre(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableVolumePreInput1}
                w="35px"
                h="30px"
                value={medida3CalcVolumePre}
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setMedida3CalcVolumePre(e.target.value);
                }}
              />
            </HStack>
            <Text>cm³</Text>
          </Box>
  
          <Box gap="15px" display="flex" flexWrap="wrap">
            <HStack>
              <Checkbox
                onChange={(e) => setCalcVolumePosCheckbox(!CalcVolumePosCheckbox)}
              >
                Volume pós-miccional
              </Checkbox>
              <Input
                isDisabled={disableVolumePosInput1}
                w="35px"
                h="30px"
                value={medida1CalcVolumePos}
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setMedida1CalcVolumePos(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableVolumePosInput1}
                w="35px"
                h="30px"
                value={medida2CalcVolumePos}
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setMedida2CalcVolumePos(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableVolumePosInput1}
                w="35px"
                h="30px"
                value={medida3CalcVolumePos}
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setMedida3CalcVolumePos(e.target.value);
                }}
              />
            </HStack>
            <Text>cm³</Text>
            <HStack>
              <Checkbox
                onChange={() => {
                  setProstataEcotexturaCheckBox(!ProstataEcotexturaCheckBox);
                }}
              >
                Próstata com ecotextura
              </Checkbox>
  
              <Select
                isDisabled={ProstataEcotexturaCheckBox}
                placeholder="Ecotextura"
                value={Ecotextura}
                borderColor="black"
                w="200px"
                onChange={(e) => setEcotextura(e.target.value)}
              >
                <option value="Homogênea">Homogênea</option>
                <option value="Heterogênea">Heterogênea</option>
              </Select>
            </HStack>
            <HStack>
              <Checkbox
                onChange={() => {
                  setTexturaCheckBox(!TexturaCheckBox);
                }}
              >
                Tecido Prostático
              </Checkbox>
              <Select
                isDisabled={TexturaCheckBox}
                placeholder="Textura"
                value={Textura}
                borderColor="black"
                w="auto"
                onChange={(e) => setTextura(e.target.value)}
                flexShrink={1}
              >
                <option value="Uniforme">Uniforme</option>
                <option value="Heterogênea">Heterogênea</option>
              </Select>
            </HStack>
          </Box>
          <Checkbox
            onChange={() => {
              setVesiculaCheckBox(!VesiculaCheckBox);
            }}
          >
            Vesícula Seminais
          </Checkbox>
        </Flex>
      </Flex>
    );
  }
  export default Bexiga;
  