/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Stack, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoBicepsFemoralDireito() {
    const altura = "100%";
    const largura = "90%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
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
            setLaudoPrin((arr) => [...arr, string]);
        }
    };

    const removeLesaoParcial = () => {
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



    const criaStringTendinopatiaSemRotura = () => {
        removeFraseTendinopatiaSemRotura()
        var string;
        if (TendinopatiaSemRoturaCheckbox) {
            string = `Tendinopatia sem rotura`;
            setLaudoPrin((arr) => [...arr, string]);
        }
        // setTendinopatiaSemRoturaCheckbox(false);

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
            removeFraseTendinopatiaSemRotura()
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
            <TituloNomeExame titulo="Tendão do bíceps femoral" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableTudo || disableAspectoNormal}
                    onChange={() => {
                        setAspectoNormalCheckbox(!AspectoNormalCheckbox);
                        criaStringAspectoNormal();
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableTendinopatiaSemRotura}
                    onChange={() => {
                        setTendinopatiaSemRoturaCheckbox(!TendinopatiaSemRoturaCheckbox);
                        criaStringTendinopatiaSemRotura();
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
export default TendaoBicepsFemoralDireito;