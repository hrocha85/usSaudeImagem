/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, HStack, Input, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoQuadricepsFemoralDireito() {
    const altura = "100%";
    const largura = "90%";


    const [TendaoQuadricepsFemoralDireito, setTendaoQuadricepsFemoralDireito] = useState<any>([]);

    const subExame = `Tendão quadríceps femoral joelho direito`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(TendaoQuadricepsFemoralDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                TendaoQuadricepsFemoralDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                TendaoQuadricepsFemoralDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [TendaoQuadricepsFemoralDireito]);

    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [LesaoParcialInput, setLesaoParcialInput] = useState("");
    const [LesaoParcialInput2, setLesaoParcialInput2] = useState("");
    const [LesaoParcialInput3, setLesaoParcialInput3] = useState("");
    const [disableLesaoParcialInput, setdisableLesaoParcialInput] = useState(true);
    const [DisableInputPresencaEntesofito, setDisableInputPresencaEntesofito] = useState(true);

    const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
    const [disableLesaoParcial, setdisableLesaoParcial] = useState(false);
    const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);

    const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
    const [LesaoParcialCheckbox, setLesaoParcialCheckbox] = useState(false);

    const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);

    const [PresencaEntesofitoCheckbox, setPresencaEntesofitoCheckbox] = useState(false);
    const [InputMedindoPresencaEntesofito, setInputMedindoPresencaEntesofito] = useState('');


    const criaStringLesaoParcial = (medida1, medida2, medida3) => {
        removeLesaoParcial();
        if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setTendaoQuadricepsFemoralDireito((arr) => [...arr, string]);
        }
    };

    const removeLesaoParcial = () => {
        TendaoQuadricepsFemoralDireito.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural,")) {
                var index = TendaoQuadricepsFemoralDireito.indexOf(e);

                if (index > -1) {
                    TendaoQuadricepsFemoralDireito.splice(index, 1);
                    setTendaoQuadricepsFemoralDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "FALTA";
        AspectoNormalCheckbox ? setTendaoQuadricepsFemoralDireito((arr) => [...arr, string]) : removeItemString(string);

    };

    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringTendinopatiaSemRotura = () => {
        var string = "FALTA";
        TendinopatiaSemRoturaCheckbox ? setTendaoQuadricepsFemoralDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])

    const criaStringPresencaEntesofito = (dados) => {
        removeFrasePresencaEntesofito()
        var string;

        if (PresencaEntesofitoCheckbox && dados !== '') {
            string = `Presença de entesófito medindo ${dados}`;
            setTendaoQuadricepsFemoralDireito((arr) => [...arr, string]);
        } else if (PresencaEntesofitoCheckbox) {
            string = `Presença de entesófito`;
            setTendaoQuadricepsFemoralDireito((arr) => [...arr, string]);
        }
    }
    const removeFrasePresencaEntesofito = () => {
        TendaoQuadricepsFemoralDireito.map((e) => {
            if (e.includes("Presença de entesófito")) {
                var index = TendaoQuadricepsFemoralDireito.indexOf(e);

                if (index > -1) {
                    TendaoQuadricepsFemoralDireito.splice(index, 1);
                    setTendaoQuadricepsFemoralDireito((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (PresencaEntesofitoCheckbox) {
            criaStringPresencaEntesofito(InputMedindoPresencaEntesofito)
            setDisableInputPresencaEntesofito(false)
        } else {
            removeFrasePresencaEntesofito()
            setDisableInputPresencaEntesofito(true)
            setInputMedindoPresencaEntesofito('')
        }
    }, [PresencaEntesofitoCheckbox, InputMedindoPresencaEntesofito])


    const removeItemString = (value) => {
        var index = TendaoQuadricepsFemoralDireito.indexOf(value);
        if (index > -1) {
            TendaoQuadricepsFemoralDireito.splice(index, 1);
            setTendaoQuadricepsFemoralDireito((arr) => [...arr]);
        }
    };

    useEffect(() => {
        if (AspectoNormalCheckbox) {
            setdisableTendinopatiaSemRotura(true)
            setdisableLesaoParcial(true)
        } else {
            setdisableTendinopatiaSemRotura(false)
            setdisableLesaoParcial(false)

        }
    }, [AspectoNormalCheckbox])

    useEffect(() => {
        if (TendinopatiaSemRoturaCheckbox) {
            setdisableLesaoParcial(true)
            setdisableAspectoNormal(true)
        } else {
            setdisableLesaoParcial(false)
            setdisableAspectoNormal(false)

        }
    }, [TendinopatiaSemRoturaCheckbox])



    useEffect(() => {
        if (LesaoParcialCheckbox) {
            setdisableLesaoParcialInput(false);
            setdisableAspectoNormal(true)
            setdisableTendinopatiaSemRotura(true)

        } else {
            removeLesaoParcial();
            setdisableLesaoParcialInput(true);
            setdisableAspectoNormal(false)
            setdisableTendinopatiaSemRotura(false)
            setLesaoParcialInput("");
            setLesaoParcialInput2("");
            setLesaoParcialInput3("");
        }
    }, [LesaoParcialCheckbox]);

    useEffect(() => {
        criaStringLesaoParcial(LesaoParcialInput, LesaoParcialInput2, LesaoParcialInput3);
    }, [LesaoParcialInput, LesaoParcialInput2, LesaoParcialInput3]);



    useEffect(() => {
        CotoveloDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloDireitoLaudoNormal])

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
            <TituloNomeExame titulo="Tendão do quadríceps femoral" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableTudo || disableAspectoNormal}
                    onChange={() => {
                        setAspectoNormalCheckbox(!AspectoNormalCheckbox);
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableTendinopatiaSemRotura}
                    onChange={() => {
                        setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
                    }}
                >
                    Tendinopatia sem rotura
                </Checkbox>

                <HStack>
                    <Checkbox
                        isDisabled={disableTudo || disableLesaoParcial}
                        onChange={() => {
                            setLesaoParcialCheckbox(!LesaoParcialCheckbox);
                        }}
                    >
                        Lesão parcial medindo
                    </Checkbox>

                    <HStack ml='15px'>
                        <Input
                            isDisabled={disableLesaoParcialInput}
                            value={LesaoParcialInput}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setLesaoParcialInput(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableLesaoParcialInput}
                            value={LesaoParcialInput2}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setLesaoParcialInput2(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableLesaoParcialInput}
                            value={LesaoParcialInput3}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setLesaoParcialInput3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>
                </HStack>
                <Wrap spacing='10px'>
                    <Center>
                        <WrapItem>
                            <Checkbox
                                isDisabled={disableTudo}
                                onChange={() => {
                                    setPresencaEntesofitoCheckbox(!PresencaEntesofitoCheckbox);
                                }}
                            >
                                Presença de entesófito
                            </Checkbox>
                        </WrapItem>
                    </Center>
                    <WrapItem>
                        <Center>
                            <Text>medindo </Text>
                            <Input
                                isDisabled={DisableInputPresencaEntesofito}
                                value={InputMedindoPresencaEntesofito}
                                w="45px"
                                h="30px"
                                padding="5px"
                                maxLength={2}
                                textAlign="center"
                                onChange={(e) => { setInputMedindoPresencaEntesofito(e.target.value) }}
                            />
                            <Text> mm</Text>
                        </Center>
                    </WrapItem>
                </Wrap>

            </Stack >
        </Box >

    );
}
export default TendaoQuadricepsFemoralDireito;
