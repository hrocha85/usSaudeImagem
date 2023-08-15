/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoBicepsFemoralDireito({ Disable }) {
    const altura = "100%";
    const largura = "90%";

    const [TendaoBicepsFemoralDireito, setTendaoBicepsFemoralDireito] = useState<any>([]);
    const [ConclusaoTendaoBicepsFemoralDireito, setConclusaoTendaoBicepsFemoralDireito] = useState<any>([]);

    const subExame = `Tendão bíceps femoral joelho direito`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(TendaoBicepsFemoralDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                TendaoBicepsFemoralDireito,
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                TendaoBicepsFemoralDireito,
            ).Format_Laudo_Create_Storage();
        }
    }, [TendaoBicepsFemoralDireito]);


    const [LesaoParcialInput, setLesaoParcialInput] = useState("");
    const [LesaoParcialInput2, setLesaoParcialInput2] = useState("");
    const [LesaoParcialInput3, setLesaoParcialInput3] = useState("");
    const [disableLesaoParcialInput, setdisableLesaoParcialInput] = useState(true);

    const [disableAspectoNormal, setdisableAspectoNormal] = useState(false);
    const [disableLesaoParcial, setdisableLesaoParcial] = useState(false);
    const [disableTendinopatiaSemRotura, setdisableTendinopatiaSemRotura] = useState(false);

    const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
    const [LesaoParcialCheckbox, setLesaoParcialCheckbox] = useState(false);

    const [TendinopatiaSemRoturaCheckbox, setTendinopatiaSemRoturaCheckbox] = useState(false);



    const criaStringLesaoParcial = (medida1, medida2, medida3) => {
        removeLesaoParcial();
        if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
            const string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setTendaoBicepsFemoralDireito((arr) => [...arr, string]);
        }
    };

    const removeLesaoParcial = () => {
        TendaoBicepsFemoralDireito.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural,")) {
                const index = TendaoBicepsFemoralDireito.indexOf(e);

                if (index > -1) {
                    TendaoBicepsFemoralDireito.splice(index, 1);
                    setTendaoBicepsFemoralDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        const string = "Tendões do quadríceps femoral, do bíceps femoral e patelar com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setTendaoBicepsFemoralDireito((arr) => [...arr, string]) : removeItemString(string);
    };


    const [Normal, setNormal] = useState(false)

    useEffect(() => {
        Disable ? setNormal(true) : setNormal(false)
    }, [Disable])

    useEffect(() => {
        const string = "Tendões do quadríceps femoral, do bíceps femoral e patelar com ecotextura e espessura preservadas e contornos normais.";
        Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
    }, [Normal])



    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])


    const criaStringConclusao = () => {
        removeItemStringConclusao()
        let conclusao = 'Tendinopatia do bíceps femoral'
        if (TendinopatiaSemRoturaCheckbox && (LesaoParcialInput !== '' && LesaoParcialInput2 !== '' && LesaoParcialInput3 !== '')) {
            conclusao = `${conclusao} com lesão parcial.`
        } else if (TendinopatiaSemRoturaCheckbox) {
            conclusao = `${conclusao}.`
        }
        setConclusaoTendaoBicepsFemoralDireito(conclusao)
    }

    useEffect(() => {
        criaStringConclusao()
    }, [TendinopatiaSemRoturaCheckbox, LesaoParcialInput, LesaoParcialInput2, LesaoParcialInput3])

    const removeItemStringConclusao = () => {
        ConclusaoTendaoBicepsFemoralDireito.map((e) => {
            if (e.includes("Tendinopatia do bíceps femoral")) {
                const index = ConclusaoTendaoBicepsFemoralDireito.indexOf(e);

                if (index > -1) {
                    ConclusaoTendaoBicepsFemoralDireito.splice(index, 1);
                    setConclusaoTendaoBicepsFemoralDireito((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Tendinopatia do bíceps femoral')
                }
            }
        });
    };


    const criaStringTendinopatiaSemRotura = () => {
        const string = "Tendão do bíceps femoral espessado, com alteração ecotextural, sem evidências de rotura.";
        if (TendinopatiaSemRoturaCheckbox) {
            setTendaoBicepsFemoralDireito((arr) => [...arr, string])
        } else {
            removeItemString(string);
        }
    };
    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])


    const removeItemString = (value) => {
        const index = TendaoBicepsFemoralDireito.indexOf(value);
        if (index > -1) {
            TendaoBicepsFemoralDireito.splice(index, 1);
            setTendaoBicepsFemoralDireito((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendão do bíceps femoral" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
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
                    Tendinopatia sem rotura
                </Checkbox>

                <HStack>
                    <Checkbox
                        isDisabled={disableLesaoParcial}
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

                            textAlign="center"
                            onChange={(e) => { setLesaoParcialInput3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>
                </HStack>
            </Stack >
        </Box >

    );
}
export default TendaoBicepsFemoralDireito;
