/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TenComumFlexoresAntebracoDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseTenComumFlexoresAntebracoDireito, setFraseTenComumFlexoresAntebracoDireito] = useState<any>([]);
    const [ConclusaoTenComumFlexoresAntebracoDireito, setConclusaoTenComumFlexoresAntebracoDireito] = useState<any>([]);

    const subExame = 'Tendão comum Flexores antebraço direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTenComumFlexoresAntebracoDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTenComumFlexoresAntebracoDireito,
                ConclusaoTenComumFlexoresAntebracoDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTenComumFlexoresAntebracoDireito,
                ConclusaoTenComumFlexoresAntebracoDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTenComumFlexoresAntebracoDireito]);

    const [RoturaParcialInput, setRoturaParcialInput] = useState("");
    const [RoturaParcialInput2, setRoturaParcialInput2] = useState("");
    const [RoturaParcialInput3, setRoturaParcialInput3] = useState("");
    const [disableRoturaParcialInput, setdisableRoturaParcialInput] = useState(true);

    const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
    const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);
    const [disableRoturaParcial, setdisableRoturaParcial] = useState(false);

    const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
    const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);
    const [RoturaParcialCheckbox, setRoturaParcialCheckbox] = useState(false);
    const [PequenasCalcificacoesCheckbox, setPequenasCalcificacoesCheckbox] = useState(false);

    const criaStringRoturaParcial = (medida1cm, medida2cm, medida3cm) => {
        removeRoturaParcial();
        var medida1 = new Convert_Medida(medida1cm).Convert_Medida();
        var medida2 = new Convert_Medida(medida2cm).Convert_Medida();
        var medida3 = new Convert_Medida(medida3cm).Convert_Medida();
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setFraseTenComumFlexoresAntebracoDireito((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
        fraseTenComumFlexoresAntebracoDireito.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo")) {
                var index = fraseTenComumFlexoresAntebracoDireito.indexOf(e);
                if (index > -1) {
                    fraseTenComumFlexoresAntebracoDireito.splice(index, 1);
                    setFraseTenComumFlexoresAntebracoDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setFraseTenComumFlexoresAntebracoDireito((arr) => [...arr, string]) : removeItemString(string);
    };
    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringPequenasCalcificacoes = () => {
        var string = "Pequenas calcificações junto à inserção do tendão comum dos flexores.";
        const conclusao = 'Pequenas calcificações junto à inserção do tendão comum dos flexores.'
        if (PequenasCalcificacoesCheckbox) {
            setFraseTenComumFlexoresAntebracoDireito((arr) => [...arr, string])
            setConclusaoTenComumFlexoresAntebracoDireito((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
    };

    useEffect(() => {
        criaStringPequenasCalcificacoes()
    }, [PequenasCalcificacoesCheckbox])

    const criaStringTendinopatiaSemRotura = () => {
        var string = "espessado, com alteração ecotextural, mas sem evidências de rotura.";
        const conclusao = 'Tendinopatia dos flexores.'
        if (TendinopatiaSemRoturaCheckbox) {
            setFraseTenComumFlexoresAntebracoDireito((arr) => [...arr, string])
            setConclusaoTenComumFlexoresAntebracoDireito((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
    };

    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])

    const removeItemString = (value) => {
        var index = fraseTenComumFlexoresAntebracoDireito.indexOf(value);
        if (index > -1) {
            fraseTenComumFlexoresAntebracoDireito.splice(index, 1);
            setFraseTenComumFlexoresAntebracoDireito((arr) => [...arr]);
        }
    };

    const removeItemConclusao = (value) => {
        var index = ConclusaoTenComumFlexoresAntebracoDireito.indexOf(value);
        if (index > -1) {
            ConclusaoTenComumFlexoresAntebracoDireito.splice(index, 1);
            setConclusaoTenComumFlexoresAntebracoDireito((arr) => [...arr]);
            new Format_Laudo(titulo_exame).Remove_Conclusao(value)
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
            <TituloNomeExame titulo="Tendão comum dos flexores do antebraço direito" />

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
                <Checkbox
                    isDisabled={Disable || disableTendinopatiaSemRotura}
                    onChange={() => {
                        setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);

                    }}
                >
                    Tendinopatia sem rotura (i.e. 'epicondilite medial')
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
            </Stack >
        </Box >

    );
}
export default TenComumFlexoresAntebracoDireito;
