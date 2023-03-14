import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Testiculos() {
  const altura = "100%";
  const largura = "66%";

  const stringPadrao =
    "Testículos com forma, dimensões e contornos normais, medindo:";

  const [frasesMedidas, setFrasesMedidas] = useState<any>([stringPadrao]);
  const [ConclusoesTesticulos, setConclusoesTesticulos] = useState<any>([]);  


  const [medidaTesticuloDireito1, setmedidaTesticuloDireito1] = useState("");
  const [medidaTesticuloDireito2, setmedidaTesticuloDireito2] = useState("");
  const [medidaTesticuloDireito3, setmedidaTesticuloDireito3] = useState("");
  const [tecidoDireito, setTecidoDireito] = useState("");

  const [medidaTesticuloEsquerdo1, setmedidaTesticuloEsquerdo1] = useState("");
  const [medidaTesticuloEsquerdo2, setmedidaTesticuloEsquerdo2] = useState("");
  const [medidaTesticuloEsquerdo3, setmedidaTesticuloEsquerdo3] = useState("");
  const [tecidoEsquerdo, setTecidoEsquerdo] = useState("");

  const [bolsaTesticularCheckBox, setBolsaTesticularCheckBox] = useState(false);
  const [epidimosCheckBox, setEpidimosCheckBox] = useState(false);

  const criaStringMedidasTesticuloDireito = () => {
    var string = `TESTÍCULO D.: ${medidaTesticuloDireito1} x ${medidaTesticuloDireito2} x ${medidaTesticuloDireito3} cm. Vol ${volumeTesticulo(
      "direito"
    )} cm³. ${parenquimaDireito(tecidoDireito)}`;
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeMedidasDireito = () => {
    frasesMedidas.map((e) => {
      if (e.includes("TESTÍCULO D.:")) {
        var index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMedidasTesticuloEsquerdo = () => {
    var string = `TESTÍCULO E.: ${medidaTesticuloEsquerdo1} x ${medidaTesticuloEsquerdo2} x ${medidaTesticuloEsquerdo3} cm. Vol ${volumeTesticulo(
      "esquerdo"
    )} cm³. ${parenquimaEsquerdo(tecidoEsquerdo)}`;
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeMedidasEsquerdo = () => {
    frasesMedidas.map((e) => {
      if (e.includes("TESTÍCULO E.: ")) {
        var index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringBolsaTesticular = () => {
    var string = "Bolsa testicular com paredes regulares e de espessura normal";
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeBolsaTesticular = () => {
    frasesMedidas.map((e) => {
      if (e.includes("Bolsa testicular ")) {
        var index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEpidimos = () => {
    var string = "Epidídimos com configuração, diâmetros e textura normais.";
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeEpidimos = () => {
    frasesMedidas.map((e) => {
      if (e.includes("Epidídimos")) {
        var index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const volumeTesticulo = (lado) => {
    const calc = (medida1, medida2, medida3) => {
      return (
        Number(medida1) *
        Number(medida2) *
        Number(medida3) *
        0.52
      ).toFixed(2);
    };

    switch (lado) {
      case "direito": {
        return calc(
          medidaTesticuloDireito1,
          medidaTesticuloDireito2,
          medidaTesticuloDireito3
        );
      }
      case "esquerdo": {
        return calc(
          medidaTesticuloEsquerdo1,
          medidaTesticuloEsquerdo2,
          medidaTesticuloEsquerdo3
        );
      }
    }
  };

  const parenquimaDireito = (parenquima) => {
    switch (parenquima) {
      case "Homogêneo":
        return "O parênquima testicular apresenta uma textura uniforme e a ecogenicidade está dentro da normalidade.";

      case "Heterogênea": {
        return "O parênquima testicular apresenta uma textura não uniforme e a ecogenicidade alterada.";
      }
    }
  };

  const parenquimaEsquerdo = (parenquima) => {
    switch (parenquima) {
      case "Homogêneo":
        return "O parênquima testicular apresenta uma textura uniforme e a ecogenicidade está dentro da normalidade.";

      case "Heterogênea": {
        return "O parênquima testicular apresenta uma textura não uniforme e a ecogenicidade alterada.";
      }
    }
  };

  const criaStringConclusao = () => {
    var string =
      "Exame ultrassonográfico da bolsa escrotal, testículos e epidídimos, dentro dos parâmetros da normalidade.";
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeConclusao = () => {
    frasesMedidas.map((e) => {
      if (
        e.includes("Exame ultrassonográfico da bolsa escrotal, testículos e ")
      ) {
        var index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (
      medidaTesticuloDireito1 != "" &&
      medidaTesticuloDireito2 != "" &&
      medidaTesticuloDireito3 != "" &&
      tecidoDireito != ""
    ) {
      removeMedidasDireito();
      criaStringMedidasTesticuloDireito();
    }
  }, [
    medidaTesticuloDireito1,
    medidaTesticuloDireito2,
    medidaTesticuloDireito3,
    tecidoDireito,
  ]);

  useEffect(() => {
    if (
      medidaTesticuloEsquerdo1 != "" &&
      medidaTesticuloEsquerdo2 != "" &&
      medidaTesticuloEsquerdo3 != "" &&
      tecidoEsquerdo != ""
    ) {
      removeMedidasEsquerdo();
      criaStringMedidasTesticuloEsquerdo();
    }
  }, [
    medidaTesticuloEsquerdo1,
    medidaTesticuloEsquerdo2,
    medidaTesticuloEsquerdo3,
    tecidoEsquerdo,
  ]);

  useEffect(() => {
    if (bolsaTesticularCheckBox) {
      criaStringBolsaTesticular();
    } else {
      removeBolsaTesticular();
    }
  }, [bolsaTesticularCheckBox]);

  useEffect(() => {
    if (epidimosCheckBox) {
      criaStringEpidimos();
    } else {
      removeEpidimos();
    }
  }, [epidimosCheckBox]);

 

  const subExame = "Medidas";
  const titulo_exame = "Testículo";

  useEffect(() => {
    if (Object.keys(frasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidas]);

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
      <TituloNomeExame titulo="Medidas" />

      <Box gap="20px" display="flex" flexWrap="wrap">
        <HStack>
          <Text>Testículo Direito:</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloDireito1(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloDireito2(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setmedidaTesticuloDireito3(e.target.value);
            }}
          />
          <Text>cm</Text>

          <Select
            placeholder="Tecido"
            value={tecidoDireito}
            borderColor="black"
            w="auto"
            onChange={(e) => setTecidoDireito(e.target.value)}
            flexShrink={1}
          >
            <option value="Homogêneo">Homogêneo</option>
            <option value="Heterogênea">Heterogênea</option>
          </Select>
        </HStack>
        <HStack>
          <Text>Testículo Esquerdo:</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloEsquerdo1(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => setmedidaTesticuloEsquerdo2(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="5px"
            maxLength={2}
            textAlign="center"
            onChange={(e) => {
              setmedidaTesticuloEsquerdo3(e.target.value);
            }}
          />
          <Text>cm</Text>
          <Select
            placeholder="Tecido"
            value={tecidoEsquerdo}
            borderColor="black"
            w="auto"
            onChange={(e) => setTecidoEsquerdo(e.target.value)}
            flexShrink={1}
          >
            <option value="Homogêneo">Homogêneo</option>
            <option value="Heterogênea">Heterogênea</option>
          </Select>
        </HStack>
      </Box>
      <Stack>
        <Checkbox
          marginTop="15px"
          onChange={() => {
            setBolsaTesticularCheckBox(!bolsaTesticularCheckBox);
          }}
        >
          Bolsa testicular normal
        </Checkbox>

        <Checkbox
          marginTop="15px"
          onChange={() => {
            setEpidimosCheckBox(!epidimosCheckBox);
          }}
        >
          Epidídimos normais
        </Checkbox>
      </Stack>
    </Box>
  );
}
export default Testiculos;
