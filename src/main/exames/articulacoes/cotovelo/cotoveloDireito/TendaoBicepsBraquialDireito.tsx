/* eslint-disable array-callback-return */

import { Box, Center, Checkbox, HStack, Input, Select, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoBicepsBraquialDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseTendaoBicepsBraquialDireito, setFraseTendaoBicepsBraquialDireito] = useState<any>([]);
    const [ConclusaoTendaoBicepsBraquialDireito, setConclusaoTendaoBicepsBraquialDireito] = useState<any>([]);

    const subExame = 'Cotovelo- Tendão biceps braquial direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTendaoBicepsBraquialDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoBicepsBraquialDireito,
                ConclusaoTendaoBicepsBraquialDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoBicepsBraquialDireito,
                ConclusaoTendaoBicepsBraquialDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoBicepsBraquialDireito]);

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
        const medida1 = new Convert_Medida(medida1cm).Convert_Medida();
        const medida2 = new Convert_Medida(medida2cm).Convert_Medida();
        const medida3 = new Convert_Medida(medida3cm).Convert_Medida();
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
            const string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
        fraseTendaoBicepsBraquialDireito.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural, observando-se sinais de rotura parcial")) {
                const index = fraseTendaoBicepsBraquialDireito.indexOf(e);

                if (index > -1) {
                    fraseTendaoBicepsBraquialDireito.splice(index, 1);
                    setFraseTendaoBicepsBraquialDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        const string = "com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]) : removeItemString(string);
    };


    const [Normal, setNormal] = useState(false)

    useEffect(() => {
        Disable ? setNormal(true) : setNormal(false)
    }, [Disable])

    useEffect(() => {
        const string = "com ecotextura e espessura preservadas e contornos normais.";
        Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
    }, [Normal])

    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringPequenasCalcificacoes = () => {
        const string = "Pequenas calcificalções a direita junto a inserção";
        if (PequenasCalcificacoesCheckbox) {
            setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };
    useEffect(() => {
        criaStringPequenasCalcificacoes()
    }, [PequenasCalcificacoesCheckbox])

    const criaStringTendinopatiaSemRotura = (dados, medida) => {
        removeFraseTendinopatiaSemRotura()
        let string;
        if (dados !== '') {
            if (TendinopatiaSemRoturaCheckboxMedida && medida !== '') {
                string = `Tendinopatia sem rotura ${dados} medindo ${medida} mm`;
                setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]);
            } else {
                string = `Tendinopatia sem rotura ${dados}`;
                setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]);

            }
        }
    };

    const removeFraseTendinopatiaSemRotura = () => {
        fraseTendaoBicepsBraquialDireito.map((e) => {
            if (e.includes("Tendinopatia sem rotura")) {
                const index = fraseTendaoBicepsBraquialDireito.indexOf(e);

                if (index > -1) {
                    fraseTendaoBicepsBraquialDireito.splice(index, 1);
                    setFraseTendaoBicepsBraquialDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringConclusaoTendinopatia = () => {
        let string = 'Tendinopatia do bíceps braquial'
        removeFraseConclusaoTendinopatia()
        if (TendinopatiaSemRoturaCheckbox && RoturaParcialInput !== '' && RoturaParcialInput2 !== '' && RoturaParcialInput3 !== '') {
            string = `${string} com sinais de rotura parcial.`
        } else if (TendinopatiaSemRoturaCheckbox && InputMedindoRoturaCompleta !== '') {
            string = `${string} com sinais de rotura completa.`
        } else if (TendinopatiaSemRoturaCheckbox) {
            string = `${string}.`
        }
        setConclusaoTendaoBicepsBraquialDireito((arr) => [...arr, string])
    }
    const removeFraseConclusaoTendinopatia = () => {
        ConclusaoTendaoBicepsBraquialDireito.map((e) => {
            if (e.includes("Tendinopatia do bíceps braquial")) {
                const index = ConclusaoTendaoBicepsBraquialDireito.indexOf(e);

                if (index > -1) {
                    ConclusaoTendaoBicepsBraquialDireito.splice(index, 1);
                    setConclusaoTendaoBicepsBraquialDireito((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Tendinopatia do bíceps braquial')
                }
            }
        });
    };
    useEffect(() => {
        criaStringConclusaoTendinopatia()
    }, [TendinopatiaSemRoturaCheckbox, RoturaParcialInput, RoturaParcialInput2, RoturaParcialInput3, InputMedindoRoturaCompleta])
    const criaStringRoturaCompleta = (dados) => {
        removeFraseRoturaCompleta()
        let string;
        if (dados !== '' && RoturaCompletaComCotoCheckbox) {
            string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo com Relacação Coto`;
            setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]);
        } else if (dados !== '') {
            string = `Hipoecogênico, heterogêneo, observando-se sinais de rotura completa com ${dados} mm de intervalo`;
            setFraseTendaoBicepsBraquialDireito((arr) => [...arr, string]);
        }
    }
    const removeFraseRoturaCompleta = () => {
        fraseTendaoBicepsBraquialDireito.map((e) => {
            if (e.includes("Hipoecogênico, heterogêneo, observando-se sinais de rotura completa")) {
                const index = fraseTendaoBicepsBraquialDireito.indexOf(e);

                if (index > -1) {
                    fraseTendaoBicepsBraquialDireito.splice(index, 1);
                    setFraseTendaoBicepsBraquialDireito((arr) => [...arr]);
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
        const index = fraseTendaoBicepsBraquialDireito.indexOf(value);
        if (index > -1) {
            fraseTendaoBicepsBraquialDireito.splice(index, 1);
            setFraseTendaoBicepsBraquialDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendão do bíceps braquial direito " />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox

                    onChange={() => {
                        setPequenasCalcificacoesCheckbox(!PequenasCalcificacoesCheckbox);

                    }}
                >
                    Pequenas calcificações junto à inserção
                </Checkbox>
                <Checkbox
                    isChecked={Normal}
                    isDisabled={disableAspectoNormal}
                    onChange={() => {
                        setNormal(!Normal)
                        setAspectoNormalCheckbox(!AspectoNormalCheckbox);
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Wrap spacing='10px'>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={disableTendinopatiaSemRotura}
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

                            textAlign="center"
                            onChange={(e) => { setInputMedindoTendinopatiaSemRotura(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </WrapItem>

                </Wrap>
                <HStack>
                    <Checkbox
                        isDisabled={disableRoturaParcial}
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
                                isDisabled={disableRoturaCompleta}
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
export default TendaoBicepsBraquialDireito;
