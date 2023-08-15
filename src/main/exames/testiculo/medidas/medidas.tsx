
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

  const [frasesMedidas, setFrasesMedidas] = useState<any>([]);
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
    let string = `TESTÍCULO D.: `
    removeMedidas(string)
    removeMedidas(stringPadrao)
    if (medidaTesticuloDireito1 != '' && medidaTesticuloDireito2 != '' && medidaTesticuloDireito3 != '' && tecidoDireito != '') {
      string = `${string}${medidaTesticuloDireito1} x ${medidaTesticuloDireito2} x ${medidaTesticuloDireito3} cm. Vol ${volumeTesticulo('direito')} cm³. ${parenquimaDireito(tecidoDireito)}`
      if (!frasesMedidas.includes(stringPadrao)) {
        setFrasesMedidas((arr) => [...arr, stringPadrao, string]);
      } else {
        setFrasesMedidas((arr) => [...arr, string]);
      }
    } else {
      setTecidoDireito('')
    }
  };

  const removeMedidas = (value) => {
    frasesMedidas.map((e) => {
      if (e.includes(value)) {
        const index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMedidasTesticuloEsquerdo = () => {
    let string = `TESTÍCULO E.: `
    removeMedidas(string)
    removeMedidas(stringPadrao)
    if (medidaTesticuloEsquerdo1 != '' && medidaTesticuloEsquerdo2 != '' && medidaTesticuloEsquerdo3 != '' && tecidoEsquerdo != '') {
      string = `${string}${medidaTesticuloEsquerdo1} x ${medidaTesticuloEsquerdo2} x ${medidaTesticuloEsquerdo3} cm. Vol ${volumeTesticulo('esquerdo')} cm³. ${parenquimaEsquerdo(tecidoEsquerdo)}`
      if (!frasesMedidas.includes(stringPadrao)) {
        setFrasesMedidas((arr) => [...arr, stringPadrao, string]);
      } else {
        setFrasesMedidas((arr) => [...arr, string]);
      }
    } else {
      setTecidoEsquerdo('')
    }
  };

  const criaStringBolsaTesticular = () => {
    const string = "Bolsa testicular com paredes regulares e de espessura normal";
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeBolsaTesticular = () => {
    frasesMedidas.map((e) => {
      if (e.includes("Bolsa testicular ")) {
        const index = frasesMedidas.indexOf(e);

        if (index > -1) {
          frasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEpidimos = () => {
    const string = "EPIDÍDIMOS com configuração, diâmetros e textura normais.";
    setFrasesMedidas((arr) => [...arr, string]);
  };

  const removeEpidimos = () => {
    frasesMedidas.map((e) => {
      if (e.includes("EPIDÍDIMOS")) {
        const index = frasesMedidas.indexOf(e);

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

  const removeItemConclusao = (value) => {
    const index = ConclusoesTesticulos.indexOf(value);

    if (index > -1) {
      ConclusoesTesticulos.splice(index, 1);
      setConclusoesTesticulos((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {

    criaStringMedidasTesticuloDireito();

  }, [
    medidaTesticuloDireito1,
    medidaTesticuloDireito2,
    medidaTesticuloDireito3,
    tecidoDireito,
  ]);

  useEffect(() => {
    criaStringMedidasTesticuloEsquerdo();
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
      setConclusoesTesticulos((arr) => [...arr, conclusao]);
    } else {
      removeBolsaTesticular();
      removeItemConclusao(conclusao);
    }
  }, [bolsaTesticularCheckBox]);

  useEffect(() => {
    const conclusao = "EPIDÍDIMOS dentro dos parâmetros da normalidade.";
    if (epidimosCheckBox) {
      criaStringEpidimos();
      setConclusoesTesticulos((arr) => [...arr, conclusao]);
    } else {
      removeEpidimos();
      removeItemConclusao(conclusao);
    }
  }, [epidimosCheckBox]);

  useEffect(() => {
    const conclusaoDireitoHomo =
      "Tecido Testiculo Direito com textura uniforme e a ecogenicidade está dentro da normalidade.";

    const conclusaoDireitoHete =
      "Tecido Testiculo Direito com textura não uniforme e a ecogenicidade alterada.";

    const conclusaoEsquerdoHomo =
      "Tecido Testiculo Esquerdo com textura uniforme e a ecogenicidade está dentro da normalidade.";

    const conclusaoEsquerdoHete =
      "Tecido Testiculo Esquerdo com textura não uniforme e a ecogenicidade alterada.";

    switch (tecidoDireito) {
      case "Homogêneo": {
        removeItemConclusao(conclusaoDireitoHomo);
        removeItemConclusao(conclusaoDireitoHete);
        setConclusoesTesticulos((arr) => [...arr, conclusaoDireitoHomo]);
        break;
      }
      case "Heterogênea": {
        removeItemConclusao(conclusaoDireitoHete);
        removeItemConclusao(conclusaoDireitoHomo);
        setConclusoesTesticulos((arr) => [...arr, conclusaoDireitoHete]);
        break;
      }
      default: {
        removeItemConclusao(conclusaoDireitoHete);
        removeItemConclusao(conclusaoDireitoHomo);
        break;
      }
    }
    switch (tecidoEsquerdo) {
      case "Homogêneo": {
        removeItemConclusao(conclusaoEsquerdoHete);
        removeItemConclusao(conclusaoEsquerdoHomo);
        setConclusoesTesticulos((arr) => [...arr, conclusaoEsquerdoHomo]);
        break;
      }
      case "Heterogênea": {
        removeItemConclusao(conclusaoEsquerdoHomo);
        removeItemConclusao(conclusaoEsquerdoHete);
        setConclusoesTesticulos((arr) => [...arr, conclusaoEsquerdoHete]);
        break;
      }
      default: {
        removeItemConclusao(conclusaoEsquerdoHete);
        removeItemConclusao(conclusaoEsquerdoHomo);
        break;
      }
    }
  }, [tecidoDireito, tecidoEsquerdo]);

  const subExame = "Medidas";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(frasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMedidas,
        ConclusoesTesticulos
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMedidas,
        ConclusoesTesticulos
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
            padding="0px"

            textAlign="center"
            onChange={(e) => setmedidaTesticuloDireito1(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="0px"

            textAlign="center"
            onChange={(e) => setmedidaTesticuloDireito2(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="0px"

            textAlign="center"
            onChange={(e) => {
              setmedidaTesticuloDireito3(e.target.value);
            }}
          />
          <Text>cm</Text>

          <Select
            value={tecidoDireito}
            borderColor="black"
            w="auto"
            onChange={(e) => setTecidoDireito(e.target.value)}
            flexShrink={1}
          >
            <option disabled selected value="">Tecido</option>
            <option value="Homogêneo">Homogêneo</option>
            <option value="Heterogênea">Heterogênea</option>
          </Select>
        </HStack>
        <HStack>
          <Text>Testículo Esquerdo:</Text>
          <Input
            w="30px"
            h="30px"
            padding="0px"

            textAlign="center"
            onChange={(e) => setmedidaTesticuloEsquerdo1(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="0px"

            textAlign="center"
            onChange={(e) => setmedidaTesticuloEsquerdo2(e.target.value)}
          />
          <Text>x</Text>
          <Input
            w="30px"
            h="30px"
            padding="0px"

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
