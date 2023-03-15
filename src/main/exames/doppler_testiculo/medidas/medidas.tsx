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

function DopplerTesticulos() {
  const altura = "100%";
  const largura = "66%";

  const stringPadrao =
    "Testículos com forma, dimensões e contornos normais, medindo:";
  const stringPadrao2 =
    "Exame realizado em modo bidimensional, com equipamento dinâmico linear multifrequêncial. Foram feitas varreduras nos sentidos transversal, longitudinal e oblíquos.";

  const [frasesMedidasDoppler, setFrasesMedidasDoppler] = useState<any>([stringPadrao2]);
  const [ConclusoesTesticulosDoppler, setConclusoesTesticulosDoppler] = useState<any>([]);

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
    if (!frasesMedidasDoppler.includes(stringPadrao)) {
      setFrasesMedidasDoppler((arr) => [...arr, stringPadrao, string]);
    } else {
      setFrasesMedidasDoppler((arr) => [...arr, string]);
    }
  };

  const removeMedidasDireito = () => {
    frasesMedidasDoppler.map((e) => {
      if (e.includes("TESTÍCULO D.:")) {
        var index = frasesMedidasDoppler.indexOf(e);

        if (index > -1) {
          frasesMedidasDoppler.splice(index, 1);
          setFrasesMedidasDoppler((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMedidasTesticuloEsquerdo = () => {
    var string = `TESTÍCULO E.: ${medidaTesticuloEsquerdo1} x ${medidaTesticuloEsquerdo2} x ${medidaTesticuloEsquerdo3} cm. Vol ${volumeTesticulo(
      "esquerdo"
    )} cm³. ${parenquimaEsquerdo(tecidoEsquerdo)}`;
    if (!frasesMedidasDoppler.includes(stringPadrao)) {
      setFrasesMedidasDoppler((arr) => [...arr, stringPadrao, string]);
    } else {
      setFrasesMedidasDoppler((arr) => [...arr, string]);
    }
  };

  const removeMedidasEsquerdo = () => {
    frasesMedidasDoppler.map((e) => {
      if (e.includes("TESTÍCULO E.: ")) {
        var index = frasesMedidasDoppler.indexOf(e);

        if (index > -1) {
          frasesMedidasDoppler.splice(index, 1);
          setFrasesMedidasDoppler((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringBolsaTesticular = () => {
    var string = "Bolsa testicular com paredes regulares e de espessura normal";
    setFrasesMedidasDoppler((arr) => [...arr, string]);
  };

  const removeBolsaTesticular = () => {
    frasesMedidasDoppler.map((e) => {
      if (e.includes("Bolsa testicular ")) {
        var index = frasesMedidasDoppler.indexOf(e);

        if (index > -1) {
          frasesMedidasDoppler.splice(index, 1);
          setFrasesMedidasDoppler((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEpidimos = () => {
    var string = "Epidídimos com configuração, diâmetros e textura normais.";
    setFrasesMedidasDoppler((arr) => [...arr, string]);
  };

  const removeEpidimos = () => {
    frasesMedidasDoppler.map((e) => {
      if (e.includes("Epidídimos")) {
        var index = frasesMedidasDoppler.indexOf(e);

        if (index > -1) {
          frasesMedidasDoppler.splice(index, 1);
          setFrasesMedidasDoppler((arr) => [...arr]);
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
        return "O parênquima testicular apresenta uma textura uniforme e a ecogenicidade está dentro da normalidade. As demais regiões do parênquima apresentam distribuição normal da vascularização e com  picos de velocidade sistólica e diastólica dentro dos parâmetros da normalidade";

      case "Heterogênea": {
        return "O parênquima testicular apresenta uma textura não uniforme e a ecogenicidade alterada.";
      }
    }
  };

  const parenquimaEsquerdo = (parenquima) => {
    switch (parenquima) {
      case "Homogêneo":
        return "O parênquima testicular apresenta uma textura uniforme e a ecogenicidade está dentro da normalidade. As demais regiões do parênquima apresentam distribuição normal da vascularização e com  picos de velocidade sistólica e diastólica dentro dos parâmetros da normalidade";

      case "Heterogênea": {
        return "O parênquima testicular apresenta uma textura não uniforme e a ecogenicidade alterada.";
      }
    }
  };

  const removeItemConclusao = (value) => {
    var index = ConclusoesTesticulosDoppler.indexOf(value);

    if (index > -1) {
      ConclusoesTesticulosDoppler.splice(index, 1);
      setConclusoesTesticulosDoppler((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
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
    const conclusao =
      "Exame ultrassonográfico da bolsa escrotal dentro dos parâmetros da normalidade.";
    if (bolsaTesticularCheckBox) {
      criaStringBolsaTesticular();
      setConclusoesTesticulosDoppler((arr) => [...arr, conclusao]);
    } else {
      removeBolsaTesticular();
      removeItemConclusao(conclusao);
    }
  }, [bolsaTesticularCheckBox]);

  useEffect(() => {
    const conclusao = "Epidídimos dentro dos parâmetros da normalidade.";
    if (epidimosCheckBox) {
      criaStringEpidimos();
      setConclusoesTesticulosDoppler((arr) => [...arr, conclusao]);
    } else {
      removeEpidimos();
      removeItemConclusao(conclusao);
    }
  }, [epidimosCheckBox]);

  useEffect(() => {
    const conclusaoD =
      "Tecido Testiculo Direito com textura uniforme e a ecogenicidade está dentro da normalidade.";
    const conclusaoE =
      "Tecido Testiculo Esquerdo com textura uniforme e a ecogenicidade está dentro da normalidade.";

    if (tecidoDireito == "Homogêneo") {
      setConclusoesTesticulosDoppler((arr) => [...arr, conclusaoD]);
    } else {
      removeItemConclusao(conclusaoD);
    }

    if (tecidoEsquerdo == "Homogêneo") {
      setConclusoesTesticulosDoppler((arr) => [...arr, conclusaoE]);
    } else {
      removeItemConclusao(conclusaoE);
    }
  }, [tecidoDireito, tecidoEsquerdo]);

  const subExame = "Medidas Doppler";
  const titulo_exame = "Doppler Testículo";


  useEffect(() => {
    if (Object.keys(frasesMedidasDoppler).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidasDoppler,
        ConclusoesTesticulosDoppler
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidasDoppler,
        ConclusoesTesticulosDoppler
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMedidasDoppler]);

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
export default DopplerTesticulos;
