/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoBicepsFemoralEsquerdo() {
    const altura = "100%";
    const largura = "90%";

    const [TendaoBicepsFemoralEsquerdo, setTendaoBicepsFemoralEsquerdo] = useState<any>([]);

    const subExame = `Tendão bíceps femoral joelho esquerdo`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(TendaoBicepsFemoralEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                TendaoBicepsFemoralEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                TendaoBicepsFemoralEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [TendaoBicepsFemoralEsquerdo]);

    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

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
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setTendaoBicepsFemoralEsquerdo((arr) => [...arr, string]);
        }
    };

    const removeLesaoParcial = () => {
        TendaoBicepsFemoralEsquerdo.map((e) => {
            if (e.includes("Espessado, com alteração ecotextural,")) {
                var index = TendaoBicepsFemoralEsquerdo.indexOf(e);

                if (index > -1) {
                    TendaoBicepsFemoralEsquerdo.splice(index, 1);
                    setTendaoBicepsFemoralEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringAspectoNormal = () => {
        var string = "Tendões do quadríceps femoral, do bíceps femoral e patelar com ecotextura e espessura preservadas e contornos normais.";
        AspectoNormalCheckbox ? setTendaoBicepsFemoralEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringAspectoNormal()
    }, [AspectoNormalCheckbox])

    const criaStringTendinopatiaSemRotura = () => {
        var string = "Tendão do bíceps femoral espessado, com alteração ecotextural, sem evidências de rotura.";
        TendinopatiaSemRoturaCheckbox ? setTendaoBicepsFemoralEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };
    useEffect(() => {
        criaStringTendinopatiaSemRotura()
    }, [TendinopatiaSemRoturaCheckbox])


    const removeItemString = (value) => {
        var index = TendaoBicepsFemoralEsquerdo.indexOf(value);
        if (index > -1) {
            TendaoBicepsFemoralEsquerdo.splice(index, 1);
            setTendaoBicepsFemoralEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Tendão do bíceps femoral" />

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
            </Stack >
        </Box >

    );
}
export default TendaoBicepsFemoralEsquerdo;
