/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
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

function Partes_Moles() {
  const altura = "100%";
  const largura = "66%";

  const [frasesPartesMoles, setFrasesPartesMoles] = useState<any>([]);

  const [inputLocalNormal, setInputLocalNormal] = useState("");
  const [LocalNormalCheckbox, setCheckboxLocalNormal] = useState(false);
  const [disableInputLocalNormal, setDisableInputLocalNormal] = useState(true);

  const [inputLocalLipoma, setInputLocalLipoma] = useState("");
  const [LocalLipomaCheckbox, setCheckboxLocalLipoma] = useState(false);
  const [disableInputLocalLipoma, setDisableInputLocalLipoma] = useState(true);

  const [inputLocalNodulo, setInputLocalNodulo] = useState("");
  const [LocalNoduloCheckbox, setCheckboxLocalNodulo] = useState(false);
  const [disableInputLocalNodulo, setDisableInputLocalNodulo] = useState(true);

  const [Lipoma1Checkbox, setLipoma1Checkbox] = useState(false);
  const [disableLipomaInput1, setDisableLipomaInput1] = useState(true);
  const [medida1Lipoma1, setMedida1Lipoma1] = useState("");
  const [medida2Lipoma1, setMedida2Lipoma1] = useState("");
  const [medida3Lipoma1, setMedida3Lipoma1] = useState("");

  const [Lipoma2Checkbox, setLipoma2Checkbox] = useState(false);
  const [disableLipomaInput2, setDisableLipomaInput2] = useState(true);
  const [medida1Lipoma2, setMedida1Lipoma2] = useState("");
  const [medida2Lipoma2, setMedida2Lipoma2] = useState("");
  const [medida3Lipoma2, setMedida3Lipoma2] = useState("");

  const [Lipoma3Checkbox, setLipoma3Checkbox] = useState(false);
  const [disableLipomaInput3, setDisableLipomaInput3] = useState(true);
  const [medida1Lipoma3, setMedida1Lipoma3] = useState("");
  const [medida2Lipoma3, setMedida2Lipoma3] = useState("");
  const [medida3Lipoma3, setMedida3Lipoma3] = useState("");

  const [Lipoma4Checkbox, setLipoma4Checkbox] = useState(false);
  const [disableLipomaInput4, setDisableLipomaInput4] = useState(true);
  const [medida1Lipoma4, setMedida1Lipoma4] = useState("");
  const [medida2Lipoma4, setMedida2Lipoma4] = useState("");
  const [medida3Lipoma4, setMedida3Lipoma4] = useState("");

  const [LipomaMultiplosCheckbox, setLipomaMultiplosCheckbox] = useState(false);
  const [disableLipomaInputMultiplos, setDisableLipomaInputMultiplos] =
    useState(true);
  const [medida1LipomaMultiplos, setMedida1LipomaMultiplos] = useState("");
  const [medida2LipomaMultiplos, setMedida2LipomaMultiplos] = useState("");
  const [medida3LipomaMultiplos, setMedida3LipomaMultiplos] = useState("");

  const [ecogenicidadeNoduloSelect, setEcogenicidadeNoduloSelect] =
    useState("");
  const [planoNoduloSelect, setPlanoNoduloSelect] = useState("");
  const [medida1Nodulo, setMedida1Nodulo] = useState("");
  const [medida2Nodulo, setMedida2Nodulo] = useState("");
  const [medida3Nodulo, setMedida3Nodulo] = useState("");

  useEffect(() => {
    LocalNormalCheckbox
      ? setDisableInputLocalNormal(false)
      : setDisableInputLocalNormal(true);
    removeLocalNormal();
    setInputLocalNormal("");
  }, [LocalNormalCheckbox]);

  useEffect(() => {
    LocalLipomaCheckbox
      ? setDisableInputLocalLipoma(false)
      : setDisableInputLocalLipoma(true);
    removeLocalLipoma();
    setInputLocalLipoma("");
  }, [LocalLipomaCheckbox]);

  useEffect(() => {
    LocalNoduloCheckbox
      ? setDisableInputLocalNodulo(false)
      : setDisableInputLocalNodulo(true);
    removeLocalNodulo();
    setInputLocalNodulo("");
    setEcogenicidadeNoduloSelect("");
    setPlanoNoduloSelect("");
    setMedida1Nodulo("");
    setMedida2Nodulo("");
    setMedida3Nodulo("");
  }, [LocalNoduloCheckbox]);

  useEffect(() => {
    Lipoma1Checkbox
      ? setDisableLipomaInput1(false)
      : setDisableLipomaInput1(true);
    removeLipoma1();
    setMedida1Lipoma1("");
    setMedida2Lipoma1("");
    setMedida3Lipoma1("");
  }, [Lipoma1Checkbox]);

  useEffect(() => {
    Lipoma2Checkbox
      ? setDisableLipomaInput2(false)
      : setDisableLipomaInput2(true);
    removeLipoma2();
    setMedida1Lipoma2("");
    setMedida2Lipoma2("");
    setMedida3Lipoma2("");
  }, [Lipoma2Checkbox]);

  useEffect(() => {
    Lipoma3Checkbox
      ? setDisableLipomaInput3(false)
      : setDisableLipomaInput3(true);
    removeLipoma3();
    setMedida1Lipoma3("");
    setMedida2Lipoma3("");
    setMedida3Lipoma3("");
  }, [Lipoma3Checkbox]);

  useEffect(() => {
    Lipoma4Checkbox
      ? setDisableLipomaInput4(false)
      : setDisableLipomaInput4(true);
    removeLipoma4();
    setMedida1Lipoma4("");
    setMedida2Lipoma4("");
    setMedida3Lipoma4("");
  }, [Lipoma4Checkbox]);
  useEffect(() => {
    LipomaMultiplosCheckbox
      ? setDisableLipomaInputMultiplos(false)
      : setDisableLipomaInputMultiplos(true);
    removeMultiplosLipomas();
    setMedida1LipomaMultiplos("");
    setMedida2LipomaMultiplos("");
    setMedida3LipomaMultiplos("");
  }, [LipomaMultiplosCheckbox]);

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesPartesMoles.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesPartesMoles.splice(index, 1);
      setFrasesPartesMoles((arr) => [...arr]);
    }
  };

  const criaStringLocalNormal = (local) => {
    removeLocalNormal();
    if (local !== "") {
      let string = `Normal local ${local} `;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };

  const criaStringLocalLipoma = (local) => {
    removeLocalLipoma();
    if (local !== "") {
      let string = `Lipoma local ${local} `;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };

  const criaStringLocalNodulo = (
    local,
    ecogenicidade,
    plano,
    medida1,
    medida2,
    medida3
  ) => {
    removeLocalNodulo();
    if (local !== "") {
      let string = `Nódulo localizado no ${local}, com ecogenicidade ${ecogenicidade}, no plano ${plano},
      medindo ${medida1} x ${medida2} x ${medida3} mm`;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };

  const criaStringCheckBoxLinfonodo = (value) => {
    var string = ", com características ecográficas de linfonodo.";
    if (value.checked === true) {
      setFrasesPartesMoles((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringLipoma1 = (
    medida1Lipoma1,
    medida2Lipoma1,
    medida3Lipoma1
  ) => {
    removeLipoma1();
    if (
      medida1Lipoma1 !== "" &&
      medida2Lipoma1 !== "" &&
      medida3Lipoma1 !== ""
    ) {
      let string = `Lipoma 1 mede ${medida1Lipoma1}x${medida2Lipoma1}x${medida3Lipoma1}mm`;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };
  const criaStringLipoma2 = (
    medida1Lipoma2,
    medida2Lipoma2,
    medida3Lipoma2
  ) => {
    removeLipoma2();
    if (
      medida1Lipoma2 !== "" &&
      medida2Lipoma2 !== "" &&
      medida3Lipoma2 !== ""
    ) {
      let string = `Lipoma 2 mede ${medida1Lipoma2}x${medida2Lipoma2}x${medida3Lipoma2}mm`;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };
  const criaStringLipoma3 = (
    medida1Lipoma3,
    medida2Lipoma3,
    medida3Lipoma3
  ) => {
    removeLipoma3();
    if (
      medida1Lipoma3 !== "" &&
      medida2Lipoma3 !== "" &&
      medida3Lipoma3 !== ""
    ) {
      let string = `Lipoma 3 mede ${medida1Lipoma3}x${medida2Lipoma3}x${medida3Lipoma3}mm`;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };

  const criaStringLipoma4 = (
    medida1Lipoma4,
    medida2Lipoma4,
    medida3Lipoma4
  ) => {
    removeLipoma4();
    if (
      medida1Lipoma4 !== "" &&
      medida2Lipoma4 !== "" &&
      medida3Lipoma4 !== ""
    ) {
      let string = `Lipoma 4 mede ${medida1Lipoma4}x${medida2Lipoma4}x${medida3Lipoma4}mm`;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };
  const criaStringMultiplosLipomas = (
    medida1MultiplosLipomas,
    medida2MultiplosLipomas,
    medida3MultiplosLipomas
  ) => {
    removeMultiplosLipomas();
    if (
      medida1MultiplosLipomas !== "" &&
      medida2MultiplosLipomas !== "" &&
      medida3MultiplosLipomas !== ""
    ) {
      let string = `Multiplos Lipomas o maior mede ${medida1MultiplosLipomas}x${medida2MultiplosLipomas}x${medida3MultiplosLipomas}mm`;
      setFrasesPartesMoles((arr) => [...arr, string]);
    }
  };
  const removeLocalNormal = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Normal local")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeLocalLipoma = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Lipoma local")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeLocalNodulo = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Nódulo localizado no ")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeLipoma1 = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Lipoma 1")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeLipoma2 = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Lipoma 2")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeLipoma3 = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Lipoma 3")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeLipoma4 = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Lipoma 4")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };
  const removeMultiplosLipomas = () => {
    frasesPartesMoles.map((e) => {
      if (e.includes("Multiplos Lipomas ")) {
        let index = frasesPartesMoles.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesPartesMoles.splice(index, 1);
          setFrasesPartesMoles((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringLipoma1(medida1Lipoma1, medida2Lipoma1, medida3Lipoma1);
  }, [medida1Lipoma1, medida2Lipoma1, medida3Lipoma1]);
  useEffect(() => {
    criaStringLipoma2(medida1Lipoma2, medida2Lipoma2, medida3Lipoma2);
  }, [medida1Lipoma2, medida2Lipoma2, medida3Lipoma2]);
  useEffect(() => {
    criaStringLipoma3(medida1Lipoma3, medida2Lipoma3, medida3Lipoma3);
  }, [medida1Lipoma3, medida2Lipoma3, medida3Lipoma3]);
  useEffect(() => {
    criaStringLipoma4(medida1Lipoma4, medida2Lipoma4, medida3Lipoma4);
  }, [medida1Lipoma4, medida2Lipoma4, medida3Lipoma4]);

  useEffect(() => {
    criaStringLipoma4(medida1Lipoma4, medida2Lipoma4, medida3Lipoma4);
  }, [medida1Lipoma4, medida2Lipoma4, medida3Lipoma4]);
  useEffect(() => {
    criaStringMultiplosLipomas(
      medida1LipomaMultiplos,
      medida2LipomaMultiplos,
      medida3LipomaMultiplos
    );
  }, [medida1LipomaMultiplos, medida2LipomaMultiplos, medida3LipomaMultiplos]);
  useEffect(() => {
    criaStringLocalNormal(inputLocalNormal);
  }, [inputLocalNormal]);
  useEffect(() => {
    criaStringLocalLipoma(inputLocalLipoma);
  }, [inputLocalLipoma]);
  useEffect(() => {
    criaStringLocalNodulo(
      inputLocalNodulo,
      ecogenicidadeNoduloSelect,
      planoNoduloSelect,
      medida1Nodulo,
      medida2Nodulo,
      medida3Nodulo
    );
  }, [
    inputLocalNodulo,
    ecogenicidadeNoduloSelect,
    planoNoduloSelect,
    medida1Nodulo,
    medida2Nodulo,
    medida3Nodulo,
  ]);

  const subExame = "Partes Moles";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesPartesMoles).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesPartesMoles
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesPartesMoles
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesPartesMoles]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Partes Moles" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Box borderBottom="1px" w="100%">
          <HStack mb="10px">
            <Checkbox
              onChange={(e) => setCheckboxLocalNormal(!LocalNormalCheckbox)}
              mr="30px"
            >
              Normal
            </Checkbox>
            <Text>Local</Text>
            <Input
              isDisabled={disableInputLocalNormal}
              w="200px"
              h="30px"
              value={inputLocalNormal}
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setInputLocalNormal(e.target.value);
              }}
            />
          </HStack>
        </Box>

        <Stack borderBottom="1px" w="100%">
          <HStack>
            <Checkbox
              onChange={(e) => setCheckboxLocalLipoma(!LocalLipomaCheckbox)}
              mr="30px"
            >
              Lipoma
            </Checkbox>
            <Text>Local</Text>
            <Input
              w="200px"
              isDisabled={disableInputLocalLipoma}
              h="30px"
              value={inputLocalLipoma}
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setInputLocalLipoma(e.target.value);
              }}
            />
          </HStack>

          <HStack>
            <Checkbox onChange={(e) => setLipoma1Checkbox(!Lipoma1Checkbox)}>
              Lipoma 1
            </Checkbox>
            <Input
              isDisabled={disableLipomaInput1}
              w="35px"
              h="30px"
              value={medida1Lipoma1}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1Lipoma1(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput1}
              w="35px"
              h="30px"
              value={medida2Lipoma1}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2Lipoma1(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput1}
              w="35px"
              h="30px"
              value={medida3Lipoma1}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3Lipoma1(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>

          <HStack>
            <Checkbox onChange={(e) => setLipoma2Checkbox(!Lipoma2Checkbox)}>
              Lipoma 2
            </Checkbox>
            <Input
              isDisabled={disableLipomaInput2}
              w="35px"
              h="30px"
              value={medida1Lipoma2}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1Lipoma2(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput2}
              w="35px"
              h="30px"
              value={medida2Lipoma2}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2Lipoma2(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput2}
              w="35px"
              h="30px"
              value={medida3Lipoma2}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3Lipoma2(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>

          <HStack>
            <Checkbox onChange={(e) => setLipoma3Checkbox(!Lipoma3Checkbox)}>
              Lipoma 3
            </Checkbox>
            <Input
              isDisabled={disableLipomaInput3}
              w="35px"
              h="30px"
              value={medida1Lipoma3}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1Lipoma3(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput3}
              w="35px"
              h="30px"
              value={medida2Lipoma3}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2Lipoma3(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput3}
              w="35px"
              h="30px"
              value={medida3Lipoma3}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3Lipoma3(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>

          <HStack>
            <Checkbox onChange={(e) => setLipoma4Checkbox(!Lipoma4Checkbox)}>
              Lipoma 4
            </Checkbox>
            <Input
              isDisabled={disableLipomaInput4}
              w="35px"
              h="30px"
              value={medida1Lipoma4}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1Lipoma4(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput4}
              w="35px"
              h="30px"
              value={medida2Lipoma4}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2Lipoma4(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInput4}
              w="35px"
              h="30px"
              value={medida3Lipoma4}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3Lipoma4(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>

          <HStack>
            <Checkbox
              onChange={(e) =>
                setLipomaMultiplosCheckbox(!LipomaMultiplosCheckbox)
              }
            >
              Múltiplos Lipomas, maior medindo
            </Checkbox>
            <Input
              isDisabled={disableLipomaInputMultiplos}
              w="35px"
              h="30px"
              value={medida1LipomaMultiplos}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida1LipomaMultiplos(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInputMultiplos}
              w="35px"
              h="30px"
              value={medida2LipomaMultiplos}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida2LipomaMultiplos(e.target.value);
              }}
            />
            <Text>x</Text>
            <Input
              isDisabled={disableLipomaInputMultiplos}
              w="35px"
              h="30px"
              value={medida3LipomaMultiplos}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedida3LipomaMultiplos(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
        </Stack>

        <Stack w="100%">
          <HStack>
            <Checkbox
              onChange={(e) => setCheckboxLocalNodulo(!LocalNoduloCheckbox)}
              mr="30px"
            >
              Nódulo
            </Checkbox>
            <Text>Local</Text>
            <Input
              w="200px"
              isDisabled={disableInputLocalNodulo}
              h="30px"
              value={inputLocalNodulo}
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setInputLocalNodulo(e.target.value);
              }}
            />
          </HStack>
          <Box display="flex" flexWrap="wrap" gap="10px">
            <Select
              isDisabled={disableInputLocalNodulo}
              w="200px"
              value={ecogenicidadeNoduloSelect}
              onChange={(e) => {
                setEcogenicidadeNoduloSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Ecogenicidade
              </option>
              <option value="hipoecogênico">Hipoecogênico</option>
              <option value="hiperecogênico">Hiperecogênico</option>
            </Select>
            <Select
              isDisabled={disableInputLocalNodulo}
              w="200px"
              value={planoNoduloSelect}
              onChange={(e) => {
                setPlanoNoduloSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                no plano
              </option>
              <option value="subcutâneo">Subcutâneo</option>
              <option value="cutâneo">Cutâneo</option>
              <option value="muscular">Muscular</option>
              <option value="aponeurótico">Aponeurótico</option>
            </Select>

            <Box display="flex">
              <Text>Medindo</Text>
              <Input
                isDisabled={disableInputLocalNodulo}
                w="35px"
                h="30px"
                value={medida1Nodulo}
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => {
                  setMedida1Nodulo(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableInputLocalNodulo}
                w="35px"
                h="30px"
                value={medida2Nodulo}
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => {
                  setMedida2Nodulo(e.target.value);
                }}
              />
              <Text>x</Text>
              <Input
                isDisabled={disableInputLocalNodulo}
                w="35px"
                h="30px"
                value={medida3Nodulo}
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => {
                  setMedida3Nodulo(e.target.value);
                }}
              />
              <Text>mm</Text>
            </Box>
          </Box>
          <Checkbox
            onChange={(e) => criaStringCheckBoxLinfonodo(e.target)}
            mr="30px"
          >
            Sugestivo de linfonodo
          </Checkbox>
        </Stack>
      </Box>
    </Box>
  );
}
export default Partes_Moles;
