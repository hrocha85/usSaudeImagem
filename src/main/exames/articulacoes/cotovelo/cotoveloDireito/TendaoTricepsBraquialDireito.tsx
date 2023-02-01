/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoTricepsBraquialDireito() {
    const altura = "100%";
    const largura = "95%";

    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)


    const [fraseTendaoTricepsBraquialDireito, setFraseTendaoTricepsBraquialDireito] = useState<any>([]);

    const subExame = 'Tendão tríceps braquial Direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTendaoTricepsBraquialDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTendaoTricepsBraquialDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTendaoTricepsBraquialDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTendaoTricepsBraquialDireito]);

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
        removeRoturaParcial();
        var medida1 = new Convert_Medida(medida1cm).Convert_Medida();
        var medida2 = new Convert_Medida(medida2cm).Convert_Medida();
        var medida3 = new Convert_Medida(medida3cm).Convert_Medida();
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setFraseTendaoTricepsBraquialDireito((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
        fraseTendaoTricepsBraquialDireito.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo")) {
                var index = fraseTendaoTricepsBraquialDireito.indexOf(e);

                if (index > -1) {
                    fraseTendaoTricepsBraquialDireito.splice(index, 1);
                    setFraseTendaoTricepsBraquialDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setFraseTendaoTricepsBraquialDireito((arr) => [...arr, string]) :
            removeItemString(string);
    };

    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringEntesofito = (medidaCm) => {
        removeStringEntesofito();
        var medida = new Convert_Medida(medidaCm).Convert_Medida()
        var string;
        if (medidaCm !== '') {
            string = `Presença de entesófito no tendão do tríceps braquial, medindo ${medida} cm.`
            setFraseTendaoTricepsBraquialDireito((arr) => [...arr, string]);
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
        fraseTendaoTricepsBraquialDireito.map((e) => {
            if (e.includes("Presença de entesófito no tendão do tríceps braquial, medindo")) {
                var index = fraseTendaoTricepsBraquialDireito.indexOf(e);

                if (index > -1) {
                    fraseTendaoTricepsBraquialDireito.splice(index, 1);
                    setFraseTendaoTricepsBraquialDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringTendinopatiaSemRotura = () => {
        var string = "espessado, com alteração ecotextural, mas sem evidências de rotura.";
        TendinopatiaSemRoturaCheckbox ? setFraseTendaoTricepsBraquialDireito((arr) => [...arr, string]) : removeItemString(string);
    };
    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])

    const removeItemString = (value) => {
        var index = fraseTendaoTricepsBraquialDireito.indexOf(value);
        if (index > -1) {
            fraseTendaoTricepsBraquialDireito.splice(index, 1);
            setFraseTendaoTricepsBraquialDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendão do tríceps braquial direito" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <HStack>
                    <Checkbox
                        isDisabled={disableTudo}
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
            </Stack >
        </Box >

    );
}
export default TendaoTricepsBraquialDireito;
