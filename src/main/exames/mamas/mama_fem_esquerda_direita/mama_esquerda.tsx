/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Mama_esquerda() {
  const altura = "100%";
  const largura = "33%";

  const [frasesMamas, setFrasesMamas] = useState<any>([]);


  const [CheckboxSemNodulo, setCheckboxSemNodulo] = useState(false);
  const [CheckboxPresencaImagemSolida, setCheckboxPresencaImagemSolida] = useState(false);
  const [CheckboxIsoecogenica, setCheckboxIsoecogenica] = useState(false);
  const [CheckboxHipoecogenica, setCheckboxHipoecogenica] = useState(false);
  const [CheckboxHiperecogenicaContornos, setCheckboxHiperecogenicaContornos] = useState(false);
  const [ValueSelectHiperecogenicaContornos, setValueSelectHiperecogenicaContornos] = useState('');

  const [ParcialmentePrecisosCheckbox, setParcialmentePrecisosCheckbox] = useState(false);
  const [QSLCheckbox, setQSLCheckbox] = useState(false);
  const [QSMCheckbox, setQSMCheckbox] = useState(false);
  const [QILCheckbox, setQILCheckbox] = useState(false);
  const [QIMCheckbox, setQIMCheckbox] = useState(false);
  const [PerpendicularPeleInput, setPerpendicularPeleInput] = useState('');
  const [PerpendicularPeleInput2, setPerpendicularPeleInput2] = useState('');
  const [PerpendicularPeleSelect, setPerpendicularPeleSelect] = useState('');

  const [HomogeneaGordurosoCheckbox, setHomogeneaGordurosoCheckbox] = useState(false);
  const [HomogeneaFibroglandularCheckbox, setHomogeneaFibroglandularCheckbox] = useState(false);
  const [HeterogeneaFibroglandularCheckbox, setHeterogeneaFibroglandularCheckbox] = useState(false);
  const [HomogeneaTecidoMamarioRetroAreolaresCheckbox, setHomogeneaTecidoMamarioRetroAreolaresCheckbox] = useState(false);
  const [HomogeneaTecidoMamarioGordurosoCheckbox, setHomogeneaTecidoMamarioGordurosoCheckbox] = useState(false);
  const [EspacoMamarioNormalCheckbox, setEspacoMamarioNormalCheckbox] = useState(false);


  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesMamas.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesMamas.splice(index, 1);
      setFrasesMamas((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = `Presença de tecido fibroglandular em regiao axilar.`
    HomogeneaGordurosoCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneaGordurosoCheckbox]);

  useEffect(() => {
    const string = `Não há evidência de nódulo ou massa de caráter sólido, cístico ou complexo.`
    CheckboxSemNodulo ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxSemNodulo]);

  useEffect(() => {
    const string = `Presença de imagem sólida.`
    CheckboxPresencaImagemSolida ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxPresencaImagemSolida]);

  useEffect(() => {
    const string = `Isoecogênica.`
    CheckboxIsoecogenica ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxIsoecogenica]);

  useEffect(() => {
    const string = `Hipoecogênica.`
    CheckboxHipoecogenica ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [CheckboxHipoecogenica]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com predomínio do tecido gorduroso.`
    HomogeneaGordurosoCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneaGordurosoCheckbox]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com predomínio do tecido fibroglandular.`
    HomogeneaFibroglandularCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneaFibroglandularCheckbox]);

  useEffect(() => {
    const string = `Ecotextura heterogênea de fundo, com predomínio do tecido fibroglandular.`
    HeterogeneaFibroglandularCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [HeterogeneaFibroglandularCheckbox]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com o tecido mamário em maiores proporções nos quadrantes súpero-externos e regiões retro areolares.`
    HomogeneaTecidoMamarioRetroAreolaresCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneaTecidoMamarioRetroAreolaresCheckbox]);

  useEffect(() => {
    const string = `Ecotextura homogênea de fundo, com tecido mamário entremeado por tecido gorduroso.`
    HomogeneaTecidoMamarioGordurosoCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneaTecidoMamarioGordurosoCheckbox]);

  useEffect(() => {
    const string = `Espaço retro mamário normal.`
    EspacoMamarioNormalCheckbox ? setFrasesMamas((arr) => [...arr, string]) : removeItemString(string)
  }, [EspacoMamarioNormalCheckbox]);


  const criaStringHperecogenicaContornos = () => {
    var string = 'Hiperecogênica de contornos '
    removeFraseSelect(string);
    if (CheckboxHiperecogenicaContornos) {
      if (ValueSelectHiperecogenicaContornos !== "") {
        string = `${string} ${ValueSelectHiperecogenicaContornos}.`;
        setFrasesMamas((arr) => [...arr, string]);
      }
    } else {
      setValueSelectHiperecogenicaContornos("");
    }
  };

  useEffect(() => {
    criaStringHperecogenicaContornos();
  }, [ValueSelectHiperecogenicaContornos, CheckboxHiperecogenicaContornos]);


  const criaStringParcialmentePrecisos = () => {
    var string = 'parcialmente precisos e bordos finos, bem circunscrito, de orientação'
    removeFraseSelect(string)
    if (ParcialmentePrecisosCheckbox) {
      if (PerpendicularPeleInput != '' && PerpendicularPeleSelect != '' && PerpendicularPeleInput2 != '') {
        string = `${string} ${PerpendicularPeleSelect} medindo cerca de ${PerpendicularPeleInput} cm à ${PerpendicularPeleInput2} cm da região aerolar`
        if (QSLCheckbox || QSMCheckbox || QILCheckbox || QIMCheckbox) {
          string = `${string}. Localizado em`
          if (QSLCheckbox) string = `${string}, QSL`
          if (QSMCheckbox) string = `${string}, QSM`
          if (QILCheckbox) string = `${string}, QIL`
          if (QIMCheckbox) string = `${string}, QIM`
        }
        string = `${string}.`

        setFrasesMamas((arr) => [...arr, string]);
      }
    } else {
      setPerpendicularPeleSelect('')
      setPerpendicularPeleInput('')
      setPerpendicularPeleInput2('')
    }
  }
  useEffect(() => {
    criaStringParcialmentePrecisos()
  }, [ParcialmentePrecisosCheckbox, PerpendicularPeleInput, PerpendicularPeleInput2, PerpendicularPeleSelect, QSLCheckbox, QSMCheckbox, QILCheckbox, QIMCheckbox])
  const removeFraseSelect = (value) => {
    frasesMamas.map((e) => {
      if (e.includes(value)) {
        let index = frasesMamas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMamas.splice(index, 1);
          setFrasesMamas((arr) => [...arr]);
        }
      }
    });
  };

  const subExame = "Mama esquerda";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesMamas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMamas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMamas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMamas]);

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
        <TituloNomeExame titulo="Mama feminina esquerda" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">

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
            />


            <Text alignSelf='center'>cm, </Text>
            <Input
              p='0px'
              textAlign='center'
              w='40px'
              isDisabled={!ParcialmentePrecisosCheckbox}
              value={PerpendicularPeleInput2}
              onChange={(e) => setPerpendicularPeleInput2(e.target.value)}
            />
            <Text alignSelf='center'>cm da região areolar.</Text>
            <Text alignSelf='center'>Localizado em</Text>
            <Checkbox
              isDisabled={!ParcialmentePrecisosCheckbox}
              onChange={(e) => {
                setQSLCheckbox(
                  !QSLCheckbox
                );
              }}
            >QSL
            </Checkbox>
            <Checkbox
              isDisabled={!ParcialmentePrecisosCheckbox}
              onChange={(e) => {
                setQSMCheckbox(
                  !QSMCheckbox
                );
              }}
            >QSM
            </Checkbox>
            <Checkbox
              isDisabled={!ParcialmentePrecisosCheckbox}
              onChange={(e) => {
                setQILCheckbox(
                  !QILCheckbox
                );
              }}
            >QIL
            </Checkbox>
            <Checkbox
              isDisabled={!ParcialmentePrecisosCheckbox}
              onChange={(e) => {
                setQIMCheckbox(
                  !QIMCheckbox
                );
              }}
            >QIM
            </Checkbox>
          </Box>


          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setHomogeneaGordurosoCheckbox(
                  !HomogeneaGordurosoCheckbox
                );
              }}
            >
              Ecotextura homogênea de fundo, com predomínio do tecido gorduroso.
            </Checkbox>
          </Box>

          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setHomogeneaFibroglandularCheckbox(
                  !HomogeneaFibroglandularCheckbox
                );
              }}
            >
              Ecotextura homogênea de fundo, com predomínio do tecido fibroglandular.
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setHeterogeneaFibroglandularCheckbox(
                  !HeterogeneaFibroglandularCheckbox
                );
              }}
            >
              Ecotextura heterogênea de fundo, com predomínio do tecido fibroglandular.
            </Checkbox>
          </Box>

          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setHomogeneaTecidoMamarioRetroAreolaresCheckbox(
                  !HomogeneaTecidoMamarioRetroAreolaresCheckbox
                );
              }}
            >
              Ecotextura homogênea de fundo, com o tecido mamário em maiores proporções nos quadrantes súpero-externos e regiões retro areolares.
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setHomogeneaTecidoMamarioGordurosoCheckbox(
                  !HomogeneaTecidoMamarioGordurosoCheckbox
                );
              }}
            >
              Ecotextura homogênea de fundo, com tecido mamário entremeado por tecido gorduroso.
            </Checkbox>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setEspacoMamarioNormalCheckbox(
                  !EspacoMamarioNormalCheckbox
                );
              }}
            >
              Espaço retro mamário normal.
            </Checkbox>
          </Box>



        </Box>
      </Box>
    </Box>
  );
}

export default Mama_esquerda;
