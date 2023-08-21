
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Input,
  Select,
  Text, useMediaQuery
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CalculoProstata() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [frasesProstata, setFrasesProstata] = useState<any>([]);

  const [CalcProstataCheckbox, setCalcProstataCheckbox] = useState(false);
  const [disableProstataInput1, setDisableProstataInput1] = useState(true);
  const [medida1CalcProstata, setMedida1CalcProstata] = useState("");
  const [medida2CalcProstata, setMedida2CalcProstata] = useState("");
  const [medida3CalcProstata, setMedida3CalcProstata] = useState("");
  const [VolumeCalcProstata, setVolumeCalcProstata] = useState("");
  const [PesoCalcProstata, setPesoCalcProstata] = useState("");

  const [CalcVolumePosCheckbox, setCalcVolumePosCheckbox] = useState(false);
  const [disableVolumePosInput1, setDisableVolumePosInput1] = useState(true);
  const [medida1CalcVolumePos, setMedida1CalcVolumePos] = useState("");
  const [medida2CalcVolumePos, setMedida2CalcVolumePos] = useState("");
  const [medida3CalcVolumePos, setMedida3CalcVolumePos] = useState("");
  const [VolumeCalcVolumePos, setVolumeCalcVolumePos] = useState("");
  const [PesoCalcVolumePos, setPesoCalcVolumePos] = useState("");

  const [CalcVolumePreCheckbox, setCalcVolumePreCheckbox] = useState(false);
  const [disableVolumePreInput1, setDisableVolumePreInput1] = useState(true);
  const [medida1CalcVolumePre, setMedida1CalcVolumePre] = useState("");
  const [medida2CalcVolumePre, setMedida2CalcVolumePre] = useState("");
  const [medida3CalcVolumePre, setMedida3CalcVolumePre] = useState("");
  const [VolumeCalcVolumePre, setVolumeCalcVolumePre] = useState("");
  const [PesoCalcVolumePre, setPesoCalcVolumePre] = useState("");

  const [ProstataEcotexturaCheckBox, setProstataEcotexturaCheckBox] =
    useState(true);
  const [Ecotextura, setEcotextura] = useState("");
  const [Dimensoes, setDimensoes] = useState("");
  const [Textura, setTextura] = useState("");

  const [TexturaCheckBox, setTexturaCheckBox] = useState(true);

  const [VesiculaCheckBox, setVesiculaCheckBox] = useState(true);

  const criaStringCalcProstata = (medida1CalcProstata, medida2CalcProstata, medida3CalcProstata) => {
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

    const string = `${dimensao}\r\nVolume próstata: ${calculoVolume().toFixed(
      2
    )} cm³.\r\nPeso Aproximado: ${calculoGramas().toFixed(2)} gramas`;

    setFrasesProstata((arr) => [...arr, string]);
  };

  const removeCalcProstata = () => {
    frasesProstata.map((e) => {
      if (e.includes("Com configuração cônica característica")) {
        const index = frasesProstata.indexOf(e);

        if (index > -1) {
          frasesProstata.splice(index, 1);
          setFrasesProstata((arr) => [...arr]);
        }
      }
    });
  };

  const calculoGramas = () => {
    return calculoVolume() * 1.05;
  };

  const calculoVolume = () => {
    const medida1STR: string = medida1CalcProstata.toString().replace(',', '.');
    const medida1: number = parseFloat(medida1STR);
    const medida2STR: string = medida2CalcProstata.toString().replace(',', '.');
    const medida2: number = parseFloat(medida2STR);
    const medida3STR: string = medida3CalcProstata.toString().replace(',', '.');
    const medida3: number = parseFloat(medida3STR);
    return (
      Number(medida1) * Number(medida2) * Number(medida3) * 0.52
    );
  };

  const criaStringCalcVolumePre = (medida1CalcVolumePre, medida2CalcVolumePre, medida3CalcVolumePre) => {
    removeCalcVolumePre();
    const medida1STR: string = medida1CalcVolumePre.toString().replace(',', '.');
    const medida1: number = parseFloat(medida1STR);
    const medida2STR: string = medida2CalcVolumePre.toString().replace(',', '.');
    const medida2: number = parseFloat(medida2STR);
    const medida3STR: string = medida3CalcVolumePre.toString().replace(',', '.');
    const medida3: number = parseFloat(medida3STR);
    if (CalcVolumePreCheckbox) {
      if (medida1CalcVolumePre != "" && medida2CalcVolumePre != "" && medida3CalcVolumePre != "") {
        const conta = Number(medida1) * Number(medida2) * Number(medida3) * 0.52;
        const string = `Volume vesical pré-miccional de: ${conta.toFixed(2)} cm³`;
        setFrasesProstata((arr) => [...arr, string]);
      }
    } else {
      setMedida1CalcVolumePre('')
      setMedida2CalcVolumePre('')
      setMedida3CalcVolumePre('')
    }
  };

  const removeCalcVolumePre = () => {
    frasesProstata.map((e) => {
      if (e.includes("Volume vesical pré-miccional de:")) {
        const index = frasesProstata.indexOf(e);

        if (index > -1) {
          frasesProstata.splice(index, 1);
          setFrasesProstata((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringCalcVolumePos = (medida1CalcVolumePos, medida2CalcVolumePos, medida3CalcVolumePos) => {
    removeCalcVolumePos();
    const medida1STR: string = medida1CalcVolumePos.toString().replace(',', '.');
    const medida1: number = parseFloat(medida1STR);
    const medida2STR: string = medida2CalcVolumePos.toString().replace(',', '.');
    const medida2: number = parseFloat(medida2STR);
    const medida3STR: string = medida3CalcVolumePos.toString().replace(',', '.');
    const medida3: number = parseFloat(medida3STR);
    if (
      medida1CalcVolumePos != "" && medida2CalcVolumePos != "" && medida3CalcVolumePos != "") {
      const conta = Number(medida1) * Number(medida2) * Number(medida3) * 0.52;
      const string = `Volume residual pós-miccional de: ${conta.toFixed(1)} cm³`;
      setFrasesProstata((arr) => [...arr, string]);
    }
  };

  const removeCalcVolumePos = () => {
    frasesProstata.map((e) => {
      if (e.includes("Volume residual pós-miccional de:")) {
        const index = frasesProstata.indexOf(e);
        if (index > -1) {
          frasesProstata.splice(index, 1);
          setFrasesProstata((arr) => [...arr]);
        }
      }
    });
  };

  const removeEcotextura = () => {
    frasesProstata.map((e) => {
      if (e.includes("Próstata com ecotextura ")) {
        const index = frasesProstata.indexOf(e);
        if (index > -1) {
          frasesProstata.splice(index, 1);
          setFrasesProstata((arr) => [...arr]);
        }
      }
    });
  };

  const removeTextura = () => {
    frasesProstata.map((e) => {
      if (e.includes("Tecido prostático com textura")) {
        const index = frasesProstata.indexOf(e);
        if (index > -1) {
          frasesProstata.splice(index, 1);
          setFrasesProstata((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringProstataEcotextura = () => {
    const string = `Próstata com ecotextura ${Ecotextura}`;
    if (!ProstataEcotexturaCheckBox) {
      setFrasesProstata((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringTextura = () => {
    let string = "";

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
      setFrasesProstata((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringVesicula = () => {
    const string =
      "Vesícula Seminais: Bem individualizadas, com curso, configuração, diâmetros e ecotextura compatíveis com o normal.";

    setFrasesProstata((arr) => [...arr, string]);
  };

  const removeVesicula = () => {
    frasesProstata.map((e) => {
      if (e.includes("Vesícula Seminais: Bem individualizadas, ")) {
        const index = frasesProstata.indexOf(e);
        if (index > -1) {
          frasesProstata.splice(index, 1);
          setFrasesProstata((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    const index = frasesProstata.indexOf(value);

    if (index > -1) {
      frasesProstata.splice(index, 1);
      setFrasesProstata((arr) => [...arr]);
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
    const conta = Number(medida1CalcVolumePos) * Number(medida2CalcVolumePos) * Number(medida3CalcVolumePos) * 0.52;
    setVolumeCalcVolumePos(conta.toFixed(2))
    criaStringCalcVolumePos(
      medida1CalcVolumePos,
      medida2CalcVolumePos,
      medida3CalcVolumePos
    );
  }, [medida1CalcVolumePos, medida2CalcVolumePos, medida3CalcVolumePos]);

  useEffect(() => {
    const conta = Number(medida1CalcVolumePre) * Number(medida2CalcVolumePre) * Number(medida3CalcVolumePre) * 0.52;
    setVolumeCalcVolumePre(conta.toFixed(2))
    criaStringCalcVolumePre(
      medida1CalcVolumePre,
      medida2CalcVolumePre,
      medida3CalcVolumePre
    );
  }, [CalcVolumePreCheckbox, medida1CalcVolumePre, medida2CalcVolumePre, medida3CalcVolumePre]);

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
    setVolumeCalcProstata(calculoVolume().toFixed(2))
    setPesoCalcProstata(calculoGramas().toFixed(2))
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

  const subExame = "Próstata";
  const titulo_exame = "Próstata";

  useEffect(() => {
    if (Object.keys(frasesProstata).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesProstata
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesProstata
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesProstata]);

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
      <TituloNomeExame titulo="Próstata" />

      <Flex gap="15px" flexWrap="wrap" flex={1}>
        <HStack flexWrap="wrap">
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
        <HStack flexWrap="wrap">
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
        <HStack flexWrap="wrap">
          <Checkbox
            whiteSpace="nowrap"
            onChange={(e) => setCalcProstataCheckbox(!CalcProstataCheckbox)}
          >
            Dimensões Prostata
          </Checkbox>
          <Input

            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={medida1CalcProstata}
            padding="0px"
            textAlign="center"
            onChange={(e) => {
              setMedida1CalcProstata(e.target.value);
            }}
          />
          <Text>x</Text>
          <Input

            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={medida2CalcProstata}
            padding="0px"
            textAlign="center"
            onChange={(e) => {
              setMedida2CalcProstata(e.target.value);
            }}
          />
          <Text>x</Text>
          <Input

            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={medida3CalcProstata}
            padding="0px"
            textAlign="center"
            onChange={(e) => {
              setMedida3CalcProstata(e.target.value);
            }}
          />
          <Text>cm³</Text>
          <Text>vol</Text>
          <Input
            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={VolumeCalcProstata}
            padding="0px"
            textAlign="center"
          />
          <Text>peso</Text>
          <Input
            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={PesoCalcProstata}
            padding="0px"
            textAlign="center"
          />
          <Select
            isDisabled={!CalcProstataCheckbox}
            placeholder="Dimensões"
            value={Dimensoes}
            borderColor="black"
            w="27%"
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
              isDisabled={!CalcVolumePreCheckbox}
              w="35px"
              h="30px"
              value={medida1CalcVolumePre}
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setMedida1CalcVolumePre(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={!CalcVolumePreCheckbox}
              w="35px"
              h="30px"
              value={medida2CalcVolumePre}
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setMedida2CalcVolumePre(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={!CalcVolumePreCheckbox}
              w="35px"
              h="30px"
              value={medida3CalcVolumePre}
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setMedida3CalcVolumePre(e.target.value);
              }}
            />
          </HStack>
          <Text>cm³</Text>
          <Text>vol</Text>
          <Input
            isDisabled={!CalcVolumePreCheckbox}
            w="35px"
            h="30px"
            value={VolumeCalcVolumePre}
            padding="0px"
            textAlign="center"
          />
        </Box>

        <Box gap="15px" display="flex" flexWrap="wrap">
          <HStack>
            <Checkbox
              onChange={(e) => setCalcVolumePosCheckbox(!CalcVolumePosCheckbox)}
            >
              Volume pós-miccional
            </Checkbox>
            <Input
              isDisabled={!CalcVolumePosCheckbox}
              w="35px"
              h="30px"
              value={medida1CalcVolumePos}
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setMedida1CalcVolumePos(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={!CalcVolumePosCheckbox}
              w="35px"
              h="30px"
              value={medida2CalcVolumePos}
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setMedida2CalcVolumePos(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={!CalcVolumePosCheckbox}
              w="35px"
              h="30px"
              value={medida3CalcVolumePos}
              padding="0px"
              textAlign="center"
              onChange={(e) => {
                setMedida3CalcVolumePos(e.target.value);
              }}
            />
          </HStack>
          <Text>cm³</Text>
          <Text>vol</Text>
          <Input
            isDisabled={!CalcVolumePosCheckbox}
            w="35px"
            h="30px"
            value={VolumeCalcVolumePos}
            padding="0px"
            textAlign="center"
          />

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
export default CalculoProstata;
