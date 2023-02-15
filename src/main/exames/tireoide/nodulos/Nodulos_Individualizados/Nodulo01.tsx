/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Wrap, Text, Stack, HStack, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Nodulo01() {
    const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);

    const [valueInput01Nodulo01, setValueInput01Nodulo01] = useState("");
    const [valueInput02Nodulo01, setValueInput02Nodulo01] = useState("");
    const [valueInput03Nodulo01, setValueInput03Nodulo01] = useState("");

    const [ValueTIRADSNodulo01, setValueTIRADSNodulo01] = useState("");
    const [ValueTomimoriNodulo01, setValueTomimoriNodulo01] = useState("");

    const [valueSelect01Nodulo01, setValueSelect01Nodulo01] = useState("");
    const [valueSelect02Nodulo01, setValueSelect02Nodulo01] = useState("");
    const [valueSelect03Nodulo01, setValueSelect03Nodulo01] = useState("");
    const [valueSelect04Nodulo01, setValueSelect04Nodulo01] = useState("");

    const [DisableInputResistividade, setDisableInputResistividade] = useState(true)
    const [DisableInputVascularizacao, setDisableInputVascularizacao] = useState(true)

    const [Vascularizacao, setVascularizacao] = useState(false);
    const [VascularizacaoSelect, setVascularizacaoSelect] = useState("");
    const [InputResistividade, setInputResistividade] = useState("");

    const [CalcificacoesSelect, setCalcificacoesSelect] = useState("");

    const [DisableOptionsNodulo01, setDisableOptionsNodulo01] = useState(true);

    const [SugerirPAAFCheckbox, setSugerirPAAFCheckbox] = useState(false);

    const [AspectoMaisAlto, setAspectoMaisAlto] = useState(false);
    const [IndiceResistividade, setIndiceResistividade] = useState(false);

    const [CriaString, setCriaString] = useState(false);


    const removeItemString = (value) => {
        var index = FrasesNodulos.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            FrasesNodulos.splice(index, 1);
            setFrasesNodulos((arr) => [...arr]);
        }
    };

    useEffect(() => {
        if (valueInput01Nodulo01 != '' && valueInput02Nodulo01 != '' && valueInput03Nodulo01 != '' &&
            valueSelect01Nodulo01 != '' && valueSelect02Nodulo01 != '' && valueSelect03Nodulo01 != '' && valueSelect04Nodulo01 != '') {
            setCriaString(true)
            criaStringNodulo01()
        } else {
            removeStringNodulo01()
            setCriaString(false)
        }


    }, [valueInput01Nodulo01, valueInput02Nodulo01, valueInput03Nodulo01,
        valueSelect01Nodulo01, valueSelect02Nodulo01, valueSelect03Nodulo01, valueSelect04Nodulo01])


    const criaStringNodulo01 = () => {
        let string = 'Nódulo01 falta'
        removeStringNodulo01()
        let medida1cm = new Convert_Medida(valueInput01Nodulo01).Convert_Medida()
        let medida2cm = new Convert_Medida(valueInput02Nodulo01).Convert_Medida()
        let medida3cm = new Convert_Medida(valueInput03Nodulo01).Convert_Medida()
        if (CriaString) {
            string = `${string} mede ${medida1cm}x${medida2cm}x${medida3cm} ${valueSelect01Nodulo01} ${valueSelect02Nodulo01} ${valueSelect03Nodulo01} ${valueSelect04Nodulo01}`
            setFrasesNodulos((arr) => [...arr, string]);
        }
    };

    useEffect(() => {
        if (DisableOptionsNodulo01) {
            setDisableOptionsNodulo01(true)
        } else {
            setDisableOptionsNodulo01(false)
        }
    }, [DisableOptionsNodulo01])


    const removeStringNodulo01 = () => {
        FrasesNodulos.map((e) => {
            if (e.includes("Nódulo01 falta")) {
                var index = FrasesNodulos.indexOf(e);
                if (index > -1) {
                    FrasesNodulos.splice(index, 1);
                    setFrasesNodulos((arr) => [...arr]);
                }
            }
        });
    };

    const removeStringVascularizacao = () => {
        FrasesNodulos.map((e) => {
            if (e.includes("Vascularização falta")) {
                var index = FrasesNodulos.indexOf(e);
                if (index > -1) {
                    FrasesNodulos.splice(index, 1);
                    setFrasesNodulos((arr) => [...arr]);
                }
            }
        });
    };
    const criaStringVascularizacao = () => {
        var string = 'Vascularização falta'
        removeStringVascularizacao()
        if (VascularizacaoSelect != '') {
            string = `${string} ${VascularizacaoSelect}`
            setFrasesNodulos((arr) => [...arr, string]);
        }
    }

    useEffect(() => {
        if (Vascularizacao) {
            criaStringVascularizacao()
            setDisableInputVascularizacao(false)
        } else {
            setVascularizacaoSelect('')
            setDisableInputVascularizacao(true)
            removeStringVascularizacao()
        }
    }, [Vascularizacao, VascularizacaoSelect])

    const removeStringResistividade = () => {
        FrasesNodulos.map((e) => {
            if (e.includes("Vascularização falta")) {
                var index = FrasesNodulos.indexOf(e);
                if (index > -1) {
                    FrasesNodulos.splice(index, 1);
                    setFrasesNodulos((arr) => [...arr]);
                }
            }
        });
    };
    const criaStringResistividade = () => {
        var string = 'Vascularização falta'
        removeStringResistividade()
        if (InputResistividade != '') {
            string = `${string} ${InputResistividade}`
            setFrasesNodulos((arr) => [...arr, string]);
        }
    }

    useEffect(() => {
        if (IndiceResistividade) {
            removeStringResistividade()
            criaStringResistividade()
            setDisableInputResistividade(false)
        } else {
            setInputResistividade('')
            setDisableInputResistividade(true)
            removeStringResistividade()
        }
    }, [IndiceResistividade, InputResistividade])


    const subExame = "Nódulo 01";
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesNodulos).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesNodulos
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesNodulos
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesNodulos]);

    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
            <Checkbox
                onChange={(e) => {
                    setDisableOptionsNodulo01(!DisableOptionsNodulo01)
                }}
            >
                Nódulo 01
            </Checkbox>
            <Wrap>
                <HStack>
                    <Text alignSelf='center'>Mede: </Text>
                    <Input
                        isDisabled={DisableOptionsNodulo01}
                        value={valueInput01Nodulo01}
                        onChange={(e) => {
                            setValueInput01Nodulo01(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        isDisabled={DisableOptionsNodulo01}
                        value={valueInput02Nodulo01}
                        onChange={(e) => {
                            setValueInput02Nodulo01(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        isDisabled={DisableOptionsNodulo01}
                        value={valueInput03Nodulo01}
                        onChange={(e) => {
                            setValueInput03Nodulo01(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>mm</Text>
                </HStack>
                <Spacer />

                <HStack>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
                        <Stack>
                            <Text alignSelf='center'>TI-RADS</Text>
                            <Select
                                mt="5px"
                                value={ValueTIRADSNodulo01}
                                onChange={(e) => {
                                    setValueTIRADSNodulo01(e.target.value)
                                }}
                                isDisabled={DisableOptionsNodulo01}
                            >
                                <option value="" disabled selected>
                                    Não citar
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </Select>
                        </Stack>
                    </Box>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
                        <Stack>
                            <Text alignSelf='center'>Tomimori</Text>
                            <Select
                                mt="5px"
                                value={ValueTomimoriNodulo01}
                                onChange={(e) => {
                                    setValueTomimoriNodulo01(e.target.value)
                                }}
                                isDisabled={DisableOptionsNodulo01}
                            >
                                <option value="" disabled selected>
                                    Não citar
                                </option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                            </Select>
                        </Stack>
                    </Box>
                </HStack>
            </Wrap>
            <Wrap>
                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect01Nodulo01}
                    onChange={(e) => {
                        setValueSelect01Nodulo01(e.target.value)
                    }}
                    isDisabled={DisableOptionsNodulo01}
                >
                    <option value="" disabled selected>
                        Localizado no
                    </option>
                    <option value="sólido">Sólido</option>
                    <option value="misto">Misto</option>
                    <option value="misto (sólido/cístico)">misto (sólido/cístico)</option>
                    <option value="espongiforme (com múltiplos microcistos)">espongiforme (com múltiplos microcistos)</option>
                    <option value="misto (predominantemente cístico)">Misto (predominantemente cístico)</option>
                    <option value="misto (predominantemente sólido)">Misto (predominantemente sólido)</option>
                    <option value="misto (sólido com áreas císticas)">Misto (sólido com áreas císticas)</option>
                    <option value="misto (cístico com vegetação sólida)">Misto (cístico com vegetação sólida)</option>
                </Select>
                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect02Nodulo01}
                    onChange={(e) => {
                        setValueSelect02Nodulo01(e.target.value)
                    }}
                    isDisabled={DisableOptionsNodulo01}
                >
                    <option value="" disabled selected>
                        Select
                    </option>
                    <option value="terço superor do lobo esquerdo ">terço superor do lobo esquerdo</option>
                    <option value="terço médio do lobo esquerdo ">terço médio do lobo esquerdo</option>
                    <option value="terço inferior do lobo esquerdo ">terço inferior do lobo esquerdo</option>
                    <option value="terço superor do lobo direito ">terço superor do lobo direito</option>
                    <option value="terço médio do lobo direito ">terço médio do lobo direito</option>
                    <option value="terço inferior do lobo direito ">terço inferior do lobo direito</option>
                    <option value="istmo ">istmo</option>
                    <option value="istmo à direita ">istmo à direita</option>
                    <option value="istmo à esquerda ">istmo à esquerda</option>
                </Select>
                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect03Nodulo01}
                    onChange={(e) => {
                        setValueSelect03Nodulo01(e.target.value)
                    }}
                    isDisabled={DisableOptionsNodulo01}
                >
                    <option value="" disabled selected>
                        Localizado no
                    </option>
                    <option value="terço Superior">Terço superior</option>
                    <option value="terço Medio">Terço medio</option>
                    <option value="terço Inferior">Terço inferior</option>
                    <option value="no istmo">Terço inferior</option>
                </Select>
                <Select
                    w='auto'
                    value={valueSelect04Nodulo01}
                    mt="5px"
                    onChange={(e) => {
                        setValueSelect04Nodulo01(e.target.value)
                    }}
                    isDisabled={DisableOptionsNodulo01}
                >
                    <option value="" disabled selected>
                        Localizado no
                    </option>
                    <option value="terço Superior">Terço superior</option>
                    <option value="terço Medio">Terço medio</option>
                    <option value="terço Inferior">Terço inferior</option>
                    <option value="no istmo">Terço inferior</option>
                </Select>
            </Wrap>
            <Wrap>
                <Stack>
                    <Checkbox
                        isDisabled={DisableOptionsNodulo01}
                        onChange={() => setAspectoMaisAlto(!AspectoMaisAlto)}
                    >
                        Aspecto 'mais alto do que largo'
                    </Checkbox>
                    <HStack>
                        <Checkbox
                            isDisabled={DisableOptionsNodulo01}
                            onChange={() => setVascularizacao(!Vascularizacao)}
                        >
                            Vascularização
                        </Checkbox>
                        <Select
                            w='auto'
                            mt="5px"
                            value={VascularizacaoSelect}
                            onChange={(e) => {
                                setVascularizacaoSelect(e.target.value)
                            }}
                            isDisabled={DisableInputVascularizacao}
                        >
                            <option value="" disabled selected>
                                Localizado no
                            </option>
                            <option value="terço Superior">Terço superior</option>
                            <option value="terço Medio">Terço medio</option>
                            <option value="terço Inferior">Terço inferior</option>
                            <option value="no istmo">Terço inferior</option>
                        </Select>
                    </HStack>
                    <HStack>
                        <Checkbox
                            isDisabled={DisableOptionsNodulo01}
                            onChange={() => setIndiceResistividade(!IndiceResistividade)}
                        >
                            índice de resistividade:
                        </Checkbox>
                        <Input
                            isDisabled={DisableInputResistividade}
                            onChange={(e) => setInputResistividade(e.target.value)}
                            value={InputResistividade}
                            w='60px'
                            placeholder="00"
                        />
                    </HStack>
                </Stack>

                <Spacer />

                <Stack>
                    <Text alignItems='center'>Calcificações:</Text>
                    <Select
                        w='auto'
                        mt="5px"
                        value={CalcificacoesSelect}
                        onChange={(e) => {
                            setCalcificacoesSelect(e.target.value)
                        }}
                        isDisabled={DisableOptionsNodulo01}
                    >
                        <option value="" disabled selected>
                            Localizado no
                        </option>
                        <option value="terço Superior">Terço superior</option>
                        <option value="terço Medio">Terço medio</option>
                        <option value="terço Inferior">Terço inferior</option>
                        <option value="no istmo">Terço inferior</option>
                    </Select>
                    <Checkbox
                        isDisabled={DisableOptionsNodulo01}
                        onChange={() => setSugerirPAAFCheckbox(!SugerirPAAFCheckbox)}>
                        Sugerir PAAF desde nódulo
                    </Checkbox>
                </Stack>
            </Wrap>
        </Box>
    )
}