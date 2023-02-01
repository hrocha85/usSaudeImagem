/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MeniscosEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [MeniscosEsquerdo, setMeniscosEsquerdo] = useState<any>([]);

  const subExame = `Meniscos joelho Esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(MeniscosEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        MeniscosEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        MeniscosEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [MeniscosEsquerdo]);

  let { JoelhoEsquerdoLaudoNormal } = useContext(JoelhoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States Protrusao - input,checkbox e select - Inicio
  const [SemAnomalidadesCheckbox, setSemAnomalidadesCheckbox] = useState(false);

  const [disableAlteracaoDegenerativaLateralSelect, setdisableAlteracaoDegenerativaLateralSelect] = useState(true);
  const [disableAlteracaoDegenerativaMedialSelect, setdisableAlteracaoDegenerativaMedialSelect] = useState(true);
  const [AlteracaoDegenerativaLateral, setAlteracaoDegenerativaLateral] = useState(false);
  const [AlteracaoDegenerativaMedial, setAlteracaoDegenerativaMedial] = useState(false);
  const [AlteracaoDegenerativaLateralSelect, setAlteracaoDegenerativaLateralSelect] = useState("");
  const [AlteracaoDegenerativaMedialSelect, setAlteracaoDegenerativaMedialSelect] = useState("");

  const [disableExtrusaoLateralSelect, setdisableExtrusaoLateralSelect] = useState(true);
  const [disableExtrusaoMedialSelect, setdisableExtrusaoMedialSelect] = useState(true);

  const [disableLesaoLateralSelect, setdisableLesaoLateralSelect] = useState(true);
  const [disableLesaoMedialSelect, setdisableLesaoMedialSelect] = useState(true);

  const [disableAtingindoSuperficieArtLateral, setdisableAtingindoSuperficieArtLateral] = useState(true);
  const [disableAtingindoSuperficieArtMedial, setdisableAtingindoSuperficieArtMedial] = useState(true);


  const [ExtrusaoLateral, setExtrusaoLateral] = useState(false);
  const [ExtrusaoMedial, setExtrusaoMedial] = useState(false);
  const [UltrapassandoMargemMedialInput, setUltrapassandoMargemMedialInput] = useState('');
  const [UltrapassandoMargemLateralInput, setUltrapassandoMargemLateralInput] = useState('');
  const [ExtrusaoLateralSelect, setExtrusaoLateralSelect] = useState("");
  const [ExtrusaoMedialSelect, setExtrusaoMedialSelect] = useState("");

  const [LesaoLateral, setLesaoLateral] = useState(false);
  const [AtingindoSuperficieArtLateral, setAtingindoSuperficieArtLateral] = useState(false);
  const [LesaoMedial, setLesaoMedial] = useState(false);
  const [AtingindoSuperficieArtMedial, setAtingindoSuperficieArtMedial] = useState(false);

  const [LesaoLateralSelect1, setLesaoLateralSelect1] = useState("");
  const [LesaoLateralSelect2, setLesaoLateralSelect2] = useState("");
  const [LesaoMedialSelect1, setLesaoMedialSelect1] = useState("");
  const [LesaoMedialSelect2, setLesaoMedialSelect2] = useState("");


  const criaStringSemAnomalidades = () => {
    var string = `Meniscos medial e lateral sem anormalidades detectáveis pelo método.`;
    SemAnomalidadesCheckbox ? setMeniscosEsquerdo((arr) => [...arr, string]) : removeItemString(string)
  }

  useEffect(() => {
    criaStringSemAnomalidades()
  }, [SemAnomalidadesCheckbox])

  const criaStringAlteracaoDegenerativaLateral = (Select) => {
    var string = 'Alteração Degenerativa '
    removeAlteracaoDegenerativaLateral()
    if (AlteracaoDegenerativaLateral) {
      if (Select !== "") {
        var StringFinal = `${string} ${Select} do menisco lateral caracterizada por hipoecogenicidade e heterogeneidade.`;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      }
    } else {
      removeAlteracaoDegenerativaLateral()
    }
  };

  const removeAlteracaoDegenerativaLateral = () => {
    MeniscosEsquerdo.map((e) => {
      if (e.includes("do menisco lateral caracterizada por hipoecogenicidade e heterogeneidade.")) {
        var index = MeniscosEsquerdo.indexOf(e);

        if (index > -1) {
          MeniscosEsquerdo.splice(index, 1);
          setMeniscosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAlteracaoDegenerativaLateral(AlteracaoDegenerativaLateralSelect);
    if (AlteracaoDegenerativaLateral) {
      setdisableAlteracaoDegenerativaLateralSelect(false);
    } else {
      setAlteracaoDegenerativaLateralSelect('')
      setdisableAlteracaoDegenerativaLateralSelect(true);
    }
  }, [AlteracaoDegenerativaLateral, AlteracaoDegenerativaLateralSelect]);


  const criaStringAlteracaoDegenerativaMedial = (Select) => {
    var string = 'Alteração Degenerativa'
    removeAlteracaoDegenerativaMedial()
    if (AlteracaoDegenerativaMedial) {
      if (Select !== "") {
        var StringFinal = `${string} ${Select} do menisco medial caracterizada por hipoecogenicidade e heterogeneidade.`;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      }
    } else {
      removeAlteracaoDegenerativaMedial()
    }
  };

  const removeAlteracaoDegenerativaMedial = () => {
    MeniscosEsquerdo.map((e) => {
      if (e.includes("do menisco medial caracterizada por hipoecogenicidade e heterogeneidade.")) {
        var index = MeniscosEsquerdo.indexOf(e);

        if (index > -1) {
          MeniscosEsquerdo.splice(index, 1);
          setMeniscosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAlteracaoDegenerativaMedial(AlteracaoDegenerativaMedialSelect);
    if (AlteracaoDegenerativaMedial) {
      setdisableAlteracaoDegenerativaMedialSelect(false);
    } else {
      setAlteracaoDegenerativaMedialSelect('')
      setdisableAlteracaoDegenerativaMedialSelect(true);
    }
  }, [AlteracaoDegenerativaMedial, AlteracaoDegenerativaMedialSelect]);


  const criaStringExtrusaoMedial = (Select) => {
    var string = 'Deslocamento periférico do menisco medial do'
    var StringFinal;
    removeExtrusaoMedial()
    if (ExtrusaoMedial) {
      if (Select !== "" && UltrapassandoMargemMedialInput !== '') {
        StringFinal = `${string} ${Select}, ultrapassando a margem tibial em  ${UltrapassandoMargemMedialInput}. `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      } else if (Select !== "") {
        StringFinal = `${string} ${Select}, ultrapassando a margem tibial. `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      }
    } else {
      removeExtrusaoMedial()
    }
  };

  const removeExtrusaoMedial = () => {
    MeniscosEsquerdo.map((e) => {
      if (e.includes("Deslocamento periférico do menisco medial do")) {
        var index = MeniscosEsquerdo.indexOf(e);

        if (index > -1) {
          MeniscosEsquerdo.splice(index, 1);
          setMeniscosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringExtrusaoMedial(ExtrusaoMedialSelect);
    if (ExtrusaoMedial) {
      setdisableExtrusaoMedialSelect(false);
    } else {
      setExtrusaoMedialSelect('')
      setdisableExtrusaoMedialSelect(true);

    }
  }, [ExtrusaoMedial, ExtrusaoMedialSelect, UltrapassandoMargemMedialInput])

  const criaStringExtrusaoLateral = (Select) => {
    var string = 'Deslocamento periférico do menisco lateral do'
    var StringFinal;
    removeExtrusaoLateral()
    if (ExtrusaoLateral) {
      if (Select !== "" && UltrapassandoMargemLateralInput !== '') {
        StringFinal = `${string} ${Select}, ultrapassando a margem tibial em  ${UltrapassandoMargemLateralInput}. `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      } else if (Select !== "") {
        StringFinal = `${string} ${Select}, ultrapassando a margem tibial. `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      }
    } else {
      removeExtrusaoLateral()
    }
  };

  const removeExtrusaoLateral = () => {
    MeniscosEsquerdo.map((e) => {
      if (e.includes("Deslocamento periférico do menisco lateral do")) {
        var index = MeniscosEsquerdo.indexOf(e);

        if (index > -1) {
          MeniscosEsquerdo.splice(index, 1);
          setMeniscosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringExtrusaoLateral(ExtrusaoLateralSelect);
    if (ExtrusaoLateral) {
      setdisableExtrusaoLateralSelect(false);
    } else {
      setExtrusaoLateralSelect('')
      setdisableExtrusaoLateralSelect(true);

    }
  }, [ExtrusaoLateral, ExtrusaoLateralSelect, UltrapassandoMargemLateralInput])

  const criaStringLesaoLateral = (Select1, Select2) => {
    var string = 'do menisco lateral'
    var StringFinal;
    removeLesaoLateral()
    if (LesaoLateral) {
      if (Select1 !== "" && Select2 && AtingindoSuperficieArtLateral) {
        StringFinal = `Imagem linear ${Select1} hipoecogênica no ${Select2} ${string} atingindo a superficie articular.  `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      } else if (Select1 !== "" && Select2 !== "") {
        StringFinal = `Imagem linear ${Select1} hipoecogênica no ${Select2} ${string}.`;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      }
    } else {
      removeLesaoLateral()
    }
  };
  const removeLesaoLateral = () => {
    MeniscosEsquerdo.map((e) => {
      if (e.includes('do menisco lateral')) {
        var index = MeniscosEsquerdo.indexOf(e);

        if (index > -1) {
          MeniscosEsquerdo.splice(index, 1);
          setMeniscosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringLesaoLateral(LesaoLateralSelect1, LesaoLateralSelect2);
    if (LesaoLateral) {
      setdisableLesaoLateralSelect(false);
      setdisableAtingindoSuperficieArtLateral(false)
    } else {
      setLesaoLateralSelect1('')
      setLesaoLateralSelect2('')
      setdisableLesaoLateralSelect(true);
      setdisableAtingindoSuperficieArtLateral(true)

    }
  }, [LesaoLateral, LesaoLateralSelect1, LesaoLateralSelect2, AtingindoSuperficieArtLateral])

  const criaStringLesaoMedial = (Select1, Select2) => {
    var string = 'Lesao do menisco Medial'
    var StringFinal;
    removeLesaoMedial()
    if (LesaoMedial) {
      if (Select1 !== "" && Select2 && AtingindoSuperficieArtMedial) {
        StringFinal = `${string} ${Select1} no ${Select2} Atingindo a superficie articular. `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      } else if (Select1 !== "" && Select2 !== "") {
        StringFinal = `${string} ${Select1} no ${Select2}. `;
        setMeniscosEsquerdo((arr) => [...arr, StringFinal]);
      }
    } else {
      removeLesaoMedial()
    }
  };

  const removeLesaoMedial = () => {
    MeniscosEsquerdo.map((e) => {
      if (e.includes('Lesao do menisco Medial')) {
        var index = MeniscosEsquerdo.indexOf(e);

        if (index > -1) {
          MeniscosEsquerdo.splice(index, 1);
          setMeniscosEsquerdo((arr) => [...arr]);
        }
      }
    });
  };


  useEffect(() => {
    criaStringLesaoMedial(LesaoMedialSelect1, LesaoMedialSelect2);
    if (LesaoMedial) {
      setdisableLesaoMedialSelect(false);
      setdisableAtingindoSuperficieArtMedial(false)
    } else {
      setLesaoMedialSelect1('')
      setLesaoMedialSelect2('')
      setdisableLesaoMedialSelect(true);
      setdisableAtingindoSuperficieArtMedial(true)
    }
  }, [LesaoMedial, LesaoMedialSelect1, LesaoMedialSelect2, AtingindoSuperficieArtMedial])

  const removeItemString = (value) => {
    var index = MeniscosEsquerdo.indexOf(value);
    if (index > -1) {
      MeniscosEsquerdo.splice(index, 1);
      setMeniscosEsquerdo((arr) => [...arr]);
    }
  };


  useEffect(() => {
    JoelhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoEsquerdoLaudoNormal])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Meniscos" />


      <Checkbox
        isDisabled={disableTudo}
        onChange={() => {
          setSemAnomalidadesCheckbox(!SemAnomalidadesCheckbox)
        }}>
        Sem anomalidades detectáveis pelo método (normais)
      </Checkbox>


      <Box
        mt='5px'>
        <Text
          color="#1A202C"
          fontSize="18px"
          fontWeight="bold"

        >
          Alterações Degenerativas
        </Text>
        <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
          <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
            <Checkbox
              isDisabled={disableTudo}
              onChange={() => setAlteracaoDegenerativaLateral(!AlteracaoDegenerativaLateral)}>
              do menisco lateral
            </Checkbox>
            <Select
              w='150px'
              isDisabled={disableAlteracaoDegenerativaLateralSelect}
              value={AlteracaoDegenerativaLateralSelect}
              onChange={(e) => {
                setAlteracaoDegenerativaLateralSelect(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno posterior">corno posterior</option>
              <option value="corpo">corpo</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corpo e corno posterior">corpo e corno posterior</option>
              <option value="corpo e corno anterior">corpo e corno anterior</option>
              <option value="corno anterior, corpo e corno posterior">corno anterior, corpo e corno posterior</option>
            </Select>
          </Box>
          <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
            <Checkbox
              isDisabled={disableTudo}
              onChange={() => setAlteracaoDegenerativaMedial(!AlteracaoDegenerativaMedial)}>
              do menisco medial
            </Checkbox>
            <Select
              w='150px'
              isDisabled={disableAlteracaoDegenerativaMedialSelect}
              value={AlteracaoDegenerativaMedialSelect}
              onChange={(e) => {
                setAlteracaoDegenerativaMedialSelect(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno posterior">corno posterior</option>
              <option value="corpo">corpo</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corpo e corno posterior">corpo e corno posterior</option>
              <option value="corpo e corno anterior">corpo e corno anterior</option>
              <option value="corno anterior, corpo e corno posterior">corno anterior, corpo e corno posterior</option>
            </Select>
          </Box>
        </Box>
      </Box>

      <Box
        mt='5px'>
        <Text
          color="#1A202C"
          fontSize="18px"
          fontWeight="bold"

        >
          Extrusão
        </Text>
        <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
          <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
            <Checkbox
              isDisabled={disableTudo}
              onChange={() => setExtrusaoLateral(!ExtrusaoLateral)}>
              do menisco lateral
            </Checkbox>
            <Select
              w='150px'
              isDisabled={disableExtrusaoLateralSelect}
              value={ExtrusaoLateralSelect}
              onChange={(e) => {
                setExtrusaoLateralSelect(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno posterior">corno posterior</option>
              <option value="corpo">corpo</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corpo e corno posterior">corpo e corno posterior</option>
              <option value="corpo e corno anterior">corpo e corno anterior</option>
              <option value="corno anterior, corpo e corno posterior">corno anterior, corpo e corno posterior</option>
            </Select>
            <Center>
              <Text>
                Ultrapassando a margem tibial em
              </Text>
            </Center>
            <Input
              isDisabled={disableExtrusaoLateralSelect}
              value={UltrapassandoMargemLateralInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setUltrapassandoMargemLateralInput(e.target.value) }}
            />
            <Text> mm</Text>
          </Box>
          <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
            <Checkbox
              isDisabled={disableTudo}
              onChange={() => setExtrusaoMedial(!ExtrusaoMedial)}>
              do menisco medial
            </Checkbox>
            <Select
              w='150px'
              isDisabled={disableExtrusaoMedialSelect}
              value={ExtrusaoMedialSelect}
              onChange={(e) => {
                setExtrusaoMedialSelect(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno posterior">corno posterior</option>
              <option value="corpo">corpo</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corpo e corno posterior">corpo e corno posterior</option>
              <option value="corpo e corno anterior">corpo e corno anterior</option>
              <option value="corno anterior, corpo e corno posterior">corno anterior, corpo e corno posterior</option>
            </Select>
            <Center>
              <Text>
                Ultrapassando a margem tibial em
              </Text>
            </Center>
            <Input
              isDisabled={disableExtrusaoMedialSelect}
              value={UltrapassandoMargemMedialInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setUltrapassandoMargemMedialInput(e.target.value) }}
            />
            <Text> mm</Text>
          </Box>
        </Box>
      </Box>

      <Box
        mt='5px'>
        <Text
          color="#1A202C"
          fontSize="18px"
          fontWeight="bold"

        >
          Lesão
        </Text>
        <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
          <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
            <Checkbox
              isDisabled={disableTudo}
              onChange={() => setLesaoLateral(!LesaoLateral)}>
              do menisco lateral
            </Checkbox>
            <Select
              w='150px'
              isDisabled={disableLesaoLateralSelect}
              value={LesaoLateralSelect1}
              onChange={(e) => {
                setLesaoLateralSelect1(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="longitudinal">longitudinal</option>
              <option value="oblíqua">oblíqua</option>
              <option value="radial">radial</option>
              <option value="horizontal">horizontal</option>
            </Select>
            <Select
              w='150px'
              isDisabled={disableLesaoLateralSelect}
              value={LesaoLateralSelect2}
              onChange={(e) => {
                setLesaoLateralSelect2(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno posterior">corno posterior</option>
              <option value="corpo">corpo</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corpo e corno posterior">corpo e corno posterior</option>
              <option value="corpo e corno anterior">corpo e corno anterior</option>
              <option value="corno anterior, corpo e corno posterior">corno anterior, corpo e corno posterior</option>
            </Select>
            <Checkbox
              isDisabled={disableAtingindoSuperficieArtLateral}
              onChange={() => setAtingindoSuperficieArtLateral(!AtingindoSuperficieArtLateral)}>
              atingindo a superficie articular
            </Checkbox>
          </Box>

          <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>
            <Checkbox
              isDisabled={disableTudo}
              onChange={() => setLesaoMedial(!LesaoMedial)}>
              do menisco medial
            </Checkbox>
            <Select
              w='150px'
              isDisabled={disableLesaoMedialSelect}
              value={LesaoMedialSelect1}
              onChange={(e) => {
                setLesaoMedialSelect1(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="longitudinal">longitudinal</option>
              <option value="oblíqua">oblíqua</option>
              <option value="radial">radial</option>
              <option value="horizontal">horizontal</option>
            </Select>
            <Select
              w='150px'
              isDisabled={disableLesaoMedialSelect}
              value={LesaoMedialSelect2}
              onChange={(e) => {
                setLesaoMedialSelect2(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno posterior">corno posterior</option>
              <option value="corpo">corpo</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corpo e corno posterior">corpo e corno posterior</option>
              <option value="corpo e corno anterior">corpo e corno anterior</option>
              <option value="corno anterior, corpo e corno posterior">corno anterior, corpo e corno posterior</option>
            </Select>
            <Checkbox
              isDisabled={disableAtingindoSuperficieArtMedial}
              onChange={() => setAtingindoSuperficieArtMedial(!AtingindoSuperficieArtMedial)}>
              atingindo a superficie articular
            </Checkbox>
          </Box>
        </Box>
      </Box>
    </Box>

  );
}
export default MeniscosEsquerdo;
