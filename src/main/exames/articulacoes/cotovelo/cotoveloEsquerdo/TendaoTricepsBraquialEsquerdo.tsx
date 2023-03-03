/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoTricepsBraquialEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseTendaoTricepsBraquialEsquerdo, setFraseTendaoTricepsBraquialEsquerdo] = useState<any>([]);
    const [ConclusaoTendaoTricepsBraquialEsquerdo, setConclusaoTendaoTricepsBraquialEsquerdo] = useState<any>([]);

    const subExame = 'Tendão tríceps braquial Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTendaoTricepsBraquialEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoTricepsBraquialEsquerdo,
                ConclusaoTendaoTricepsBraquialEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoTricepsBraquialEsquerdo,
                ConclusaoTendaoTricepsBraquialEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoTricepsBraquialEsquerdo]);

    const [RoturaParcialInput, setRoturaParcialInput] = useState("");
    const [RoturaParcialInput2, setRoturaParcialInput2] = useState("");
    const [RoturaParcialInput3, setRoturaParcialInput3] = useState("");
    const [disableRoturaParcialInput, setdisableRoturaParcialInput] = useState(true);
    const [EntesofitoInput, setEntesofitoInput] = useState("");

    const [disableEntesofitoInput, setdisableEntesofitoInput] = useState(false);
    const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
    const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);
    const [disableRoturaParcial, setdisableRoturaParcial] = useState(false);

    const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
    const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);
    const [RoturaParcialCheckbox, setRoturaParcialCheckbox] = useState(false);
    const [EntesofitoCheckbox, setEntesofitoCheckbox] = useState(false);

    const criaStringRoturaParcial = (medida1cm, medida2cm, medida3cm) => {
        const conclusao = 'Tendinopatia do tríceps braquial com sinais de rotura parcial.'
        removeRoturaParcial();
        var medida1 = new Convert_Medida(medida1cm).Convert_Medida();
        var medida2 = new Convert_Medida(medida2cm).Convert_Medida();
        var medida3 = new Convert_Medida(medida3cm).Convert_Medida();
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr, string]);
            setConclusaoTendaoTricepsBraquialEsquerdo((arr) => [...arr, conclusao]);
        }
    };

    const removeRoturaParcial = () => {
        fraseTendaoTricepsBraquialEsquerdo.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo")) {
                var index = fraseTendaoTricepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    fraseTendaoTricepsBraquialEsquerdo.splice(index, 1);
                    setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr]);
                }
            }
        });
        ConclusaoTendaoTricepsBraquialEsquerdo.map((e) => {
            if (e.includes("Tendinopatia do tríceps braquial com sinais de rotura parcial.")) {
                var index = ConclusaoTendaoTricepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    ConclusaoTendaoTricepsBraquialEsquerdo.splice(index, 1);
                    setConclusaoTendaoTricepsBraquialEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr, string]) :
            removeItemString(string);
    };

    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringEntesofito = (medidaCm) => {
        const conclusao = 'Entesopatia do tríceps braquial.'
        removeStringEntesofito();
        var medida = new Convert_Medida(medidaCm).Convert_Medida()
        var string;
        if (medidaCm !== '') {
            string = `Presença de entesófito no tendão do tríceps braquial, medindo ${medida} cm.`
            setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr, string]);
            setConclusaoTendaoTricepsBraquialEsquerdo((arr) => [...arr, conclusao]);
        }
    };

    useEffect(() => {
        if (EntesofitoCheckbox) {
            setdisableEntesofitoInput(false)
        } else {
            setEntesofitoInput("")
            setdisableEntesofitoInput(true)
        }
    }, [EntesofitoCheckbox, EntesofitoCheckbox])

    useEffect(() => {
        criaStringEntesofito(EntesofitoInput)
    }, [EntesofitoInput])


    const removeStringEntesofito = () => {
        fraseTendaoTricepsBraquialEsquerdo.map((e) => {
            if (e.includes("Presença de entesófito no tendão do tríceps braquial, medindo")) {
                var index = fraseTendaoTricepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    fraseTendaoTricepsBraquialEsquerdo.splice(index, 1);
                    setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr]);
                }
            }
        });
        ConclusaoTendaoTricepsBraquialEsquerdo.map((e) => {
            if (e.includes("Entesopatia do tríceps braquial.")) {
                var index = ConclusaoTendaoTricepsBraquialEsquerdo.indexOf(e);

                if (index > -1) {
                    ConclusaoTendaoTricepsBraquialEsquerdo.splice(index, 1);
                    setConclusaoTendaoTricepsBraquialEsquerdo((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao('Entesopatia do tríceps braquial.')
                }
            }
        });
    };

    const criaStringTendinopatiaSemRotura = () => {
        var string = "espessado, com alteração ecotextural, mas sem evidências de rotura.";
        TendinopatiaSemRoturaCheckbox ? setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };
    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])

    const removeItemString = (value) => {
        var index = fraseTendaoTricepsBraquialEsquerdo.indexOf(value);
        if (index > -1) {
            fraseTendaoTricepsBraquialEsquerdo.splice(index, 1);
            setFraseTendaoTricepsBraquialEsquerdo((arr) => [...arr]);
        }
    };

    useEffect(() => {
        if (AspectoNormalCheckbox) {
            setdisableTendinopatiaSemRotura(true)
            setdisableRoturaParcial(true)
        } else {
            setdisableTendinopatiaSemRotura(false)
            setdisableRoturaParcial(false)
        }
    }, [AspectoNormalCheckbox])
    useEffect(() => {
        if (TendinopatiaSemRoturaCheckbox) {
            setdisableRoturaParcial(true)
            setdisableAspectoNormal(true)
        } else {
            setdisableRoturaParcial(false)
            setdisableAspectoNormal(false)
        }
    }, [TendinopatiaSemRoturaCheckbox])

    useEffect(() => {
        if (RoturaParcialCheckbox) {
            setdisableRoturaParcialInput(false);
            setdisableAspectoNormal(true)
            setdisableTendinopatiaSemRotura(true)
        } else {
            removeRoturaParcial();
            setdisableRoturaParcialInput(true);
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
            <TituloNomeExame titulo="Tendão do tríceps braquial Esquerdo" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <HStack>
                    <Checkbox
                        isDisabled={Disable}
                        onChange={() => {
                            setEntesofitoCheckbox(!EntesofitoCheckbox);
                        }}
                    >
                        Entesófito medindo
                    </Checkbox>
                    <Input
                        isDisabled={disableEntesofitoInput}
                        value={EntesofitoInput}
                        w="45px"
                        h="30px"
                        padding="5px"
                        maxLength={2}
                        textAlign="center"
                        onChange={(e) => { setEntesofitoInput(e.target.value) }}
                    />
                    <Text>mm</Text>
                </HStack>
                <Checkbox
                    isDisabled={Disable || disableAspectoNormal}
                    onChange={() => {
                        setAspectoNormalCheckbox(!AspectoNormalCheckbox);
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Checkbox
                    isDisabled={Disable || disableTendinopatiaSemRotura}
                    onChange={() => {
                        setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
                    }}
                >
                    Tendinopatia sem rotura
                </Checkbox>
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
            </Stack >
        </Box >

    );
}
export default TendaoTricepsBraquialEsquerdo;
