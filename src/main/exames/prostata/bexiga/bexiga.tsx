import { Checkbox, Flex, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga() {
  const altura = "100%";
  const largura = "45%";

  const [frasesBexiga, setFrasesBexiga] = useState<any>([]);

  const [CalcBexigaCheckbox, setCalcBexigaCheckbox] = useState(false);
  const [disableBexigaInput1, setDisableBexigaInput1] = useState(true);
  const [medida1CalcBexiga, setMedida1CalcBexiga] = useState("");
  const [medida2CalcBexiga, setMedida2CalcBexiga] = useState("");
  const [medida3CalcBexiga, setMedida3CalcBexiga] = useState("");

  const [CalcVolumePosCheckbox, setCalcVolumePosCheckbox] = useState(false);
  const [disableVolumePosInput1, setDisableVolumePosInput1] = useState(true);
  const [medida1CalcVolumePos, setMedida1CalcVolumePos] = useState("");

  const [CalcVolumePreCheckbox, setCalcVolumePreCheckbox] = useState(false);
  const [disableVolumePreInput1, setDisableVolumePreInput1] = useState(true);
  const [medida1CalcVolumePre, setMedida1CalcVolumePre] = useState("");

  const [bexigaVazia, setBexigaVazia] = useState(false);
  const [bexigaCheia, setBexigaCheia] = useState(false);
  const [bexigaNaoVisibilizada, setBexigaNaoVisibilizada] = useState(false);

  const [disableBexigaCheia, setDisableBexigaCheia] = useState(false);
  const [disableBexigaVazia, setDisableBexigaVazia] = useState(false);
  const [disableBexigaNaoVisibilizada, setDisableBexigaNaoVisibilizada] =
    useState(false);
  const [valorBexiga, setValorBexiga] = useState("");

  const [paredeNormo, setParedeNormo] = useState(false);
  const [paredeEspessa, setParedeEspessa] = useState(false);
  const [valorParede, setValorParede] = useState("");
  const [disableParedeNormo, setDisableParedeNormo] = useState(false);
  const [disableParedeEsp, setDisableParedeEsp] = useState(false);

  const [Dimensoes, setDimensoes] = useState("");

  const criaStringCalcBexiga = (
    medida1CalcBexiga,
    medida2CalcBexiga,
    medida3CalcBexiga
  ) => {
    removeCalcBexiga();
    let dimensao;
    switch (Dimensoes) {
      case "Normais":
        dimensao = `Com configuração cônica característica, apresentando superfície regular e cápsula 	íntegra,medindo  ${medida1CalcBexiga} x ${medida2CalcBexiga} x ${medida3CalcBexiga} cm, em relação aos maiores diâmetros.`;
        break;
      case "Aumentadas":
        dimensao = `Com configuração cônica característica, apresentando superfície bocelada e cápsula aparentemente íntegra, medindo  ${medida1CalcBexiga} x ${medida2CalcBexiga} x ${medida3CalcBexiga} cm, em relação aos maiores diâmetros.`;
        break;
      default:
        break;
    }

    let string = `${dimensao}\r\nVolume bexiga: ${calculoVolume().toFixed(
      2
    )} cm³.\r\nPeso Aproximado: ${calculoGramas().toFixed(2)} gramas`;

    setFrasesBexiga((arr) => [...arr, string]);
  };

  const removeCalcBexiga = () => {
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
      Number(medida1CalcBexiga) *
      Number(medida2CalcBexiga) *
      Number(medida3CalcBexiga) *
      0.52
    );
  };

  const criaStringCalcVolumePre = (medida1CalcVolumePre) => {
    removeCalcVolumePre();

    if (medida1CalcVolumePre != "") {
      let conta = Number(medida1CalcVolumePre) * 0.52;
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

  const criaStringCalcVolumePos = (medida1CalcVolumePos) => {
    removeCalcVolumePos();

    if (medida1CalcVolumePos != "") {
      let conta = Number(medida1CalcVolumePos) * 0.52;
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

  const atualizarEstadoBexiga = () => {
    setDisableBexigaCheia(bexigaVazia || bexigaNaoVisibilizada);
    setDisableBexigaVazia(bexigaCheia || bexigaNaoVisibilizada);
    setDisableBexigaNaoVisibilizada(bexigaCheia || bexigaVazia);

    setValorBexiga(
      bexigaCheia
        ? "Bexiga Cheia"
        : bexigaVazia
        ? "Bexiga Vazia"
        : bexigaNaoVisibilizada
        ? "Bexiga Não Visibilizada."
        : ""
    );
  };

  const atualizarEstadoParede = () => {
    if (paredeNormo) {
      setDisableParedeEsp(true);
      criaStringParedes("Paredes normo-espessas");
    } else if (paredeEspessa) {
      setDisableParedeNormo(true);
      criaStringParedes("Paredes espessas");
    } else {
      setDisableParedeNormo(false);
      setDisableParedeEsp(false);
      removeParedes();
    }
  };

  const criaStringParedes = (valor) => {
    removeParedes();
    if (valorBexiga != "" && valor != "") {
      var string = `${valorBexiga}, de ${valor}`;
      setFrasesBexiga((arr) => [...arr, string]);
    }
  };

  const removeParedes = () => {
    frasesBexiga.map((e) => {
      if (e.includes(", de ")) {
        let index = frasesBexiga.indexOf(e);

        if (index > -1) {
          frasesBexiga.splice(index, 1);
          setFrasesBexiga((arr) => [...arr]);
        }
      }
    });
  };
  const removeItemString = (string) => {
    frasesBexiga.map((e) => {
      if (e.includes(string)) {
        let index = frasesBexiga.indexOf(e);

        if (index > -1) {
          frasesBexiga.splice(index, 1);
          setFrasesBexiga((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    CalcVolumePosCheckbox
      ? setDisableVolumePosInput1(false)
      : setDisableVolumePosInput1(true);
    removeCalcVolumePos();
    setMedida1CalcVolumePos("");
  }, [CalcVolumePosCheckbox]);

  useEffect(() => {
    CalcVolumePreCheckbox
      ? setDisableVolumePreInput1(false)
      : setDisableVolumePreInput1(true);
    removeCalcVolumePre();
    setMedida1CalcVolumePre("");
  }, [CalcVolumePreCheckbox]);

  useEffect(() => {
    CalcBexigaCheckbox
      ? setDisableBexigaInput1(false)
      : setDisableBexigaInput1(true);
    removeCalcBexiga();
    setMedida1CalcBexiga("");
    setMedida2CalcBexiga("");
    setMedida3CalcBexiga("");
    setDimensoes("");
  }, [CalcBexigaCheckbox]);

  useEffect(() => {
    criaStringCalcVolumePos(medida1CalcVolumePos);
  }, [medida1CalcVolumePos]);

  useEffect(() => {
    criaStringCalcVolumePre(medida1CalcVolumePre);
  }, [medida1CalcVolumePre]);

  useEffect(() => {
    if (
      Dimensoes != "" &&
      medida1CalcBexiga != "" &&
      medida2CalcBexiga != "" &&
      medida3CalcBexiga != ""
    ) {
      removeCalcBexiga();
      criaStringCalcBexiga(
        medida1CalcBexiga,
        medida2CalcBexiga,
        medida3CalcBexiga
      );
    }
  }, [Dimensoes, medida1CalcBexiga, medida2CalcBexiga, medida3CalcBexiga]);

  useEffect(() => {
    atualizarEstadoBexiga();
  }, [bexigaCheia, bexigaVazia, bexigaNaoVisibilizada]);

  useEffect(() => {
    atualizarEstadoParede();
  }, [paredeEspessa, paredeNormo]);

  useEffect(() => {
    if (valorBexiga === "Bexiga Não Visibilizada.") {
      setFrasesBexiga((arr) => [...arr, "Bexiga Não Visibilizada."]);
    } else {
      removeItemString("Bexiga Não Visibilizada");
    }
  }, [valorBexiga]);

  const subExame = "Bexiga";
  const titulo_exame = "Próstata";

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

      <Flex gap="15px" flexWrap="wrap" flex={1} flexDirection="column">
        <HStack flexWrap="wrap" flex={1}>
          <Checkbox
            whiteSpace="nowrap"
            onChange={(e) => setCalcBexigaCheckbox(!CalcBexigaCheckbox)}
          >
            Dimensões Bexiga
          </Checkbox>
          <Input
            maxLength={2}
            isDisabled={disableBexigaInput1}
            w="35px"
            h="30px"
            value={medida1CalcBexiga}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida1CalcBexiga(e.target.value);
            }}
          />
          <Text>x</Text>
          <Input
            maxLength={2}
            isDisabled={disableBexigaInput1}
            w="35px"
            h="30px"
            value={medida2CalcBexiga}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida2CalcBexiga(e.target.value);
            }}
          />
          <Text>x</Text>
          <Input
            maxLength={2}
            isDisabled={disableBexigaInput1}
            w="35px"
            h="30px"
            value={medida3CalcBexiga}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida3CalcBexiga(e.target.value);
            }}
          />
          <Text>cm</Text>
          <Select
            isDisabled={!CalcBexigaCheckbox}
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
        <HStack flexWrap="wrap" flex={1}>
          <Checkbox
            isDisabled={disableBexigaCheia}
            onChange={(e) => setBexigaCheia(!bexigaCheia)}
          >
            Cheia
          </Checkbox>
          <Checkbox
            isDisabled={disableBexigaVazia}
            onChange={(e) => setBexigaVazia(!bexigaVazia)}
          >
            Vazia
          </Checkbox>
          <Checkbox
            isDisabled={disableBexigaNaoVisibilizada}
            onChange={(e) => setBexigaNaoVisibilizada(!bexigaNaoVisibilizada)}
          >
            Não Visibilizada
          </Checkbox>
        </HStack>
        <HStack flexWrap="wrap" flex={1}>
          <Checkbox
            isDisabled={bexigaNaoVisibilizada ? true : disableParedeNormo}
            onChange={(e) => {
              setParedeNormo(!paredeNormo);
            }}
          >
            Paredes normo-espessas
          </Checkbox>
          <Checkbox
            isDisabled={bexigaNaoVisibilizada ? true : disableParedeEsp}
            onChange={(e) => {
              setParedeEspessa(!paredeEspessa);
            }}
          >
            Paredes espessadas
          </Checkbox>
        </HStack>

        <HStack flexWrap="wrap" flex={1}>
          <Checkbox
            onChange={(e) => setCalcVolumePreCheckbox(!CalcVolumePreCheckbox)}
          >
            <Text>Volume pré-miccional</Text>
          </Checkbox>
          <Input
            maxLength={2}
            isDisabled={disableVolumePreInput1}
            w="35px"
            h="30px"
            value={medida1CalcVolumePre}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida1CalcVolumePre(e.target.value);
            }}
          />{" "}
          <Text>cm³</Text>
        </HStack>

        <HStack flexWrap="wrap" flex={1}>
          <Checkbox
            onChange={(e) => setCalcVolumePosCheckbox(!CalcVolumePosCheckbox)}
          >
            Volume pós-miccional
          </Checkbox>
          <Input
            maxLength={2}
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
          <Text>cm³</Text>
        </HStack>
      </Flex>
    </Flex>
  );
}
export default Bexiga;
