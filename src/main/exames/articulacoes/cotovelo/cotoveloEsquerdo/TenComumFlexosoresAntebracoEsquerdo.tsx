/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TenComumFlexoresAntebracoEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseTenComumFlexoresAntebracoEsquerdo, setFraseTenComumFlexoresAntebracoEsquerdo] = useState<any>([]);
    const [ConclusaoTenComumFlexoresAntebracoEsquerdo, setConclusaoTenComumFlexoresAntebracoEsquerdo] = useState<any>([]);

    const subExame = 'Cotovelo- Tendão comum Flexores antebraço Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseTenComumFlexoresAntebracoEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseTenComumFlexoresAntebracoEsquerdo,
                ConclusaoTenComumFlexoresAntebracoEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseTenComumFlexoresAntebracoEsquerdo,
                ConclusaoTenComumFlexoresAntebracoEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseTenComumFlexoresAntebracoEsquerdo]);

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
        const medida1 = new Convert_Medida(medida1cm).Convert_Medida();
        const medida2 = new Convert_Medida(medida2cm).Convert_Medida();
        const medida3 = new Convert_Medida(medida3cm).Convert_Medida();
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "") {
            const string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setFraseTenComumFlexoresAntebracoEsquerdo((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
        fraseTenComumFlexoresAntebracoEsquerdo.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo")) {
                const index = fraseTenComumFlexoresAntebracoEsquerdo.indexOf(e);
                if (index > -1) {
                    fraseTenComumFlexoresAntebracoEsquerdo.splice(index, 1);
                    setFraseTenComumFlexoresAntebracoEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        const string = "com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setFraseTenComumFlexoresAntebracoEsquerdo((arr) => [...arr, string]) : removeItemString(string);
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
        const string = "Pequenas calcificações junto à inserção do tendão comum dos flexores.";
        const conclusao = 'Pequenas calcificações junto à inserção do tendão comum dos flexores.'
        if (PequenasCalcificacoesCheckbox) {
            setFraseTenComumFlexoresAntebracoEsquerdo((arr) => [...arr, string])
            setConclusaoTenComumFlexoresAntebracoEsquerdo((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
    };

    useEffect(() => {
        criaStringPequenasCalcificacoes()
    }, [PequenasCalcificacoesCheckbox])

    const criaStringTendinopatiaSemRotura = () => {
        const string = "espessado, com alteração ecotextural, mas sem evidências de rotura.";
        const conclusao = 'Tendinopatia dos flexores.'
        if (TendinopatiaSemRoturaCheckbox) {
            setFraseTenComumFlexoresAntebracoEsquerdo((arr) => [...arr, string])
            setConclusaoTenComumFlexoresAntebracoEsquerdo((arr) => [...arr, conclusao])
        } else {
            removeItemString(string);
            removeItemConclusao(conclusao)
        }
    };

    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])

    const removeItemString = (value) => {
        const index = fraseTenComumFlexoresAntebracoEsquerdo.indexOf(value);
        if (index > -1) {
            fraseTenComumFlexoresAntebracoEsquerdo.splice(index, 1);
            setFraseTenComumFlexoresAntebracoEsquerdo((arr) => [...arr]);
        }
    };

    const removeItemConclusao = (value) => {
        const index = ConclusaoTenComumFlexoresAntebracoEsquerdo.indexOf(value);
        if (index > -1) {
            ConclusaoTenComumFlexoresAntebracoEsquerdo.splice(index, 1);
            setConclusaoTenComumFlexoresAntebracoEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendão comum dos flexores do antebraço Esquerdo" />

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
                <Checkbox
                    isDisabled={disableTendinopatiaSemRotura}
                    onChange={() => {
                        setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);

                    }}
                >
                    Tendinopatia sem rotura (i.e. 'epicondilite medial')
                </Checkbox>
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
            </Stack >
        </Box >

    );
}
export default TenComumFlexoresAntebracoEsquerdo;
