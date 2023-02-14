/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, HStack, Input, Select, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoBicepsBraquialEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseTendaoBicepsBraquialEsquerdo, setFraseTendaoBicepsBraquialEsquerdo] = useState<any>([]);

    const subExame = 'Tendão biceps braquial Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTendaoBicepsBraquialEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoBicepsBraquialEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoBicepsBraquialEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoBicepsBraquialEsquerdo]);

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


    const criaStringRoturaParcial = (medida1cm, medida2cm, medida3cm) => {
        removeRoturaParcial();
        var medida1 = new Convert_Medida(medida1cm).Convert_Medida();
        var medida2 = new Convert_Medida(medida2cm).Convert_Medida();
        var medida3 = new Convert_Medida(medida3cm).Convert_Medida();
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
        fraseTendaoBicepsBraquialEsquerdo.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural, observando-se sinais de rotura parcial")) {
                var index = fraseTendaoBicepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    fraseTendaoBicepsBraquialEsquerdo.splice(index, 1);
                    setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };
    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringPequenasCalcificacoes = () => {
        var string = "FALTA";
        if (PequenasCalcificacoesCheckbox) {
            setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };
    useEffect(() => {
        criaStringPequenasCalcificacoes()
    }, [PequenasCalcificacoesCheckbox])

    const criaStringTendinopatiaSemRotura = (dados, medida) => {
        removeFraseTendinopatiaSemRotura()
        var string;
        if (dados !== '') {
            if (TendinopatiaSemRoturaCheckboxMedida && medida !== '') {
                string = `Tendinopatia sem rotura ${dados} medindo ${medida} mm`;
                setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]);
            } else {
                string = `Tendinopatia sem rotura ${dados}`;
                setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]);

            }
        }
    };

    const removeFraseTendinopatiaSemRotura = () => {
        fraseTendaoBicepsBraquialEsquerdo.map((e) => {
            if (e.includes("Tendinopatia sem rotura")) {
                var index = fraseTendaoBicepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    fraseTendaoBicepsBraquialEsquerdo.splice(index, 1);
                    setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringRoturaCompleta = (dados) => {
        removeFraseRoturaCompleta()
        var string;
        if (dados !== '' && RoturaCompletaComCotoCheckbox) {
            string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo com Relacação Coto`;
            setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]);
        } else if (dados !== '') {
            string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo`;
            setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr, string]);
        }
    }
    const removeFraseRoturaCompleta = () => {
        fraseTendaoBicepsBraquialEsquerdo.map((e) => {
            if (e.includes("Hipoecogênico, heterogêneo, observando-se sinais de rotura completa")) {
                var index = fraseTendaoBicepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    fraseTendaoBicepsBraquialEsquerdo.splice(index, 1);
                    setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr]);
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
        var index = fraseTendaoBicepsBraquialEsquerdo.indexOf(value);
        if (index > -1) {
            fraseTendaoBicepsBraquialEsquerdo.splice(index, 1);
            setFraseTendaoBicepsBraquialEsquerdo((arr) => [...arr]);
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
            setdisableTendinopatiaSemRotura(false)
            setRoturaParcialInput("");
            setRoturaParcialInput2("");
            setRoturaParcialInput3("");
        }
    }, [RoturaParcialCheckbox]);

    useEffect(() => {
        criaStringRoturaParcial(RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3);
    }, [RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3]);

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
            <TituloNomeExame titulo="Tendão do bíceps braquial Esquerdo " />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={Disable}
                    onChange={() => {
                        setPequenasCalcificacoesCheckbox(!PequenasCalcificacoesCheckbox);

                    }}
                >
                    Pequenas calcificações junto à inserção
                </Checkbox>
                <Checkbox
                    isDisabled={Disable || disableAspectoNormal}
                    onChange={() => {
                        setAspectoNormalCheckbox(!AspectoNormalCheckbox);
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Wrap spacing='10px'>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={Disable || disableTendinopatiaSemRotura}
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
                            <option value="">não citar calcificações</option>
                            <option value="calcificações intrassubstanciais">corno posterior</option>
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
                        isDisabled={Disable || disableRoturaParcial}
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
                                isDisabled={Disable || disableRoturaCompleta}
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
