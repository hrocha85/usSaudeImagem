/* eslint-disable eqeqeq */

import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Button,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulosDireita from "./individualizar_nodulosDireita";
import IndividualizarCistosDireito from "./individualizar_CistoDireita";

function Ovario_Direito({ Disable }) {
  const altura = "100%";
  const largura = "40%";

  const [frasesOvarioDireito, setFrasesOvarioDireito] = useState<any>([]);
  const [ConclusaoOvarioDireito, setConclusaoOvarioDireito] = useState<any>([]);

  const [UpdateNodulos, setUpdateNodulos] = useState(false);
  const [numberArrayMiometrio, setNumberArrayMiometrio] = useState([1]);

  function Nodulos() {
    return (
      <>
        {numberArrayMiometrio.map((num, key) => {
          return <IndividualizarNodulosDireita
            key={key}
            numNodulo={num}
          />
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArrayMiometrio([...numberArrayMiometrio, numberArrayMiometrio.length + 1]);
      Nodulos();
    }
  }, [UpdateNodulos]);

  const [UpdateCistos, setUpdateCistos] = useState(false);
  const [numberArrayCistos, setNumberArrayCistos] = useState([1]);

  function Cistos() {
    return (
      <>
        {numberArrayCistos.map((num, key) => {
          return <IndividualizarCistosDireito
            key={key}
            numCisto={num}
          />
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCistos) {
      setUpdateCistos(false);
      setNumberArrayCistos([...numberArrayCistos, numberArrayCistos.length + 1]);
      Cistos();
    }
  }, [UpdateCistos]);

  const subExame = "Ovário Direito";
  const titulo_exame = "Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesOvarioDireito).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOvarioDireito,
        ConclusaoOvarioDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOvarioDireito,
        ConclusaoOvarioDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOvarioDireito]);

  //States medidas ovario - Inicio
  const [medidaOvario1, setmedidaOvario1] = useState("");
  const [medidaOvario2, setmedidaOvario2] = useState("");
  const [medidaOvario3, setmedidaOvario3] = useState("");
  const [medidaOvario4, setmedidaOvario4] = useState(0);
  //States medidas ovario - Fim

  //States cisto - input,checkbox e select - Inicio

  //States cisto - input,checkbox e select - Fim

  //State checkBox Padrao Micropolicistico
  const [padraoMicropolicisticoCheckBox, setpadraoMicropolicisticoCheckBox] =
    useState(false);

  //State Padrao Folicular
  const [padraoFolicularCheckBox, setpadraoFolicularCheckBox] = useState(false);

  //State Nao Visibilizado
  const [NaoVisibilizadoCheckBox, setNaoVisibilizadoCheckBox] = useState(false);

  const [NaoVisibilizadoDisable, setNaoVisibilizadoDisable] = useState(false);

  //Funcoes medidas ovario - Inicio
  const criaStringMedidasOvario = () => {
    let string = 'Medida do ovário:'
    removeStringSelect(string)
    const medida1STR: string = medidaOvario1.toString().replace(',', '.');
    const medida1: number = parseFloat(medida1STR);
    const medida2STR: string = medidaOvario2.toString().replace(',', '.');
    const medida2: number = parseFloat(medida2STR);
    const medida3STR: string = medidaOvario3.toString().replace(',', '.');
    const medida3: number = parseFloat(medida3STR);
    if (medidaOvario1 != "" && medidaOvario2 != "" && medidaOvario3 != "") {
      const medida4 = ((medida1) * (medida2) * (medida3) / 1000) / 2
      setmedidaOvario4(medida4)
      string = `${string} ${medida1} x ${medida2} x ${medida3} mm (${medida4.toFixed(2)} cm³)`;
      setFrasesOvarioDireito((arr) => [...arr, string]);
    } else {
      setmedidaOvario4(0)
    }
  };

  const removeStringSelect = (value) => {
    frasesOvarioDireito.map((e) => {
      if (e.includes(value)) {
        const index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidasOvario();
  }, [medidaOvario1, medidaOvario2, medidaOvario3]);

  //Funcoes medidas ovario - Fim

  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    const conclusao = 'Ovário direito com padrão folicular.'
    const string = "Ovário direito com padrão folicular ";
    setFrasesOvarioDireito((arr) => [...arr, string]);
    setConclusaoOvarioDireito((arr) => [...arr, conclusao]);
  };

  const removePadraoFolicular = () => {
    frasesOvarioDireito.map((e) => {
      if (e.includes("folicular")) {
        const index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioDireito.map((e) => {
      if (e.includes("Ovário direito com padrão folicular.")) {
        const index = ConclusaoOvarioDireito.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioDireito.splice(index, 1);
          setConclusaoOvarioDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Ovário direito com padrão folicular.');
        }
      }
    });
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    const string =
      "Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    const conclusao = 'Ovário direito com aspecto micropolicístico.'
    setFrasesOvarioDireito((arr) => [...arr, string]);
    setConclusaoOvarioDireito((arr) => [...arr, conclusao]);
    return string;
  };

  const removePadraoMicropolicistico = () => {
    frasesOvarioDireito.map((e) => {
      if (
        e.includes(
          "Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris."
        )
      ) {
        const index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioDireito.map((e) => {
      if (e.includes(
        "Ovário direito com aspecto micropolicístico."
      )
      ) {
        const index = ConclusaoOvarioDireito.indexOf(e);
        if (index > -1) {
          ConclusaoOvarioDireito.splice(index, 1);
          setConclusaoOvarioDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Ovário direito com aspecto micropolicístico.');

        }
      }
    });
  };
  //Funcoes Padrao Micropolicistico - Fim


  //Função Nao Visibilizado
  useEffect(() => {
    const string = "Ovário direito não visibilizado.";
    if (NaoVisibilizadoCheckBox) {
      setFrasesOvarioDireito((arr) => [...arr, string])
      setmedidaOvario1('')
      setmedidaOvario2('')
      setmedidaOvario3('')
    } else {
      removeItemString(string);

    }
  }, [NaoVisibilizadoCheckBox])

  const removeItemString = (value) => {
    const index = frasesOvarioDireito.indexOf(value);

    if (index > -1) {
      frasesOvarioDireito.splice(index, 1);
      setFrasesOvarioDireito((arr) => [...arr]);
    }
  };


  useEffect(() => {
    if (padraoMicropolicisticoCheckBox) {
      criaStringPadraoMicropolicistico();
    } else {
      removePadraoMicropolicistico();
    }
  }, [padraoMicropolicisticoCheckBox]);

  useEffect(() => {
    if (padraoFolicularCheckBox) {
      criaStringPadraoFolicular();
    } else {
      removePadraoFolicular();
    }
  }, [padraoFolicularCheckBox]);


  useEffect(() => {
    if ((medidaOvario1 != '' && medidaOvario2 != '' && medidaOvario3 != '') || padraoMicropolicisticoCheckBox
      || padraoFolicularCheckBox) {
      setNaoVisibilizadoDisable(true)
    } else {
      setNaoVisibilizadoDisable(false)
    }
  }, [padraoFolicularCheckBox, padraoMicropolicisticoCheckBox,
    medidaOvario3, medidaOvario2, medidaOvario1])

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
      <TituloNomeExame titulo="Ovário Direito" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box w="260px">
            <Text>Medidas:</Text>
            <HStack marginTop="5px">
              <Input isDisabled={NaoVisibilizadoCheckBox}
                value={medidaOvario1}
                w="80px"
                h="30px"
                padding="0px"
                textAlign="center"
                onChange={(e) => setmedidaOvario1(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={NaoVisibilizadoCheckBox}
                w="80px"
                h="30px"
                value={medidaOvario2}
                padding="0px"
                textAlign="center"
                onChange={(e) => setmedidaOvario2(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={NaoVisibilizadoCheckBox}
                w="80px"
                h="30px"
                value={medidaOvario3}
                padding="0px"
                textAlign="center"
                onChange={(e) => {
                  setmedidaOvario3(e.target.value);
                }}
              />
              <Text>mm</Text>
              <Input isDisabled={NaoVisibilizadoCheckBox}
                w="100px"
                h="30px"
                padding="0px"
                value={medidaOvario4.toFixed(2)}
                textAlign="center"
              />
              <Text>cm³</Text>
            </HStack>
          </Box>

          <Stack>
            <Checkbox isDisabled={NaoVisibilizadoDisable}
              onChange={() => {
                setNaoVisibilizadoCheckBox(!NaoVisibilizadoCheckBox);
              }}
            >
              Não visibilizado
            </Checkbox>

            <Checkbox isDisabled={NaoVisibilizadoCheckBox}
              onChange={() =>
                setpadraoMicropolicisticoCheckBox(
                  !padraoMicropolicisticoCheckBox
                )
              }
            >
              Padrão micropolicístico
            </Checkbox>
            <Checkbox isDisabled={NaoVisibilizadoCheckBox}
              onChange={() =>
                setpadraoFolicularCheckBox(!padraoFolicularCheckBox)
              }
            >
              Padrão Folicular
            </Checkbox>
            <Stack>
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
          </Stack>
          <Stack>
            <Box gap="25px" display="flex" flexWrap="wrap">
              {Nodulos()}
              <Button

                colorScheme="blue"
                onClick={() => {
                  setUpdateNodulos(true);
                }}
              >
                +1 Nódulo
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Ovario_Direito;
