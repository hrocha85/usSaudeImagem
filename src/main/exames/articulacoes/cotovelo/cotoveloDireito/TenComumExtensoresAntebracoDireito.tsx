/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TenComumExtensoresAntebracoDireito() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

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

    const criaStringRoturaParcial = (medida1, medida2, medida3) => {
        removeRoturaParcial();
        if (medida1 !== "" && medida2 !== "" && medida3 !== "") {
            var string = `Espessado, com alteração ecotextural, observando-se sinais de rotura parcial medindo ${medida1} x ${medida2} x ${medida3} mm`;
            setLaudoPrin((arr) => [...arr, string]);
        }
    };

    const removeRoturaParcial = () => {
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
    const criaStringPequenasCalcificacoes = () => {
        var string = "FALTA";
        if (PequenasCalcificacoesCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setAspectoNormalCheckbox(false);
        } else {
            removeItemString(string);
        }
    };

    const criaStringTendinopatiaSemRotura = () => {
        var string = "FALTA";
        if (TendinopatiaSemRoturaCheckbox) {
            setLaudoPrin((arr) => [...arr, string]);
            setTendinopatiaSemRoturaCheckbox(false);
        } else {
            removeItemString(string);
        }
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
            <TituloNomeExame titulo="Tendão comum dos extensores do antebraço direito" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setPequenasCalcificacoesCheckbox(true);
                        criaStringPequenasCalcificacoes();
                    }}
                >
                    Pequenas calcificações junto à inserção
                </Checkbox>
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
                    Tendinopatia sem rotura (i.e. 'epicondilite medial')
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

                {/* <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setAspectoNormalCheckbox(true);
                        criaStringAspectoNormal();
                    }}
                >
                    Aspecto Normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setTendinopatiaSemRoturaCheckbox(true);
                        criaStringTendinopatiaSemRotura();
                    }}
                >
                    Tendinopatia sem rotura (i. e 'epicondilite lateral')
                </Checkbox>
                <HStack>
                    <Checkbox
                        isDisabled={disableTudo}
                        onChange={() => setRoturaParcialCheckbox(!RoturaParcialCheckbox)}>
                        Rotura parcial medindo
                    </Checkbox>
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
                </HStack> */}
            </Stack >
        </Box >

    );
}
export default TenComumExtensoresAntebracoDireito;