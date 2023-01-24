/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Stack, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoBicepsBraquialEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [RoturaParcialInput, setRoturaParcialInput] = useState("");
    const [RoturaParcialInput2, setRoturaParcialInput2] = useState("");
    const [RoturaParcialInput3, setRoturaParcialInput3] = useState("");
    const [disableRoturaParcialInput, setdisableRoturaParcialInput] = useState(true);

    const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
    const [disableRoturaParcial, setdisableRoturaParcial] = useState(false);
    const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);
    const [disableRoturaCompleta, setdisableRoturaCompleta] = useState(false);

    const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
    const [RoturaParcialCheckbox, setRoturaParcialCheckbox] = useState(false);
    const [PequenasCalcificacoesCheckbox, setPequenasCalcificacoesCheckbox] = useState(false);

    const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);
    const [SelectTendinopatiaSemRotura, setSelectTendinopatiaSemRotura] = useState("");
    const [SelectDisableTendinopatiaSemRotura, setSelectDisableTendinopatiaSemRotura] = useState(true);
    const [MedindoDisableTendinopatiaSemRotura, setMedindoDisableTendinopatiaSemRotura] = useState(true);
    const [InputMedindoDisableTendinopatiaSemRotura, setInputMedindoDisableTendinopatiaSemRotura] = useState(true);
    const [InputMedindoTendinopatiaSemRotura, setInputMedindoTendinopatiaSemRotura] = useState('');
    const [TendinopatiaSemRoturaCheckboxMedida, setTendinopatiaSemRoturaCheckboxMedida] = useState(false);

    const [RoturaCompletaCheckbox, setRoturaCompletaCheckbox] = useState(false);
    const [DisableInputRoturaCompleta, setDisableInputRoturaCompleta] = useState(true);
    const [InputMedindoRoturaCompleta, setInputMedindoRoturaCompleta] = useState('');
    const [RoturaCompletaComCotoCheckbox, setRoturaCompletaComCotoCheckbox] = useState(false);


    const criaStringRoturaParcial = (medida1, medida2, medida3) => {
        removeRoturaParcial();
        if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setLaudoPrin((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
        laudoPrin.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural,")) {
                var index = laudoPrin.indexOf(e);

                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "FALTA";
        if (AspectoNormalCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setAspectoNormalCheckbox(false);
        } else {
            removeItemString(string);
        }
    };
    const criaStringPequenasCalcificacoes = () => {
        var string = "FALTA";
        if (PequenasCalcificacoesCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setAspectoNormalCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const criaStringTendinopatiaSemRotura = (dados, medida) => {
        removeFraseTendinopatiaSemRotura()
        var string;
        if (dados !== '') {
            if (TendinopatiaSemRoturaCheckboxMedida && medida !== '') {
                string = `Tendinopatia sem rotura ${dados} medindo ${medida} mm`;
                setLaudoPrin((arr) => [...arr, string]);
            } else {
                string = `Tendinopatia sem rotura ${dados}`;
                setLaudoPrin((arr) => [...arr, string]);

            }
            console.log(string)
            // setTendinopatiaSemRoturaCheckbox(false);
        }
    };

    const removeFraseTendinopatiaSemRotura = () => {
        laudoPrin.map((e) => {
            if (e.includes("Tendinopatia sem rotura")) {
                var index = laudoPrin.indexOf(e);

                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringRoturaCompleta = (dados) => {
        removeFraseRoturaCompleta()
        var string;
        if (dados !== '' && RoturaCompletaComCotoCheckbox) {
            string = `Rotura completa medindo ${dados} com Relacação Coto`;
            setLaudoPrin((arr) => [...arr, string]);
        } else if (dados !== '') {
            string = `Rotura completa medindo ${dados}`;
            setLaudoPrin((arr) => [...arr, string]);
        }
        console.log(string)
        // setTendinopatiaSemRoturaCheckbox(false);
    }
    const removeFraseRoturaCompleta = () => {
        laudoPrin.map((e) => {
            if (e.includes("Rotura completa medindo")) {
                var index = laudoPrin.indexOf(e);

                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (RoturaCompletaCheckbox) {
            setDisableInputRoturaCompleta(false)
            setdisableAspectoNormal(true)
            setdisableRoturaParcial(true)
            setdisableTendinopatiaSemRotura(true)
        } else {
            setInputMedindoRoturaCompleta('')
            setdisableAspectoNormal(false)
            setdisableRoturaParcial(false)
            setdisableTendinopatiaSemRotura(false)
            setDisableInputRoturaCompleta(true)
        }
    }, [RoturaCompletaCheckbox])

    useEffect(() => {
        criaStringRoturaCompleta(InputMedindoRoturaCompleta)
    }, [InputMedindoRoturaCompleta, RoturaCompletaComCotoCheckbox])


    const removeItemString = (value) => {
        var index = laudoPrin.indexOf(value);
        if (index > -1) {
            laudoPrin.splice(index, 1);
            setLaudoPrin((arr) => [...arr]);
        }
    };

    useEffect(() => {
        if (AspectoNormalCheckbox) {
            setdisableTendinopatiaSemRotura(true)
            setdisableRoturaParcial(true)
            setdisableRoturaCompleta(true)
        } else {
            setdisableTendinopatiaSemRotura(false)
            setdisableRoturaParcial(false)
            setdisableRoturaCompleta(false)
        }
    }, [AspectoNormalCheckbox])

    useEffect(() => {
        if (TendinopatiaSemRoturaCheckbox) {
            setSelectDisableTendinopatiaSemRotura(false)
            setMedindoDisableTendinopatiaSemRotura(false)
            setInputMedindoDisableTendinopatiaSemRotura(false)
            setdisableRoturaParcial(true)
            setdisableAspectoNormal(true)
            setdisableRoturaCompleta(true)
        } else {
            setInputMedindoDisableTendinopatiaSemRotura(true)
            removeFraseTendinopatiaSemRotura()
            setInputMedindoTendinopatiaSemRotura('')
            setSelectDisableTendinopatiaSemRotura(true)
            setMedindoDisableTendinopatiaSemRotura(true)
            setdisableRoturaParcial(false)
            setdisableAspectoNormal(false)
            setdisableRoturaCompleta(false)
        }
    }, [TendinopatiaSemRoturaCheckbox])

    useEffect(() => {
        criaStringTendinopatiaSemRotura(SelectTendinopatiaSemRotura, InputMedindoTendinopatiaSemRotura)
    }, [SelectTendinopatiaSemRotura, InputMedindoTendinopatiaSemRotura])

    useEffect(() => {
        if (RoturaParcialCheckbox) {
            setdisableRoturaParcialInput(false);
            setdisableAspectoNormal(true)
            setdisableTendinopatiaSemRotura(true)
            setdisableRoturaCompleta(true)
        } else {
            removeRoturaParcial();
            setdisableRoturaParcialInput(true);
            setdisableRoturaCompleta(false)
            setdisableAspectoNormal(false)
            console.log(disableAspectoNormal)

            setdisableTendinopatiaSemRotura(false)
            setRoturaParcialInput("");
            setRoturaParcialInput2("");
            setRoturaParcialInput3("");
        }
    }, [RoturaParcialCheckbox]);

    useEffect(() => {
        criaStringRoturaParcial(RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3);
    }, [RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3]);



    useEffect(() => {
        CotoveloEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloEsquerdoLaudoNormal])

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
            <TituloNomeExame titulo="Tendão do bíceps braquial esquerdo " />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setPequenasCalcificacoesCheckbox(true);
                        criaStringPequenasCalcificacoes();
                    }}
                >
                    Pequenas calcificações junto à inserção
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableAspectoNormal}
                    onChange={() => {
                        setAspectoNormalCheckbox(!AspectoNormalCheckbox);
                        criaStringAspectoNormal();
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Wrap spacing='10px'>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={disableTudo || disableTendinopatiaSemRotura}
                                onChange={() => {
                                    setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
                                }}
                            >
                                Tendinopatia sem rotura
                            </Checkbox>
                        </WrapItem>
                    </Center>
                    <WrapItem>
                        <Select
                            w='150px'
                            isDisabled={SelectDisableTendinopatiaSemRotura}
                            onChange={(e) => {
                                setSelectTendinopatiaSemRotura(e.target.value);
                            }}
                        >
                            <option value="Tendinopatia sem rotura 1">corno anterior</option>
                            <option value="Tendinopatia sem rotura 2">corno posterior</option>
                        </Select>
                    </WrapItem>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={MedindoDisableTendinopatiaSemRotura}
                                onChange={() => {
                                    setTendinopatiaSemRoturaCheckboxMedida(!TendinopatiaSemRoturaCheckboxMedida);
                                }}
                            >
                                Medindo
                            </Checkbox>
                        </WrapItem>
                    </Center>
                    <WrapItem>
                        <Input
                            isDisabled={InputMedindoDisableTendinopatiaSemRotura}
                            value={InputMedindoTendinopatiaSemRotura}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setInputMedindoTendinopatiaSemRotura(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </WrapItem>

                </Wrap>
                <HStack>
                    <Checkbox
                        isDisabled={disableTudo || disableRoturaParcial}
                        onChange={() => {
                            setRoturaParcialCheckbox(!RoturaParcialCheckbox);
                        }}
                    >
                        Rotura parcial medindo
                    </Checkbox>

                    <HStack ml='15px'>
                        <Input
                            isDisabled={disableRoturaParcialInput}
                            value={RoturaParcialInput}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setRoturaParcialInput(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableRoturaParcialInput}
                            value={RoturaParcialInput2}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setRoturaParcialInput2(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableRoturaParcialInput}
                            value={RoturaParcialInput3}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setRoturaParcialInput3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>
                </HStack>
                <Wrap spacing='10px'>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={disableTudo || disableRoturaCompleta}
                                onChange={() => {
                                    setRoturaCompletaCheckbox(!RoturaCompletaCheckbox);
                                }}
                            >
                                Rotura completa com
                            </Checkbox>
                        </WrapItem>
                    </Center>
                    <WrapItem>
                        <Input
                            isDisabled={DisableInputRoturaCompleta}
                            value={InputMedindoRoturaCompleta}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setInputMedindoRoturaCompleta(e.target.value) }}
                        />
                        <Text>mm de intervalo</Text>
                    </WrapItem>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={DisableInputRoturaCompleta}
                                onChange={() => {
                                    setRoturaCompletaComCotoCheckbox(!RoturaCompletaComCotoCheckbox);
                                }}
                            >
                                Com relação do coto
                            </Checkbox>
                        </WrapItem>
                    </Center>
                </Wrap>

            </Stack >
        </Box >

    );
}
export default TendaoBicepsBraquialEsquerdo;