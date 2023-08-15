/* eslint-disable array-callback-return */

import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Axilas() {
  const altura = "100%";
  const largura = "66%";

  const [frasesAxilas, setFrasesAxilas] = useState<any>([]);

  const [CheckboxAxilasLinfadenomegalia, setCheckboxAxilasLinfadenomegalia] = useState(false);
  const [valueSelectAxilasLinfadenomegalia, setValueSelectAxilasLinfadenomegalia] = useState("");

  const [CheckboxAxilaAcessoria, setCheckboxAxilaAcessoria] = useState(false);
  const [valueSelectAxilaAcessoria, setValueSelectAxilaAcessoria] = useState("");

  const [CheckboxPeleTecido, setCheckboxPeleTecido] = useState(false);
  const [valueSelectPeleTecido, setValueSelectPeleTecido] = useState("");

  const [CheckboxTecidoFibrograndular, setCheckboxTecidoFibrograndular] = useState(false);
  const [ValueSelectTecidoFibrograndular, setValueSelectTecidoFibrograndular] = useState("");

  const [CheckboxSemNodulo, setCheckboxSemNodulo] = useState(false);
  const [ValueSelectSemNodulo, setValueSelectSemNodulo] = useState('');

  const [CheckboxPresencaImagemSolida, setCheckboxPresencaImagemSolida] = useState(false);
  const [ValueSelectPresencaImagemSolida, setValueSelectPresencaImagemSolida] = useState("");

  const [CheckboxIsoecogenica, setCheckboxIsoecogenica] = useState(false);
  const [ValueSelectIsoecogenica, setValueSelectIsoecogenica] = useState("");

  const [CheckboxHipoecogenica, setCheckboxHipoecogenica] = useState(false);
  const [ValueSelectHipoecogenica, setValueSelectHipoecogenica] = useState("");

  const [CheckboxHiperecogenicaContornos, setCheckboxHiperecogenicaContornos] = useState(false);
  const [ValueSelectHiperecogenicaContornos, setValueSelectHiperecogenicaContornos] = useState("");

  const [RegularesCheckbox, setRegularesCheckbox] = useState(false);
  const [ValueSelectRegulares, setValueSelectRegulares] = useState("");

  const [IrregularesCheckbox, setIrregularesCheckbox] = useState(false);
  const [ValueSelectIrregulares, setValueSelectIrregulares] = useState("");

  const [ParcialmentePrecisosCheckbox, setParcialmentePrecisosCheckbox] = useState(false);
  const [ValueSelectParcialmentePrecisos, setValueSelectParcialmentePrecisos] = useState("");

  const [ParalelaPeleCheckbox, setParalelaPeleCheckbox] = useState(false);
  const [ValueSelectParalelaPele, setValueSelectParalelaPele] = useState("");

  const [PerpendicularPeleCheckbox, setPerpendicularPeleCheckbox] = useState(false);
  const [PerpendicularPeleInput, setPerpendicularPeleInput] = useState('');

  const [LinfonodosAxilaresCheckbox, setLinfonodosAxilaresCheckbox] = useState(false);
  const [ValueSelectLinfonodosAxilares, setValueSelectLinfonodosAxilares] = useState("");

  const [SugestivasLinfonodomegaliaCheckbox, setSugestivasLinfonodomegaliaCheckbox] = useState(false);
  const [ValueSelectSugestivasLinfonodomegalia, setValueSelectSugestivasLinfonodomegalia] = useState("");

  const [SugestivasLinfonodomegaliaAtipicosCheckbox, setSugestivasLinfonodomegaliaAtipicosCheckbox] = useState(false);
  const [ValueSelectSugestivasLinfonodomegaliaAtipicos, setValueSelectSugestivasLinfonodomegaliaAtipicos] = useState("");


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
    const string = `Não há evidência de nódulo ou massa de caráter sólido, cístico ou complexo.`
    CheckboxSemNodulo ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxSemNodulo]);
  //--------------------

  useEffect(() => {
    const string = `Parcialmente precisos e bordos finos, bem circunscrito, de orientação.`
    ParcialmentePrecisosCheckbox ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [ParcialmentePrecisosCheckbox]);
  useEffect(() => {
    const string = `Paralela a pele.`
    ParalelaPeleCheckbox ? setFrasesAxilas((arr) => [...arr, string]) : removeItemString(string)
  }, [ParalelaPeleCheckbox]);

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

  const criaStringPerpendicularPele = () => {
    removeFrasePerpedicularPele()
    let string = 'Perpendicular a pele, medindo cerca de'
    if (PerpendicularPeleCheckbox && PerpendicularPeleInput != '') {
      string = `${string} ${PerpendicularPeleInput} cm.`
      setFrasesAxilas((arr) => [...arr, string]);
    }
  }
  useEffect(() => {
    criaStringPerpendicularPele()
  }, [PerpendicularPeleCheckbox, PerpendicularPeleInput])

  const removeFrasePerpedicularPele = () => {
    frasesAxilas.map((e) => {
      if (e.includes("Perpendicular a pele, medindo cerca de")) {
        const index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

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

  const criaStringAxilasLinfadenomegalia = () => {
    let string = 'Linfadenomegalia'
    removeFraseSelect(string);
    if (CheckboxAxilasLinfadenomegalia) {
      if (valueSelectAxilasLinfadenomegalia !== "") {
        string = `${string} ${valueSelectAxilasLinfadenomegalia}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectAxilasLinfadenomegalia("");
    }
  };

  useEffect(() => {
    criaStringAxilasLinfadenomegalia();
  }, [valueSelectAxilasLinfadenomegalia, CheckboxAxilasLinfadenomegalia]);

  const criaStringAxilaAcessoria = () => {
    let string = 'Axila acessória'
    removeFraseSelect(string);
    if (CheckboxAxilaAcessoria) {
      if (valueSelectAxilaAcessoria !== "") {
        string = `${string}  ${valueSelectAxilaAcessoria}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectAxilaAcessoria("");
    }
  };

  useEffect(() => {
    criaStringAxilaAcessoria();
  }, [valueSelectAxilaAcessoria, CheckboxAxilaAcessoria]);

  const criaStringTecidoFibrograndular = () => {
    let string = 'Presença de tecido fibroglandular'
    removeFraseSelect(string);
    if (CheckboxTecidoFibrograndular) {
      if (ValueSelectTecidoFibrograndular !== "") {
        string = `${string}  ${ValueSelectTecidoFibrograndular}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectTecidoFibrograndular("");
    }
  };

  useEffect(() => {
    criaStringTecidoFibrograndular();
  }, [ValueSelectTecidoFibrograndular, CheckboxTecidoFibrograndular]);

  const criaStringPresencaImagemSolida = () => {
    let string = 'Presença de imagem sólida'
    removeFraseSelect(string);
    if (CheckboxPresencaImagemSolida) {
      if (ValueSelectPresencaImagemSolida !== "") {
        string = `${string}  ${ValueSelectPresencaImagemSolida}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectPresencaImagemSolida("");
    }
  };

  useEffect(() => {
    criaStringPresencaImagemSolida();
  }, [ValueSelectPresencaImagemSolida, CheckboxPresencaImagemSolida]);

  const criaStringIsoecogenica = () => {
    let string = 'Presença de imagem isoecogênica'
    removeFraseSelect(string);
    if (CheckboxIsoecogenica) {
      if (ValueSelectIsoecogenica !== "") {
        string = `${string}  ${ValueSelectIsoecogenica}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectIsoecogenica("");
    }
  };

  useEffect(() => {
    criaStringIsoecogenica();
  }, [ValueSelectIsoecogenica, CheckboxIsoecogenica]);

  const criaStringHipoecogenica = () => {
    let string = 'Imagem sugestiva de Hipoecogênica'
    removeFraseSelect(string);
    if (CheckboxHipoecogenica) {
      if (ValueSelectHipoecogenica !== "") {
        string = `${string}  ${ValueSelectHipoecogenica}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectHipoecogenica("");
    }
  };

  useEffect(() => {
    criaStringHipoecogenica();
  }, [ValueSelectHipoecogenica, CheckboxHipoecogenica]);

  const criaStringHiperecogenicaContornos = () => {
    let string = 'Imagem sugestiva de Hiperecogênica de contornos '
    removeFraseSelect(string);
    if (CheckboxHiperecogenicaContornos) {
      if (ValueSelectHiperecogenicaContornos !== "") {
        string = `${string}  ${ValueSelectHiperecogenicaContornos}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectHiperecogenicaContornos("");
    }
  };

  useEffect(() => {
    criaStringHiperecogenicaContornos();
  }, [ValueSelectHiperecogenicaContornos, CheckboxHiperecogenicaContornos]);

  const criaStringRegulares = () => {
    let string = 'regular.'
    removeFraseSelect(string);
    if (RegularesCheckbox) {
      if (ValueSelectRegulares !== "") {
        string = `${ValueSelectRegulares} ${string}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectRegulares("");
    }
  };

  useEffect(() => {
    criaStringRegulares();
  }, [ValueSelectRegulares, RegularesCheckbox]);

  const criaStringIrregulares = () => {
    let string = 'irregular.'
    removeFraseSelect(string);
    if (IrregularesCheckbox) {
      if (ValueSelectIrregulares !== "") {
        string = `${ValueSelectIrregulares} ${string}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectIrregulares("");
    }
  };

  useEffect(() => {
    criaStringIrregulares();
  }, [ValueSelectIrregulares, IrregularesCheckbox]);


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


  const subExame = "Axilas";
  const titulo_exame = "Mamas";

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
        <TituloNomeExame titulo="Axila Direita" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box display="flex">
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
          <Box display="flex" flexWrap='wrap'>
            <Checkbox
              onChange={(e) => {
                setPerpendicularPeleCheckbox(
                  !PerpendicularPeleCheckbox
                );
              }}
            >Perpendicular a pele, medindo cerca de
            </Checkbox>
            <Input
              p='0px'
              textAlign='center'
              w='40px'
              isDisabled={!PerpendicularPeleCheckbox}
              value={PerpendicularPeleInput}
              onChange={(e) => setPerpendicularPeleInput(e.target.value)}
            >

            </Input>
            <Text alignSelf='center'>cm</Text>
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
            <Select
              w="150px"
              isDisabled={!CheckboxSemNodulo}
              onChange={(e) => {
                setValueSelectSemNodulo(e.target.value);
              }}
              value={ValueSelectSemNodulo}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!CheckboxAxilasLinfadenomegalia}
              onChange={(e) => {
                setValueSelectAxilasLinfadenomegalia(e.target.value);
              }}
              value={valueSelectAxilasLinfadenomegalia}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxAxilaAcessoria(!CheckboxAxilaAcessoria);
              }}
            >
              Axila Acessório
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!CheckboxAxilaAcessoria}
              onChange={(e) => {
                setValueSelectAxilaAcessoria(e.target.value);
              }}
              value={valueSelectAxilaAcessoria}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
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
            <Select
              w="150px"
              isDisabled={!CheckboxTecidoFibrograndular}
              onChange={(e) => {
                setValueSelectTecidoFibrograndular(e.target.value);
              }}
              value={ValueSelectTecidoFibrograndular}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!CheckboxPresencaImagemSolida}
              onChange={(e) => {
                setValueSelectPresencaImagemSolida(e.target.value);
              }}
              value={ValueSelectPresencaImagemSolida}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!CheckboxIsoecogenica}
              onChange={(e) => {
                setValueSelectIsoecogenica(e.target.value);
              }}
              value={ValueSelectIsoecogenica}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!CheckboxHipoecogenica}
              onChange={(e) => {
                setValueSelectHipoecogenica(e.target.value);
              }}
              value={ValueSelectHipoecogenica}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
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
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setRegularesCheckbox(
                  !RegularesCheckbox
                );
              }}
            >Regulares
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!RegularesCheckbox}
              onChange={(e) => {
                setValueSelectRegulares(e.target.value);
              }}
              value={ValueSelectRegulares}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Axila direita">axila direita</option>
              <option value="Axila esquerda">axila esquerda</option>
              <option value="Axila esquerda e direita">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setIrregularesCheckbox(
                  !IrregularesCheckbox
                );
              }}
            >Irregulares
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!IrregularesCheckbox}
              onChange={(e) => {
                setValueSelectIrregulares(e.target.value);
              }}
              value={ValueSelectIrregulares}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Axila direita">axila direita</option>
              <option value="Axila esquerda">axila esquerda</option>
              <option value="Axila esquerda e direita">bilateral</option>
            </Select>
          </Box>

          <Box display="flex">
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
                setValueSelectParcialmentePrecisos(e.target.value);
              }}
              value={ValueSelectParcialmentePrecisos}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setParalelaPeleCheckbox(
                  !ParalelaPeleCheckbox
                );
              }}
            >Paralela a pele.
            </Checkbox>
            <Select
              w="150px"
              isDisabled={!ParalelaPeleCheckbox}
              onChange={(e) => {
                setValueSelectParalelaPele(e.target.value);
              }}
              value={ValueSelectParalelaPele}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!LinfonodosAxilaresCheckbox}
              onChange={(e) => {
                setValueSelectLinfonodosAxilares(e.target.value);
              }}
              value={ValueSelectLinfonodosAxilares}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!SugestivasLinfonodomegaliaCheckbox}
              onChange={(e) => {
                setValueSelectSugestivasLinfonodomegalia(e.target.value);
              }}
              value={ValueSelectSugestivasLinfonodomegalia}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
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
            <Select
              w="150px"
              isDisabled={!SugestivasLinfonodomegaliaAtipicosCheckbox}
              onChange={(e) => {
                setValueSelectSugestivasLinfonodomegaliaAtipicos(e.target.value);
              }}
              value={ValueSelectSugestivasLinfonodomegaliaAtipicos}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Axilas;
