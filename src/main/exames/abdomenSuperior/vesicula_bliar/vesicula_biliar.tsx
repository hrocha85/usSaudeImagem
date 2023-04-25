/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCalculo from "./IndividualizaCalculo";
import IndividualizarPolipo from "./IndividualizaPolipo";

function VesiculaBiliar({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateCalculos, setUpdateCalculos] = useState(false);

  function Calculos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarCalculo key={key} numCalculo={num} />;
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

  const [numberArrayPolipo, setNumberArrayPolipo] = useState([1]);

  const [UpdatePolipos, setUpdatePolipos] = useState(false);

  function Polipos() {
    return (
      <>
        {numberArrayPolipo.map((num, key) => {
          return <IndividualizarPolipo key={key} numCalculo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdatePolipos) {
      setUpdatePolipos(false);
      setNumberArrayPolipo([...numberArrayPolipo, numberArrayPolipo.length + 1]);
      Polipos();
    }
  }, [UpdatePolipos]);


  const [frasesVesicula, setFrasesVesicula] = useState<any>([]);
  const [ConclusoesVesicula, setConclusoesVesicula] = useState<any>([]);

  const [NormalCheckbox, setNormalCheckbox] = useState(false);
  const [ColesteroloseCheckbox, setColesteroloseCheckbox] = useState(false);
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false);
  const [AusenteCheckbox, setAusenteCheckbox] = useState(false);

  const [EspessuraParedeCheckbox, setEspessuraParedeCheckbox] = useState(false);
  const [CitarEspessuraInput, setCitarEspessuraInput] = useState("");
  const [DisableCitarEspessuraInput, setDisableCitarEspessuraInput] =
    useState(true);



  const [MultiplosCalculosCheckbox, setMultiplosCalculosCheckbox] =
    useState(false);
  const [MultiplosCalculosInput1, setMultiplosCalculosInput1] = useState("");
  const [MultiplosCalculosInput2, setMultiplosCalculosInput2] = useState("");
  const [DisableMultiplosCalculosInput, setDisableMultiplosCalculosInput] =
    useState(true);
  const [
    MultiplosCalculosColecisiteCheckbox,
    setMultiplosCalculosColecisiteCheckbox,
  ] = useState(false);


  const [MultiplosPoliposCheckbox, setMultiplosPoliposCheckbox] =
    useState(false);
  const [MultiplosPoliposInput1, setMultiplosPoliposInput1] = useState("");
  const [MultiplosPoliposInput2, setMultiplosPoliposInput2] = useState("");

  const removeItemString = (value) => {
    var index = frasesVesicula.indexOf(value);
    if (index > -1) {
      frasesVesicula.splice(index, 1);
      setFrasesVesicula((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusoesVesicula.indexOf(value);
    if (index > -1) {
      ConclusoesVesicula.splice(index, 1);
      setConclusoesVesicula((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    const string =
      "Vesícula biliar com forma e dimensões normais, paredes finas e regulares, apresentando conteúdo anecogênico sem imagens calculosas.";
    NormalCheckbox
      ? setFrasesVesicula((arr) => [...arr, string])
      : removeItemString(string);
  }, [NormalCheckbox]);

  useEffect(() => {
    const string = "Sinais de colesterolose vesicular.";
    ColesteroloseCheckbox
      ? setFrasesVesicula((arr) => [...arr, string])
      : removeItemString(string);
    ColesteroloseCheckbox
      ? setConclusoesVesicula((arr) => [...arr, string])
      : removeItemConclusao(string);
  }, [ColesteroloseCheckbox]);

  useEffect(() => {
    const string =
      "Vesícula biliar vazia, sem condições satisfatórias para análise.";
    const conclusaoVazia = "Vesícula biliar vazia.";
    VaziaCheckbox
      ? setFrasesVesicula((arr) => [...arr, string])
      : removeItemString(string);
    VaziaCheckbox
      ? setConclusoesVesicula((arr) => [...arr, conclusaoVazia])
      : removeItemConclusao(conclusaoVazia);
  }, [VaziaCheckbox]);

  useEffect(() => {
    const string = "Vesícula biliar não caracterizada (status pós-cirúrgico).";
    AusenteCheckbox
      ? setFrasesVesicula((arr) => [...arr, string])
      : removeItemString(string);
  }, [AusenteCheckbox]);

  const criaStringCitarEspessura = (dados) => {
    var string = "Espessura da parede vesicular";
    removeFraseCitarEspessura();

    if (dados != "") {
      string = `${string} = ${dados} cm.`;
      setFrasesVesicula((arr) => [...arr, string]);
    }
  };

  const removeFraseCitarEspessura = () => {
    frasesVesicula.map((e) => {
      if (e.includes("Espessura da parede vesicular")) {
        var index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (EspessuraParedeCheckbox) {
      criaStringCitarEspessura(CitarEspessuraInput);
      setDisableCitarEspessuraInput(false);
    } else {
      setDisableCitarEspessuraInput(true);
      removeFraseCitarEspessura();
      setCitarEspessuraInput("");
    }
  }, [EspessuraParedeCheckbox, CitarEspessuraInput]);



  const criaStringMultiplosCalculos = (dados1, dados2) => {
    var string = "Vesícula biliar";
    removeFraseMultiplosCalculos();
    if (dados1 != "" && dados2 != "" && MultiplosCalculosColecisiteCheckbox) {
      string = `${string} distendida, com paredes espessadas, apresentando múltiplas imagens calculosas em seu interior, medindo de ${dados1} a ${dados2} cm.`;
      setFrasesVesicula((arr) => [...arr, string]);
    } else if (dados1 != "" && dados2 != "") {
      string = `${string} com forma e dimensões normais, paredes finas e regulares, apresentando imagens calculosas em seu interior, móveis às mudanças de decúbito, medindo de ${dados1} a ${dados2} cm`;
      setFrasesVesicula((arr) => [...arr, string]);
    }
  };

  const removeFraseMultiplosCalculos = () => {
    frasesVesicula.map((e) => {
      var index;
      if (
        e.includes(
          "distendida, com paredes espessadas, apresentando múltiplas imagens calculosas em seu interior, medindo de"
        )
      ) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      } else if (
        e.includes(
          "com forma e dimensões normais, paredes finas e regulares, apresentando imagens calculosas em seu interior, móveis às mudanças de decúbito, medindo de"
        )
      ) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (MultiplosCalculosCheckbox) {
      criaStringMultiplosCalculos(
        MultiplosCalculosInput1,
        MultiplosCalculosInput2
      );
      setDisableMultiplosCalculosInput(false);
    } else {
      setDisableMultiplosCalculosInput(true);
      removeFraseMultiplosCalculos();
      setMultiplosCalculosInput1("");
      setMultiplosCalculosInput2("");
    }
  }, [
    MultiplosCalculosCheckbox,
    MultiplosCalculosInput1,
    MultiplosCalculosInput2,
    MultiplosCalculosColecisiteCheckbox,
  ]);



  const criaStringMultiplosPolipos = (dados1, dados2) => {
    var string =
      "Imagens polipoides hiperecogênicas aderidas às paredes da vesícula, medindo de";
    const conclusaoPolipos = "Imagem compatível com pólipo na vesícula biliar.";
    removeItemConclusao(conclusaoPolipos);
    removeFraseMultiplosPolipos();
    if (MultiplosPoliposCheckbox) {
      if (dados1 != "" && dados2 != "") {
        string = `${string} ${dados1} a ${dados2} cm`;
        setFrasesVesicula((arr) => [...arr, string]);
        setConclusoesVesicula((arr) => [...arr, conclusaoPolipos]);
      }
    } else {
      setMultiplosPoliposInput1("");
      setMultiplosPoliposInput2("");
    }
  };

  const removeFraseMultiplosPolipos = () => {
    frasesVesicula.map((e) => {
      if (
        e.includes(
          "Imagens polipoides hiperecogênicas aderidas às paredes da vesícula, medindo de"
        )
      ) {
        var index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };


  useEffect(() => {
    criaStringMultiplosPolipos(
      MultiplosPoliposInput1,
      MultiplosPoliposInput2
    );

  }, [
    MultiplosPoliposCheckbox,
    MultiplosPoliposInput1,
    MultiplosPoliposInput2,
  ]);

  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    const string = "Vesícula biliar com forma e dimensões normais, paredes finas e regulares, apresentando conteúdo anecogênico sem imagens calculosas.";
    Normal ? setNormalCheckbox(!NormalCheckbox) : removeItemString(string)
  }, [Normal])

  const subExame = "Vesícula Biliar";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(frasesVesicula).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVesicula,
        ConclusoesVesicula
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVesicula,
        ConclusoesVesicula
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVesicula]);

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
      <TituloNomeExame titulo="Vesícula Biliar" />

      <Box gap="25px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <Checkbox
            isChecked={Normal}
            onChange={(e) => {
              setNormal(!Normal)
              setNormalCheckbox(!NormalCheckbox)
            }}
          >
            Normal
          </Checkbox>
        </Box>

        <Box w="150px">
          <Checkbox

            onChange={(e) =>
              setEspessuraParedeCheckbox(!EspessuraParedeCheckbox)
            }
          >
            Citar espessura da parede:
          </Checkbox>
          <HStack>
            <Input
              p='0'
              textAlign='center'
              w="60px"
              onChange={(e) => {
                setCitarEspessuraInput(e.target.value);
              }}
              value={CitarEspessuraInput}
              disabled={DisableCitarEspessuraInput}
              placeholder="cm"
            />
            <Text alignSelf="center">cm</Text>
          </HStack>
        </Box>

        <Box gap="10px" display="flex" flexWrap="wrap">
          {Calculos()}
          <Button
            colorScheme="blue"
            onClick={() => {
              setUpdateCalculos(true);
            }}
          >
            +1 Cisto
          </Button>
        </Box>

        <Box w="180px">
          <Checkbox
            onChange={(e) =>
              setMultiplosCalculosCheckbox(!MultiplosCalculosCheckbox)
            }
          >
            Múltiplos cálculos de
          </Checkbox>
          <HStack>
            <Input
              p='0'
              textAlign='center'
              value={MultiplosCalculosInput1}
              w="50px"
              onChange={(e) => setMultiplosCalculosInput1(e.target.value)}
              disabled={DisableMultiplosCalculosInput}
              placeholder="00"
            />
            <Text alignSelf="center">a</Text>
            <Input
              p='0'
              textAlign='center'
              value={MultiplosCalculosInput2}
              w="50px"
              onChange={(e) => setMultiplosCalculosInput2(e.target.value)}
              disabled={DisableMultiplosCalculosInput}
              placeholder="00"
            />
            <Text alignSelf="center">cm</Text>
          </HStack>
          <Checkbox
            onChange={(e) => {
              setMultiplosCalculosColecisiteCheckbox(
                !MultiplosCalculosColecisiteCheckbox
              );
            }}
            disabled={DisableMultiplosCalculosInput}
          >
            colecisite aguda?
          </Checkbox>
        </Box>


        <Box gap="10px" display="flex" flexWrap="wrap">
          {Polipos()}
          <Button
            colorScheme="blue"
            onClick={() => {
              setUpdatePolipos(true);
            }}
          >
            +1 Polipo
          </Button>
        </Box>

        <Box w="180px">
          <Checkbox

            onChange={(e) =>
              setMultiplosPoliposCheckbox(!MultiplosPoliposCheckbox)
            }
          >
            Múltiplos pólipos de
          </Checkbox>
          <HStack>
            <Input
              p='0'
              textAlign='center'
              value={MultiplosPoliposInput1}
              w="50px"
              onChange={(e) => setMultiplosPoliposInput1(e.target.value)}
              disabled={!MultiplosPoliposCheckbox}
              placeholder="00"
            />
            <Text alignSelf="center">a</Text>
            <Input
              p='0'
              textAlign='center'
              value={MultiplosPoliposInput2}
              w="50px"
              onChange={(e) => setMultiplosPoliposInput2(e.target.value)}
              disabled={!MultiplosPoliposCheckbox}
              placeholder="00"
            />
            <Text alignSelf="center">cm</Text>
          </HStack>
        </Box>

        <Box w="120px">
          <Checkbox
            onChange={(e) => setColesteroloseCheckbox(!ColesteroloseCheckbox)}

          >
            Colesterolose
          </Checkbox>
        </Box>
        <Box>
          <Checkbox

            onChange={(e) => setVaziaCheckbox(!VaziaCheckbox)}
          >
            Vazia
          </Checkbox>
        </Box>
        <Box>
          <Checkbox

            onChange={(e) => setAusenteCheckbox(!AusenteCheckbox)}
          >
            Ausente
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

export default VesiculaBiliar;
