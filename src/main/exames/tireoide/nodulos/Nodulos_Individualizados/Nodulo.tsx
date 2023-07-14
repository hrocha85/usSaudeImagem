/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Wrap, Text, Stack, HStack, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Nodulo({ numCalculo }) {
    const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);
    const [ConclusaoNodulos, setConclusaoNodulos] = useState<any>([]);

    const [valueInput01Nodulo, setValueInput01Nodulo] = useState("");
    const [valueInput02Nodulo, setValueInput02Nodulo] = useState("");
    const [valueInput03Nodulo, setValueInput03Nodulo] = useState("");

    const [ValueTIRADSNodulo, setValueTIRADSNodulo] = useState("");
    const [ValueLagallaNodulo, setValueLagallaNodulo] = useState("");
    const [ValueCHAMMASNodulo, setValueCHAMMASNodulo] = useState("");

    const [valueSelect01Nodulo, setValueSelect01Nodulo] = useState("");
    const [valueSelect02Nodulo, setValueSelect02Nodulo] = useState("");
    const [valueSelect03Nodulo, setValueSelect03Nodulo] = useState("");
    const [valueSelect04Nodulo, setValueSelect04Nodulo] = useState("");


    const [Vascularizacao, setVascularizacao] = useState(false);
    const [VascularizacaoSelect, setVascularizacaoSelect] = useState("");
    const [InputIR, setInputIR] = useState("");
    const [InputIP, setInputIP] = useState("");
    const [InputVEL, setInputVEL] = useState("");


    const [CalcificacoesSelect, setCalcificacoesSelect] = useState("");

    const [NoduloCheckbox, setNoduloCheckbox] = useState(false);

    const [SugerirPAAFCheckbox, setSugerirPAAFCheckbox] = useState(false);

    const [AspectoMaisAlto, setAspectoMaisAlto] = useState(false);

    const criaStringNodulo = () => {
        let string = `Nódulo ${numCalculo}`
        const conclusao = 'Imagem sugestiva de nódulo'
        removeStringNodulo()
        removeConclusaoString(conclusao)
        if (NoduloCheckbox) {
            if (valueInput01Nodulo != '' && valueInput02Nodulo != '' && valueInput03Nodulo != '' &&
                valueSelect01Nodulo != '' && valueSelect02Nodulo != '' && valueSelect03Nodulo != '' && valueSelect04Nodulo != '') {
                string = `${string} mede ${valueInput01Nodulo} x ${valueInput02Nodulo} x ${valueInput03Nodulo}cm, ${valueSelect01Nodulo} ${valueSelect02Nodulo} ${valueSelect03Nodulo} ${valueSelect04Nodulo}`
                if (ValueTIRADSNodulo) {
                    string = `${string} ${ValueTIRADSNodulo}`
                }
                if (ValueLagallaNodulo) {
                    string = `${string} ${ValueLagallaNodulo}`
                }
                if (ValueCHAMMASNodulo) {
                    string = `${string} ${ValueCHAMMASNodulo}`
                }
                if (AspectoMaisAlto) {
                    string = `${string} Aspecto 'mais alto do que largo`
                }
                if (Vascularizacao && VascularizacaoSelect && InputIR && InputIP && InputVEL) {
                    string = `${string} ${VascularizacaoSelect} IR: ${InputIR} IP: ${InputIP} VEL: ${InputVEL}`
                }
                if (CalcificacoesSelect) {
                    string = `${string} ${CalcificacoesSelect}`
                }
                if (SugerirPAAFCheckbox) {
                    string = `${string}  Sugerir PAAF desde nódulo`
                }
                string = `${string}.`
                setFrasesNodulos((arr) => [...arr, string]);
                setConclusaoNodulos((arr) => [...arr, conclusao]);
            }
        } else {
            setValueInput01Nodulo('')
            setValueInput02Nodulo('')
            setValueInput03Nodulo('')
            setValueSelect01Nodulo('')
            setValueSelect02Nodulo('')
            setValueSelect03Nodulo('')
            setValueSelect04Nodulo('')
            setInputIR('')
            setInputIP('')
            setInputVEL('')
            setVascularizacaoSelect('')
            setValueTIRADSNodulo('')
            setValueLagallaNodulo('')
        }
    };


    useEffect(() => {
        criaStringNodulo()
    }, [NoduloCheckbox, valueInput01Nodulo, valueInput02Nodulo, valueInput03Nodulo,
        valueSelect01Nodulo, valueSelect02Nodulo, valueSelect03Nodulo, valueSelect04Nodulo,
        Vascularizacao, VascularizacaoSelect, InputIR, InputIP, InputVEL])

    const removeStringNodulo = () => {
        FrasesNodulos.map((e) => {
            if (e.includes(`Nódulo ${numCalculo}`)) {
                var index = FrasesNodulos.indexOf(e);
                if (index > -1) {
                    FrasesNodulos.splice(index, 1);
                    setFrasesNodulos((arr) => [...arr]);
                }
            }
        });
    };

    const removeConclusaoString = (value) => {
        var index;
        ConclusaoNodulos.map((e) => {
            if (e.includes(value)) {
                index = ConclusaoNodulos.indexOf(e);

                if (index > -1) {
                    ConclusaoNodulos.splice(index, 1);
                    setConclusaoNodulos((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao(value);
                }
            }
        });
    };

    const subExame = `Nódulo ${numCalculo}`;
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesNodulos).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesNodulos,
                ConclusaoNodulos
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesNodulos,
                ConclusaoNodulos
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesNodulos]);

    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
            <Checkbox
                onChange={(e) => {
                    setNoduloCheckbox(!NoduloCheckbox)
                }}
            >
                Nódulo {numCalculo}
            </Checkbox>
            <Wrap>
                <HStack>
                    <Text alignSelf='center'>Mede: </Text>
                    <Input
                        p='0'
                        textAlign='center'
                        isDisabled={!NoduloCheckbox}
                        value={valueInput01Nodulo}
                        onChange={(e) => {
                            setValueInput01Nodulo(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        p='0'
                        textAlign='center'
                        isDisabled={!NoduloCheckbox}
                        value={valueInput02Nodulo}
                        onChange={(e) => {
                            setValueInput02Nodulo(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        p='0'
                        textAlign='center'
                        isDisabled={!NoduloCheckbox}
                        value={valueInput03Nodulo}
                        onChange={(e) => {
                            setValueInput03Nodulo(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>cm</Text>
                </HStack>
                <Spacer />

                <HStack>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
                        <Stack>
                            <Text alignSelf='center'>TI-RADS</Text>
                            <Select
                                mt="5px"
                                value={ValueTIRADSNodulo}
                                onChange={(e) => {
                                    setValueTIRADSNodulo(e.target.value)
                                }}
                                isDisabled={!NoduloCheckbox}
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
                            <Text alignSelf='center'>LAGALLA</Text>
                            <Select
                                mt="5px"
                                value={ValueLagallaNodulo}
                                onChange={(e) => {
                                    setValueLagallaNodulo(e.target.value)
                                }}
                                isDisabled={!NoduloCheckbox}
                            >
                                <option value="" disabled selected>
                                    Não citar
                                </option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                            </Select>
                        </Stack>
                    </Box>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
                        <Stack>
                            <Text alignSelf='center'>CHAMMAS</Text>
                            <Select
                                mt="5px"
                                value={ValueCHAMMASNodulo}
                                onChange={(e) => {
                                    setValueCHAMMASNodulo(e.target.value)
                                }}
                                isDisabled={!NoduloCheckbox}
                            >
                                <option value="" disabled selected>
                                    Não citar
                                </option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                            </Select>
                        </Stack>
                    </Box>
                </HStack>
            </Wrap>
            <Wrap>
                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect01Nodulo}
                    onChange={(e) => {
                        setValueSelect01Nodulo(e.target.value)
                    }}
                    isDisabled={!NoduloCheckbox}
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
                    value={valueSelect02Nodulo}
                    onChange={(e) => {
                        setValueSelect02Nodulo(e.target.value)
                    }}
                    isDisabled={!NoduloCheckbox}
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
                    value={valueSelect03Nodulo}
                    onChange={(e) => {
                        setValueSelect03Nodulo(e.target.value)
                    }}
                    isDisabled={!NoduloCheckbox}
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
                    value={valueSelect04Nodulo}
                    mt="5px"
                    onChange={(e) => {
                        setValueSelect04Nodulo(e.target.value)
                    }}
                    isDisabled={!NoduloCheckbox}
                >
                    <option value="" disabled selected>
                        Localizado no
                    </option>
                    <option value="lobo direito">lobo direito</option>
                    <option value="lobo esquerdo">lobo esquerdo</option>
                </Select>
            </Wrap>
            <Wrap>
                <Stack>
                    <Checkbox
                        isDisabled={!NoduloCheckbox}
                        onChange={() => setAspectoMaisAlto(!AspectoMaisAlto)}
                    >
                        Aspecto 'mais alto do que largo'
                    </Checkbox>
                    <Box display='flex' flexWrap='wrap'>
                        <HStack>
                            <Checkbox
                                isDisabled={!NoduloCheckbox}
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
                                isDisabled={!Vascularizacao}
                            >
                                <option value="" disabled selected>
                                    Selecione
                                </option>
                                <option value="Ausente">Ausente</option>
                                <option value="exclusivamente periférica">exclusivamente periférica</option>
                                <option value="periférica central">periférica central</option>
                                <option value="predominância periférica">predominância periférica</option>
                            </Select>
                        </HStack>
                        <HStack>
                            <Text>
                                IR:
                            </Text>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={!Vascularizacao}
                                onChange={(e) => setInputIR(e.target.value)}
                                value={InputIR}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                        <HStack>
                            <Text>
                                IP:
                            </Text>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={!Vascularizacao}
                                onChange={(e) => setInputIP(e.target.value)}
                                value={InputIP}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                        <HStack>
                            <Text>
                                VEL:
                            </Text>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={!Vascularizacao}
                                onChange={(e) => setInputVEL(e.target.value)}
                                value={InputVEL}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                    </Box>
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
                        isDisabled={!NoduloCheckbox}
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
                        isDisabled={!NoduloCheckbox}
                        onChange={() => setSugerirPAAFCheckbox(!SugerirPAAFCheckbox)}>
                        Sugerir PAAF desde nódulo
                    </Checkbox>
                </Stack>
            </Wrap>
        </Box>
    )
}