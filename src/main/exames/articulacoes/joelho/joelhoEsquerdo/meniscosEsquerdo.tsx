/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MeniscosEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
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

  // const [disableRoturaInput, setdisableRoturaInput] = useState(true);
  // const [RoturaCheckbox, setRoturaCheckbox] = useState(false);
  // const [RoturaSelect, setRoturaSelect] = useState("");
  // const [CistoInput, setCistoInput] = useState("");
  // const [CistoInput2, setCistoInput2] = useState("");
  // const [disableCistoInput, setdisableCistoInput] = useState(true);
  // const [CistoCheckbox, setCistoCheckbox] = useState(false);

  //Funcoes Protrusao - Inicio

  const criaStringSemAnomalidades = () => {
    var string = `Sem anomalidades detectáveis pelo método (normais) `;
    if (!SemAnomalidadesCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string)
    }
  }

  const criaStringAlteracaoDegenerativaLateral = (Select) => {
    var string = 'Alteração Degenerativa do menisco lateral'
    removeItemString(string)
    if (AlteracaoDegenerativaLateral) {
      if (Select !== "") {
        var StringFinal = `${string} ${Select}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      }
    } else {
      removeItemString(string)
    }
  };


  useEffect(() => {
    criaStringAlteracaoDegenerativaLateral(AlteracaoDegenerativaLateralSelect);
    if (AlteracaoDegenerativaLateral) {
      setdisableAlteracaoDegenerativaLateralSelect(false);
    } else {
      //removeStringAlteracaoDegenerativaLateral();
      setAlteracaoDegenerativaLateralSelect('')
      setdisableAlteracaoDegenerativaLateralSelect(true);
    }
  }, [AlteracaoDegenerativaLateral, AlteracaoDegenerativaLateralSelect]);


  const criaStringAlteracaoDegenerativaMedial = (Select) => {
    var string = 'Alteração Degenerativa do menisco Medial'
    removeItemString(string)
    if (AlteracaoDegenerativaMedial) {
      if (Select !== "") {
        var StringFinal = `${string} ${Select}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      }
    } else {
      removeItemString(string)
    }
  };

  useEffect(() => {
    criaStringAlteracaoDegenerativaMedial(AlteracaoDegenerativaMedialSelect);
    if (AlteracaoDegenerativaMedial) {
      setdisableAlteracaoDegenerativaMedialSelect(false);
    } else {
      setAlteracaoDegenerativaMedialSelect('')
      //removeStringAlteracaoDegenerativaMedial();
      setdisableAlteracaoDegenerativaMedialSelect(true);

    }
  }, [AlteracaoDegenerativaMedial, AlteracaoDegenerativaLateralSelect]);


  const criaStringExtrusaoMedial = (Select) => {
    var string = 'Extrusao do menisco Medial'
    var StringFinal;
    removeItemString(string)
    if (ExtrusaoMedial) {
      if (Select !== "" && UltrapassandoMargemMedialInput !== '') {
        StringFinal = `${string} ${Select} ultrapassando margem medial em ${UltrapassandoMargemMedialInput}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      } else if (Select !== "") {
        StringFinal = `${string} ${Select}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      }
    } else {
      removeItemString(string)
    }
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
    var string = 'Extrusao do menisco Lateral'
    var StringFinal;
    removeItemString(string)
    if (ExtrusaoLateral) {
      if (Select !== "" && UltrapassandoMargemLateralInput !== '') {
        StringFinal = `${string} ${Select} ultrapassando margem Lateral em ${UltrapassandoMargemLateralInput}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      } else if (Select !== "") {
        StringFinal = `${string} ${Select}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      }
    } else {
      removeItemString(string)
    }
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
    var string = 'Lesao do menisco Lateral'
    var StringFinal;
    removeItemString(string)
    if (LesaoLateral) {
      if (Select1 !== "" && Select2 && AtingindoSuperficieArtLateral) {
        StringFinal = `${string} ${Select1} no ${Select2} Atingindo a superficie articular. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      } else if (Select1 !== "" && Select2 !== "") {
        StringFinal = `${string} ${Select1} no ${Select2}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      }
    } else {
      removeItemString(string)
    }
    console.log(StringFinal)
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
    removeItemString(string)
    if (LesaoMedial) {
      if (Select1 !== "" && Select2 && AtingindoSuperficieArtMedial) {
        StringFinal = `${string} ${Select1} no ${Select2} Atingindo a superficie articular. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      } else if (Select1 !== "" && Select2 !== "") {
        StringFinal = `${string} ${Select1} no ${Select2}. `;
        setLaudoPrin((arr) => [...arr, StringFinal]);
      }
    } else {
      removeItemString(string)
    }
    console.log(StringFinal)
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
    var index = laudoPrin.indexOf(value);
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };




  // const removeStringAlteracaoDegenerativaLateral = () => {
  //   laudoPrin.map((e) => {
  //     if (e.includes("Menisco medial Esquerdo com Protrusao ")) {
  //       var index = laudoPrin.indexOf(e);

  //       if (index > -1) {
  //         laudoPrin.splice(index, 1);
  //         setLaudoPrin((arr) => [...arr]);
  //       }
  //     }
  //   });
  // };
  // const removeStringAlteracaoDegenerativaMedial = () => {
  //   laudoPrin.map((e) => {
  //     if (e.includes("Menisco medial Esquerdo com Protrusao ")) {
  //       var index = laudoPrin.indexOf(e);

  //       if (index > -1) {
  //         laudoPrin.splice(index, 1);
  //         setLaudoPrin((arr) => [...arr]);
  //       }
  //     }
  //   });
  // };
  // const criaStringRotura = (Rotura) => {
  //   removeRotura();
  //   if (Rotura !== "") {
  //     var string = `Menisco medial Esquerdo com Rotura  ${Rotura}. `;
  //     setLaudoPrin((arr) => [...arr, string]);
  //   }
  // };

  // const removeRotura = () => {
  //   laudoPrin.map((e) => {
  //     if (e.includes("Menisco medial Esquerdo com Rotura ")) {
  //       var index = laudoPrin.indexOf(e);
  //       if (index > -1) {
  //         laudoPrin.splice(index, 1);
  //         setLaudoPrin((arr) => [...arr]);
  //       }
  //     }
  //   });
  // };



  // useEffect(() => {
  //   criaStringAlteracaoDegenerativaMedial(AlteracaoDegenerativaMedialSelect);
  // }, [AlteracaoDegenerativaMedialSelect]);

  // useEffect(() => {
  //   if (RoturaCheckbox) {
  //     setdisableRoturaInput(false);
  //   } else {
  //     removeRotura();
  //     setdisableRoturaInput(true);
  //   }
  // }, [RoturaCheckbox]);
  // useEffect(() => {
  //   if (CistoCheckbox) {
  //     setdisableCistoInput(false);
  //   } else {
  //     removeCisto();
  //     setdisableCistoInput(true);
  //     setCistoInput("");
  //     setCistoInput2("");
  //   }
  // }, [CistoCheckbox]);


  // useEffect(() => {
  //   criaStringRotura(RoturaSelect);
  // }, [RoturaSelect]);

  // useEffect(() => {
  //   criaStringCisto(CistoInput, CistoInput2);
  // }, [CistoInput, CistoInput2]);

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
          criaStringSemAnomalidades()
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
              onChange={(e) => {
                setAlteracaoDegenerativaLateralSelect(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              onChange={(e) => {
                setAlteracaoDegenerativaMedialSelect(e.target.value);
              }}
            >
              <option value='' disabled selected>Select</option>
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
              <option value="corno anterior">corno anterior</option>
              <option value="corno posterior">corno posterior</option>
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
