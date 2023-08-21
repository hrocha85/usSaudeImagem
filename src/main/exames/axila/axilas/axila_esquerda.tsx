/* eslint-disable array-callback-return */

import { Box, Checkbox, Input, Select, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Axila_esquerda() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "43%": largura = "100%"

  const [frasesAxilas, setFrasesAxilas] = useState<any>([]);

  const [CheckboxAxilasLinfadenomegalia, setCheckboxAxilasLinfadenomegalia] = useState(false);

  const [CheckboxPeleTecido, setCheckboxPeleTecido] = useState(false);

  const [valueSelectPeleTecido, setValueSelectPeleTecido] = useState("");

  const [CheckboxTecidoFibrograndular, setCheckboxTecidoFibrograndular] = useState(false);

  const [CheckboxSemNodulo, setCheckboxSemNodulo] = useState(false);
  const [CheckboxPresencaImagemSolida, setCheckboxPresencaImagemSolida] = useState(false);
  const [CheckboxIsoecogenica, setCheckboxIsoecogenica] = useState(false);
  const [CheckboxHipoecogenica, setCheckboxHipoecogenica] = useState(false);
  const [CheckboxHiperecogenicaContornos, setCheckboxHiperecogenicaContornos] = useState(false);
  const [ValueSelectHiperecogenicaContornos, setValueSelectHiperecogenicaContornos] = useState('');

  const [ParcialmentePrecisosCheckbox, setParcialmentePrecisosCheckbox] = useState(false);
  const [PerpendicularPeleInput, setPerpendicularPeleInput] = useState('');
  const [PerpendicularPeleSelect, setPerpendicularPeleSelect] = useState('');

  const [LinfonodosAxilaresCheckbox, setLinfonodosAxilaresCheckbox] = useState(false);
  const [SugestivasLinfonodomegaliaCheckbox, setSugestivasLinfonodomegaliaCheckbox] = useState(false);
  const [SugestivasLinfonodomegaliaAtipicosCheckbox, setSugestivasLinfonodomegaliaAtipicosCheckbox] = useState(false);


  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesAxilas.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesAxilas.splice(index, 1);
      setFrasesAxilas((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = `Presença de tecido fibroglandular em regiao axilar.`
    CheckboxTecidoFibrograndular ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxTecidoFibrograndular]);

  useEffect(() => {
    const string = `Não há evidência de nódulo ou massa de caráter sólido, cístico ou complexo.`
    CheckboxSemNodulo ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxSemNodulo]);

  useEffect(() => {
    const string = `Presença de imagem sólida.`
    CheckboxPresencaImagemSolida ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxPresencaImagemSolida]);

  useEffect(() => {
    const string = `Isoecogênica.`
    CheckboxIsoecogenica ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxIsoecogenica]);

  useEffect(() => {
    const string = `Hipoecogênica.`
    CheckboxHipoecogenica ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxHipoecogenica]);


  const criaStringHperecogenicaContornos = () => {
    let string = 'Hiperecogênica de contornos '
    removeFraseSelect(string);
    if (CheckboxHiperecogenicaContornos) {
      if (ValueSelectHiperecogenicaContornos !== "") {
        string = `${string} ${ValueSelectHiperecogenicaContornos}.`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectHiperecogenicaContornos("");
    }
  };

  useEffect(() => {
    criaStringHperecogenicaContornos();
  }, [ValueSelectHiperecogenicaContornos, CheckboxHiperecogenicaContornos]);



  useEffect(() => {
    const string = `Linfonodos axilares identificados no exame de aspecto habitual.`
    LinfonodosAxilaresCheckbox ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [LinfonodosAxilaresCheckbox]);

  useEffect(() => {
    const string = `Imagens sugestivas de linfonodomegalia, sem sinais de atipia.`
    SugestivasLinfonodomegaliaCheckbox ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [SugestivasLinfonodomegaliaCheckbox]);

  useEffect(() => {
    const string = `Imagens sugestivas de linfonodos atipicos.`
    SugestivasLinfonodomegaliaAtipicosCheckbox ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [SugestivasLinfonodomegaliaAtipicosCheckbox]);

  useEffect(() => {
    const string = `Axila Linfadenomegalia.`
    CheckboxAxilasLinfadenomegalia ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxAxilasLinfadenomegalia]);


  const criaStringPeleTecido = () => {
    removeFrasePeleTecido();
    if (CheckboxPeleTecido) {
      if (valueSelectPeleTecido !== "") {
        const string = `Pele e tecido subcutâneo de espessura  ${valueSelectPeleTecido}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectPeleTecido("");
    }
  };
  const removeFrasePeleTecido = () => {
    frasesAxilas.map((e) => {
      if (e.includes("Pele e tecido subcutâneo de espessura ")) {
        const index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringPeleTecido();
  }, [valueSelectPeleTecido, CheckboxPeleTecido]);


  const criaStringParcialmentePrecisos = () => {
    let string = 'parcialmente precisos e bordos finos, bem circunscrito, de orientação'
    removeFraseSelect(string)
    if (ParcialmentePrecisosCheckbox) {
      if (PerpendicularPeleInput != '' && PerpendicularPeleSelect != '') {
        string = `${string} ${PerpendicularPeleSelect} medindo cerca de ${PerpendicularPeleInput} cm.`
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setPerpendicularPeleSelect('')
      setPerpendicularPeleInput('')
    }
  }
  useEffect(() => {
    criaStringParcialmentePrecisos()
  }, [ParcialmentePrecisosCheckbox, PerpendicularPeleInput, PerpendicularPeleSelect])
  const removeFraseSelect = (value) => {
    frasesAxilas.map((e) => {
      if (e.includes(value)) {
        const index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  const subExame = "Axila esquerda";
  const titulo_exame = "Axila";

  useEffect(() => {
    if (Object.keys(frasesAxilas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAxilas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAxilas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAxilas]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Box mb="20px">
        <TituloNomeExame titulo="Axila esquerda" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box display="flex" flexWrap='wrap'>
            <Checkbox
              onChange={(e) => {
                setCheckboxPeleTecido(
                  !CheckboxPeleTecido
                );
              }}
            >
              Pele e tecido subcultâneo
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!CheckboxPeleTecido}
              onChange={(e) => {
                setValueSelectPeleTecido(e.target.value);
              }}
              value={valueSelectPeleTecido}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="conservada">Conservada</option>
              <option value="espessada">Espessada</option>

            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxTecidoFibrograndular(
                  !CheckboxTecidoFibrograndular
                );
              }}
            >
              Tecido fibrograndular
            </Checkbox>
          </Box>

          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxSemNodulo(
                  !CheckboxSemNodulo
                );
              }}
            >
              Não há evidência de nódulo ou massa de caráter sólido, cístico ou complexo.
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxPresencaImagemSolida(
                  !CheckboxPresencaImagemSolida
                );
              }}
            >
              Presença de imagem sólida.
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxIsoecogenica(
                  !CheckboxIsoecogenica
                );
              }}
            >Isoecogênica
            </Checkbox>
          </Box>

          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxHipoecogenica(
                  !CheckboxHipoecogenica
                );
              }}
            >Hipoecogênica
            </Checkbox>
          </Box>

          <Box display="flex" flexWrap='wrap'>
            <Checkbox
              onChange={(e) => {
                setCheckboxHiperecogenicaContornos(
                  !CheckboxHiperecogenicaContornos
                );
              }}
            >Hiperecogênica de contornos
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!CheckboxHiperecogenicaContornos}
              onChange={(e) => {
                setValueSelectHiperecogenicaContornos(e.target.value);
              }}
              value={ValueSelectHiperecogenicaContornos}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="regulares">Regulares</option>
              <option value="irregulares">Irregulares</option>
            </Select>
          </Box>






          <Box display="flex" flexWrap='wrap'>
            <Checkbox
              onChange={(e) => {
                setParcialmentePrecisosCheckbox(
                  !ParcialmentePrecisosCheckbox
                );
              }}
            >Parcialmente precisos e bordos finos, bem circunscrito, de orientação
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!ParcialmentePrecisosCheckbox}
              onChange={(e) => {
                setPerpendicularPeleSelect(e.target.value);
              }}
              value={PerpendicularPeleSelect}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="paralela a pele">Paralela a pele</option>
              <option value="perpendicular a pele">Perpendicular a pele</option>

            </Select>
            <Text alignSelf='center'>medindo cerca de</Text>
            <Input
              p='0px'
              textAlign='center'
              w='40px'
              isDisabled={!ParcialmentePrecisosCheckbox}
              value={PerpendicularPeleInput}
              onChange={(e) => setPerpendicularPeleInput(e.target.value)}
            >

            </Input>
            <Text alignSelf='center'>cm</Text>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxAxilasLinfadenomegalia(
                  !CheckboxAxilasLinfadenomegalia
                );
              }}
            >
              Linfadenomegalia
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setLinfonodosAxilaresCheckbox(
                  !LinfonodosAxilaresCheckbox
                );
              }}
            >Linfonodos axilares identificados no exame de aspecto habitual.
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setSugestivasLinfonodomegaliaCheckbox(
                  !SugestivasLinfonodomegaliaCheckbox
                );
              }}
            >Imagens sugestivas de linfonodomegalia, sem sinais de atipia.
            </Checkbox>
          </Box>

          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setSugestivasLinfonodomegaliaAtipicosCheckbox(
                  !SugestivasLinfonodomegaliaAtipicosCheckbox
                );
              }}
            >Imagens sugestivas de linfonodos atipicos.
            </Checkbox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Axila_esquerda;
